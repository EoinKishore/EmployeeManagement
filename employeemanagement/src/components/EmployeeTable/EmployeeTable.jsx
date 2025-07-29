import './EmployeeTable.css';
import { Eye, PencilLine, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DeletePopup from '../DeletePopup/DeletePopup';
import { useEffect, useState } from 'react';
import axios from 'axios';

const EmployeeTable = ({ searchTerm = '' }) => {
  const navigate = useNavigate();
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_BASE_URL}/employees`);
        setEmployees(response.data);
        setFilteredEmployees(response.data);
        setError(null);
      } catch (error) {
        console.error('Error fetching employees:', error);
        setError('Failed to load employees. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, [API_BASE_URL]);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredEmployees(employees);
    } else {
      const term = searchTerm.toLowerCase();
      const filtered = employees.filter(employee => 
        employee.name.toLowerCase().includes(term) ||
        employee.employee_id.toLowerCase().includes(term) ||
        employee.department.toLowerCase().includes(term) ||
        employee.designation.toLowerCase().includes(term) ||
        (employee.project && employee.project.toLowerCase().includes(term)) ||
        employee.type.toLowerCase().includes(term) ||
        employee.status.toLowerCase().includes(term)
      );
      setFilteredEmployees(filtered);
    }
  }, [searchTerm, employees]);

  const handleDeleteClick = (employee) => {
    setSelectedEmployee(employee);
    setShowDeletePopup(true);
  };

  const handleCancelDelete = () => {
    setShowDeletePopup(false);
  };

  const handleConfirmDelete = async () => {
    try {
      setLoading(true);
      await axios.delete(`${API_BASE_URL}/employees/${selectedEmployee.id}`);
      
      
      const updatedEmployees = employees.filter(emp => emp.id !== selectedEmployee.id);
      setEmployees(updatedEmployees);
      setFilteredEmployees(updatedEmployees);
      
      setShowDeletePopup(false);
    } catch (error) {
      console.error('Error deleting employee:', error);
      alert('Failed to delete employee. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const headers = [
    'Employee Name',
    'Employee ID',
    'Department',
    'Designation',
    'Project',
    'Type',
    'Status',
    'Action'
  ];

  const handleView = (employee) => {
    navigate('/viewEmployee', { state: { employee } });
  };

  const handleEdit = (employee) => {
    navigate('/addEmployee', { state: { employee } });
  };

  if (loading) {
    return (
      <div className="table-container">
        <div className="loading-spinner">Loading employees...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="table-container">
        <div className="error-message">{error}</div>
      </div>
    );
  }

  return (
    <div className="table-container">
      {showDeletePopup && (
        <div className="overlay-background" onClick={handleCancelDelete}></div>
      )}
      {showDeletePopup && (
        <DeletePopup 
          onCancel={handleCancelDelete}
          onConfirm={handleConfirmDelete}
        />
      )}
      
      {filteredEmployees.length === 0 ? (
        <div className="no-results">
          {searchTerm ? 'No employees match your search.' : 'No employees found.'}
        </div>
      ) : (
        <table className="employee-table">
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.name}</td>
                <td>{employee.employee_id}</td>
                <td>{employee.department}</td>
                <td>{employee.designation}</td>
                <td>{employee.project || '-'}</td>
                <td>{employee.type}</td>
                <td>
                  <span className={`status-${employee.status.toLowerCase()}`}>
                    {employee.status}
                  </span>
                </td>
                <td>
                  <div className="action-buttons">
                    <button 
                      className='action-btn' 
                      onClick={() => handleView(employee)}
                      aria-label={`View ${employee.name}`}
                    >
                      <Eye size={16} />
                    </button>
                    <button 
                      className='action-btn' 
                      onClick={() => handleEdit(employee)}
                      aria-label={`Edit ${employee.name}`}
                    >
                      <PencilLine size={16} />
                    </button>
                    <button 
                      className='action-btn' 
                      onClick={() => handleDeleteClick(employee)}
                      aria-label={`Delete ${employee.name}`}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default EmployeeTable;
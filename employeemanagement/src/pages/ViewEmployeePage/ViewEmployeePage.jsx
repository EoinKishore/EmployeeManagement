import './ViewEmployeePage.css';
import { ChevronLeft, UserRound, Camera } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const ViewEmployeePage = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const employee = state?.employee;

  const handleBackClick = () => {
    navigate(-1);
  };

  if (!employee) {
    return <div>Employee data not found</div>;
  }

  return (
    <div className='viewEmployeePageContainer'>
      <div className='viewEmployeePageHeading'>
        <ChevronLeft size={40} onClick={handleBackClick} className='backIcon'/>
        <h1>View Employee</h1>
      </div>
      <div className='viewEmployeePageSubheading'>
        <UserRound/>
        <p>Personal Information</p>
      </div>
      <hr className='viewEmployeePageHR'/>
      
      <div className="viewEmployeePhoto">
        <Camera className='cameraIcon'/>
      </div>
      
      <div className='viewEmployeePageDetails'>
        
        <div className="detail-row">
          <div className="detail-field">
            <span className="detail-label">Name</span>
            <span className="detail-value">{employee.name}</span>
          </div>
          <div className="detail-field">
            <span className="detail-label">Employee ID</span>
            <span className="detail-value">{employee.employee_id}</span>
          </div>
        </div>
        <hr className="detail-divider"/>
        
        
        <div className="detail-row">
          <div className="detail-field">
            <span className="detail-label">Department</span>
            <span className="detail-value">{employee.department}</span>
          </div>
          <div className="detail-field">
            <span className="detail-label">Designation</span>
            <span className="detail-value">{employee.designation}</span>
          </div>
        </div>
        <hr className="detail-divider"/>
        
        
        <div className="detail-row">
          <div className="detail-field">
            <span className="detail-label">Project</span>
            <span className="detail-value">{employee.project}</span>
          </div>
          <div className="detail-field">
            <span className="detail-label">Type</span>
            <span className="detail-value">{employee.type}</span>
          </div>
        </div>
        <hr className="detail-divider"/>
        
        <div className="detail-row">
          <div className="detail-field">
            <span className="detail-label">Status</span>
            <span className="detail-value">{employee.status}</span>
          </div>
          <div className="detail-field"></div> 
        </div>
        <hr className="detail-divider"/>
      </div>
    </div>
  );
};

export default ViewEmployeePage;
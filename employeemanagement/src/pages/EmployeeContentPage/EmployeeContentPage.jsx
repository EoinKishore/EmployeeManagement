import { useState } from 'react';
import AddEmployeeBtn from '../../components/AddEmployee/AddEmployeeBtn';
import EmployeeTable from '../../components/EmployeeTable/EmployeeTable';
import SearchBar from '../../components/SearchBar/SearchBar';
import './EmployeeContentPage.css';

const EmployeeContentPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className='employeeContentPage'>
        <div className='employeeContentPage_header'>
            <h1 className='employeeContentPage_header_title'>Employee</h1>
            <div className='employeeContentPage_header_actions'>
                <SearchBar onSearch={setSearchTerm} />
                <AddEmployeeBtn/>
            </div>
        </div>
        <EmployeeTable searchTerm={searchTerm} />
    </div>
  )
}

export default EmployeeContentPage;
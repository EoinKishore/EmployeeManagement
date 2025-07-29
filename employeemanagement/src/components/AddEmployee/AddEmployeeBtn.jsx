import './AddEmployeeBtn.css';
import { CirclePlus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const AddEmployeeBtn = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/addEmployee');
  }
  return (
    <div className='addEmployeeBtn' onClick={handleClick}>
        <CirclePlus className='addEmployeeIcon' />
        <p className='addEmployeeText'>Add New Employee</p>
    </div>
  )
}

export default AddEmployeeBtn
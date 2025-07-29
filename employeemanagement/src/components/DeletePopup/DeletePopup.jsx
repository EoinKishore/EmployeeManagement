import './DeletePopup.css';
import { Trash2 } from 'lucide-react';
const DeletePopup = ({ onCancel, onConfirm }) => {
  return (
    <div className='delete-popup'>
        <div className="trash-icon">
          <Trash2 size={120}/>
        </div>
        <div className="delete-text">
          <p>Are you sure you want to Delete</p>
        </div>
        <div className='delete-popup-btns'>
          <button className='delete-popup-cancel-btn' onClick={onCancel}>Cancel</button>
          <button className='delete-popup-yes-btn' onClick={onConfirm}>Yes</button>
        </div>
    </div>
  )
}

export default DeletePopup
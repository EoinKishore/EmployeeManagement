import './AddOrEditEmployeePage.css';
import { ChevronLeft, UserRound, Camera } from 'lucide-react';
import InputElement from '../../components/InputElement/InputElement';
import SelectElement from '../../components/SelectElement/SelectElement';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const AddOrEditEmployeePage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: '',
    employee_id: '',
    department: '',
    designation: '',
    project: '',
    type: '',
    status: '',
    image_url: '' 
  });

  const [selectedImageFile, setSelectedImageFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    if (location.state?.employee) {
      const employeeData = {
        ...location.state.employee,
        employee_id: location.state.employee.employee_id || location.state.employee.id,
        image_url: location.state.employee.image_url || ''
      };
      setFormData(employeeData);
      
      if (employeeData.image_url) {
        setPreviewImage(employeeData.image_url);
      }
    }
  }, [location.state]);

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImageFile(file);
    
      const previewUrl = URL.createObjectURL(file);
      setPreviewImage(previewUrl);
    }
  };

  const uploadImageAndGetURL = async () => {
    const formData = new FormData();
    formData.append('image', selectedImageFile);

    const response = await fetch(`${API_BASE_URL}/upload`, {
      method: 'POST',
      body: formData
    });

    if (!response.ok) {
      throw new Error('Image upload failed');
    }

    const data = await response.json();
    return data.image_url;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let imageUrlToUse = formData.image_url;

      if (selectedImageFile) {
        imageUrlToUse = await uploadImageAndGetURL();
      }

      const isEdit = location.state?.employee;
      const url = isEdit
        ? `${API_BASE_URL}/employees/${location.state.employee.id}`
        : `${API_BASE_URL}/employees`;

      const method = isEdit ? 'PUT' : 'POST';

      const payload = {
        ...formData,
        image_url: imageUrlToUse
      };

      const res = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Failed to save employee');
      }

      navigate('/employee');
    } catch (err) {
      alert(err.message);
      console.error(err);
    }
  };

  
  useEffect(() => {
    return () => {
      if (previewImage && previewImage.startsWith('blob:')) {
        URL.revokeObjectURL(previewImage);
      }
    };
  }, [previewImage]);

  return (
    <div className='addOrEditEmployeePageContainer'>
      <div className='addOrEditEmployeePageHeading'>
        <ChevronLeft size={40} onClick={handleBackClick} className='backIcon' />
        <h1>{location.state?.employee ? 'Edit Employee' : 'Add New Employee'}</h1>
      </div>

      <div className='addOrEditEmployeePageSubheading'>
        <UserRound />
        <p>Personal Information</p>
      </div>

      <hr className='addOrEditEmployeePageHR' />

      <div className="addOrEditEmployeePhoto">
        {previewImage && (
          <img src={previewImage} alt="Preview" className="preview-image" />
        )}
        <label className="upload-btn">
          <Camera className='cameraIcon' />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: 'none' }}
          />
        </label>
      </div>      
      <form className='addOrEditEmployeePageForm' onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-field">
            <label>Name*</label>
            <InputElement 
              placeholder="Enter name" 
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-field">
            <label>Employee ID*</label>
            <InputElement 
              placeholder="Enter employee ID" 
              name="employee_id"
              value={formData.employee_id}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-field">
            <label>Department*</label>
            <SelectElement
              name="department"
              value={formData.department}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>Select department</option>
              <option value="engineering">Engineering</option>
              <option value="design">Design</option>
              <option value="marketing">Marketing</option>
              <option value="hr">HR</option>
            </SelectElement>
          </div>
          <div className="form-field">
            <label>Designation*</label>
            <SelectElement
              name="designation"
              value={formData.designation}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>Select designation</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="manager">Manager</option>
              <option value="director">Director</option>
            </SelectElement>
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-field">
            <label>Project</label>
            <InputElement 
              placeholder="Enter project name" 
              name="project"
              value={formData.project}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-field">
            <label>Type*</label>
            <SelectElement
              name="type"
              value={formData.type}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>Select type</option>
              <option value="Office">Office</option>
              <option value="Work from Home">Work from Home</option>
            </SelectElement>
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-field">
            <label>Status*</label>
            <SelectElement
              name="status"
              value={formData.status}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>Select status</option>
              <option value="Permanent">Permanent</option>
              <option value="Temporary">Temporary</option>
              <option value="Intern">Intern</option>
            </SelectElement>
          </div>
          <div className="form-field"></div> 
        </div>
        <div className='form-btns'>
            <button type="button" className="cancelBtn" onClick={handleBackClick}>Cancel</button>
            <button type="submit" className="confirmBtn">Confirm</button>
        </div>
      </form>
    </div>
  );
};

export default AddOrEditEmployeePage;
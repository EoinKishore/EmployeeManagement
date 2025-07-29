import './SelectElement.css';

const SelectElement = ({ value, onChange, children, ...props }) => {
  return (
    <select 
      className="select-element"
      value={value}
      onChange={onChange}
      {...props}
    >
      {children}
    </select>
  );
};

export default SelectElement;
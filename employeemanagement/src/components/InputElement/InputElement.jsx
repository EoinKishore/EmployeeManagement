import './InputElement.css';

const InputElement = ({ value, onChange, ...props }) => {
  return (
    <input 
      type="text" 
      className="input-element" 
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};

export default InputElement;
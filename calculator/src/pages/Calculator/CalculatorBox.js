import './CalculatorBox.css';


const CalculatorBox = ({children}) => {
  return (
      <div className="buttonBox">{children}</div>
  );
};

export default CalculatorBox;
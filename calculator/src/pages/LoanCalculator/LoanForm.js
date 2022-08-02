import React, {useState} from 'react';
import './LoanCalculator.css';
import numeral from 'numeral';

const LoanForm = ()=>{

    const [purchasePrice, setPurchasePrice] = useState("");
    const [downPayment, setDownPayment]=useState("");
    const [loanTerm, setLoanTerm] = useState("");
    const [apr, setApr] = useState("");
    const [payment, setPayment] = useState(0.0);


    const sumbitCalculation = async (e) =>{
        //parses an argument (converting it to a string first if needed) and returns a floating point number.  
        e.preventDefault();

        //validate inputs
        const validatePrice = await validateField(purchasePrice,setPurchasePrice )
        const validatePayment = await validateField(downPayment,setDownPayment )
        const validateTerm = await validateField(loanTerm, setLoanTerm)
        const validateApr = await validateField(apr,setApr)

        //calculate values
        if (validatePrice && validatePayment && validateTerm && validateApr){
            console.log("Form is fully validated")
            calculateValues();
        }
    };

    const calculateValues = ()=> {
        // M = P [ I ( 1 + I )^N ] / [ ( 1 + I )^N – 1 ]
        // P = Principal amount (the total amount borrowed)
        // I = Interest rate on the mortgage
        // N = Number of periods (monthly mortgage payments)
        let principal = purchasePrice - downPayment;
        let monthlyInterest = (apr /100)/ 12;
        let numberOfPeyments = (loanTerm * 12);
        let firstPortion = (principal * (monthlyInterest * (1 + monthlyInterest) ** numberOfPeyments))
        let secondPortion = (1+ monthlyInterest) ** numberOfPeyments -1
        let monthlyPrice = firstPortion / secondPortion

        setPayment(monthlyPrice)
    }


    const validateField = (field, setValue)=>{
        let int = parseFloat(field); 

        if(field === "" || field === 0){
            setValue({...field.values, error: "Please enter a value!"});
            return false;
        }else if(isNaN(int)){
            setValue({...field.values, error: "Please enter a value!"});
            return false;
        }else{
            setValue(int);
            return true;
        }
    }
    return(
        <div className='form-container'>
        <form>
            <div className='InputSection'>
            <label>Purchase Price</label>
            <p className="error">{purchasePrice.error}</p>
            <input onChange={(e)=> setPurchasePrice(e.target.value)} type='text'/>
            </div> 
            <div className='InputSection'>
            <label>Down Payment</label>
            <p className="error">{downPayment.error}</p>
            <input onChange={(e)=> setDownPayment(e.target.value)} type='text'/>
            </div> 
            <div className='InputSection'>
            <label>Loan Term</label>
            <p className="error">{loanTerm.error}</p>
            <input onChange={(e)=> setLoanTerm(e.target.value)} type='text'/>
            </div>
            <div className='InputSection'>
            <label>APR (%)</label>
            <p className="error">{apr.error}</p>
            <input onChange={(e)=> setApr(e.target.value)} type='text'/>
            </div>
            <input className='SubmitButton' type="submit" value="Calculate" onClick={(e)=> sumbitCalculation(e)}/>
        </form>
        <h3 id="result">
            Estimated Monthly Payments: {numeral(payment).format("$0,0.00")}
        </h3>
        </div>
        
    );
}

export default LoanForm;
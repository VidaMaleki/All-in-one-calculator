import React from 'react';
import './LoanCalculator.css'

const LoanForm = ()=>{
    return(
        <div className='form-container'>
        <form>
            <div className='InputSection'>
            <lable>Purchase Price</lable>
            <input type='text'/>
            </div> 
            <div className='InputSection'>
            <lable>Down Payment</lable>
            <input type='text'/>
            </div> 
            <div className='InputSection'>
            <lable>Loan Term</lable>
            <input type='text'/>
            </div>
            <div className='InputSection'>
            <lable>APR (%)</lable>
            <input type='text'/>
            </div>
            
            <input className='SubmitButton' type="submit" value="Calculate"/>
            
            <h3>Estimated Monthly Payments: $0.00</h3>
        </form>
        </div>
        
    );
}

export default LoanForm;
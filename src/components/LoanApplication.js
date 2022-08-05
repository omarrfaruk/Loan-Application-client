import React from 'react';

const LoanApplication = () => {
    return (
        <div className='space-y-4'>
            <input className='px-3 py-2 border block border-gray-400 w-full focus:outline-none focus: outline-teal-700 rounded ' type="number" name="loanAmount" placeholder='Loan Amount' id="loanAmount" />
            <input className='px-3 py-2 border block border-gray-400 w-full focus:outline-none focus: outline-teal-700 rounded ' type="number" name="mobileNumber" placeholder='Mobile Number' id="mobileNumber" />
            <input className='px-3 py-2 border border-gray-400 w-full focus:outline-none focus: outline-teal-700 rounded ' type="number" name="loanTenure" placeholder='Loan Tenure' id="loanTenure" />
        </div>
    );
};

export default LoanApplication;
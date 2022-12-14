import React from 'react';

const LoanApplication = ({ formData, setFormData }) => {
    return (
        <div className='space-y-4'>
            <input
                className='px-3 py-2 border block border-gray-400 w-full focus:outline-none focus: outline-teal-700 rounded '
                type="number"
                required
                name="loanAmount"
                placeholder='Loan Amount'
                id="loanAmount"
                value={formData.loanAmount}
                onChange={(e) => setFormData({ ...formData, loanAmount: e.target.value })}
            />
            <input
                className='px-3 py-2 border block border-gray-400 w-full focus:outline-none focus: outline-teal-700 rounded '
                type="number"
                name="interest"
                required
                placeholder='Interest'
                id="interest"
                value={formData.loanAmount / 25}
                onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
            />
            <input
                className='px-3 py-2 border border-gray-400 w-full focus:outline-none focus: outline-teal-700 rounded ' type="number"
                name="loanTenure"
                placeholder='Loan Tenure'
                required
                id="loanTenure"
                value={formData.loanTenure}
                onChange={(e) => setFormData({ ...formData, loanTenure: e.target.value })}
            />
        </div>
    );
};

export default LoanApplication;
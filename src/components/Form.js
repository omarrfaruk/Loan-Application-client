import React, { useState } from 'react';
import PersonalDetails from './PersonalDetails'
import BusinessDetails from './BusinessDetails'
import LoanApplication from './LoanApplication'

const Form = () => {

    const [page, setPage] = useState(0)
    const title = ['Personal Details', 'Business Details', 'Loan Application']



    const FormDisplay = () => {
        if (page === 0) {
            return <PersonalDetails />
        } else if (page === 1) {
            return <BusinessDetails />
        } else {
            return <LoanApplication />
        }
    }

    return (
        <div className='form mt-14'>
            <div className='h-2 w-1/3 bg-black mx-auto mb-3'></div>
            <div className=''>
                <div className='text-center text-3xl mb-5 uppercase font-bold text-gray-400 '>
                    {title[page]}
                </div>
                <div className='mx-auto w-1/3'>
                    {FormDisplay()}
                </div>
                <div className='flex justify-around w-1/2 mx-auto mt-5'>
                    <button
                        className='py-1 px-4 uppercase font-bold cursor-pointer bg-slate-300 rounded'
                        disabled={page === 0}
                        onClick={() => setPage((cPage) => cPage - 1)}
                    >prev</button>
                    <button
                        className='py-1 px-4 uppercase font-bold cursor-pointer bg-slate-300 rounded'
                        disabled={page === title.length - 1}
                        onClick={() => setPage((cPage) => cPage + 1)}
                    >next</button>
                </div>
            </div>

        </div>
    );
};

export default Form;
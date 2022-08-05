import React, { useState } from 'react';
import PersonalDetails from './PersonalDetails'
import BusinessDetails from './BusinessDetails'
import LoanApplication from './LoanApplication'
import toast, { Toaster } from 'react-hot-toast';

const Form = () => {

    const [page, setPage] = useState(0)
    const title = ['Personal Details', 'Business Details', 'Loan Application']

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        age: '',
        mobileNumber: '',
        businessName: "",
        gstNo: '',
        address: '',
        loanAmount: '',
        interest: '',
        loanTenure: ''
    })

    const FormDisplay = () => {
        if (page === 0) {
            return <PersonalDetails formData={formData} setFormData={setFormData} />
        } else if (page === 1) {
            return <BusinessDetails formData={formData} setFormData={setFormData} />
        } else {
            return <LoanApplication formData={formData} setFormData={setFormData} />
        }
    }

    return (
        <div className='form mt-14'>
            <div className='progress bg-black h-2 w-1/3  mx-auto mb-3'>
                <div style={{ width: page === 0 ? '33.33%' : page === 1 ? '66.66%' : '100%' }}>

                </div>
            </div>
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

                        onClick={() => {
                            if (page === title.length - 1) {
                                toast.success('added')
                                console.log(formData)
                            } else {

                                setPage((cPage) => cPage + 1)
                            }
                        }
                        }>
                        {page === title.length - 1 ? 'Submit' : 'next'}
                    </button>
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default Form;
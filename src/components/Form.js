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
    console.log(formData);

    const handleForm = (f) => {
        fetch(`https://mysterious-journey-76242.herokuapp.com/loanDetails`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(f)
        })
            .then((response) => response.json())
            .then((data) => {
                toast.success('success')
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
                toast.error('error')
            });
        // window.location.reload();
    }

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
        <div className='flex justify-center'>
            <div className='form mt-14 py-5 w-1/2' style={{ backgroundColor: 'white' }}>
                <div className="text-4xl uppercase font-bold text-center mb-5 text-teal-800">Loan Application Form</div>
                <div className='progress bg-black h-2 w-2/3  mx-auto mb-3'>
                    <div style={{ width: page === 0 ? '33.33%' : page === 1 ? '66.66%' : '100%' }}>
                    </div>
                </div>
                <div className=''>
                    <div className='text-center text-3xl mb-5 uppercase font-bold text-gray-400 '>
                        {title[page]}
                    </div>
                    <div className='mx-auto w-2/3 border border-white p-5'>
                        {FormDisplay()}
                    </div>
                    <div className='flex justify-around w-full mx-auto mt-5'>
                        <button
                            className='py-1 px-4 uppercase font-bold cursor-pointer bg-slate-300 rounded'
                            disabled={page === 0}
                            onClick={() => setPage((cPage) => cPage - 1)}
                        >prev</button>
                        <input
                            className='py-1 px-4 uppercase font-bold cursor-pointer bg-slate-300 rounded'
                            type="submit"

                            onClick={() => {
                                if (page === title.length - 1) {
                                    // console.log(formData)
                                    // // toast.success('added')
                                    handleForm(formData)
                                } else {

                                    setPage((cPage) => cPage + 1)
                                }
                            }
                            }
                            // onSubmit={() => handleForm(formData)}
                            // onClick={() => console.log('wahid vai')}
                            value={page === title.length - 1 ? 'Submit' : 'next'}

                        />

                    </div>
                </div>
                <Toaster />
            </div>
        </div>
    );
};

export default Form;
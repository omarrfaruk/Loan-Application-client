import React from 'react';

const PersonalDetails = () => {
    return (
        <div className='space-y-4'>
            <input className='px-3 py-2 border border-gray-400 w-1/2 focus:outline-none focus: outline-teal-700 rounded ' type="text" name="firstName" placeholder='First Name' id="firstName" />
            <input className='px-3 py-2 border border-gray-400 w-1/2 focus:outline-none focus: outline-teal-700 rounded ' type="text" name="lastName" placeholder='Last Name...' id="lastName" />
            <input className='px-3 py-2 border border-gray-400 block w-full focus:outline-none focus: outline-teal-700 rounded ' type="email" name="email" placeholder='Email...' id="email" />
            <input className='px-3 py-2 border border-gray-400 block w-full focus:outline-none focus: outline-teal-700 rounded ' type="number" name="age" placeholder='Age' id="age" />
            <input className='px-3 py-2 border border-gray-400 block w-full focus:outline-none focus: outline-teal-700 rounded ' type="tel" name="mobileNumber" placeholder='Mobile Number' id="mobileNumber" />
        </div>
    );
};

export default PersonalDetails; 
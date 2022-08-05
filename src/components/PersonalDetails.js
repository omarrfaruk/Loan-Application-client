import React from 'react';

const PersonalDetails = ({ formData, setFormData }) => {
    return (
        <div className='space-y-4'>
            <input
                className='px-3 py-2 border border-gray-400 w-1/2 focus:outline-none focus: outline-teal-700 rounded ' type="text"
                name="firstName"
                placeholder='First Name'
                id="firstName"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            />

            <input
                className='px-3 py-2 border border-gray-400 w-1/2 focus:outline-none focus: outline-teal-700 rounded '
                type="text"
                name="lastName"
                placeholder='Last Name...'
                id="lastName"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            />

            <input
                className='px-3 py-2 border border-gray-400 block w-full focus:outline-none focus: outline-teal-700 rounded '
                type="email"
                name="email"
                placeholder='Email...'
                id="email" value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <input
                className='px-3 py-2 border border-gray-400 block w-full focus:outline-none focus: outline-teal-700 rounded '
                type="number"
                name="age"
                placeholder='Age'
                id="age"
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            />
            <input
                className='px-3 py-2 border border-gray-400 block w-full focus:outline-none focus: outline-teal-700 rounded '
                type="tel"
                name="mobileNumber"
                placeholder='Mobile Number'
                id="mobileNumber"
                value={formData.mobileNumber}
                onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
            />
        </div>
    );
};

export default PersonalDetails; 
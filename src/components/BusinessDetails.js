import React from 'react';

const BusinessDetails = () => {
    return (
        <div className='space-y-4'>
            <input className='px-3 py-2 border block border-gray-400 w-full focus:outline-none focus: outline-teal-700 rounded ' type="text" name="businessName" placeholder='Business Name' id="businessName" />
            <input className='px-3 py-2 border block border-gray-400 w-full focus:outline-none focus: outline-teal-700 rounded ' type="number" name="gstNo" placeholder='GST NO...' id="gstNo" />
            <input className='px-3 py-2 border border-gray-400 w-full focus:outline-none focus: outline-teal-700 rounded ' type="text" name="address" placeholder='Address...' id="address" />
        </div>
    );
};

export default BusinessDetails;
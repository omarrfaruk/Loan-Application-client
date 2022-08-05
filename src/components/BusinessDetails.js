import React from 'react';

const BusinessDetails = ({ formData, setFormData }) => {
    return (
        <div className='space-y-4'>
            <input
                className='px-3 py-2 border block border-gray-400 w-full focus:outline-none focus: outline-teal-700 rounded '
                type="text"
                name="businessName"
                placeholder='Business Name'
                id="businessName"
                value={formData.businessName}
                onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
            />
            <input
                className='px-3 py-2 border block border-gray-400 w-full focus:outline-none focus: outline-teal-700 rounded '
                type="number"
                name="gstNo"
                placeholder='GST NO...'
                id="gstNo"
                value={formData.gstNo}
                onChange={(e) => setFormData({ ...formData, gstNo: e.target.value })}
            />
            <input
                className='px-3 py-2 border border-gray-400 w-full focus:outline-none focus: outline-teal-700 rounded ' type="text"
                name="address"
                placeholder='Address...'
                id="address"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            />
        </div>
    );
};

export default BusinessDetails;
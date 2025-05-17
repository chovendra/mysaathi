import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ContactDetails = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    liveWithFamily: '',
    familyType: '',
    familyValues: '',
    familyStatus: '',
    ownLand: '',
    landArea: '',
    ownHouse: '',
    ownCar: '',
    phone: '',
    whatsapp: '',
    facebook: '',
    instagram: '',
    linkedin: '',
    twitter: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.familyStatus) newErrors.familyStatus = 'Family Status is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.whatsapp) newErrors.whatsapp = 'Whatsapp number is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = () => {
    if (validateForm()) {
      navigate("/medicaldetails"); 
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="w-full h-[100px] bg-white"></div>
      <div className="bg-white min-h-auto pb-32">
        <h2 className="text-3xl font-bold text-center">Contact Details</h2>

        <div className="flex items-center justify-center gap-2 mt-6">
          {[...Array(11)].map((_, index) => (
            <React.Fragment key={index}>
              <div
                className={`w-4 h-4 rounded-full ${index <= 7 ? 'bg-blue-900' : 'bg-gray-300'}`}
              ></div>
              {index < 10 && (
                <div
                  className={`h-1 w-6 ${index <= 6 ? 'bg-blue-900' : 'bg-gray-300'}`}
                ></div>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="mt-8 space-y-6 max-w-xl mx-auto">
          <h3 className="text-xl font-semibold">Let us know about your Family</h3>

          <div>
            <label className="block font-medium mb-2">Do you live with your family?</label>
            <div className="flex gap-6">
              <label>
                <input
                  type="radio"
                  name="liveWithFamily"
                  className="mr-2"
                  onChange={() => handleChange('liveWithFamily', 'Yes')}
                />{' '}
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="liveWithFamily"
                  className="mr-2"
                  onChange={() => handleChange('liveWithFamily', 'No')}
                />{' '}
                No
              </label>
            </div>
          </div>

          <div>
            <label className="block font-medium mb-2">Family Type?</label>
            <div className="flex gap-6 flex-wrap">
              {['Joint', 'Nuclear', 'Other'].map(type => (
                <label key={type}>
                  <input
                    type="radio"
                    name="familyType"
                    className="mr-2"
                    onChange={() => handleChange('familyType', type)}
                  />
                  {type}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block font-medium mb-2">Family Values?</label>
            <div className="flex gap-6 flex-wrap">
              {['Orthodox', 'Traditional', 'Moderate', 'Liberal'].map(value => (
                <label key={value}>
                  <input
                    type="radio"
                    name="familyValues"
                    className="mr-2"
                    onChange={() => handleChange('familyValues', value)}
                  />
                  {value}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block font-medium mb-1">Family Status<span className="text-red-500">*  </span></label>
            <input
              type="text"
              className="w-full max-w-md border rounded p-2"
              placeholder="Enter Family Status"
              value={formData.familyStatus}
              onChange={e => handleChange('familyStatus', e.target.value)}
            />
            {errors.familyStatus && <p className="text-red-600 text-sm">{errors.familyStatus}</p>}
          </div>

          <div>
            <label className="block font-medium mb-2">Do you own land property?</label>
            <div className="flex gap-6">
              <label>
                <input
                  type="radio"
                  name="ownLand"
                  className="mr-2"
                  onChange={() => handleChange('ownLand', 'Yes')}
                />{' '}
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="ownLand"
                  className="mr-2"
                  onChange={() => handleChange('ownLand', 'No')}
                />{' '}
                No
              </label>
            </div>
          </div>

          <div>
            <label className="block font-medium mb-1">Area of land</label>
            <input
              type="text"
              className="w-full max-w-md border rounded p-2"
              placeholder="Enter area in acres / sqft"
              value={formData.landArea}
              onChange={e => handleChange('landArea', e.target.value)}
            />
          </div>

          <div>
            <label className="block font-medium mb-2">Do you own a house?</label>
            <div className="flex gap-6">
              <label>
                <input
                  type="radio"
                  name="ownHouse"
                  className="mr-2"
                  onChange={() => handleChange('ownHouse', 'Yes')}
                />{' '}
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="ownHouse"
                  className="mr-2"
                  onChange={() => handleChange('ownHouse', 'No')}
                />{' '}
                No
              </label>
            </div>
          </div>

          <div>
            <label className="block font-medium mb-2">Do you own a car?</label>
            <div className="flex gap-6">
              <label>
                <input
                  type="radio"
                  name="ownCar"
                  className="mr-2"
                  onChange={() => handleChange('ownCar', 'Yes')}
                />{' '}
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="ownCar"
                  className="mr-2"
                  onChange={() => handleChange('ownCar', 'No')}
                />{' '}
                No
              </label>
            </div>
          </div>

          {/* Contact Details */}
          <h3 className="text-xl font-semibold">Contact Details</h3>

          <div>
            <label className="block font-medium mb-1">Phone Number<span className="text-red-500">*  </span></label>
            <div className="flex gap-2">
              <input type="text" className="border rounded p-2 w-20" value="+91" readOnly />
              <input
                type="text"
                className="border rounded p-2 max-w-md"
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={e => handleChange('phone', e.target.value)}
              />
            </div>
            {errors.phone && <p className="text-red-600 text-sm">{errors.phone}</p>}
          </div>

          <div>
            <label className="block font-medium mb-1">Whatsapp Number<span className="text-red-500">*  </span></label>
            <div className="flex gap-2">
              <input type="text" className="border rounded p-2 w-20" value="+91" readOnly />
              <input
                type="text"
                className="border rounded p-2 max-w-md"
                placeholder="Enter Whatsapp number"
                value={formData.whatsapp}
                onChange={e => handleChange('whatsapp', e.target.value)}
              />
            </div>
            {errors.whatsapp && <p className="text-red-600 text-sm">{errors.whatsapp}</p>}
          </div>

          <h3 className="text-xl font-semibold">Social Media Handles</h3>

          <div>
            <label className="block font-medium mb-1">Facebook</label>
            <input
              type="text"
              className="w-full max-w-md border rounded p-2"
              placeholder="Facebook Profile URL"
              value={formData.facebook}
              onChange={e => handleChange('facebook', e.target.value)}
            />
          </div>

          {/* Same for other social links */}
        </div>

        <div className="fixed bottom-0 left-0 w-full bg-blue-900 py-3 flex justify-evenly">
        <button
          className="text-white font-medium px-4 py-2 border border-white rounded"
          onClick={handleBack}
        >
          Back
        </button>
        <button
          className="text-blue-900 font-medium bg-white px-6 py-2 rounded"
          onClick={handleContinue}
        >
          Continue
        </button>
      </div>
      </div>
    </>
  );
};

export default ContactDetails;

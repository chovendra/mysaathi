import React from 'react'

const ContactDetails = () => {
  return (
    <>
    <div className="w-full h-[100px] bg-white"></div>
    <div className="bg-white min-h-auto pb-32">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center">Contact Details</h2>

      {/* Progress Bar */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {Array.from({ length: 7 }).map((_, i) => (
          <React.Fragment key={i}>
            <div className="w-4 h-4 bg-blue-900 rounded-full"></div>
            <div className="h-1 w-10 bg-blue-900"></div>
          </React.Fragment>
        ))}
        <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
      </div>

      {/* Form */}
      <div className="mt-8 space-y-6 max-w-xl mx-auto">
        <h3 className="text-xl font-semibold">Let us know about your Family</h3>

        <div>
          <label className="block font-medium mb-1">Family Details</label>
        </div>

        <div>
          <label className="block font-medium mb-2">Do you live with your family?</label>
          <div className="flex gap-6">
            <label><input type="radio" name="liveWithFamily" className="mr-2" /> Yes</label>
            <label><input type="radio" name="liveWithFamily" className="mr-2" /> No</label>
          </div>
        </div>

        <div>
          <label className="block font-medium mb-2">Family Type?</label>
          <div className="flex gap-6 flex-wrap">
            <label><input type="radio" name="familyType" className="mr-2" /> Joint</label>
            <label><input type="radio" name="familyType" className="mr-2" /> Nuclear</label>
            <label><input type="radio" name="familyType" className="mr-2" /> Other</label>
          </div>
        </div>

        <div>
          <label className="block font-medium mb-2">Family Values?</label>
          <div className="flex gap-6 flex-wrap">
            <label><input type="radio" name="familyValues" className="mr-2" /> Orthodox</label>
            <label><input type="radio" name="familyValues" className="mr-2" /> Traditional</label>
            <label><input type="radio" name="familyValues" className="mr-2" /> Moderate</label>
            <label><input type="radio" name="familyValues" className="mr-2" /> Liberal</label>
          </div>
        </div>

        <div>
          <label className="block font-medium mb-1">Family Status*</label>
          <input type="text" className="w-full max-w-md border rounded p-2" placeholder="Enter Family Status" />
        </div>

        <div>
          <label className="block font-medium mb-2">Do you own land property?</label>
          <div className="flex gap-6">
            <label><input type="radio" name="ownLand" className="mr-2" /> Yes</label>
            <label><input type="radio" name="ownLand" className="mr-2" /> No</label>
          </div>
        </div>

        <div>
          <label className="block font-medium mb-1">Area of land</label>
          <input type="text" className="w-full max-w-md border rounded p-2" placeholder="Enter area in acres / sqft" />
        </div>

        <div>
          <label className="block font-medium mb-2">Do you own a house?</label>
          <div className="flex gap-6">
            <label><input type="radio" name="ownHouse" className="mr-2" /> Yes</label>
            <label><input type="radio" name="ownHouse" className="mr-2" /> No</label>
          </div>
        </div>

        <div>
          <label className="block font-medium mb-2">Do you own a car?</label>
          <div className="flex gap-6">
            <label><input type="radio" name="ownCar" className="mr-2" /> Yes</label>
            <label><input type="radio" name="ownCar" className="mr-2" /> No</label>
          </div>
        </div>

        {/* Contact Details */}
        <h3 className="text-xl font-semibold">Contact Details</h3>

        <div>
          <label className="block font-medium mb-1">Phone Number</label>
          <div className="flex gap-2">
            <input type="text" className="border rounded p-2 w-20" value="+91" readOnly />
            <input type="text" className="border rounded p-2  max-w-md" placeholder="Enter phone number" />
          </div>
        </div>

        <div>
          <label className="block font-medium mb-1">Whatsapp Number</label>
          <div className="flex gap-2">
            <input type="text" className="border rounded p-2 w-20" value="+91" readOnly />
            <input type="text" className="border rounded p-2  max-w-md" placeholder="Enter Whatsapp number" />
          </div>
        </div>

        {/* Social Media Handles */}
        <h3 className="text-xl font-semibold">Social Media Handles</h3>

        <div>
          <label className="block font-medium mb-1">Facebook</label>
          <input type="text" className="w-full max-w-md border rounded p-2" placeholder="Facebook Profile URL" />
        </div>

        <div>
          <label className="block font-medium mb-1">Instagram</label>
          <input type="text" className="w-full max-w-md border rounded p-2" placeholder="Instagram Profile URL" />
        </div>

        <div>
          <label className="block font-medium mb-1">LinkedIn</label>
          <input type="text" className="w-full max-w-md border rounded p-2" placeholder="LinkedIn Profile URL" />
        </div>

        <div>
          <label className="block font-medium mb-1">X</label>
          <input type="text" className="w-full max-w-md border rounded p-2" placeholder="X (Twitter) Profile URL" />
        </div>
      </div>

      {/* Bottom Buttons */}
        <div className="fixed bottom-0 left-0 w-full bg-blue-900 py-3 flex justify-evenly">
          <button className="text-white font-medium px-4 py-2 border border-white rounded">
            Cancel
          </button>
          <button className="text-blue-900 font-medium bg-white px-6 py-2 rounded">
            Continue
          </button>
        </div>
      </div>
      </>
  )
}

export default ContactDetails

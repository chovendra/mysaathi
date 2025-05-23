import React from "react";

const Profile = () => {
  return (
    <div className="w-full bg-gray-100 min-h-screen">
      {/* Topbar */}
      <div className="bg-white h-15 w-full shadow-md"></div>

      {/* Main_section */}
      <div className="max-w-3xl mx-auto p-10">
        {/* Heading */}
        <h1 className="text-black font-bold text-2xl sm:text-3xl mb-4">My Profile</h1>

        {/* Cover_image */}
        <div className="w-full h-52 sm:h-64 rounded-md overflow-hidden mb-5">
          <img
            className="w-full h-full object-cover object-center"
            src="/images/boy.jpg"
            alt="cover"
          />
        </div>

        {/* Profile_card */}
        <div className="p-4 bg-white rounded-lg shadow-md">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6">
            <div className="flex items-center space-x-4">
              <img
                src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg"
                alt="Profile"
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h2 className="text-lg font-semibold">Arvind Pandey</h2>
                <p className="text-sm text-gray-500">ArvindPandey@gmail.com</p>
              </div>
            </div>
            <button className="mt-4 sm:mt-0 bg-blue-900 text-white px-4 py-2 rounded">Edit</button>
          </div>

          {/* Form */}
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">PAN Card Number</label>
              <input
                type="text"
                placeholder="Your PAN"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Registered Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Country</label>
              <select
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded outline-none"
              >
            <option value="">Your Country</option>
            <option value="Afghanistan">Afghanistan</option>
            <option value="Albania">Albania</option>
            <option value="Algeria">Algeria</option>
            <option value="Andorra">Andorra</option>
            <option value="Angola">Angola</option>
            <option value="Argentina">Argentina</option>
            <option value="Armenia">Armenia</option>
            <option value="Australia">Australia</option>
            <option value="Austria">Austria</option>
            <option value="Azerbaijan">Azerbaijan</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="Belarus">Belarus</option>
            <option value="Belgium">Belgium</option>
            <option value="Bhutan">Bhutan</option>
            <option value="Brazil">Brazil</option>
            <option value="Canada">Canada</option>
            <option value="China">China</option>
            <option value="Denmark">Denmark</option>
            <option value="Egypt">Egypt</option>
            <option value="Finland">Finland</option>
            <option value="France">France</option>
            <option value="Germany">Germany</option>
            <option value="Greece">Greece</option>
            <option value="India">India</option>
            <option value="Indonesia">Indonesia</option>
            <option value="Iran">Iran</option>
            <option value="Iraq">Iraq</option>
            <option value="Ireland">Ireland</option>
            <option value="Israel">Israel</option>
            <option value="Italy">Italy</option>
            <option value="Japan">Japan</option>
            <option value="Kenya">Kenya</option>
            <option value="Malaysia">Malaysia</option>
            <option value="Mexico">Mexico</option>
            <option value="Nepal">Nepal</option>
            <option value="Netherlands">Netherlands</option>
            <option value="New Zealand">New Zealand</option>
            <option value="Nigeria">Nigeria</option>
            <option value="Norway">Norway</option>
            <option value="Pakistan">Pakistan</option>
            <option value="Philippines">Philippines</option>
            <option value="Poland">Poland</option>
            <option value="Portugal">Portugal</option>
            <option value="Russia">Russia</option>
            <option value="Saudi Arabia">Saudi Arabia</option>
            <option value="Singapore">Singapore</option>
            <option value="South Africa">South Africa</option>
            <option value="South Korea">South Korea</option>
            <option value="Spain">Spain</option>
            <option value="Sri Lanka">Sri Lanka</option>
            <option value="Sweden">Sweden</option>
            <option value="Switzerland">Switzerland</option>
            <option value="Thailand">Thailand</option>
            <option value="Turkey">Turkey</option>
            <option value="Ukraine">Ukraine</option>
            <option value="United Arab Emirates">United Arab Emirates</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="United States">United States</option>
            <option value="Vietnam">Vietnam</option>
            <option value="Zimbabwe">Zimbabwe</option>
          </select>
        </div>


         <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                placeholder="Your Phone Number"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Pincode</label>
              <input
                type="text"
                placeholder="Your Pincode"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded outline-none"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between items-center pt-4">
              <button
                type="button"
                className="border border-gray-400 px-5 py-2 rounded text-gray-700"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-blue-900 text-white px-5 py-2 rounded"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
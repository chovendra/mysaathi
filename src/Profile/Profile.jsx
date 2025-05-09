import React from "react";

const Profile = () => {
  return (
    <div className="w-full bg-red-500">
      <div className="bg-white h-[50px] w-full"></div>
      {/* <div className="w-full h-[50vh] ">
      
        <img
          className="w-full h-full object-center object-cover "
          src="https://images.unsplash.com/photo-1522661067900-ab829854a57f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div> */}
{/*  */}
      <div>
        
        <section class="bg-white p-1 xs:p-8 w-full rounded-lg">
          <div class=" max-w-96 sm:max-w-4xl mx-auto  p-8">
          <h1 className="text-black font-bold text-3xl m-5">My Profile</h1>
            <div className="w-full h-[105px]">
              <img
                className="w-full h-full rounded-t-md object-cover"
                src="/HeaderImages/5.jpg"
                alt=""
              />
            </div>
      
            
            <form>
            <div className="p-6 bg-white rounded-lg shadow-md max-w-5xl mx-auto mt-10">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-4">
          <img
            src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?t=st=1746179829~exp=1746183429~hmac=b08c60c908916ad25d83aff056d98b844d3805b9db2fcecc22b89c6479b6d3c8&w=1380"
            alt="Profile"
            className="w-14 h-14 rounded-full object-cover object-center"
          />
          <div>
            <h2 className="text-lg font-semibold">Sakshi Sharma</h2>
            <p className="text-sm text-gray-500">SakshiSharma@gmail.com</p>
          </div>
        </div>
        <button className="bg-orange-500 text-white px-4 py-2 rounded cursor-pointer">Edit</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">PAN Card number</label>
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

        {/* <div>
          <label className="block text-sm font-medium text-gray-700">Country</label>
          <select className="mt-1 w-full px-4 py-2 border border-gray-300 rounded outline-none">
            <option>Your Country</option>
          </select>
        </div> */}
        <div>
  <label className="block text-sm font-medium text-gray-700 ">Country</label>
  <select
    name="country"
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
          <label className="block text-sm font-medium text-gray-700">Phone number</label>
          <input
            type="tel"
            placeholder="Your Phone number"
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
      </div>

      <div className="w-full flex justify-between items-center mt-8 flex-wrap">
      <div className="mt-6">
        <p className="font-semibold text-gray-800 mb-2 ">Donate in Sanyogita Trust</p>
        <button className="bg-orange-300 text-white px-5 py-2 rounded cursor-pointer">Donate now</button>
      </div>

      <div className="mt-6 flex justify-end space-x-4">
        <button className="border border-gray-400 px-5 py-2 rounded text-gray-700 cursor-pointer">Cancel</button>
        <button className="bg-orange-500 text-white px-5 py-2 rounded cursor-pointer">Save</button>
      </div>
      
      </div>
    </div>
  

            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profile;
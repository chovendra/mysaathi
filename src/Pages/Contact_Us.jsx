import React from 'react'
import AboutComponents from '../components/AboutComponents'
import NavBar from '../components/NavBar'
import { FaLocationDot } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'
// import Footer from '../components/Footer'
// import { FaLocationDot } from "react-icons/fa6";
const Contact_Us = () => {
  return (
    <div className="lg:w-full">
    <div className="lg:-mt-[8.5vh] -mt-[2vh]">
      <NavBar />
    </div>

    {/* Banner Section */}
    <div className="w-full h-[60vh] relative mt-[4.1vw]">
        <div
          className="w-full min-h-full bg-cover bg-center"
          style={{
            backgroundImage: `url("/images/hand.jpg")`,
          }}
        ></div>

        {/* Gradient overlay */}
        <div className="absolute w-full h-full top-0 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 opacity-45"></div>

        {/* Light overlay */}
        <div className="absolute w-fit h-full bg-blue-900 top-0 opacity-10"></div>

        {/* Content */}
        <div className="absolute top-8/12 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h1 className="text-white text-2xl">
            Home <span className="text-white text-2xl"> / Contact Us</span>
          </h1>
          <h1 className="text-4xl md:text-6xl font-bold">Contact Us</h1>
        </div>
      </div>


    {/* Contact Section */}
    <div
      className="relative bg-white -top-10 w-[95vw] lg:w-[70vw] min-h-[60vh] shadow-xl shadow-blue-900 m-auto flex flex-col md:flex-row bg-cover bg-center"
      style={{
        backgroundImage:
          `url('https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')`,
      }}
    >
      {/* White Overlay */}
      <div className="absolute inset-0 bg-white opacity-[.92] z-0"></div>

      {/* Main Section */}
      <section className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row">
        {/* Get In Touch Section */}
        <div className="w-full md:w-1/2 space-y-8 bg-blue-900  p-6">
          <h1 className="text-white text-2xl">Get In Touch</h1>
          <p className="text-gray-300">
            Your support can change lives! If you want to join hands with us,
            donate or simply learn more about our initiatives, feel free to
            contact us.
          </p>

          {/* Address */}
          <div className="flex items-start gap-5">
            <div className="text-zinc-50 rounded-full h-16 w-16 flex items-center justify-center text-2xl">
              <FaLocationDot className="text-5xl" />
            </div>
            <div>
              <h4 className="text-zinc-50 ml-5 text-lg font-semibold mb-1">Address</h4>
              <p className="text-white text-base ml-5 leading-tight">
                Plot No. 12, MP Nagar Zone 2, Near DB Mall, Bhopal, Madhya Pradesh – 462011
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-5">
            <div className="text-white text-5xl rounded-full h-16 w-16 flex items-center justify-center">
              <MdEmail />
            </div>
            <div>
              <h4 className="text-zinc-50 text-lg font-semibold mb-1">Email</h4>
              <p className="text-white text-base">trashimanoriya@gmail.com</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-5">
            <div className="text-white rounded-full h-16 w-16 flex items-center justify-center text-4xl">
              <FaPhoneAlt />
            </div>
            <div>
              <h4 className="text-zinc-50 text-lg font-semibold mb-1">Phone</h4>
              <p className="text-white text-base">+91 8305425799</p>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="w-full md:w-1/2 bg-white p-6 sm:p-9 rounded-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Message</h2>
          <form action="">
            {/* Full Name */}
            <div className="relative mb-6">
              <input
                type="text"
                required
                className="peer w-full border-b-2 border-gray-300 focus:outline-none focus:border-pink-500 py-2 placeholder-transparent"
                placeholder="Full Name"
              />
              <label className="absolute left-0 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-pink-500">
                Full Name
              </label>
            </div>

            {/* Email */}
            <div className="relative mb-6">
              <input
                type="email"
                required
                className="peer w-full border-b-2 border-gray-300 focus:outline-none focus:border-pink-500 py-2 placeholder-transparent"
                placeholder="Email"
              />
              <label className="absolute left-0 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-pink-500">
                Email
              </label>
            </div>

            {/* Message */}
            <div className="relative mb-6">
              <textarea
                required
                className="peer w-full border-b-2 border-gray-300 focus:outline-none focus:border-pink-500 py-2 placeholder-transparent"
                placeholder="Type your Message..."
                rows="4"
              ></textarea>
              <label className="absolute left-0 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-pink-500">
                Type your Message...
              </label>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-blue-900 hover:bg-white hover:text-cyan-600 border-2 border-cyan-600 text-white py-3 rounded-md font-semibold transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>

    {/* Map Section */}
    <div className="relative w-full h-[28rem]">
      <iframe
        title="MP Nagar Zone 2 Bhopal Location"
        className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.137034208777!2d77.43424407477708!3d23.21726637901113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c42f70b0f97ed%3A0x1d7ee05d334a262d!2sZone-2%2C%20Maharana%20Pratap%20Nagar%2C%20Bhopal%2C%20Madhya%20Pradesh%20462023!5e0!3m2!1sen!2sin!4v1714307564895!5m2!1sen!2sin"
        frameBorder="0"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
        style={{ border: 0 }}
      ></iframe>
    </div>

    {/* <Footer /> */}
  </div>
  )
}

export default Contact_Us
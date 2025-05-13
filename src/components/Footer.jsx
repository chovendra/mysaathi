import React from 'react';
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import {Link} from 'react-router-dom';
import {
    Mail,
    Phone,
    MapPin,
    Facebook,
    Instagram,
    Twitter, 
    Youtube,
    MessageCircle,
  } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white pt-10 pb-5 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Information</h3>
          <p>MySaathi.com is one of the pioneers of online matrimony service.Today, we are the most trusted Matrimony website by Brand Trust Report. </p>
          <h3 className="font-semibold text-lg mt-6 mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-200">
              <FaFacebook size={30} />
            </a>
            <a href="#" className="hover:text-gray-200">
              <Instagram size={30} />
            </a>
            <a href="#" className="hover:text-gray-200">
            <FaXTwitter size={30} />

            </a>
            <a href="#" className="hover:text-gray-200">
              <IoLogoYoutube size={30} />
            </a>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Information</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <Link to={"/privacy_policy"}
              >
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
              </Link>
            </li>
            <li>
              <Link to={"/terms_and_conditions"}>
              <a href="" className="hover:underline">
                Terms & Conditions
              </a>
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Help & Support</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Feedback
              </a>
            </li>
            <li>
              <Link to={'/faq'} className="hover:underline">
                FAQs
             </Link>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
          <ul className="space-y-3">
            <li className="flex items-center space-x-2">
              <Mail size={18} />
              <span>help@mysaathi.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone size={18} /> 
              <span>+91 7223061806</span>
            </li>
            <li className="flex items-center space-x-2">
              <MessageCircle size={18} />
              <span>+91 7223061806</span>
            </li>
            <li className="flex items-start space-x-2">
              <MapPin size={40} />
              <span>
                 MP Nagar Zone 2, Near DB Mall, Bhopal, Madhya
                Pradesh – 462011
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider Line */}
      <div className="mt-10 border-t border-gray-200/50"></div>

      {/* Bottom Text */}
      <p className="text-center text-sm text-white mt-4">
        © 2025 All rights reserved. Created and maintained by{" "}
        <strong className="font-semibold">Techhelper</strong>.
      </p>
    </footer>
  )
}

export default Footer
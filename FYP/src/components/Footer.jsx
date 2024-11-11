import React from 'react'
import Logo2 from "../assets/Logo2.png";
import Khalti from "../assets/Khalti.jpeg";
import FonePay from "../assets/fonepay.jpg";
import Esewa from "../assets/Esewa.svg";
import { FaEnvelope , FaFacebook, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <>
     <footer className="bg-gray-900 text-white">
        <div className="bg-gray-800 py-4">
          <div className="max-w-6xl mx-auto flex justify-center space-x-8">
            <span className="text-sm">Our Trusted Payment Partner</span>

            <a href="/">
              <img src={Khalti} alt="Khalti" className="h-6" />
            </a>
            <a href="/">
              <img src={Esewa} alt="eSewa" className="h-6" />
            </a>
            <a href="/">
              <img src={FonePay} alt="Fonepay" className="h-6" />
            </a>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-10  grid  md:grid-cols-4">
          {/* Logo and Social Media */}
          <div className="flex flex-col items-center md:items-start">
            <span className="text-sm font-bold ml-10 pb-2">Managed By:</span>
            <img src={Logo2} alt="Logo" className="w-[160px] pb-2 " />
            <div className="flex space-x-6 text-2xl ml-6">
              <a href="https://www.facebook.com/karan.bastola.777/" aria-label="Facebook" className="hover:text-gray-400">
                <FaFacebook />
              </a>
              <a href="mailto:bnstkaran84@gmail.com?subject=Mail Subject&body=Your message here" aria-label="Twitter" className="hover:text-gray-400">
                <FaEnvelope />
              </a>
              <a
                href="https://www.instagram.com/karan_bastola7/"
                aria-label="Instagram"
                className="hover:text-gray-400"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-start space-y-2">
            <h4 className="text-lg font-semibold">About</h4>
            <a href="Aboutus" className="hover:text-gray-400">
              About Us
            </a>
            <a href="Terms&Condition" className="hover:text-gray-400">
              Terms & Conditions
            </a>
          </div>
          
          <div className="flex flex-col items-center md:items-start space-y-2">
            <h4 className="text-lg font-semibold">Help and Support</h4>
            <a  className="hover:text-gray-400">
              +977 9826320515
            </a>
            <a  className="hover:text-gray-400">
              bnstkaran84@gmail.com
            </a>
          </div>
          <div className="flex flex-col items-center md:items-start space-y-2">
            <h4 className="text-lg font-semibold ml-7">Payment Partner</h4>
            <a href="/">
              <img src={Khalti} alt="Khalti" className="h-[100px]" />
            </a>
          </div>
        </div>
      </footer> 
    </>
  )
}

export default Footer

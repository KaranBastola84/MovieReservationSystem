import React from 'react'
import Logo from "../assets/Logo.png";
function Header() {
  return (
    <>
    <header className="shadow-md">
        <nav className="items-center justify-between mx-auto flex px-12 py-1">
          <div className="flex lg:flex-1 items-center">
            <a href="/">
              <img alt="Logo" src={Logo} className="w-[225px]" />
            </a>
          </div>

          <div className="flex space-x-16 text-gray-800 font-semibold text-md">
            <a href="/" className="hover:text-red-600 ">
              Home
            </a>
            <a href="/MoviesColl" className="hover:text-red-600">
              Movie
            </a>
            <a href="/TicketRate" className="hover:text-red-600">
              Ticket Rate
            </a>
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="/SignIn"
              className="px-6 py-1 bg-gray-800 text-white rounded-full font-semibold hover:bg-gray-600"
            >
              Login
            </a>
          </div>
        </nav>
      </header>
    
    </>
  )
}

export default Header
import React from 'react'

const Navbar = () => {
  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-60 w-full max-w-4xl px-6 py-4 bg-gradient-to-r from-pink-600/20 to-blue-600/20 backdrop-blur-md border border-gray-700 rounded-3xl transition-all">
        <ul className="flex justify-between items-center text-sm font-medium">
          <li>
            <a href="#home" className="hover:text-pink-400">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-pink-400">
              About
            </a>
          </li>
          <li>
            <a href="#why-us" className="hover:text-pink-400">
              Why Us
            </a>
          </li>
          <li>
            <a href="#features" className="hover:text-pink-400">
              Features
            </a>
          </li>
          <li>
            <a href="#offerings" className="hover:text-pink-400">
              Offerings
            </a>
          </li>
          <li>
            <a href="#plans" className="hover:text-pink-400">
              Plans
            </a>
          </li>
          <li>
            <a href="#reviews" className="hover:text-pink-400">
              Reviews
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-pink-400">
              Contact
            </a>
          </li>
          <li>
            <a
              href="#buy-now"
              className="px-4 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition"
            >
              Buy Now
            </a>
          </li>
        </ul>
      </nav>
  )
}

export default Navbar
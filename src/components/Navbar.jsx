import React from 'react'

// Navigation data array
const navigationData = [
  { id: 1, name: 'Home', href: '#home' },
  { id: 2, name: 'About', href: '#about' },
  { id: 3, name: 'Why Us', href: '#why-us' },
  { id: 4, name: 'Features', href: '#features' },
  { id: 5, name: 'Products', href: '#offerings' },
  { id: 6, name: 'Reviews', href: '#reviews' },
  { id: 7, name: 'Contact', href: '#contact' }
];

// Navigation Link Component
const NavLink = ({ item }) => {
  return (
    <li>
      <a 
        href={item.href} 
        className="text-black/90 hover:text-white transition-colors text-sm font-medium"
      >
        {item.name}
      </a>
    </li>
  );
};

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/10 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <a href="#home" className="text-2xl font-bold text-black hover:text-white/80 transition-colors">
              TrueFriends
            </a>
          </div>

          {/* Navigation Links - Center */}
          <ul className="hidden md:flex items-center space-x-8">
            {navigationData.map((item) => (
              <NavLink key={item.id} item={item} />
            ))}
          </ul>

          {/* Buy Now Button - Right */}
          <div className="flex items-center space-x-4">
            <a
              href="#contact"
              className="px-6 py-2 bg-[#434f48] text-[#A4C3B2] rounded-full hover:bg-[#A4C3B2] hover:text-[#434f48] transition-all duration-300 text-sm font-medium backdrop-blur-sm border border-white/30"
            >
              Buy Now
            </a>
            
            {/* Mobile Menu Button */}
            <button className="md:hidden text-white/90 hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
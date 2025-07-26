import React, { useState } from 'react'

// Navigation data array
const navigationData = [
  { id: 1, name: 'Home', href: '#home' },
  // { id: 2, name: 'About', href: '#model' },
  // { id: 3, name: 'Why Us', href: '#why-us' },
  { id: 4, name: 'Features', href: '#features' },
  { id: 5, name: 'Products', href: '#offerings' },
  { id: 6, name: 'Reviews', href: '#reviews' },
  { id: 7, name: 'Contact', href: '#contact' }
];

// Navigation Link Component
const NavLink = ({ item, onClick }) => {
  const handleClick = (e) => {
    if (onClick) onClick();
    // Smooth scroll to target
    e.preventDefault();
    const target = document.querySelector(item.href);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <li className="w-full">
      <a
        href={item.href}
        onClick={handleClick}
        className="text-[#EFCFAD] hover:text-white transition-colors text-sm font-medium z-40 block w-full"
      >
        {item.name}
      </a>
    </li>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black">
      <div className="max-w-7xl mx-auto px-6 py-2">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <img src="/assets/261.png" alt="TrueFriends Logo" className="w-12 h-7 sm:w-11 sm:h-7 md:w-18 md:h-12" />
          </div>

          {/* Navigation Links - Center (Desktop) */}
          <ul className="hidden md:flex items-center space-x-8">
            {navigationData.map((item) => (
              <NavLink key={item.id} item={item} />
            ))}
          </ul>

          {/* Buy Now Button and Mobile Menu - Right */}
          <div className="flex items-center space-x-4">
            <a
              href="https://truefriendsprofessional.myshopify.com/"
              target='_blank'
              className="px-4 py-2 sm:px-6 bg-[#3FA6DA] text-[#FAFAFA] rounded-full hover:bg-[#EEC970] hover:text-[#161616] transition-all duration-300 text-xs sm:text-sm font-medium backdrop-blur-sm border border-[#EEC970]/30"
            >
              <span className="hidden sm:inline">Visit Store</span>
              <span className="sm:hidden">Store</span>
            </a>

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMenu}
              className="md:hidden text-white hover:text-[#EEC970] p-2 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu (Dropdown) */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-black/95 backdrop-blur-md rounded-lg mt-2 border border-[#EEC970]/30">
            {navigationData.map((item) => (
              <div key={item.id} className="px-3 py-2 rounded-md hover:bg-white/10 transition-colors">
                <NavLink item={item} onClick={closeMenu} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
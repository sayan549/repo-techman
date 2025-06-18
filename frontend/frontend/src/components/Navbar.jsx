import { useState } from 'react';
import { useRef, useEffect } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  // Timer to auto-close profile dropdown after 3 seconds
  useEffect(() => {
    if (profileOpen) {
      const timer = setTimeout(() => setProfileOpen(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [profileOpen]);

  const handleLogout = () => {
    setProfileOpen(false);
    window.location.href = "/login";
  };

  const profileRef = useRef(null);

  useEffect(() => {
    if (!profileOpen) return;
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [profileOpen]);

  return (
    <nav className="bg-white shadow-md py-4 px-8">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-2">
            <svg
              className="w-8 h-8 text-blue-600"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2.5" fill="#3b82f6" />
              <path d="M8 12l2 2 4-4" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
            <span className="font-extrabold text-2xl tracking-tight bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 bg-clip-text text-transparent drop-shadow">
              Tech<span className="text-indigo-500">Man</span>
            </span>
          </span>
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden flex items-center px-2 py-1 rounded text-blue-600 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          <li>
            <a href="/" className="hover:text-blue-600 transition-colors">Home</a>
          </li>
          <li>
            <a href="/services" className="hover:text-blue-600 transition-colors">Services</a>
          </li>
          <li>
            <a href="/portfolio" className="hover:text-blue-600 transition-colors">Portfolio</a>
          </li>
          <li>
            <a href="/about" className="hover:text-blue-600 transition-colors">About</a>
          </li>
          <li>
            <a href="/contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </li>
        </ul>
        <div className="flex items-center gap-2">
          <a
            href="/contact"
            className="hidden md:inline ml-6 bg-blue-600 text-white px-5 py-2 rounded-full shadow hover:bg-blue-700 transition-colors font-semibold"
          >
            Get Started
          </a>
          {/* Profile Icon with Dropdown */}
          <div
            className="relative"
            ref={profileRef}
            onMouseEnter={() => setProfileOpen(true)}
            onMouseLeave={() => setProfileOpen(false)}
          >
            <button
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none"
              onClick={() => setProfileOpen((open) => !open)}
              aria-label="Profile"
              type="button"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 4-7 8-7s8 3 8 7" />
              </svg>
            </button>
            {/* Dropdown */}
            {profileOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-lg z-20">
                <button
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={handleLogout}
                >
                  Logout (3s)
                </button>
              </div>
            )}
          </div>
        </div>
        {/* End of right section */}
      </div>
      {menuOpen && (
        <ul className="flex flex-col gap-4 text-gray-700 font-medium bg-white px-4 py-4 rounded shadow">
          <li>
            <a href="/" className="hover:text-blue-600 transition-colors" onClick={() => setMenuOpen(false)}>Home</a>
          </li>
          <li>
            <a href="/services" className="hover:text-blue-600 transition-colors" onClick={() => setMenuOpen(false)}>Services</a>
          </li>
          <li>
            <a href="/portfolio" className="hover:text-blue-600 transition-colors" onClick={() => setMenuOpen(false)}>Portfolio</a>
          </li>
          <li>
            <a href="/about" className="hover:text-blue-600 transition-colors" onClick={() => setMenuOpen(false)}>About</a>
          </li>
          <li>
            <a href="/contact" className="hover:text-blue-600 transition-colors" onClick={() => setMenuOpen(false)}>Contact</a>
          </li>
          <li>
            <a href="/blog" className="hover:text-blue-600 transition-colors" onClick={() => setMenuOpen(false)}>Blog</a>
          </li>
          <li>
            <a
              href="/contact"
              className="bg-blue-600 text-white px-5 py-2 rounded-full shadow hover:bg-blue-700 transition-colors font-semibold block text-center"
              onClick={() => setMenuOpen(false)}
            >
              Get Started
            </a>
          </li>
          <li>
            {/* Profile Icon with Dropdown for Mobile */}
            <div className="relative" ref={profileRef}>
              <button
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none mx-auto"
                onClick={() => setProfileOpen((open) => !open)}
                aria-label="Profile"
                type="button"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 20c0-4 4-7 8-7s8 3 8 7" />
                </svg>
              </button>
              {profileOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-lg z-20">
                  <button
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => {
                      setProfileOpen(false);
                      setMenuOpen(false);
                      window.location.href = "/login";
                    }}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </li>
        </ul>
      )}
    </nav>
  );
}

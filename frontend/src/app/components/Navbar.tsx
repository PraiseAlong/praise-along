'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const links = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Register', href: '#' },
    { name: 'Coming Up', href: '#' },
    { name: 'Contact', href: '#' },
    { name: 'Privacy', href: '#' }
  ];

  return (
    <>
      <nav className="w-full" style={{ backgroundColor: '#ffcf36' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-1 flex justify-center">
              <h1 className="text-2xl font-bold text-white" style={{ fontFamily: 'FuturaBold, Arial, sans-serif' }}>
                UNITING SCHOOLS WITH FREE MONTHLY SONGS
              </h1>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-yellow-400 focus:outline-none shadow-lg"
              style={{ color: '#374151' }}
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Slide-in menu from right */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-300">
            <h2 className="text-xl font-bold" style={{ color: '#e76864', fontFamily: 'FuturaBold, Arial, sans-serif' }}>
              NAVIGATION
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-md hover:bg-gray-100"
              style={{ color: '#14a798' }}
            >
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="space-y-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 py-3 rounded-md text-lg font-medium hover:bg-gray-100 transition-colors"
                style={{ color: '#14a798', fontFamily: 'FuturaMedium, Arial, sans-serif' }}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>

    </>
  );
}

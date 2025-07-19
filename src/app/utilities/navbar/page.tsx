'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, User, Menu, X } from 'lucide-react';
import InputSearch from './InputSearch';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-gradient-to-b from-black/80 to-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-red-600 text-2xl font-bold">
              70NGFLIX
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-gray-300 transition-colors">
              Home
            </Link>
            <Link href="/movies" className="text-white hover:text-gray-300 transition-colors">
              Movies
            </Link>
            <Link href="/tvShow" className="text-white hover:text-gray-300 transition-colors">
              TV Shows
            </Link>
            <Link href="/popular" className="text-white hover:text-gray-300 transition-colors">
              Popular
            </Link>
          </div>

          {/* Search and User Actions */}
          <div className="flex items-center space-x-4">
            <InputSearch/>

            {/* Mobile search icon */}
            <button className="sm:hidden text-white hover:text-gray-300">
              <Search size={20} />
            </button>



            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white hover:text-gray-300"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 text-white hover:bg-gray-800 rounded-md">
                Home
              </Link>
              <Link href="/movies" className="block px-3 py-2 text-white hover:bg-gray-800 rounded-md">
                Movies
              </Link>
              <Link href="/tv-shows" className="block px-3 py-2 text-white hover:bg-gray-800 rounded-md">
                TV Shows
              </Link>
              <Link href="/popular" className="block px-3 py-2 text-white hover:bg-gray-800 rounded-md">
                Popular
              </Link>
              <Link href="/my-list" className="block px-3 py-2 text-white hover:bg-gray-800 rounded-md">
                My List
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
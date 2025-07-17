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
            <Link href="/tv-shows" className="text-white hover:text-gray-300 transition-colors">
              TV Shows
            </Link>
            <Link href="/popular" className="text-white hover:text-gray-300 transition-colors">
              Popular
            </Link>
            <Link href="/my-list" className="text-white hover:text-gray-300 transition-colors">
              My List
            </Link>
          </div>

          {/* Search and User Actions */}
          <div className="flex items-center space-x-4">
            <InputSearch/>
            {/* Search */}
            {/* <form onSubmit={handleSearch} className="relative hidden sm:block">
              <input
                type="text"
                placeholder="Search movies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-black/50 text-white placeholder-gray-400 border border-gray-600 rounded-md px-4 py-2 pr-10 w-64 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
              >
                <Search size={18} />
              </button>
            </form> */}

            {/* Mobile search icon */}
            <button className="sm:hidden text-white hover:text-gray-300">
              <Search size={20} />
            </button>

            {/* User Profile */}
            <div className="relative group">
              <button className="flex items-center space-x-2 text-white hover:text-gray-300">
                <User size={20} />
                <span className="hidden sm:inline">Profile</span>
              </button>
              
              {/* Dropdown Menu */}
              <div className="absolute right-0 mt-2 w-48 bg-black/90 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  <a href="/profile" className="block px-4 py-2 text-sm text-white hover:bg-gray-800">Profile</a>
                  <a href="/settings" className="block px-4 py-2 text-sm text-white hover:bg-gray-800">Settings</a>
                  <a href="/logout" className="block px-4 py-2 text-sm text-white hover:bg-gray-800">Sign out</a>
                </div>
              </div>
            </div>

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
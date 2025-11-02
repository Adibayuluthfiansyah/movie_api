'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
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

    const handleLinkClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
            isScrolled ? 'bg-black/95 backdrop-blur-md shadow-lg' : 'bg-gradient-to-b from-black/90 to-transparent'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="text-red-600 text-2xl md:text-3xl font-bold hover:text-red-500 transition-colors">
                        7ONGMOV
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-white hover:text-red-500 transition-colors font-medium">
                            Home
                        </Link>
                        <Link href="/movie-list" className="text-white hover:text-red-500 transition-colors font-medium">
                            Movies
                        </Link>
                        <Link href="/tvshow-list" className="text-white hover:text-red-500 transition-colors font-medium">
                            TV Shows
                        </Link>
                        <Link href="/popular" className="text-white hover:text-red-500 transition-colors font-medium">
                            Popular
                        </Link>
                    </nav>

                    {/* Right Side: ONLY Search + Hamburger */}
                    <div className="flex items-center">
                        {/* Search Component handles both desktop & mobile internally */}
                        <InputSearch />

                        {/* Mobile Menu Button (Only visible on mobile) */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden text-white hover:text-red-500 transition-colors p-2 ml-2"
                            aria-label="Menu"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-800">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <Link 
                                href="/" 
                                onClick={handleLinkClick}
                                className="block px-4 py-3 text-white hover:bg-gray-900 hover:text-red-500 rounded-md transition-colors font-medium"
                            >
                                Home
                            </Link>
                            <Link 
                                href="/movie-list" 
                                onClick={handleLinkClick}
                                className="block px-4 py-3 text-white hover:bg-gray-900 hover:text-red-500 rounded-md transition-colors font-medium"
                            >
                                Movies
                            </Link>
                            <Link 
                                href="/tvshow-list" 
                                onClick={handleLinkClick}
                                className="block px-4 py-3 text-white hover:bg-gray-900 hover:text-red-500 rounded-md transition-colors font-medium"
                            >
                                TV Shows
                            </Link>
                            <Link 
                                href="/popular" 
                                onClick={handleLinkClick}
                                className="block px-4 py-3 text-white hover:bg-gray-900 hover:text-red-500 rounded-md transition-colors font-medium"
                            >
                                Popular
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
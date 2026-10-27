'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import SearchModal from '@/components/SearchModal';
import { Search, Menu, X, ShoppingBag } from 'lucide-react';

export default function Header() {
  const { openCart, itemCount } = useCart();
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Notification Strip */}
      <div className="bg-[#6B1226] text-white py-1.5 px-4 text-center text-[11px] tracking-wider uppercase select-none flex items-center justify-center gap-2 sm:gap-4 shrink-0">
        <span className="font-semibold">Handmade in India</span>
        <span className="text-rose-300">•</span>
        <span className="hidden sm:inline">Free Express Delivery on Orders Above ₹1,499</span>
        <span className="text-rose-300 hidden sm:inline">•</span>
        <span className="font-semibold text-rose-200">Free 2ml Sample in Every Box</span>
      </div>

      {/* Main Header in Plain White */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 bg-white border-b border-gray-200 ${
          isScrolled ? 'shadow-sm py-2.5' : 'py-3 sm:py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Mobile menu trigger */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-1.5 -ml-1.5 text-black hover:text-[#6B1226] transition-colors focus:outline-none"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

          {/* Left Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-7 text-xs tracking-wider uppercase font-semibold text-[#222222]">
            <Link
              href="/#signature-collection"
              className="hover:text-[#6B1226] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#6B1226] hover:after:w-full after:transition-all"
            >
              All 10 Perfumes
            </Link>
            <Link
              href="/#curate-box"
              className="hover:text-[#6B1226] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#6B1226] hover:after:w-full after:transition-all flex items-center gap-1.5"
            >
              <span>Build a Box</span>
              <span className="bg-[#6B1226] text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                Save ₹300
              </span>
            </Link>
            <Link
              href="/#perfumers-notes"
              className="hover:text-[#6B1226] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#6B1226] hover:after:w-full after:transition-all"
            >
              Our Story
            </Link>
            <Link
              href="/#scent-finder"
              className="hover:text-[#6B1226] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#6B1226] hover:after:w-full after:transition-all"
            >
              Scent Quiz
            </Link>
          </nav>

          {/* Center Brand Name */}
          <div className="text-center flex flex-col items-center">
            <Link
              href="/"
              className="group inline-flex flex-col items-center"
              aria-label="The Noiré Home"
            >
              <span className="font-serif text-xl sm:text-2xl tracking-[0.16em] uppercase text-black group-hover:text-[#6B1226] transition-colors font-semibold">
                THE NOIRÉ
              </span>
              <span className="text-[9px] uppercase tracking-[0.3em] text-[#6B1226] font-sans font-bold">
                Luxury Perfumes · India
              </span>
            </Link>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Search Button */}
            <button
              onClick={() => setSearchOpen(true)}
              className="text-[#333333] hover:text-[#6B1226] transition-colors flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold font-sans"
              aria-label="Search Fragrances"
            >
              <Search className="w-4 h-4" />
              <span className="hidden md:inline">Search</span>
            </button>

            {/* Bag Button in Wine Red */}
            <button
              onClick={openCart}
              className="bg-[#6B1226] hover:bg-[#520D1D] text-white text-xs uppercase tracking-wider font-semibold font-sans transition-colors flex items-center gap-2 py-1.5 px-3 rounded shadow-sm"
              aria-label={`Open shopping bag with ${itemCount} items`}
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Bag</span>
              <span className="bg-white text-[#6B1226] font-bold text-[10px] w-4 h-4 rounded-full flex items-center justify-center -ml-0.5">
                {itemCount}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 w-4/5 max-w-sm bg-white p-6 flex flex-col justify-between shadow-2xl border-r border-gray-200">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                <div>
                  <span className="font-serif text-2xl tracking-wider uppercase text-black font-semibold">
                    THE NOIRÉ
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-[#6B1226] block mt-0.5 font-bold">
                    Luxury Perfumes · India
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-gray-500 hover:text-black"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="mt-6 space-y-3.5 text-xs tracking-wider uppercase font-semibold">
                <Link
                  href="/#signature-collection"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-gray-800 hover:text-[#6B1226] py-1.5 border-b border-gray-100"
                >
                  All 10 Perfumes (₹999)
                </Link>
                <Link
                  href="/#curate-box"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-gray-800 hover:text-[#6B1226] py-1.5 border-b border-gray-100"
                >
                  <span>Build a Custom Box</span>
                  <span className="bg-[#6B1226] text-white text-[10px] px-2 py-0.5 rounded font-bold">
                    Save ₹300
                  </span>
                </Link>
                <Link
                  href="/#perfumers-notes"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-gray-800 hover:text-[#6B1226] py-1.5 border-b border-gray-100"
                >
                  Our Natural Ingredients
                </Link>
                <Link
                  href="/#scent-finder"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-gray-800 hover:text-[#6B1226] py-1.5 border-b border-gray-100"
                >
                  Find Your Perfect Scent
                </Link>
                <Link
                  href="/stories"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-gray-800 hover:text-[#6B1226] py-1.5 border-b border-gray-100"
                >
                  Stories of Each Perfume
                </Link>
              </nav>

              <div className="mt-6 pt-5 border-t border-gray-200 text-xs text-gray-600 space-y-1.5">
                <div className="text-[#6B1226] font-bold">₹999 for 50 ml • All Taxes Included</div>
                <div>Fast Delivery Across India with BlueDart</div>
              </div>
            </div>

            <div className="pt-5 border-t border-gray-200">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openCart();
                }}
                className="w-full py-2.5 bg-[#6B1226] hover:bg-[#520D1D] text-white text-xs tracking-wider uppercase font-semibold transition-colors rounded shadow"
              >
                View Your Bag ({itemCount})
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Global Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}

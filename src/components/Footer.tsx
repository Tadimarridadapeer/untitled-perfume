'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-[#111111] border-t border-gray-200 font-sans">
      
      {/* Authenticity Notice Bar */}
      <div className="bg-rose-50 border-b border-rose-100 py-3.5 px-4 text-xs text-gray-700">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            <strong className="text-[#6B1226] tracking-wider uppercase text-[11px]">Authenticity Notice:</strong>{' '}
            The Noiré perfumes are handcrafted exclusively by our studio in India. Beware of unauthorized copies.
          </div>
          <div className="flex items-center gap-4 text-xs text-[#6B1226] font-bold">
            <span>100% Genuine Batch</span>
            <span>·</span>
            <span>BlueDart Air Express Logistics</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex flex-col">
              <span className="font-serif text-3xl tracking-[0.16em] uppercase text-black font-semibold">
                THE NOIRÉ
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#6B1226] mt-0.5 font-bold">
                Luxury Perfumes · India
              </span>
            </Link>
            <p className="text-xs text-gray-600 max-w-sm leading-relaxed">
              A collection of ten long-lasting unisex perfumes handcrafted in India using real botanical ingredients like Mysore sandalwood and Kannauj roses.
            </p>
            <div className="pt-1 text-xs text-[#6B1226] font-bold">
              ₹999 for 50 ml · All Taxes Included
            </div>
          </div>

          {/* Chapters */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-bold text-black">
              The 10 Perfumes
            </h4>
            <ul className="space-y-2 text-xs text-gray-600">
              <li>
                <Link href="/fragrances/the-morning-we-met" className="hover:text-[#6B1226] transition-colors">
                  01. The Morning We Met
                </Link>
              </li>
              <li>
                <Link href="/fragrances/somewhere-familiar" className="hover:text-[#6B1226] transition-colors">
                  02. Somewhere Familiar
                </Link>
              </li>
              <li>
                <Link href="/fragrances/words-we-kept" className="hover:text-[#6B1226] transition-colors">
                  03. Words We Kept
                </Link>
              </li>
              <li>
                <Link href="/fragrances/almost-forever" className="hover:text-[#6B1226] transition-colors">
                  04. Almost Forever
                </Link>
              </li>
              <li>
                <Link href="/#signature-collection" className="text-[#6B1226] font-bold hover:underline block pt-1">
                  View All 10 Perfumes →
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-bold text-black">
              Shop & Explore
            </h4>
            <ul className="space-y-2 text-xs text-gray-600">
              <li>
                <Link href="/#curate-box" className="hover:text-[#6B1226] transition-colors">
                  Build a Custom Gift Box
                </Link>
              </li>
              <li>
                <Link href="/#perfumers-notes" className="hover:text-[#6B1226] transition-colors">
                  Our Natural Ingredients
                </Link>
              </li>
              <li>
                <Link href="/#scent-finder" className="hover:text-[#6B1226] transition-colors">
                  10-Second Scent Quiz
                </Link>
              </li>
              <li>
                <Link href="/stories" className="hover:text-[#6B1226] transition-colors">
                  Stories of Each Perfume
                </Link>
              </li>
            </ul>
          </div>

          {/* Client Care */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-bold text-black">
              Customer Support
            </h4>
            <ul className="space-y-2 text-xs text-gray-600">
              <li>
                <Link href="/shipping-returns" className="hover:text-[#6B1226] transition-colors">
                  Pan-India Express Delivery
                </Link>
              </li>
              <li>
                <Link href="/shipping-returns#returns" className="hover:text-[#6B1226] transition-colors">
                  Try-at-Home Return Policy
                </Link>
              </li>
              <li>
                <Link href="/shipping-returns#contact" className="hover:text-[#6B1226] transition-colors">
                  WhatsApp Support Concierge
                </Link>
              </li>
              <li>
                <Link href="/shipping-returns#privacy" className="hover:text-[#6B1226] transition-colors">
                  GST & Order Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} The Noiré. Handcrafted in India.</p>
          <div className="flex items-center gap-3 text-xs text-gray-700 font-medium">
            <span>UPI (GPay / PhonePe)</span>
            <span>·</span>
            <span>Cards</span>
            <span>·</span>
            <span>NetBanking</span>
            <span>·</span>
            <span>Cash on Delivery</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

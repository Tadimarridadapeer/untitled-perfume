import React from 'react';
import type { Metadata } from 'next';
import { Truck, ShieldCheck, RefreshCw, MessageSquare } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Shipping, Returns & Delivery — The Noiré India',
  description: 'Pan-India express shipping, try-at-home return guarantees, and customer care standards for The Noiré.',
};

export default function ShippingReturnsPage() {
  return (
    <div className="bg-white text-[#111111] min-h-screen py-16 sm:py-24 font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#6B1226] font-bold block">
            Customer Support & Delivery
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-black tracking-tight font-normal">
            Pan-India Delivery & Return Policy
          </h1>
          <p className="text-sm text-gray-600 max-w-md mx-auto">
            Fast, transparent, and safe delivery across 19,000+ PIN codes in India.
          </p>
        </div>

        {/* 3 Value Badges in Clean White Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl space-y-2 shadow-sm">
            <Truck className="w-5 h-5 text-[#6B1226]" />
            <h3 className="font-serif text-lg text-black font-semibold">Air Express Delivery</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Dispatched with BlueDart Air Express within 24–48 hours. Free shipping on orders above ₹1,499.
            </p>
          </div>

          <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl space-y-2 shadow-sm">
            <RefreshCw className="w-5 h-5 text-[#6B1226]" />
            <h3 className="font-serif text-lg text-black font-semibold">Free 2ml Sample First</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Test the included 2ml sample vial on your skin first. Return the unopened 50ml bottle for a full refund.
            </p>
          </div>

          <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl space-y-2 shadow-sm">
            <ShieldCheck className="w-5 h-5 text-[#6B1226]" />
            <h3 className="font-serif text-lg text-black font-semibold">GST Invoice Included</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Every package comes with a proper GST tax invoice. 100% genuine batch handcrafted in India.
            </p>
          </div>
        </div>

        {/* Section: Shipping */}
        <section className="p-7 bg-gray-50 border border-gray-200 rounded-2xl space-y-3 shadow-sm">
          <h2 className="font-serif text-2xl text-black font-semibold">Delivery Timelines in India</h2>
          <div className="space-y-2 text-xs text-gray-700 leading-relaxed">
            <p>
              Orders placed before 2:00 PM IST are handed to our express air delivery partners on the same business day.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-gray-600">
              <li><strong>Metros (Mumbai, Delhi NCR, Bengaluru, Hyderabad, Chennai, Kolkata, Pune):</strong> 2 to 3 business days.</li>
              <li><strong>Tier 2 / Tier 3 Towns & Rest of India:</strong> 3 to 5 business days.</li>
              <li><strong>Delivery Fee:</strong> ₹99 below ₹1,499; Free for orders of ₹1,499 and above.</li>
            </ul>
          </div>
        </section>

        {/* Section: Returns */}
        <section id="returns" className="p-7 bg-gray-50 border border-gray-200 rounded-2xl space-y-3 shadow-sm">
          <h2 className="font-serif text-2xl text-black font-semibold">Try-at-Home Return Policy</h2>
          <p className="text-xs text-gray-700 leading-relaxed">
            Buying perfume online can feel tricky. That is why every full-size 50ml bottle includes a free matching 2ml tester vial. Spray the 2ml sample on your wrist first. If you feel the perfume does not match your taste, simply message our concierge within 7 days of delivery to return the unopened 50ml box for an easy, 100% refund.
          </p>
        </section>

        {/* Section: Contact Concierge */}
        <section id="contact" className="p-7 bg-white border-2 border-[#6B1226] rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-5 shadow-sm">
          <div>
            <h2 className="font-serif text-xl text-black font-semibold flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-[#6B1226]" />
              <span>Need Help Choosing a Perfume?</span>
            </h2>
            <p className="text-xs text-gray-600 mt-1">
              Chat directly with our perfume advisor on WhatsApp anytime.
            </p>
          </div>
          <a
            href="https://wa.me/919999999999?text=Hello%20The%20Noir%C3%A9%2C%20I%20would%20like%20guidance%20on%20choosing%20a%20fragrance%20chapter."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-[#6B1226] hover:bg-[#520D1D] text-white font-bold text-xs uppercase tracking-wider transition-all rounded shadow shrink-0"
          >
            Chat on WhatsApp
          </a>
        </section>

      </div>
    </div>
  );
}

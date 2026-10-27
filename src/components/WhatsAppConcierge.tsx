'use client';

import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppConcierge() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 font-sans">
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-4 py-2.5 bg-white border border-[#6B1226] text-black shadow-lg hover:bg-rose-50 transition-all rounded-full group"
          aria-label="Connect with Fragrance Concierge"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <MessageCircle className="w-4 h-4 text-[#6B1226] group-hover:scale-110 transition-transform" />
          <span className="text-xs uppercase tracking-wider font-bold text-[#6B1226]">
            WhatsApp Help
          </span>
        </button>
      )}

      {/* Floating Chat Modal */}
      {isOpen && (
        <div className="w-80 bg-white border border-gray-200 shadow-2xl rounded-2xl p-5 text-black animate-fadeIn">
          <div className="flex items-center justify-between pb-3 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center text-[#6B1226]">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-serif text-base font-bold text-black">
                  The Noiré Concierge
                </h4>
                <span className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1">
                  ● Online (10 AM – 7 PM IST)
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-black"
              aria-label="Close concierge"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="py-4 space-y-2 text-xs text-gray-700 leading-relaxed">
            <p>
              Hello! Need help picking a perfume or want to check delivery time to your city?
            </p>
            <div className="p-3 bg-gray-50 border border-gray-200 rounded-xl text-xs space-y-1">
              <p className="text-[#6B1226] font-bold">Fast Support in India:</p>
              <p className="text-gray-600">· Direct UPI & Payment Help</p>
              <p className="text-gray-600">· BlueDart Express Tracking</p>
              <p className="text-gray-600">· Free Sample & Return guidance</p>
            </div>
          </div>

          <div className="pt-2">
            <a
              href="https://wa.me/919876543210?text=Hello%20The%20Noir%C3%A9%20Maison,%20I%20would%20like%20guidance%20on%20selecting%20a%20fragrance."
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault();
                alert(
                  '[The Noiré WhatsApp Concierge]\nDirect WhatsApp helpline +91-9876543210 is connected.\n\nIn live production, this opens a direct chat with our fragrance advisor in India.'
                );
              }}
              className="w-full py-3 bg-[#6B1226] hover:bg-[#520D1D] text-white text-xs uppercase tracking-wider font-bold transition-colors flex items-center justify-center gap-2 text-center rounded-xl shadow"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              <span>Chat on WhatsApp (+91)</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

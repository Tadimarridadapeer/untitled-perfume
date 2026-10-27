'use client';

import React from 'react';

const CRAFT_PILLARS = [
  {
    num: '01',
    title: 'Real Indian Ingredients',
    highlight: 'Mysore Sandalwood & Kannauj Rose',
    desc: 'We use genuine natural botanicals from India: fresh Damask roses from Kannauj and rich, aged sandalwood from Mysore.',
  },
  {
    num: '02',
    title: 'Made for Indian Climate',
    highlight: 'Lasts 12+ Hours in Heat',
    desc: 'Our perfumes are specially tested for Indian summers and humidity, so the scent stays rich and fresh all day long.',
  },
  {
    num: '03',
    title: 'Gentle on Your Skin',
    highlight: 'Pure Sugarcane Alcohol',
    desc: 'Blended with 100% natural sugarcane alcohol. Free from harsh chemicals, phthalates, and strong chemical smells.',
  },
  {
    num: '04',
    title: 'Try at Home First',
    highlight: 'Free 2ml Sample in Every Box',
    desc: 'Every 50ml bottle comes with a free 2ml sample vial. Test it on your skin first—if you do not love it, return the main bottle for a full refund.',
  },
];

export default function FeatureHighlights() {
  return (
    <section id="perfumers-notes" className="bg-gray-50 py-10 sm:py-14 px-4 sm:px-6 lg:px-8 border-b border-gray-200 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-8 space-y-1.5">
          <span className="text-xs uppercase tracking-widest text-[#6B1226] block font-bold">
            Why Choose The Noiré
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-black font-normal tracking-tight">
            Perfumes made with honesty and real care.
          </h2>
          <p className="text-sm text-gray-600 font-normal leading-relaxed">
            Handcrafted in small batches in India. No retail markups, just pure quality fragrance.
          </p>
        </div>

        {/* 4 Cards in Clean White with Wine Red Accents */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CRAFT_PILLARS.map((pillar) => (
            <div
              key={pillar.num}
              className="p-6 bg-white border border-gray-200 hover:border-[#6B1226] transition-all duration-200 flex flex-col justify-between rounded-xl shadow-sm hover:shadow-md group"
            >
              <div>
                <span className="font-serif text-2xl text-[#6B1226] font-bold block mb-2">
                  {pillar.num}
                </span>
                <span className="text-xs uppercase tracking-wider text-gray-500 block mb-1 font-semibold">
                  {pillar.title}
                </span>
                <h3 className="font-serif text-lg text-black font-semibold mb-3 group-hover:text-[#6B1226] transition-colors">
                  {pillar.highlight}
                </h3>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed pt-2 border-t border-gray-100">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

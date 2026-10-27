import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Story & Philosophy — The Noiré India',
  description: 'Fragrance is a way of returning to the people, places, and memories that shaped us. Read the story of The Noiré.',
};

export default function PhilosophyPage() {
  return (
    <div className="bg-white text-[#111111] min-h-screen py-16 sm:py-24 font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Hero Section */}
        <div className="text-center space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#6B1226] font-bold block">
            The Philosophy of The Noiré
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-black tracking-tight font-normal">
            Some moments <span className="italic text-[#6B1226]">never leave.</span>
          </h1>
          <p className="font-serif italic text-lg sm:text-xl text-gray-700 max-w-xl mx-auto">
            &ldquo;Fragrance is a way of returning to the people, places, and versions of ourselves that shaped us.&rdquo;
          </p>
        </div>

        {/* Visual */}
        <div className="relative aspect-[16/9] w-full bg-gray-50 border border-gray-200 rounded-2xl overflow-hidden shadow-md">
          <Image
            src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=1400&auto=format&fit=crop"
            alt="Warm morning light casting quiet shadows"
            fill
            className="object-cover"
            sizes="900px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
            <span className="tracking-wider uppercase text-[10px] font-bold">
              The Noiré Perfumery India
            </span>
            <span className="text-gray-200 text-xs">Handcrafted in India</span>
          </div>
        </div>

        {/* Narrative Essay */}
        <div className="p-8 sm:p-10 bg-gray-50 border border-gray-200 rounded-2xl text-sm sm:text-base text-gray-700 leading-relaxed space-y-4 shadow-sm">
          <h2 className="font-serif text-2xl text-black font-semibold mb-2">
            The Story Behind The Noiré
          </h2>
          <p>
            Memory is rarely a photograph. It does not wait in tidy albums. Sometimes, it is the clean scent of morning citrus that brings back a conversation that lasted hours. Other times, it is the quiet warmth of sandalwood that reminds you of home.
          </p>
          <p>
            At The Noiré, we create perfumes around real human feelings: mornings spent in good company, the comfort of places you know by heart, words left unspoken, and peaceful evenings after everyone has left.
          </p>
          <p>
            Every fragrance is a chapter in your personal story. Wear it not to impress others, but to carry the moments that matter most to you.
          </p>
        </div>

        {/* 3 Pillars of Sourcing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-6 bg-white border border-gray-200 rounded-xl space-y-2 shadow-sm">
            <span className="text-xs uppercase tracking-wider text-[#6B1226] font-bold block">
              Ingredient 01
            </span>
            <h3 className="font-serif text-lg text-black font-semibold">Kannauj Rose</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Early morning Damask roses gently hydro-distilled in Kannauj for a soft, authentic floral warmth.
            </p>
          </div>

          <div className="p-6 bg-white border border-gray-200 rounded-xl space-y-2 shadow-sm">
            <span className="text-xs uppercase tracking-wider text-[#6B1226] font-bold block">
              Ingredient 02
            </span>
            <h3 className="font-serif text-lg text-black font-semibold">Mysore Sandalwood</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Real aged Indian sandalwood with creamy, long-lasting warmth calibrated to stay on your clothes all day.
            </p>
          </div>

          <div className="p-6 bg-white border border-gray-200 rounded-xl space-y-2 shadow-sm">
            <span className="text-xs uppercase tracking-wider text-[#6B1226] font-bold block">
              Ingredient 03
            </span>
            <h3 className="font-serif text-lg text-black font-semibold">Sugarcane Spirit</h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Naturally fermented Indian sugarcane alcohol. Gentle on skin with zero chemical solvents or phthalates.
            </p>
          </div>
        </div>

        {/* CTA Banner in Wine Red */}
        <div className="p-8 bg-[#6B1226] text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div>
            <h3 className="font-serif text-2xl text-white font-normal">
              Explore All Ten Perfumes
            </h3>
            <p className="text-xs text-rose-200 mt-1">
              ₹999 for 50 ml bottle with free sample and pan-India express delivery.
            </p>
          </div>
          <Link
            href="/#signature-collection"
            className="px-6 py-3.5 bg-white text-[#6B1226] hover:bg-rose-50 font-bold text-xs uppercase tracking-wider transition-all rounded flex items-center gap-2 shrink-0 shadow"
          >
            <span>Shop The Collection</span>
            <ArrowRight className="w-4 h-4 text-[#6B1226]" />
          </Link>
        </div>

      </div>
    </div>
  );
}

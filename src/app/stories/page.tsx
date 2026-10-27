import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { FRAGRANCES } from '@/data/fragrances';
import { ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'The Stories — The Noiré Perfumes',
  description: 'Ten chapters in a larger collection of memories. Read the complete story archive of The Noiré luxury fragrances.',
};

export default function StoriesPage() {
  return (
    <div className="bg-white text-[#111111] min-h-screen py-16 sm:py-24 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-xs uppercase tracking-widest text-[#6B1226] font-bold block">
            The Complete Anthology
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl text-black tracking-tight font-normal">
            Ten Perfumes. <span className="italic text-[#6B1226]">Ten Stories.</span>
          </h1>
          <p className="text-sm text-gray-600 leading-relaxed">
            Every perfume is an intimate memory. Read the full story behind each creation.
          </p>
        </div>

        {/* Stories Feed */}
        <div className="space-y-12">
          {FRAGRANCES.map((fragrance, index) => {
            const isEven = index % 2 === 0;

            return (
              <article
                key={fragrance.id}
                id={fragrance.slug}
                className="scroll-mt-24 p-6 sm:p-10 bg-gray-50 border border-gray-200 rounded-2xl shadow-sm hover:border-[#6B1226] transition-all"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                  isEven ? '' : 'lg:flex-row-reverse'
                }`}>
                  
                  {/* Visual Spread */}
                  <div className={`lg:col-span-5 ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                    <div className="relative aspect-[4/5] bg-white border border-gray-200 rounded-xl p-4 flex items-center justify-center overflow-hidden group">
                      <Image
                        src={fragrance.bottleImage}
                        alt={fragrance.name}
                        fill
                        className="object-contain filter contrast-[1.03] transform group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 1024px) 100vw, 420px"
                      />
                      <div className="absolute top-3 left-3 bg-[#6B1226] text-white text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded font-bold">
                        {fragrance.chapter}
                      </div>
                    </div>
                  </div>

                  {/* Story Text */}
                  <div className={`lg:col-span-7 space-y-4 ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                    <div>
                      <span className="text-xs uppercase tracking-wider text-[#6B1226] font-bold block mb-1">
                        Feeling: {fragrance.mood}
                      </span>
                      <h2 className="font-serif text-3xl sm:text-4xl text-black font-semibold">
                        {fragrance.name}
                      </h2>
                      <p className="font-serif italic text-base sm:text-lg text-[#6B1226] mt-1">
                        &ldquo;{fragrance.tagline}&rdquo;
                      </p>
                    </div>

                    <div className="p-4 bg-white border-l-4 border-[#6B1226] border border-gray-200 rounded-lg text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                      <p>{fragrance.story}</p>
                    </div>

                    {/* Scent notes */}
                    <div className="space-y-1 pt-1 text-xs text-gray-600">
                      <span className="text-xs uppercase tracking-wider text-black font-bold block">
                        Dominant Notes:
                      </span>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {fragrance.keyNotes.map((note) => (
                          <span
                            key={note}
                            className="px-2 py-0.5 rounded bg-white border border-gray-200 text-xs text-gray-700 font-medium"
                          >
                            {note}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Pricing & CTA */}
                    <div className="pt-3 flex items-center gap-4">
                      <Link
                        href={`/fragrances/${fragrance.slug}`}
                        className="px-6 py-3 bg-[#6B1226] hover:bg-[#520D1D] text-white text-xs uppercase tracking-wider font-semibold rounded transition-all flex items-center gap-2 shadow"
                      >
                        <span>View Perfume Details</span>
                        <ArrowUpRight className="w-4 h-4 text-white" />
                      </Link>

                      <span className="font-serif text-xl text-[#6B1226] font-bold">
                        ₹999 (50 ml)
                      </span>
                    </div>
                  </div>

                </div>
              </article>
            );
          })}
        </div>

      </div>
    </div>
  );
}

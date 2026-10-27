'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FRAGRANCES } from '@/data/fragrances';
import { ArrowRight, BookOpen } from 'lucide-react';

export default function MemoryArchive() {
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const activeFragrance = FRAGRANCES[activeChapterIndex];

  return (
    <section id="memory-archive" className="py-20 sm:py-28 bg-[#110E0D] text-[#F5F0E8] border-b border-[#C5A059]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.35em] text-[#C5A059] font-sans font-medium">
            <BookOpen className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>The Olfactory Memory Archive</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F0E8] tracking-tight">
            An Archive of Human Experiences
          </h2>
          <p className="text-xs text-[#8E857C] font-sans">
            Traverse the 10 chapters to explore how memory takes olfactory form.
          </p>
        </div>

        {/* Chapter Scrubbing Bar */}
        <div className="flex overflow-x-auto pb-3 mb-8 no-scrollbar border-b border-[#C5A059]/20 gap-2 justify-start lg:justify-center">
          {FRAGRANCES.map((f, idx) => (
            <button
              key={f.id}
              onClick={() => setActiveChapterIndex(idx)}
              className={`px-3 py-1.5 shrink-0 transition-all text-left flex flex-col border ${
                activeChapterIndex === idx
                  ? 'bg-[#C5A059] text-[#0D0B0A] border-[#C5A059] font-bold shadow-md'
                  : 'bg-[#181413] text-[#8E857C] border-[#C5A059]/20 hover:border-[#C5A059] hover:text-[#F5F0E8]'
              }`}
            >
              <span className="text-[9px] uppercase tracking-wider font-sans">
                {f.chapter}
              </span>
              <span className="font-serif text-xs truncate max-w-[110px] sm:max-w-none">
                {f.name}
              </span>
            </button>
          ))}
        </div>

        {/* Active Chapter Showcase - Compact & Museum Grade */}
        <div className="bg-[#161211] border border-[#C5A059]/35 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] w-full max-w-xs mx-auto bg-[#0D0B0A] border border-[#C5A059]/30 p-3 overflow-hidden">
                <Image
                  src={activeFragrance.atmosphereImages[0]}
                  alt={activeFragrance.name}
                  fill
                  className="object-cover transition-opacity duration-700 filter contrast-[1.05]"
                  sizes="320px"
                />
                
                <div className="absolute top-3 left-3 bg-[#0D0B0A]/90 text-[#C5A059] px-2.5 py-0.5 border border-[#C5A059]/40 text-[9px] uppercase tracking-widest font-sans font-semibold">
                  {activeFragrance.mood}
                </div>

                <div className="absolute bottom-3 right-3 bg-[#161211]/95 px-2.5 py-1 border border-[#C5A059]/30 text-[10px] font-serif text-[#F5F0E8]">
                  ₹999 • 50 ml
                </div>
              </div>
            </div>

            {/* Narrative Story Content */}
            <div className="lg:col-span-7 space-y-4">
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059] font-sans font-semibold">
                  {activeFragrance.chapter} • Mood: {activeFragrance.mood}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F0E8]">
                  {activeFragrance.name}
                </h3>
                <p className="font-serif text-sm text-[#C5A059] italic">
                  &ldquo;{activeFragrance.tagline}&rdquo;
                </p>
              </div>

              <div className="text-xs text-[#D8D0C5]/90 font-sans leading-relaxed border-l-2 border-[#C5A059] pl-3 py-1">
                <p>{activeFragrance.story}</p>
              </div>

              {/* Scent Chord Grid */}
              <div className="pt-2 border-t border-[#C5A059]/20 flex flex-wrap gap-4 text-xs font-sans">
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-[#8E857C] block mb-0.5">
                    Signature Chord
                  </span>
                  <p className="text-[#F5F0E8] font-medium">{activeFragrance.keyNotes.join(' • ')}</p>
                </div>
              </div>

              {/* Action */}
              <div className="pt-2 flex items-center gap-4">
                <Link
                  href={`/fragrances/${activeFragrance.slug}`}
                  className="px-5 py-2.5 bg-gradient-to-r from-[#DFBA73] via-[#C5A059] to-[#A3803C] text-[#0D0B0A] hover:opacity-95 text-[10px] uppercase tracking-[0.2em] font-sans font-bold transition-colors inline-flex items-center gap-1.5 shadow-md"
                >
                  <span>Experience Flacon (₹999)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-[11px] text-[#8E857C] font-sans">
                  Chapter {activeFragrance.number} of 10
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

import React from 'react';
import Link from 'next/link';
import { Crown } from 'lucide-react';

export default function BrandManifesto() {
  return (
    <section className="py-20 sm:py-24 bg-[#110E0D] text-[#F5F0E8] border-b border-[#C5A059]/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        <div className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.35em] text-[#C5A059] font-sans font-semibold">
          <Crown className="w-3.5 h-3.5 text-[#C5A059]" />
          <span>The Noiré Manifesto</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl text-[#F5F0E8] tracking-tight leading-[1.12]">
          Made for the moments <br />
          <span className="italic text-[#C5A059]">that made you.</span>
        </h2>

        <p className="text-xs sm:text-sm text-[#D8D0C5]/90 font-sans font-light leading-relaxed max-w-xl mx-auto">
          The Noiré was founded on one unshakeable conviction: fragrance is an intimate olfactory talisman—a way to carry the memories and the indelible chapters that belong only to you.
        </p>

        {/* 3 Regal Pillars */}
        <div className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-5 text-left border-t border-[#C5A059]/20 mt-8">
          <div className="p-4 bg-[#181413] border border-[#C5A059]/30 space-y-1.5">
            <span className="text-[9px] uppercase tracking-widest text-[#C5A059] font-sans font-bold">
              01 • Story First
            </span>
            <h4 className="font-serif text-base text-[#F5F0E8]">Narrative Olfaction</h4>
            <p className="text-[11px] text-[#8E857C] font-sans leading-relaxed">
              Every blend is an emotional chapter formulated around human memories.
            </p>
          </div>

          <div className="p-4 bg-[#181413] border border-[#C5A059]/30 space-y-1.5">
            <span className="text-[9px] uppercase tracking-widest text-[#C5A059] font-sans font-bold">
              02 • Pure Gender-Neutral
            </span>
            <h4 className="font-serif text-base text-[#F5F0E8]">Fluid Harmonies</h4>
            <p className="text-[11px] text-[#8E857C] font-sans leading-relaxed">
              Memory knows no gender. Woods, resins, and spices composed with fluidity.
            </p>
          </div>

          <div className="p-4 bg-[#181413] border border-[#C5A059]/30 space-y-1.5">
            <span className="text-[9px] uppercase tracking-widest text-[#C5A059] font-sans font-bold">
              03 • Deliberate Craft
            </span>
            <h4 className="font-serif text-base text-[#F5F0E8]">Indian Batch Blending</h4>
            <p className="text-[11px] text-[#8E857C] font-sans leading-relaxed">
              Macerated and blended with precision in India in rich Eau de Parfum concentrations.
            </p>
          </div>
        </div>

        <div className="pt-4">
          <Link
            href="/philosophy"
            className="inline-block px-7 py-3 border border-[#C5A059]/50 text-[#C5A059] hover:bg-[#C5A059] hover:text-[#0D0B0A] text-[10px] uppercase tracking-[0.25em] font-sans font-semibold transition-all"
          >
            Explore Maison Story
          </Link>
        </div>

      </div>
    </section>
  );
}

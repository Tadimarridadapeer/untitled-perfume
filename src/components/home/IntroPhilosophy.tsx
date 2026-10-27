import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Crown } from 'lucide-react';

export default function IntroPhilosophy() {
  return (
    <section id="philosophy" className="py-20 sm:py-28 bg-[#110E0D] text-[#F5F0E8] border-b border-[#C5A059]/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Atmospheric Photography Canvas */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] w-full max-w-sm mx-auto bg-[#181413] border border-[#C5A059]/40 p-3 shadow-2xl">
              <div className="absolute inset-2 border border-[#C5A059]/20 pointer-events-none" />
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000&auto=format&fit=crop"
                  alt="Atmospheric warm window light and calm interior"
                  fill
                  className="object-cover filter contrast-[1.05]"
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-[#42121E] text-[#F5F0E8] p-3 max-w-[190px] border border-[#C5A059]/50 shadow-xl">
                <span className="text-[8px] uppercase tracking-[0.3em] text-[#C5A059] block font-sans">
                  Maison Philosophy
                </span>
                <p className="font-serif text-xs italic mt-0.5 text-[#F5F0E8]">
                  &ldquo;Memory is rarely a photograph. It is a feeling.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Narrative Column - Streamlined, Royal & Less Cluttered */}
          <div className="lg:col-span-7 space-y-5 lg:pl-4 order-1 lg:order-2">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.35em] text-[#C5A059] font-sans font-medium">
                <Crown className="w-3 h-3 text-[#C5A059]" />
                <span>Maison Philosophy</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-5xl text-[#F5F0E8] font-normal tracking-tight leading-[1.14]">
                We remember more <br />
                <span className="italic text-[#C5A059]">than we realise.</span>
              </h2>
            </div>

            <div className="space-y-3 font-sans text-xs sm:text-sm text-[#D8D0C5]/90 leading-relaxed font-light max-w-lg">
              <p className="font-serif text-base sm:text-lg text-[#F5F0E8] italic">
                A room filled with morning light. A voice we still recognise. A journey with no destination.
              </p>
              <p>
                Memory is rarely a photograph. Sometimes, it is a feeling that returns without warning. At <strong className="font-medium text-[#C5A059]">The Noiré</strong>, we create fragrances around those moments—so the intangible can become something you carry.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/philosophy"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-sans font-semibold text-[#C5A059] hover:text-[#F5F0E8] transition-colors group"
              >
                <span>Read The Full Maison Story</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

import React from 'react';
import Image from 'next/image';

export default function EditorialInterlude() {
  return (
    <section className="relative py-20 sm:py-28 bg-[#0D0B0A] text-[#F5F0E8] overflow-hidden border-b border-[#C5A059]/30">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(66,18,30,0.4)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-5 max-w-lg">
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#C5A059] font-sans font-medium">
              Editorial Chapter
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl text-[#F5F0E8] font-normal tracking-tight leading-[1.12]">
              Not every memory <br />
              <span className="italic text-[#C5A059]">asks to be remembered.</span>
            </h2>

            <p className="font-serif text-base sm:text-lg text-[#D8D0C5] italic border-l-2 border-[#C5A059] pl-4 py-1 leading-relaxed">
              &ldquo;A faint trace of warm rain on old sandstone. Scent does not consult our schedules; it merely opens a forgotten door.&rdquo;
            </p>

            <p className="text-xs sm:text-sm text-[#8E857C] font-sans font-light leading-relaxed">
              At The Noiré, we formulate scents to let you look inward—to carry your quietest chapters with elegance.
            </p>
          </div>

          {/* Photographic Spread */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full max-w-sm mx-auto border border-[#C5A059]/40 bg-[#161211] p-3 shadow-2xl">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1000&auto=format&fit=crop"
                  alt="A handwritten letter and quiet evening light"
                  fill
                  className="object-cover filter contrast-[1.05]"
                  sizes="(max-width: 1024px) 100vw, 380px"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

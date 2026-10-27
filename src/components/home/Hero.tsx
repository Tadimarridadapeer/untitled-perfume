'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-white text-[#111111] overflow-hidden h-[calc(100svh-74px)] max-h-[calc(100svh-74px)] lg:h-[calc(100vh-85px)] lg:max-h-[calc(100vh-85px)] flex items-center border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full h-full">

        {/* ---------------------------------------------------- */}
        {/* MOBILE VIEW (< lg): Single Shot Fit-To-Screen Viewport */}
        {/* ---------------------------------------------------- */}
        <div className="flex flex-col justify-between h-full lg:hidden py-2 sm:py-3">
          
          {/* 1. Header & Message */}
          <div className="shrink-0 space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-rose-50 border border-rose-200 text-[10px] tracking-wider uppercase text-[#6B1226] font-bold rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6B1226]" />
              <span>Handcrafted Unisex Perfumes · India</span>
            </div>

            <h1 className="font-serif text-2xl xs:text-[1.65rem] sm:text-3xl leading-[1.08] text-black font-normal tracking-tight">
              Some moments <br />
              <span className="italic text-[#6B1226]">never leave.</span>
            </h1>

            <p className="text-[11px] sm:text-xs text-gray-600 line-clamp-2 leading-relaxed">
              Ten long-lasting unisex perfumes handcrafted in India with real Mysore sandalwood, Kannauj rose & natural sugarcane alcohol.
            </p>
          </div>

          {/* 2. Bottle Showcase: Scaled to fit available vertical space */}
          <div className="flex-1 min-h-0 flex items-center justify-center my-1 sm:my-2">
            <div className="relative h-full max-h-[220px] xs:max-h-[250px] sm:max-h-[280px] aspect-[4/5] bg-gray-50 border border-gray-200 p-2 shadow-sm rounded-xl overflow-hidden group">
              <div className="relative w-full h-full overflow-hidden rounded-lg bg-white">
                <Image
                  src="/images/the-noire-bottle-hero.jpg"
                  alt="The Noiré Signature Perfume Bottle India"
                  fill
                  priority
                  className="object-cover object-center filter contrast-[1.03]"
                  sizes="250px"
                />

                {/* Compact Floating Label Card */}
                <div className="absolute bottom-1.5 left-1.5 right-1.5 px-2 py-1 bg-white/95 backdrop-blur-md border border-gray-200 rounded text-black flex items-center justify-between shadow-xs">
                  <div>
                    <span className="text-[8px] uppercase tracking-wider text-[#6B1226] font-bold block leading-none">
                      50 ml Perfume
                    </span>
                    <span className="font-serif text-[11px] font-semibold text-black leading-tight">
                      The Noiré Signature
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-[#6B1226] font-sans">₹999</span>
                    <span className="text-[8px] text-gray-500 block uppercase font-medium leading-none">Free 2ml Sample</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Actions & Key Facts */}
          <div className="shrink-0 space-y-2">
            <div className="grid grid-cols-2 gap-2 w-full">
              <Link
                href="#signature-collection"
                className="py-2.5 px-2 bg-[#6B1226] hover:bg-[#520D1D] text-white font-semibold text-[11px] uppercase tracking-wider rounded transition-all text-center flex items-center justify-center gap-1 shadow-sm"
              >
                <span className="truncate">Shop 10 (₹999)</span>
                <ArrowRight className="w-3.5 h-3.5 shrink-0" />
              </Link>
              <Link
                href="#curate-box"
                className="py-2.5 px-2 bg-white border border-black hover:bg-black hover:text-white text-black font-semibold text-[11px] uppercase tracking-wider rounded transition-all text-center flex items-center justify-center"
              >
                <span className="truncate">Custom Box (Save ₹300)</span>
              </Link>
            </div>

            <div className="pt-1.5 border-t border-gray-200 flex items-center justify-between text-[10px] text-gray-600 font-sans px-1">
              <div>
                <span className="font-bold text-black font-sans">₹999</span>
                <span className="text-gray-500 ml-1">Taxes Incl.</span>
              </div>
              <div className="w-[1px] h-3 bg-gray-300" />
              <div>
                <span className="font-bold text-black font-sans">12+ Hours</span>
                <span className="text-gray-500 ml-1">Heat Tested</span>
              </div>
              <div className="w-[1px] h-3 bg-gray-300" />
              <div>
                <span className="font-bold text-emerald-700 font-sans">Free 2ml</span>
                <span className="text-gray-500 ml-1">Sample Box</span>
              </div>
            </div>
          </div>

        </div>

        {/* ---------------------------------------------------- */}
        {/* DESKTOP VIEW (lg+): Full 2-Column Luxury Composition */}
        {/* ---------------------------------------------------- */}
        <div className="hidden lg:grid grid-cols-12 gap-10 xl:gap-14 items-center h-full">
          
          {/* Left Column */}
          <div className="col-span-7 space-y-3.5 xl:space-y-4 max-w-2xl">
            {/* Top Subtitle Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-0.5 bg-rose-50 border border-rose-200 text-[11px] tracking-wider uppercase text-[#6B1226] font-bold rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6B1226]" />
              <span>Handcrafted Unisex Perfumes · Made in India</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-1.5">
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] leading-[1.08] text-black font-normal tracking-tight">
                Some moments <br />
                <span className="italic text-[#6B1226]">never leave.</span>
              </h1>
              <p className="text-xs sm:text-sm lg:text-[15px] text-gray-700 font-sans font-normal leading-relaxed max-w-xl">
                A great perfume brings back the people, places, and memories you treasure most. We make ten long-lasting unisex perfumes in India using real Mysore sandalwood, fresh Kannauj rose petals, and natural sugarcane alcohol.
              </p>
            </div>

            {/* Action Buttons: Wine Red & Black */}
            <div className="pt-1 flex flex-row items-center gap-3">
              <Link
                href="#signature-collection"
                className="px-6 sm:px-7 py-3 bg-[#6B1226] hover:bg-[#520D1D] text-white font-semibold text-xs uppercase tracking-wider rounded transition-all duration-200 text-center flex items-center justify-center gap-2 shadow-sm group"
              >
                <span>Shop All 10 Perfumes (₹999)</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#curate-box"
                className="px-6 sm:px-7 py-3 bg-white border-2 border-black hover:bg-black hover:text-white text-black font-semibold text-xs uppercase tracking-wider rounded transition-all text-center"
              >
                Build a Custom Box (Save ₹300)
              </Link>
            </div>

            {/* 3 Quick Facts in One Clean Horizontal Row */}
            <div className="pt-3 border-t border-gray-200 flex items-center gap-6 text-xs text-gray-600 font-sans">
              <div>
                <span className="block text-lg sm:text-xl text-black font-bold font-sans">
                  ₹999
                </span>
                <span className="text-[10px] uppercase tracking-wider text-[#6B1226] font-bold">50 ml (All Taxes Incl.)</span>
              </div>
              <div className="w-[1px] h-7 bg-gray-300" />
              <div>
                <span className="block text-lg sm:text-xl text-black font-bold font-sans">
                  12+ Hours
                </span>
                <span className="text-[10px] uppercase tracking-wider text-[#6B1226] font-bold">Long-Lasting in Indian Heat</span>
              </div>
              <div className="w-[1px] h-7 bg-gray-300" />
              <div>
                <span className="block text-lg sm:text-xl text-black font-bold font-sans">
                  Free Sample
                </span>
                <span className="text-[10px] uppercase tracking-wider text-[#6B1226] font-bold">Try 2ml First on Skin</span>
              </div>
            </div>
          </div>

          {/* Right Column: Bottle Photo Showcase */}
          <div className="col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-[310px] xl:max-w-[350px] aspect-[4/5] bg-gray-50 border border-gray-200 p-3 shadow-lg rounded-xl overflow-hidden group">
              <div className="relative w-full h-full overflow-hidden rounded-lg bg-white">
                <Image
                  src="/images/the-noire-bottle-hero.jpg"
                  alt="The Noiré Signature Perfume Bottle India"
                  fill
                  priority
                  className="object-cover object-center filter contrast-[1.03] transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 350px"
                />

                {/* Floating Label Card */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 p-2.5 sm:p-3 bg-white/95 backdrop-blur-md border border-gray-200 rounded-lg text-black flex items-center justify-between shadow-sm">
                  <div>
                    <span className="text-[9px] uppercase tracking-wider text-[#6B1226] font-bold block">
                      50 ml Perfume Flacon
                    </span>
                    <span className="font-serif text-sm sm:text-base font-semibold text-black">
                      The Noiré Signature
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm sm:text-base font-bold text-[#6B1226] font-sans">₹999</span>
                    <span className="text-[9px] text-gray-500 block uppercase font-medium">Free Delivery ₹1,499+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

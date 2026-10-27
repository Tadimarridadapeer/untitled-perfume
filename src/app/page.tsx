import React from 'react';
import Hero from '@/components/home/Hero';
import FeatureHighlights from '@/components/home/FeatureHighlights';
import SignatureCollection from '@/components/home/SignatureCollection';
import BuildYourBox from '@/components/home/BuildYourBox';
import MaisonHub from '@/components/home/MaisonHub';

export default function HomePage() {
  return (
    <main className="w-full bg-white min-h-screen text-[#111111]">
      {/* 1. Hero Section on Clean White */}
      <Hero />

      {/* 2. Why Choose The Noiré (4 Clear Pillars) */}
      <FeatureHighlights />

      {/* 3. The 10 Perfumes Grid (All 10 Visible at Once, No Side-Scroll!) */}
      <SignatureCollection />

      {/* 4. Build Your Own Custom Gift Box (3 or 4 Perfumes) */}
      <BuildYourBox />

      {/* 5. 10-Second Scent Quiz & Ingredients */}
      <MaisonHub />
    </main>
  );
}

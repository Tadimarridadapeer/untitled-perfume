import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { FRAGRANCES } from '@/data/fragrances';
import ProductPurchaseSection from '@/components/pdp/ProductPurchaseSection';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return FRAGRANCES.map((fragrance) => ({
    slug: fragrance.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const fragrance = FRAGRANCES.find((f) => f.slug === slug);

  if (!fragrance) {
    return {
      title: 'Fragrance Not Found — The Noiré',
    };
  }

  return {
    title: `${fragrance.chapter}: ${fragrance.name} — The Noiré India`,
    description: `${fragrance.summary} Notes of ${fragrance.keyNotes.join(', ')}. Artisanal luxury fragrance by The Noiré.`,
    openGraph: {
      title: `${fragrance.chapter}: ${fragrance.name} | The Noiré`,
      description: fragrance.summary,
      images: [
        {
          url: fragrance.bottleImage,
          width: 800,
          height: 1000,
          alt: `${fragrance.name} Flacon by The Noiré`,
        },
      ],
    },
  };
}

export default async function FragranceDetailPage({ params }: Props) {
  const { slug } = await params;
  const fragrance = FRAGRANCES.find((f) => f.slug === slug);

  if (!fragrance) {
    notFound();
  }

  const currentIndex = FRAGRANCES.findIndex((f) => f.slug === slug);
  const prevFragrance = FRAGRANCES[(currentIndex - 1 + FRAGRANCES.length) % FRAGRANCES.length];
  const nextFragrance = FRAGRANCES[(currentIndex + 1) % FRAGRANCES.length];

  return (
    <div className="bg-white text-[#111111] min-h-screen">
      {/* Top Breadcrumb */}
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between text-xs text-gray-600 font-sans">
          <Link
            href="/#signature-collection"
            className="inline-flex items-center gap-1.5 hover:text-[#6B1226] transition-colors font-semibold"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to All 10 Perfumes</span>
          </Link>
          <div className="hidden sm:flex items-center gap-2 text-xs">
            <span>The Noiré India</span>
            <span>/</span>
            <span className="text-[#6B1226] font-bold">{fragrance.chapter}</span>
          </div>
        </div>
      </div>

      {/* Main PDP Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Visual */}
          <div className="lg:col-span-6 space-y-5">
            <div className="relative aspect-[4/5] bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-md overflow-hidden flex items-center justify-center">
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                <span className="text-xs uppercase tracking-wider font-bold text-white bg-[#6B1226] px-3 py-1 rounded-full shadow-sm">
                  {fragrance.chapter}
                </span>
                <span className="text-xs tracking-wider uppercase text-gray-700 bg-white border border-gray-200 px-2.5 py-1 rounded-full shadow-sm font-semibold">
                  {fragrance.gender}
                </span>
              </div>

              <div className="relative w-full h-full">
                <Image
                  src={fragrance.bottleImage}
                  alt={`${fragrance.name} bottle`}
                  fill
                  priority
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 520px"
                />
              </div>

              <div className="absolute bottom-4 right-4 bg-white/95 text-[#6B1226] text-xs uppercase tracking-wider px-3 py-1 rounded-lg border border-gray-200 shadow-sm font-bold">
                Mood: {fragrance.mood}
              </div>
            </div>

            {/* Atmosphere Gallery Spread */}
            <div className="grid grid-cols-2 gap-3">
              {fragrance.atmosphereImages.map((imgUrl, i) => (
                <div
                  key={i}
                  className="relative aspect-[4/3] bg-gray-100 border border-gray-200 rounded-xl overflow-hidden group"
                >
                  <Image
                    src={imgUrl}
                    alt={`${fragrance.name} visual ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="260px"
                  />
                  <span className="absolute bottom-2 left-2 text-[10px] uppercase tracking-wider text-black bg-white/90 px-2 py-0.5 rounded font-medium shadow-sm">
                    Atmosphere {i + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Narrative Story & Purchase */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Header Titles */}
            <div className="space-y-2 border-b border-gray-200 pb-5">
              <div className="flex items-center gap-2 text-xs font-sans">
                <span className="uppercase tracking-wider text-[#6B1226] font-bold">
                  {fragrance.chapter}
                </span>
                <span className="text-gray-400">•</span>
                <span className="italic text-gray-600 font-medium">
                  {fragrance.mood}
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl text-black font-semibold tracking-tight">
                {fragrance.name}
              </h1>

              <p className="font-serif italic text-lg sm:text-xl text-[#6B1226]">
                &ldquo;{fragrance.tagline}&rdquo;
              </p>
            </div>

            {/* The Story Chapter */}
            <div className="p-5 bg-gray-50 border-l-4 border-[#6B1226] border border-gray-200 rounded-xl text-sm text-gray-700 leading-relaxed font-sans">
              <p>{fragrance.story}</p>
            </div>

            {/* Scent Notes Pyramid */}
            <div className="space-y-3 pt-1">
              <span className="text-xs uppercase tracking-wider text-[#6B1226] font-bold block">
                Scent Notes Composition
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <div className="p-3 bg-gray-50 border border-gray-200 rounded-xl">
                  <span className="text-[10px] uppercase tracking-wider text-[#6B1226] font-bold block mb-1">
                    Top Notes
                  </span>
                  <ul className="text-xs text-gray-800 space-y-0.5 font-medium">
                    {fragrance.pyramid.top.map((note) => (
                      <li key={note}>· {note}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 bg-gray-50 border border-gray-200 rounded-xl">
                  <span className="text-[10px] uppercase tracking-wider text-[#6B1226] font-bold block mb-1">
                    Heart Notes
                  </span>
                  <ul className="text-xs text-gray-800 space-y-0.5 font-medium">
                    {fragrance.pyramid.heart.map((note) => (
                      <li key={note}>· {note}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 bg-gray-50 border border-gray-200 rounded-xl">
                  <span className="text-[10px] uppercase tracking-wider text-[#6B1226] font-bold block mb-1">
                    Base Notes
                  </span>
                  <ul className="text-xs text-gray-800 space-y-0.5 font-medium">
                    {fragrance.pyramid.base.map((note) => (
                      <li key={note}>· {note}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Interactive Purchase & Delivery Section */}
            <ProductPurchaseSection fragrance={fragrance} />

            {/* Quality Specifications */}
            <div className="pt-4 border-t border-gray-200 space-y-2 text-xs font-sans">
              <details className="border border-gray-200 bg-gray-50 rounded-xl p-3 cursor-pointer">
                <summary className="uppercase tracking-wider text-xs text-[#6B1226] font-bold flex justify-between items-center select-none">
                  <span>Ingredients & Formulation Standards</span>
                  <span className="text-gray-500">▼</span>
                </summary>
                <div className="pt-2 text-gray-600 text-xs space-y-1.5 leading-relaxed">
                  <p>
                    Alcohol Denat. (Organic Indian Sugarcane Spirit), Parfum (Compound conforming to IFRA guidelines), Aqua/Water/Eau.
                  </p>
                  <p>
                    Cruelty-free, vegan, compounded without synthetic phthalates in small batches in India.
                  </p>
                </div>
              </details>
            </div>

          </div>

        </div>

        {/* Previous / Next Navigation */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href={`/fragrances/${prevFragrance.slug}`}
              className="p-4 bg-gray-50 border border-gray-200 hover:border-[#6B1226] rounded-xl transition-colors group flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <ArrowLeft className="w-4 h-4 text-[#6B1226] group-hover:-translate-x-1 transition-transform" />
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#6B1226] font-bold">
                    Previous: {prevFragrance.chapter}
                  </span>
                  <h4 className="font-serif text-lg text-black group-hover:text-[#6B1226] transition-colors font-semibold">
                    {prevFragrance.name}
                  </h4>
                </div>
              </div>
            </Link>

            <Link
              href={`/fragrances/${nextFragrance.slug}`}
              className="p-4 bg-gray-50 border border-gray-200 hover:border-[#6B1226] rounded-xl transition-colors group flex items-center justify-between text-right"
            >
              <div className="w-full">
                <span className="text-[10px] uppercase tracking-wider text-[#6B1226] font-bold">
                  Next: {nextFragrance.chapter}
                </span>
                <h4 className="font-serif text-lg text-black group-hover:text-[#6B1226] transition-colors font-semibold">
                  {nextFragrance.name}
                </h4>
              </div>
              <ArrowRight className="w-4 h-4 text-[#6B1226] group-hover:translate-x-1 transition-transform ml-3 shrink-0" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

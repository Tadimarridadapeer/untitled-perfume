'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FRAGRANCES } from '@/data/fragrances';
import { useCart } from '@/context/CartContext';
import { ArrowRight, RotateCcw, ShoppingBag } from 'lucide-react';

const QUIZ_QUESTIONS = [
  {
    id: 1,
    title: 'What kind of scent feeling do you love most?',
    options: [
      { label: 'Fresh morning air with bright citrus and tea', slug: 'the-morning-we-met' },
      { label: 'Warm, comforting feeling of a cozy home', slug: 'somewhere-familiar' },
      { label: 'Soft, tender rose and smooth sandalwood', slug: 'words-we-kept' },
      { label: 'Clean, fresh breeze along an open coastal road', slug: 'where-we-disappeared' },
    ],
  },
  {
    id: 2,
    title: 'What atmosphere feels like your peaceful sanctuary?',
    options: [
      { label: 'Crisp morning air and clean white musk', slug: 'nothing-to-prove' },
      { label: 'Rich Mysore sandalwood after evening rain', slug: 'before-we-knew' },
      { label: 'Warm bourbon vanilla, sweet honey, and amber', slug: 'almost-forever' },
      { label: 'Quiet, peaceful calmness late at night', slug: 'after-everyone-left' },
    ],
  },
];

export default function MaisonHub() {
  const { addItem } = useCart();
  const [activeTab, setActiveTab] = useState<'finder' | 'philosophy' | 'archive'>('finder');

  const [quizStep, setQuizStep] = useState(0);
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);

  const [archiveIdx, setArchiveIdx] = useState(0);
  const currentArchive = FRAGRANCES[archiveIdx];

  const handleSelectQuizOption = (slug: string) => {
    if (quizStep + 1 < QUIZ_QUESTIONS.length) {
      setQuizStep(quizStep + 1);
    } else {
      setSelectedSlug(slug);
    }
  };

  const recommendedFragrance = FRAGRANCES.find((f) => f.slug === selectedSlug) || FRAGRANCES[0];

  return (
    <section id="scent-finder" className="py-10 sm:py-16 bg-gray-50 text-[#111111] border-b border-gray-200 relative font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hub Tab Switcher */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 bg-white border border-gray-200 rounded-full shadow-sm gap-1">
            <button
              onClick={() => setActiveTab('finder')}
              className={`px-5 py-2 text-xs uppercase tracking-wider rounded-full transition-all font-semibold ${
                activeTab === 'finder'
                  ? 'bg-[#6B1226] text-white shadow'
                  : 'text-gray-700 hover:text-black'
              }`}
            >
              Find Your Scent
            </button>

            <button
              onClick={() => setActiveTab('philosophy')}
              className={`px-5 py-2 text-xs uppercase tracking-wider rounded-full transition-all font-semibold ${
                activeTab === 'philosophy'
                  ? 'bg-[#6B1226] text-white shadow'
                  : 'text-gray-700 hover:text-black'
              }`}
            >
              Natural Ingredients
            </button>

            <button
              onClick={() => setActiveTab('archive')}
              className={`px-5 py-2 text-xs uppercase tracking-wider rounded-full transition-all font-semibold ${
                activeTab === 'archive'
                  ? 'bg-[#6B1226] text-white shadow'
                  : 'text-gray-700 hover:text-black'
              }`}
            >
              Browse All 10
            </button>
          </div>
        </div>

        {/* TAB 1: SCENT FINDER QUIZ */}
        {activeTab === 'finder' && (
          <div className="bg-white border border-gray-200 rounded-2xl p-7 sm:p-10 shadow-md transition-all">
            {!selectedSlug ? (
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                  <span className="text-xs uppercase tracking-wider text-[#6B1226] font-bold">
                    Question {quizStep + 1} of {QUIZ_QUESTIONS.length}
                  </span>
                  <span className="text-xs text-gray-500 italic">
                    Takes only 10 seconds
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-black font-normal">
                  {QUIZ_QUESTIONS[quizStep].title}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {QUIZ_QUESTIONS[quizStep].options.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelectQuizOption(opt.slug)}
                      className="text-left p-5 bg-gray-50 border border-gray-200 hover:border-[#6B1226] hover:bg-rose-50/40 rounded-xl transition-all group flex items-center justify-between shadow-sm"
                    >
                      <span className="font-serif text-base text-gray-800 group-hover:text-black font-medium">
                        {opt.label}
                      </span>
                      <ArrowRight className="w-4 h-4 text-[#6B1226] opacity-0 group-hover:opacity-100 transition-opacity ml-2 shrink-0" />
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-5 relative aspect-[4/5] bg-gray-50 border border-gray-200 rounded-xl p-3 overflow-hidden">
                  <Image
                    src={recommendedFragrance.bottleImage}
                    alt={recommendedFragrance.name}
                    fill
                    className="object-contain p-2"
                  />
                  <div className="absolute top-3 left-3 bg-[#6B1226] text-white text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded font-bold">
                    Your Best Match
                  </div>
                </div>

                <div className="md:col-span-7 space-y-4">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#6B1226] block mb-1 font-bold">
                      {recommendedFragrance.chapter} · {recommendedFragrance.mood}
                    </span>
                    <h3 className="font-serif text-3xl text-black font-normal">
                      {recommendedFragrance.name}
                    </h3>
                    <span className="font-serif text-xl text-[#6B1226] block mt-1 font-bold">
                      ₹999 (50 ml Bottle)
                    </span>
                  </div>

                  <p className="text-sm text-gray-700 font-serif italic leading-relaxed">
                    &ldquo;{recommendedFragrance.summary}&rdquo;
                  </p>

                  <div className="pt-2 text-xs text-gray-600">
                    <span className="text-[#6B1226] uppercase tracking-wider text-[11px] block mb-1 font-bold">
                      Key Scent Notes:
                    </span>
                    <span>{recommendedFragrance.keyNotes.join(' · ')}</span>
                  </div>

                  <div className="pt-3 flex flex-wrap gap-3">
                    <button
                      onClick={() => addItem(recommendedFragrance)}
                      className="px-6 py-3 bg-[#6B1226] hover:bg-[#520D1D] text-white text-xs uppercase tracking-wider transition-all font-semibold rounded-lg shadow-sm"
                    >
                      Add This Perfume to Bag (₹999)
                    </button>

                    <button
                      onClick={() => {
                        setSelectedSlug(null);
                        setQuizStep(0);
                      }}
                      className="px-4 py-3 bg-white border border-gray-300 text-gray-700 hover:text-black hover:border-black text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5 font-semibold rounded-lg"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Take Quiz Again</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: INGREDIENTS */}
        {activeTab === 'philosophy' && (
          <div className="bg-white border border-gray-200 rounded-2xl p-7 sm:p-10 shadow-md space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 bg-gray-50 border border-gray-200 rounded-xl space-y-2">
                <span className="text-xs uppercase tracking-wider text-[#6B1226] block font-bold">
                  Kannauj, Uttar Pradesh
                </span>
                <h4 className="font-serif text-lg text-black font-semibold">Real Rose Petals</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Natural Damask roses gathered early in the morning and gently steam-distilled for an authentic floral warmth.
                </p>
              </div>

              <div className="p-5 bg-gray-50 border border-gray-200 rounded-xl space-y-2">
                <span className="text-xs uppercase tracking-wider text-[#6B1226] block font-bold">
                  Mysore, Karnataka
                </span>
                <h4 className="font-serif text-lg text-black font-semibold">Aged Mysore Sandalwood</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Pure Indian sandalwood that gives a smooth, creamy, long-lasting base that stays on your clothes all day.
                </p>
              </div>

              <div className="p-5 bg-gray-50 border border-gray-200 rounded-xl space-y-2">
                <span className="text-xs uppercase tracking-wider text-[#6B1226] block font-bold">
                  Maharashtra
                </span>
                <h4 className="font-serif text-lg text-black font-semibold">Pure Sugarcane Alcohol</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Naturally fermented sugarcane spirit. Very gentle on sensitive skin, with zero harsh chemical denaturants.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
              <p className="text-gray-600">
                Compounded and bottled in India with high ethical standards.
              </p>
              <Link
                href="/philosophy"
                className="text-[#6B1226] font-bold hover:underline uppercase tracking-wider text-xs"
              >
                Read More About Our Story →
              </Link>
            </div>
          </div>
        )}

        {/* TAB 3: DIRECTORY */}
        {activeTab === 'archive' && (
          <div className="bg-white border border-gray-200 rounded-2xl p-7 sm:p-10 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5 relative aspect-[4/5] bg-gray-50 border border-gray-200 rounded-xl p-3 overflow-hidden">
                <Image
                  src={currentArchive.bottleImage}
                  alt={currentArchive.name}
                  fill
                  className="object-contain p-2"
                />
              </div>

              <div className="md:col-span-7 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {FRAGRANCES.map((f, idx) => (
                    <button
                      key={f.id}
                      onClick={() => setArchiveIdx(idx)}
                      className={`px-3 py-1 text-xs rounded transition-all border font-bold ${
                        archiveIdx === idx
                          ? 'bg-[#6B1226] text-white border-[#6B1226]'
                          : 'bg-white text-gray-700 border-gray-300 hover:border-black'
                      }`}
                    >
                      {String(f.number).padStart(2, '0')}
                    </button>
                  ))}
                </div>

                <div>
                  <span className="text-xs uppercase tracking-wider text-[#6B1226] block font-bold">
                    {currentArchive.chapter} · {currentArchive.mood}
                  </span>
                  <h3 className="font-serif text-2xl text-black font-semibold mt-1">
                    {currentArchive.name}
                  </h3>
                  <span className="font-serif text-lg text-[#6B1226] block mt-0.5 font-bold">
                    ₹999 · 50 ml Bottle
                  </span>
                </div>

                <p className="text-xs text-gray-600 font-serif italic leading-relaxed">
                  &ldquo;{currentArchive.story}&rdquo;
                </p>

                <div className="pt-2 flex items-center gap-3">
                  <Link
                    href={`/fragrances/${currentArchive.slug}`}
                    className="px-5 py-2.5 bg-black hover:bg-gray-800 text-white text-xs uppercase tracking-wider transition-all font-semibold rounded"
                  >
                    View Details
                  </Link>
                  <button
                    onClick={() => addItem(currentArchive)}
                    className="px-4 py-2.5 bg-[#6B1226] hover:bg-[#520D1D] text-white text-xs uppercase tracking-wider transition-all font-semibold rounded flex items-center gap-1.5"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>+ Add to Bag</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

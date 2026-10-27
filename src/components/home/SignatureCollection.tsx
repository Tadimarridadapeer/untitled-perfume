'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FRAGRANCES, Fragrance } from '@/data/fragrances';
import { useCart } from '@/context/CartContext';
import { Check, ShoppingBag } from 'lucide-react';

export default function SignatureCollection() {
  const { addItem } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [addedSlug, setAddedSlug] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'All 10 Perfumes' },
    { id: 'fresh', label: 'Fresh & Citrus' },
    { id: 'woody', label: 'Woody & Warm' },
    { id: 'floral', label: 'Floral & Soft' },
    { id: 'amber', label: 'Sweet & Spicy' },
  ];

  const filteredFragrances =
    selectedCategory === 'all'
      ? FRAGRANCES
      : FRAGRANCES.filter((f) => f.category === selectedCategory);

  const handleQuickAdd = (fragrance: Fragrance) => {
    addItem(fragrance);
    setAddedSlug(fragrance.slug);
    setTimeout(() => setAddedSlug(null), 1800);
  };

  return (
    <section id="signature-collection" className="pt-10 pb-8 sm:pt-14 sm:pb-10 bg-white text-[#111111] border-b border-gray-200 relative font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col gap-4 sm:gap-5 mb-8 sm:mb-10 border-b border-gray-200 pb-5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
            <div className="space-y-1.5">
              <span className="text-xs uppercase tracking-widest text-[#6B1226] block font-bold">
                The Complete Collection
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-black font-normal tracking-tight">
                Ten Perfumes. <span className="italic text-[#6B1226]">Ten Stories.</span>
              </h2>
            </div>
            <p className="text-sm text-gray-600 md:text-right">
              50 ml Eau de Parfum · <span className="font-sans font-bold text-black">₹999</span> each · Free 2ml sample included
            </p>
          </div>

          {/* Category Filter Pills (Guaranteed Single Horizontal Line) */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar flex-nowrap py-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs tracking-wider uppercase transition-all rounded-full font-semibold border whitespace-nowrap shrink-0 ${
                  selectedCategory === cat.id
                    ? 'bg-[#6B1226] text-white border-[#6B1226] shadow-sm'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-[#6B1226] hover:text-[#6B1226]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* ALL 10 PRODUCTS DISPLAYED TOGETHER IN A CLEAN GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-5">
          {filteredFragrances.map((fragrance) => {
            const isJustAdded = addedSlug === fragrance.slug;

            return (
              <div
                key={fragrance.id}
                className="bg-white border border-gray-200 hover:border-[#6B1226] rounded-xl p-3 sm:p-3.5 flex flex-col justify-between group transition-all duration-200 shadow-sm hover:shadow-md relative"
              >
                <div>
                  {/* Card Header: Chapter & Mood */}
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] uppercase tracking-wider text-[#6B1226] font-bold">
                      {fragrance.chapter}
                    </span>
                    <span className="text-[10px] text-gray-500 italic truncate max-w-[80px]">
                      {fragrance.mood}
                    </span>
                  </div>

                  {/* Bottle Photo */}
                  <div className="relative aspect-[4/5] bg-gray-50 rounded-lg border border-gray-100 p-2 overflow-hidden flex items-center justify-center group-hover:bg-rose-50/30 transition-colors">
                    <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-500">
                      <Image
                        src={fragrance.bottleImage}
                        alt={fragrance.name}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 50vw, 220px"
                      />
                    </div>
                  </div>

                  {/* Perfume Name, Price & Notes */}
                  <div className="pt-2.5 space-y-1">
                    <div className="flex justify-between items-baseline gap-1">
                      <h3 className="font-serif text-base sm:text-lg text-black group-hover:text-[#6B1226] transition-colors truncate font-semibold">
                        <Link href={`/fragrances/${fragrance.slug}`}>
                          {fragrance.name}
                        </Link>
                      </h3>
                    </div>

                    <div className="font-sans text-sm font-bold text-[#6B1226]">
                      ₹999
                    </div>

                    <p className="text-[11px] text-gray-500 line-clamp-1 italic font-serif">
                      &ldquo;{fragrance.tagline}&rdquo;
                    </p>

                    {/* Scent Notes Badge */}
                    <div className="pt-1 flex flex-wrap gap-1">
                      {fragrance.keyNotes.slice(0, 2).map((note) => (
                        <span
                          key={note}
                          className="text-[9px] px-1.5 py-0.5 rounded bg-gray-100 text-gray-700 font-medium truncate max-w-[100px]"
                        >
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons (Wine Red & White) */}
                <div className="pt-2.5 mt-2.5 border-t border-gray-100 flex flex-col sm:flex-row items-center gap-1.5">
                  <Link
                    href={`/fragrances/${fragrance.slug}`}
                    className="w-full sm:flex-1 py-1.5 text-center bg-white border border-gray-300 text-gray-800 hover:border-[#6B1226] hover:text-[#6B1226] text-[10px] uppercase tracking-wider font-semibold rounded transition-colors"
                  >
                    Details
                  </Link>

                  <button
                    onClick={() => handleQuickAdd(fragrance)}
                    disabled={isJustAdded}
                    aria-label={`Add ${fragrance.name} to bag`}
                    className={`w-full sm:w-auto py-1.5 px-2.5 text-[10px] uppercase tracking-wider font-semibold rounded transition-all flex items-center justify-center gap-1 shrink-0 ${
                      isJustAdded
                        ? 'bg-emerald-600 text-white'
                        : 'bg-[#6B1226] hover:bg-[#520D1D] text-white shadow-sm'
                    }`}
                  >
                    {isJustAdded ? (
                      <>
                        <Check className="w-3 h-3" />
                        <span>Added</span>
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-3 h-3" />
                        <span>+ Add</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Guarantee Bar */}
        <div className="mt-6 p-3 bg-gray-50 border border-gray-200 rounded-xl flex flex-col sm:flex-row items-center justify-between text-xs text-gray-700 gap-3">
          <div className="flex items-center gap-2 font-medium">
            <span className="text-emerald-700 font-bold">✓ In Stock for Pan-India Dispatch</span>
            <span>•</span>
            <span>Free 2ml Sample Included in Every Box</span>
          </div>
          <div className="text-xs text-[#6B1226] font-bold">
            Free Express Shipping on Orders Above ₹1,499
          </div>
        </div>

      </div>
    </section>
  );
}

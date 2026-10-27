'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FRAGRANCES, Fragrance } from '@/data/fragrances';
import { useCart } from '@/context/CartContext';
import { Plus, Check, ArrowRight, Package } from 'lucide-react';

export default function BuildYourBox() {
  const { addBundle } = useCart();
  const [boxSize, setBoxSize] = useState<3 | 4>(3);
  const [selectedFragrances, setSelectedFragrances] = useState<Fragrance[]>([
    FRAGRANCES[0], // Pre-select Chapter 01
    FRAGRANCES[1], // Pre-select Chapter 02
  ]);
  const [isAdded, setIsAdded] = useState(false);

  const price = boxSize === 3 ? 1499 : 1899;
  const originalPrice = boxSize === 3 ? 1799 : 2399;

  const handleSelectBoxSize = (size: 3 | 4) => {
    setBoxSize(size);
    if (size === 3 && selectedFragrances.length > 3) {
      setSelectedFragrances((prev) => prev.slice(0, 3));
    }
  };

  const handleToggleFragrance = (fragrance: Fragrance) => {
    const isSelected = selectedFragrances.some((f) => f.id === fragrance.id);
    if (isSelected) {
      setSelectedFragrances((prev) => prev.filter((f) => f.id !== fragrance.id));
    } else {
      if (selectedFragrances.length < boxSize) {
        setSelectedFragrances((prev) => [...prev, fragrance]);
      }
    }
  };

  const handleRemoveSlot = (index: number) => {
    setSelectedFragrances((prev) => prev.filter((_, idx) => idx !== index));
  };

  const handleAddBoxToCart = () => {
    if (selectedFragrances.length < boxSize) return;

    const names = selectedFragrances.map((f) => f.name).join(', ');
    addBundle({
      id: `custom-box-${boxSize}-${selectedFragrances.map((f) => f.slug).join('-')}`,
      name: `Custom Gift Box (${boxSize} Perfumes)`,
      subtitle: `Includes: ${names}`,
      price,
      image: selectedFragrances[0]?.bottleImage || '/images/the-noire-bottle-hero.jpg',
      quantity: 1,
    });

    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const isBoxFull = selectedFragrances.length === boxSize;

  return (
    <section id="curate-box" className="pt-8 pb-12 sm:pt-10 sm:pb-16 bg-white text-[#111111] border-b border-gray-200 relative font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 space-y-1.5">
          <span className="text-xs uppercase tracking-widest text-[#6B1226] block font-bold">
            Custom Perfume Bundle
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-black font-normal tracking-tight">
            Build Your Own Perfume Box
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Pick your favorite 3 or 4 perfumes. We pack them together in a presentation box with free matching tester samples.
          </p>

          {/* Box Size Toggle Pills */}
          <div className="flex items-center justify-center gap-4 pt-4">
            <button
              onClick={() => handleSelectBoxSize(3)}
              className={`px-5 py-2.5 text-xs uppercase tracking-wider rounded-full transition-all border font-bold ${
                boxSize === 3
                  ? 'bg-[#6B1226] text-white border-[#6B1226] shadow'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-[#6B1226] hover:text-[#6B1226]'
              }`}
            >
              <span>3 Perfumes · ₹1,499 (Save ₹300)</span>
            </button>
            <button
              onClick={() => handleSelectBoxSize(4)}
              className={`px-5 py-2.5 text-xs uppercase tracking-wider rounded-full transition-all border font-bold ${
                boxSize === 4
                  ? 'bg-[#6B1226] text-white border-[#6B1226] shadow'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-[#6B1226] hover:text-[#6B1226]'
              }`}
            >
              <span>4 Perfumes · ₹1,899 (Save ₹500)</span>
            </button>
          </div>
        </div>

        {/* Builder Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Active Box Preview on Left */}
          <div className="lg:col-span-5 bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm sticky top-24">
            <div className="flex items-center justify-between pb-4 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <Package className="w-5 h-5 text-[#6B1226]" />
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#6B1226] block font-bold">
                    Your Selection
                  </span>
                  <h3 className="font-serif text-xl text-black font-semibold">
                    {selectedFragrances.length} of {boxSize} Added
                  </h3>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs text-gray-400 line-through mr-1.5 font-serif">₹{originalPrice}</span>
                <span className="font-serif text-2xl text-[#6B1226] font-bold">₹{price}</span>
              </div>
            </div>

            {/* Visual Box Slots */}
            <div className={`grid gap-3 my-6 ${boxSize === 3 ? 'grid-cols-3' : 'grid-cols-2 sm:grid-cols-4'}`}>
              {Array.from({ length: boxSize }).map((_, idx) => {
                const item = selectedFragrances[idx];
                return (
                  <div
                    key={idx}
                    className={`aspect-[3/4] rounded-xl border p-2 flex flex-col items-center justify-between transition-all relative ${
                      item
                        ? 'bg-white border-[#6B1226] shadow-sm'
                        : 'bg-white border-2 border-dashed border-gray-300 text-gray-400'
                    }`}
                  >
                    {item ? (
                      <>
                        <button
                          onClick={() => handleRemoveSlot(idx)}
                          className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#6B1226] text-white flex items-center justify-center text-xs shadow z-10"
                          title="Remove perfume"
                        >
                          ×
                        </button>
                        <div className="relative w-full flex-1">
                          <Image
                            src={item.bottleImage}
                            alt={item.name}
                            fill
                            className="object-contain p-1"
                          />
                        </div>
                        <span className="text-[10px] text-black text-center truncate w-full block mt-1 tracking-wider uppercase font-bold">
                          {item.name}
                        </span>
                      </>
                    ) : (
                      <div className="h-full flex flex-col items-center justify-center text-center p-2">
                        <Plus className="w-5 h-5 text-gray-400 mb-1" />
                        <span className="text-[10px] uppercase tracking-wider text-gray-400 font-medium">
                          Slot {idx + 1}
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Add to Bag Action */}
            <div className="pt-2">
              <button
                onClick={handleAddBoxToCart}
                disabled={!isBoxFull || isAdded}
                className={`w-full py-4 px-4 text-xs uppercase tracking-wider font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow ${
                  isBoxFull
                    ? isAdded
                      ? 'bg-emerald-600 text-white'
                      : 'bg-[#6B1226] hover:bg-[#520D1D] text-white'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                {isAdded ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Added Custom Box to Bag!</span>
                  </>
                ) : isBoxFull ? (
                  <>
                    <span>Add Box to Bag (₹{price})</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                ) : (
                  <span>Select {boxSize - selectedFragrances.length} More Perfume{boxSize - selectedFragrances.length > 1 ? 's' : ''}</span>
                )}
              </button>

              <div className="flex items-center justify-between text-xs text-gray-600 mt-4 pt-3 border-t border-gray-200">
                <span>Free Gift Presentation Box</span>
                <span className="text-[#6B1226] font-bold">Free Pan-India Delivery</span>
              </div>
            </div>
          </div>

          {/* Perfume Picker Cards on Right */}
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs uppercase tracking-wider text-[#6B1226] font-bold">
                Tap Any Perfume Below to Add or Remove
              </span>
              <span className="text-xs text-gray-500 font-medium">
                {selectedFragrances.length} of {boxSize} selected
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {FRAGRANCES.map((fragrance) => {
                const isSelected = selectedFragrances.some((f) => f.id === fragrance.id);
                const disabled = !isSelected && selectedFragrances.length >= boxSize;

                return (
                  <div
                    key={fragrance.id}
                    onClick={() => !disabled && handleToggleFragrance(fragrance)}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center gap-3.5 relative ${
                      isSelected
                        ? 'bg-rose-50/50 border-[#6B1226] shadow-sm'
                        : disabled
                        ? 'bg-gray-50 border-gray-200 opacity-40 cursor-not-allowed'
                        : 'bg-white border-gray-200 hover:border-[#6B1226]'
                    }`}
                  >
                    <div className="w-12 h-16 relative bg-gray-50 rounded-lg border border-gray-200 shrink-0 overflow-hidden">
                      <Image
                        src={fragrance.bottleImage}
                        alt={fragrance.name}
                        fill
                        className="object-contain p-1"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] uppercase tracking-wider text-[#6B1226] font-bold">
                          {fragrance.chapter}
                        </span>
                        {isSelected && (
                          <span className="bg-[#6B1226] text-white text-[10px] px-1.5 py-0.5 rounded font-bold">
                            ✓ Added
                          </span>
                        )}
                      </div>
                      <h4 className="font-serif text-base text-black font-semibold truncate">
                        {fragrance.name}
                      </h4>
                      <p className="text-xs text-gray-500 truncate">
                        {fragrance.keyNotes.join(' · ')}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

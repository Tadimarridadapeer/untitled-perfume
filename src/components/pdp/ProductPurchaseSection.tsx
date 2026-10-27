'use client';

import React, { useState } from 'react';
import { Fragrance, FragranceSize } from '@/data/fragrances';
import { useCart } from '@/context/CartContext';
import { Plus, Minus, Check, MapPin, ShoppingBag } from 'lucide-react';

interface ProductPurchaseSectionProps {
  fragrance: Fragrance;
}

export default function ProductPurchaseSection({ fragrance }: ProductPurchaseSectionProps) {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState<FragranceSize>(
    fragrance.sizes.find((s) => s.isDefault) || fragrance.sizes[0]
  );
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  // Delivery PIN code checker state
  const [pincode, setPincode] = useState('');
  const [pinStatus, setPinStatus] = useState<'idle' | 'checking' | 'serviceable' | 'unserviceable'>('idle');
  const [pinMessage, setPinMessage] = useState('');

  const handleAddToCart = () => {
    addItem(fragrance, selectedSize, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleCheckPincode = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pincode || pincode.length !== 6 || !/^\d{6}$/.test(pincode)) {
      setPinStatus('unserviceable');
      setPinMessage('Please enter a valid 6-digit Indian postal PIN code.');
      return;
    }

    setPinStatus('checking');

    setTimeout(() => {
      setPinStatus('serviceable');
      setPinMessage(
        `PIN ${pincode} is serviceable for BlueDart express delivery (2–4 business days across India). Free 2ml sample vial included.`
      );
    }, 400);
  };

  return (
    <div className="space-y-6 pt-2 font-sans">
      {/* Size Selector in Clean White with Wine Red Accent */}
      <div className="space-y-2.5">
        <div className="flex justify-between items-baseline">
          <span className="text-xs uppercase tracking-wider text-[#6B1226] font-bold">
            Select Bottle Size
          </span>
          <span className="text-xs text-gray-500 font-medium">
            Handmade in India
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          {fragrance.sizes.map((size) => {
            const isSelected = selectedSize.id === size.id;
            return (
              <button
                key={size.id}
                type="button"
                onClick={() => setSelectedSize(size)}
                className={`p-3 text-left rounded-xl border transition-all ${
                  isSelected
                    ? 'border-[#6B1226] bg-rose-50/60 ring-1 ring-[#6B1226]'
                    : 'border-gray-200 bg-white hover:border-[#6B1226]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif text-base text-black font-semibold">
                    {size.name}
                  </span>
                  {isSelected && <span className="text-[#6B1226] text-xs font-bold">✓</span>}
                </div>
                <div className="text-xs text-gray-500 mt-0.5">{size.volume}</div>
                <div className="font-serif text-lg font-bold text-[#6B1226] mt-1.5">
                  ₹{size.price.toLocaleString('en-IN')}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Quantity & Add to Cart Action */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          {/* Quantity Stepper */}
          <div className="flex items-center border border-gray-300 bg-white rounded-xl px-2 py-2">
            <button
              type="button"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="p-1 text-gray-500 hover:text-black transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="px-3 font-serif text-base text-black font-semibold min-w-[2rem] text-center">
              {quantity}
            </span>
            <button
              type="button"
              onClick={() => setQuantity((q) => q + 1)}
              className="p-1 text-gray-500 hover:text-black transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          {/* Add to Cart CTA in Wine Red */}
          <button
            type="button"
            onClick={handleAddToCart}
            disabled={isAdded}
            className={`flex-1 py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-wider font-bold shadow ${
              isAdded
                ? 'bg-emerald-600 text-white'
                : 'bg-[#6B1226] hover:bg-[#520D1D] text-white'
            }`}
          >
            {isAdded ? (
              <>
                <Check className="w-4 h-4" />
                <span>Added to Bag!</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4" />
                <span>
                  Add to Bag · ₹{(selectedSize.price * quantity).toLocaleString('en-IN')}
                </span>
              </>
            )}
          </button>
        </div>

        <p className="text-xs text-gray-500 text-center">
          Includes matching 2ml sample vial · Free Pan-India express delivery on orders ₹1,499+
        </p>
      </div>

      {/* Indian PIN Code Checker */}
      <div className="pt-4 border-t border-gray-200 space-y-2">
        <div className="flex items-center gap-1.5 text-xs text-black font-semibold">
          <MapPin className="w-4 h-4 text-[#6B1226]" />
          <span>Check Delivery Time to Your PIN Code</span>
        </div>

        <form onSubmit={handleCheckPincode} className="flex gap-2">
          <input
            type="text"
            maxLength={6}
            value={pincode}
            onChange={(e) => {
              setPincode(e.target.value);
              setPinStatus('idle');
            }}
            placeholder="Enter 6-digit Postal PIN"
            className="flex-1 px-3 py-2 bg-white border border-gray-300 rounded-lg text-xs text-black placeholder-gray-400 focus:outline-none focus:border-[#6B1226]"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-black hover:bg-gray-800 text-white text-xs uppercase tracking-wider font-bold rounded-lg transition-colors"
          >
            {pinStatus === 'checking' ? 'Checking...' : 'Check'}
          </button>
        </form>

        {pinMessage && (
          <p
            className={`text-xs p-2.5 rounded-lg border ${
              pinStatus === 'serviceable'
                ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                : 'bg-red-50 border-red-200 text-red-700'
            }`}
          >
            {pinMessage}
          </p>
        )}
      </div>

      {/* Assurance Notes */}
      <div className="pt-4 border-t border-gray-200 grid grid-cols-2 gap-3 text-xs text-gray-600">
        <div>
          <span className="text-[#6B1226] block font-serif text-sm font-semibold">Free 2ml Sample</span>
          <span className="text-[11px]">Test sample on skin first before opening bottle</span>
        </div>
        <div>
          <span className="text-[#6B1226] block font-serif text-sm font-semibold">BlueDart Express</span>
          <span className="text-[11px]">2-4 business days across India</span>
        </div>
      </div>
    </div>
  );
}

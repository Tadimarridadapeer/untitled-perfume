'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FRAGRANCES } from '@/data/fragrances';
import { Search, X, ArrowRight } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => inputRef.current?.focus(), 100);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    return FRAGRANCES.filter((f) => {
      return (
        f.name.toLowerCase().includes(q) ||
        f.chapter.toLowerCase().includes(q) ||
        f.mood.toLowerCase().includes(q) ||
        f.family.toLowerCase().includes(q) ||
        f.keyNotes.some((n) => n.toLowerCase().includes(q)) ||
        f.summary.toLowerCase().includes(q)
      );
    });
  }, [query]);

  const handleClose = () => {
    setQuery('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/60 backdrop-blur-sm font-sans">
      <div
        className="fixed inset-0"
        onClick={handleClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-2xl bg-white rounded-2xl border border-gray-200 shadow-2xl p-6 sm:p-8 text-[#111111] z-10">
        <div className="flex items-center justify-between border-b border-gray-200 pb-4">
          <div className="flex items-center gap-3 flex-1">
            <Search className="w-5 h-5 text-[#6B1226]" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by scent note, feeling, or chapter..."
              className="w-full bg-transparent font-serif text-lg sm:text-xl text-black placeholder-gray-400 focus:outline-none"
            />
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 text-gray-500 hover:text-black transition-colors"
            aria-label="Close search modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Suggestion Notes */}
        {!query && (
          <div className="pt-4">
            <span className="text-xs uppercase tracking-wider text-[#6B1226] font-bold block mb-2">
              Popular Searches:
            </span>
            <div className="flex flex-wrap gap-2">
              {['Bergamot', 'Mysore Sandalwood', 'Cardamom', 'Bourbon Vanilla', 'Rose Damascena', 'Neroli'].map((term) => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  className="px-3 py-1 bg-gray-100 hover:bg-rose-50 text-xs text-gray-700 hover:text-[#6B1226] rounded-full transition-colors font-medium"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Search Results */}
        {query && (
          <div className="mt-4 max-h-96 overflow-y-auto divide-y divide-gray-100">
            {results.length === 0 ? (
              <p className="text-xs text-gray-500 py-6 text-center">
                No perfume found matching &ldquo;{query}&rdquo;. Try &ldquo;Sandalwood&rdquo;, &ldquo;Neroli&rdquo;, or &ldquo;Vanilla&rdquo;.
              </p>
            ) : (
              results.map((f) => (
                <Link
                  key={f.id}
                  href={`/fragrances/${f.slug}`}
                  onClick={handleClose}
                  className="py-3 flex items-center justify-between hover:bg-rose-50/50 px-2 rounded-lg transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-12 relative bg-gray-50 border border-gray-200 rounded shrink-0 overflow-hidden">
                      <Image
                        src={f.bottleImage}
                        alt={f.name}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#6B1226] font-bold block">
                        {f.chapter}
                      </span>
                      <h4 className="font-serif text-base text-black group-hover:text-[#6B1226] transition-colors font-semibold">
                        {f.name}
                      </h4>
                      <p className="text-xs text-gray-500 truncate max-w-xs">
                        {f.keyNotes.join(' · ')}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="font-serif text-base text-[#6B1226] font-bold">
                      ₹999
                    </span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#6B1226] group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}

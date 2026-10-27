'use client';

import React, { useState } from 'react';
import { Mail, Check, ArrowRight } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setMessage(
        'Thank you. Your address has been recorded in the dispatch registry. (Clear integration point for Mailchimp / Klaviyo / Resend).'
      );
      setEmail('');
    }, 600);
  };

  return (
    <section className="py-20 sm:py-24 bg-[#0D0B0A] text-[#F5F0E8] border-b border-[#C5A059]/30">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        
        <div className="inline-flex items-center gap-1.5 text-[9px] uppercase tracking-[0.35em] text-[#C5A059] font-sans font-semibold">
          <Mail className="w-3 h-3" />
          <span>Private Correspondence</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F0E8] tracking-tight">
          Letters from The Noiré.
        </h2>

        <p className="text-xs sm:text-sm text-[#8E857C] font-sans font-light max-w-md mx-auto">
          Occasional notes on fragrance, memory, and the moments worth keeping.
        </p>

        {status === 'success' ? (
          <div className="p-5 bg-[#1B1615] border border-[#C5A059]/50 max-w-sm mx-auto text-xs font-sans text-[#F5F0E8] space-y-2">
            <div className="flex items-center justify-center gap-1.5 text-[#C5A059]">
              <Check className="w-4 h-4" />
              <span className="font-semibold uppercase tracking-wider text-[10px]">Registered</span>
            </div>
            <p className="text-[11px] leading-relaxed text-[#D8D0C5]">{message}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-sm mx-auto space-y-2 pt-2">
            <div className="flex gap-1.5">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === 'error') setStatus('idle');
                }}
                placeholder="Enter email for private notes..."
                className="flex-1 px-3 py-2.5 bg-[#171312] border border-[#C5A059]/30 text-[#F5F0E8] placeholder-[#8E857C] text-xs font-sans focus:outline-none focus:border-[#C5A059]"
                required
              />
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="px-5 py-2.5 bg-gradient-to-r from-[#DFBA73] via-[#C5A059] to-[#A3803C] text-[#0D0B0A] hover:opacity-95 text-[10px] uppercase tracking-[0.2em] font-sans font-bold transition-colors flex items-center justify-center gap-1"
              >
                <span>Join</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {status === 'error' && (
              <p className="text-xs text-rose-400 font-sans">{message}</p>
            )}
          </form>
        )}

      </div>
    </section>
  );
}

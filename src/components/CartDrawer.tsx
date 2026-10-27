'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';
import { X, Plus, Minus, Trash2, ArrowRight, ShieldCheck } from 'lucide-react';

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    updateQuantity,
    removeItem,
    subtotal,
    itemCount,
    hasFreeShipping,
    amountUntilFreeShipping,
    freeShippingThreshold,
  } = useCart();

  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [customerEmail, setCustomerEmail] = useState('');
  const [deliveryPincode, setDeliveryPincode] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'cod'>('upi');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-sans">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-sm transition-opacity duration-300"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
        <div className="w-screen max-w-md bg-[#160408] text-[#F7F2EA] shadow-2xl flex flex-col border-l border-[#D4AF37]/25">
          
          {/* Header */}
          <div className="px-6 py-5 border-b border-[#D4AF37]/20 flex items-center justify-between bg-[#1D060D]">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#D4AF37] block font-medium">
                The Noiré
              </span>
              <h2 className="font-serif text-xl font-light text-[#F7F2EA]">
                Your Shopping Bag ({itemCount} item{itemCount !== 1 ? 's' : ''})
              </h2>
            </div>
            <button
              onClick={closeCart}
              className="p-1.5 text-[#A89895] hover:text-[#D4AF37] transition-colors"
              aria-label="Close bag"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator (India ₹1,499 threshold) */}
          <div className="px-6 py-3 bg-[#130306] border-b border-[#D4AF37]/15 text-xs">
            {hasFreeShipping ? (
              <div className="text-[#D4AF37] text-xs font-medium">
                ✓ Free express delivery unlocked across India!
              </div>
            ) : (
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs text-[#A89895]">
                  <span>Add ₹{amountUntilFreeShipping.toLocaleString('en-IN')} more for free delivery</span>
                  <span className="text-[#D4AF37]">₹{subtotal} / ₹{freeShippingThreshold}</span>
                </div>
                <div className="w-full bg-[#20060E] h-1.5 overflow-hidden">
                  <div
                    className="bg-[#D4AF37] h-full transition-all duration-300"
                    style={{
                      width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%`,
                    }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto px-6 py-4 divide-y divide-[#D4AF37]/15">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 px-4 space-y-3">
                <span className="font-serif text-3xl text-[#D4AF37] font-light">
                  ✦
                </span>
                <h3 className="font-serif text-xl text-[#F7F2EA] font-light">Your bag is empty</h3>
                <p className="text-xs text-[#A89895] max-w-xs font-light leading-relaxed">
                  Explore our 10 perfumes or build a custom gift box with your favorite scents.
                </p>
                <button
                  onClick={closeCart}
                  className="mt-3 px-6 py-2.5 bg-[#2B0A14] border border-[#D4AF37]/40 text-[#F7F2EA] text-xs uppercase tracking-wider hover:bg-[#380E1B] transition-colors"
                >
                  Shop Perfumes
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div key={item.id} className="py-4 flex gap-4">
                  <div className="relative w-16 h-20 bg-[#1D060D] border border-[#D4AF37]/20 shrink-0 overflow-hidden p-1">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain"
                      sizes="64px"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start gap-1">
                        <div>
                          {item.chapter && (
                            <span className="text-[10px] tracking-wider uppercase text-[#D4AF37] block font-medium">
                              {item.chapter}
                            </span>
                          )}
                          <h4 className="font-serif text-lg font-light text-[#F7F2EA]">
                            {item.slug ? (
                              <Link
                                href={`/fragrances/${item.slug}`}
                                onClick={closeCart}
                                className="hover:text-[#D4AF37] transition-colors"
                              >
                                {item.name}
                              </Link>
                            ) : (
                              item.name
                            )}
                          </h4>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-[#A89895] hover:text-red-400 p-1 transition-colors"
                          aria-label={`Remove ${item.name}`}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-xs text-[#A89895] mt-0.5">
                        {item.subtitle || (item.size ? `${item.size.name} (${item.size.volume})` : 'Signature Perfume')}
                      </p>
                    </div>

                    <div className="flex justify-between items-center mt-3">
                      <div className="flex items-center border border-[#D4AF37]/25 bg-[#1F070E]">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-1 text-[#A89895] hover:text-[#F7F2EA] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-2.5 text-xs text-[#F7F2EA] font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-1 text-[#A89895] hover:text-[#F7F2EA] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <span className="font-serif text-base text-[#D4AF37] font-medium">
                        ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Handoff */}
          {items.length > 0 && (
            <div className="px-6 py-5 border-t border-[#D4AF37]/20 bg-[#1D060D] space-y-3.5">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-[#A89895]">
                  <span>Subtotal (All Taxes Included)</span>
                  <span className="font-serif text-sm text-[#F7F2EA]">
                    ₹{subtotal.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex justify-between text-[#A89895]">
                  <span>Delivery in India</span>
                  <span className={hasFreeShipping ? 'text-[#D4AF37] font-medium' : 'text-[#A89895]'}>
                    {hasFreeShipping ? 'FREE' : '₹99 (Free above ₹1,499)'}
                  </span>
                </div>
                <div className="flex justify-between text-[#A89895]">
                  <span>Free 2ml Sample Vial</span>
                  <span className="text-[#D4AF37]">Included in Box</span>
                </div>
                <div className="pt-2 border-t border-[#D4AF37]/15 flex justify-between font-serif text-lg text-[#F7F2EA]">
                  <span>Grand Total</span>
                  <span className="text-[#D4AF37] font-medium">
                    ₹{(subtotal + (hasFreeShipping ? 0 : 99)).toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              <button
                onClick={() => setCheckoutModalOpen(true)}
                className="w-full py-3.5 bg-[#380E1B] hover:bg-[#481122] text-[#F7F2EA] border border-[#D4AF37] text-xs uppercase tracking-wider font-medium flex items-center justify-center gap-2 transition-colors shadow-lg"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-[#A89895] text-center pt-1">
                <span>UPI (GPay / PhonePe)</span>
                <span>·</span>
                <span>Cards</span>
                <span>·</span>
                <span>NetBanking</span>
                <span>·</span>
                <span>Cash on Delivery</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Indian Market Checkout Modal */}
      {checkoutModalOpen && (
        <div className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="bg-[#1D060D] border border-[#D4AF37]/40 max-w-md w-full p-6 shadow-2xl relative text-[#F7F2EA]">
            <button
              onClick={() => setCheckoutModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 text-[#A89895] hover:text-[#D4AF37]"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs uppercase tracking-wider text-[#D4AF37] block font-medium">
              The Noiré · Express Checkout
            </span>
            <h3 className="font-serif text-2xl font-light mt-0.5 text-[#F7F2EA]">
              Enter Delivery Details
            </h3>

            <div className="my-3 p-3 bg-[#140408] border border-[#D4AF37]/20 text-xs space-y-1">
              <div className="font-medium text-[#F7F2EA] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                <span>Order Summary ({itemCount} item{itemCount !== 1 ? 's' : ''})</span>
              </div>
              <ul className="text-[#A89895] divide-y divide-[#D4AF37]/10 max-h-24 overflow-y-auto">
                {items.map((i) => (
                  <li key={i.id} className="py-1 flex justify-between text-xs">
                    <span className="truncate pr-2">{i.name} × {i.quantity}</span>
                    <span className="font-serif text-[#D4AF37] shrink-0 font-medium">₹{(i.price * i.quantity).toLocaleString('en-IN')}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-1 flex justify-between font-serif text-base text-[#F7F2EA]">
                <span>Total Amount to Pay:</span>
                <span className="text-[#D4AF37] font-medium">₹{(subtotal + (hasFreeShipping ? 0 : 99)).toLocaleString('en-IN')}</span>
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  `[The Noiré India Order Confirmation]\nPayment Mode: ${paymentMethod.toUpperCase()}\nPIN: ${deliveryPincode}\nTotal: ₹${subtotal + (hasFreeShipping ? 0 : 99)}\n\nThank you! Your order has been placed. We will dispatch your perfume with BlueDart express tracking.`
                );
              }}
              className="space-y-3 text-xs"
            >
              <div>
                <label className="block text-xs text-[#A89895] mb-1">
                  Mobile Number or Email
                </label>
                <input
                  type="text"
                  required
                  placeholder="+91 98765 43210 or your email"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  className="w-full px-3 py-2 bg-[#140408] border border-[#D4AF37]/30 text-xs text-[#F7F2EA] focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="block text-xs text-[#A89895] mb-1">
                  6-Digit Postal PIN Code (e.g. 110001, 400001, 560001)
                </label>
                <input
                  type="text"
                  maxLength={6}
                  required
                  placeholder="Enter 6-digit PIN"
                  value={deliveryPincode}
                  onChange={(e) => setDeliveryPincode(e.target.value)}
                  className="w-full px-3 py-2 bg-[#140408] border border-[#D4AF37]/30 text-xs text-[#F7F2EA] focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              {/* Payment Method Selector */}
              <div>
                <label className="block text-xs text-[#A89895] mb-1">
                  Select Payment Method
                </label>
                <div className="grid grid-cols-3 gap-1.5">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('upi')}
                    className={`p-2 text-center border text-xs uppercase tracking-wider transition-all font-medium ${
                      paymentMethod === 'upi'
                        ? 'border-[#D4AF37] bg-[#380E1B] text-[#D4AF37]'
                        : 'border-[#D4AF37]/20 bg-[#140408] text-[#A89895]'
                    }`}
                  >
                    UPI / GPay
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-2 text-center border text-xs uppercase tracking-wider transition-all font-medium ${
                      paymentMethod === 'card'
                        ? 'border-[#D4AF37] bg-[#380E1B] text-[#D4AF37]'
                        : 'border-[#D4AF37]/20 bg-[#140408] text-[#A89895]'
                    }`}
                  >
                    Card / NetBanking
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('cod')}
                    className={`p-2 text-center border text-xs uppercase tracking-wider transition-all font-medium ${
                      paymentMethod === 'cod'
                        ? 'border-[#D4AF37] bg-[#380E1B] text-[#D4AF37]'
                        : 'border-[#D4AF37]/20 bg-[#140408] text-[#A89895]'
                    }`}
                  >
                    Cash on Delivery
                  </button>
                </div>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#380E1B] hover:bg-[#481122] border border-[#D4AF37] text-[#F7F2EA] text-xs uppercase tracking-wider font-medium transition-all"
                >
                  Confirm Order · Pay ₹{(subtotal + (hasFreeShipping ? 0 : 99)).toLocaleString('en-IN')}
                </button>
                <button
                  type="button"
                  onClick={() => setCheckoutModalOpen(false)}
                  className="w-full py-1 text-xs text-[#A89895] hover:text-[#D4AF37] uppercase tracking-wider text-center"
                >
                  Return to Bag
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

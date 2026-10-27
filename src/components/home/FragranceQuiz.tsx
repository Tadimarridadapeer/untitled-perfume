'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FRAGRANCES, Fragrance } from '@/data/fragrances';
import { useCart } from '@/context/CartContext';
import { Sparkles, ArrowRight, RotateCcw, ShoppingBag } from 'lucide-react';

interface Question {
  id: number;
  title: string;
  subtitle: string;
  options: {
    label: string;
    description: string;
    slugMatch: string[];
  }[];
}

const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    title: 'What memory resonates most deeply with you?',
    subtitle: 'Choose the feeling you want to return to.',
    options: [
      {
        label: 'A bright, unexpected beginning',
        description: 'Morning light and shared laughter with someone new.',
        slugMatch: ['the-morning-we-met', 'nothing-to-prove'],
      },
      {
        label: 'The grounding comfort of home',
        description: 'Old wooden doorways and places that need no directions.',
        slugMatch: ['somewhere-familiar', 'before-we-knew'],
      },
      {
        label: 'Words left unsaid',
        description: 'Unfinished letters and glances held a moment too long.',
        slugMatch: ['words-we-kept', 'still-with-me'],
      },
      {
        label: 'The freedom of the open sea',
        description: 'Salt on bare skin and the relief of being unreachable.',
        slugMatch: ['where-we-disappeared'],
      },
    ],
  },
  {
    id: 2,
    title: 'Which atmosphere feels like your sanctuary?',
    subtitle: 'Where does your mind wander when you want to pause?',
    options: [
      {
        label: 'Sunlit morning room & crisp linen',
        description: 'Clean, effortless, unhurried ease.',
        slugMatch: ['the-morning-we-met', 'nothing-to-prove'],
      },
      {
        label: 'Aged timber, rain & gentle spices',
        description: 'Comforting, grounded aromatic cedar and cardamom.',
        slugMatch: ['somewhere-familiar', 'before-we-knew'],
      },
      {
        label: 'Candlelight & midnight conversations',
        description: 'Warm bourbon vanilla, amber resin, and slow embers.',
        slugMatch: ['almost-forever', 'after-everyone-left', 'what-remains'],
      },
      {
        label: 'Windswept coastline & salty driftwood',
        description: 'Vast, invigorating, mineral freedom.',
        slugMatch: ['where-we-disappeared'],
      },
    ],
  },
  {
    id: 3,
    title: 'What olfactory chord attracts you?',
    subtitle: 'Your natural scent instinct.',
    options: [
      {
        label: 'Sparkling citrus & dewy neroli',
        description: 'Bright, transparent, and uplifting.',
        slugMatch: ['the-morning-we-met', 'nothing-to-prove'],
      },
      {
        label: 'Mysore sandalwood & smoky cedar',
        description: 'Dry, elegant, and grounding.',
        slugMatch: ['somewhere-familiar', 'before-we-knew', 'still-with-me'],
      },
      {
        label: 'Powdery iris & tender damask rose',
        description: 'Poetic, gentle, and skin-close.',
        slugMatch: ['words-we-kept', 'still-with-me'],
      },
      {
        label: 'Smoked frankincense, dark patchouli & amber',
        description: 'Deep, enveloping, and nocturnal.',
        slugMatch: ['almost-forever', 'after-everyone-left', 'what-remains'],
      },
    ],
  },
];

export default function FragranceQuiz() {
  const { addItem } = useCart();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [recommendedFragrance, setRecommendedFragrance] = useState<Fragrance | null>(null);

  const handleSelectOption = (optionIndex: number) => {
    const updatedAnswers = [...answers, optionIndex];
    setAnswers(updatedAnswers);

    if (currentStep + 1 < QUIZ_QUESTIONS.length) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateRecommendation(updatedAnswers);
    }
  };

  const calculateRecommendation = (finalAnswers: number[]) => {
    const scoreMap: Record<string, number> = {};
    FRAGRANCES.forEach((f) => {
      scoreMap[f.slug] = 0;
    });

    finalAnswers.forEach((answerIdx, qIdx) => {
      const q = QUIZ_QUESTIONS[qIdx];
      const selected = q.options[answerIdx];
      if (selected && selected.slugMatch) {
        selected.slugMatch.forEach((slug) => {
          if (scoreMap[slug] !== undefined) {
            scoreMap[slug] += 2;
          }
        });
      }
    });

    let bestSlug = 'the-morning-we-met';
    let highestScore = -1;
    for (const slug in scoreMap) {
      if (scoreMap[slug] > highestScore) {
        highestScore = scoreMap[slug];
        bestSlug = slug;
      }
    }

    const match = FRAGRANCES.find((f) => f.slug === bestSlug) || FRAGRANCES[0];
    setRecommendedFragrance(match);
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers([]);
    setRecommendedFragrance(null);
  };

  return (
    <section id="fragrance-quiz" className="py-20 sm:py-24 bg-[#0D0B0A] text-[#F5F0E8] border-b border-[#C5A059]/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-2 mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#151211] border border-[#C5A059]/30 text-[9px] uppercase tracking-[0.3em] text-[#C5A059] font-sans font-semibold">
            <Sparkles className="w-3 h-3 text-[#C5A059]" />
            <span>Scent Concierge</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F0E8] tracking-tight">
            Discover Your Scent
          </h2>
          <p className="text-xs text-[#8E857C] font-sans">
            Three intuitive questions to reveal the fragrance chapter crafted for you.
          </p>
        </div>

        {/* Quiz Flow Card */}
        <div className="bg-[#141110] border border-[#C5A059]/35 p-6 sm:p-8 shadow-2xl">
          {!recommendedFragrance ? (
            <div>
              <div className="flex items-center justify-between text-[11px] font-sans text-[#8E857C] mb-5 pb-3 border-b border-[#C5A059]/20">
                <span>
                  Question {currentStep + 1} of {QUIZ_QUESTIONS.length}
                </span>
                <span className="text-[#C5A059] uppercase tracking-wider text-[9px]">
                  Sensory Mapping
                </span>
              </div>

              <div className="mb-6 space-y-1">
                <h3 className="font-serif text-xl sm:text-2xl text-[#F5F0E8]">
                  {QUIZ_QUESTIONS[currentStep].title}
                </h3>
                <p className="text-xs text-[#8E857C] font-sans">
                  {QUIZ_QUESTIONS[currentStep].subtitle}
                </p>
              </div>

              <div className="space-y-2.5">
                {QUIZ_QUESTIONS[currentStep].options.map((opt, optIdx) => (
                  <button
                    key={opt.label}
                    onClick={() => handleSelectOption(optIdx)}
                    className="w-full text-left p-3.5 sm:p-4 bg-[#1B1615] border border-[#C5A059]/20 hover:border-[#C5A059] hover:bg-[#201B1A] transition-all group flex items-center justify-between"
                  >
                    <div>
                      <span className="font-serif text-base text-[#F5F0E8] group-hover:text-[#C5A059] transition-colors block">
                        {opt.label}
                      </span>
                      <p className="text-[11px] text-[#8E857C] font-sans mt-0.5">
                        {opt.description}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#8E857C] group-hover:text-[#C5A059] shrink-0 ml-3" />
                  </button>
                ))}
              </div>

              {currentStep > 0 && (
                <div className="mt-5 pt-3 border-t border-[#C5A059]/20">
                  <button
                    onClick={() => {
                      setCurrentStep(currentStep - 1);
                      setAnswers(answers.slice(0, -1));
                    }}
                    className="text-xs font-sans text-[#8E857C] hover:text-[#C5A059]"
                  >
                    ← Previous step
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* Result View */
            <div className="space-y-6">
              <div className="text-center space-y-1 pb-4 border-b border-[#C5A059]/20">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059] font-sans font-semibold">
                  Your Signature Chapter
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F0E8]">
                  {recommendedFragrance.name}
                </h3>
                <p className="text-xs text-[#8E857C] font-sans italic">
                  &ldquo;{recommendedFragrance.tagline}&rdquo;
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center bg-[#1B1615] p-4 border border-[#C5A059]/30">
                <div className="sm:col-span-5 relative aspect-[4/5] bg-[#0D0B0A] border border-[#C5A059]/20 p-2 flex items-center justify-center">
                  <Image
                    src={recommendedFragrance.bottleImage}
                    alt={recommendedFragrance.name}
                    fill
                    className="object-contain p-2"
                  />
                  <div className="absolute top-2 left-2 bg-[#C5A059] text-[#0D0B0A] text-[8px] uppercase tracking-widest px-2 py-0.5 font-sans font-bold">
                    {recommendedFragrance.chapter}
                  </div>
                </div>

                <div className="sm:col-span-7 space-y-3">
                  <p className="text-xs text-[#D8D0C5] font-sans leading-relaxed line-clamp-3">
                    {recommendedFragrance.summary}
                  </p>

                  <div className="text-xs font-sans">
                    <span className="text-[9px] uppercase tracking-widest text-[#C5A059] block">
                      Core Notes:
                    </span>
                    <p className="text-[#F5F0E8]">
                      {recommendedFragrance.keyNotes.join(' • ')}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 pt-2">
                    <button
                      onClick={() => addItem(recommendedFragrance)}
                      className="px-4 py-2.5 bg-gradient-to-r from-[#DFBA73] via-[#C5A059] to-[#A3803C] text-[#0D0B0A] hover:opacity-95 text-[10px] uppercase tracking-[0.2em] font-sans font-bold transition-colors inline-flex items-center justify-center gap-1.5"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Add to Bag (₹999)</span>
                    </button>

                    <Link
                      href={`/fragrances/${recommendedFragrance.slug}`}
                      className="px-4 py-2.5 border border-[#C5A059]/40 text-[#F5F0E8] hover:bg-[#151211] text-[10px] uppercase tracking-[0.2em] font-sans font-medium transition-colors text-center"
                    >
                      View Chapter
                    </Link>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 text-xs font-sans text-[#8E857C] hover:text-[#C5A059]"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Retake Scent Finder</span>
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}

export interface FragranceSize {
  id: string;
  name: string;
  volume: string;
  price: number;
  isDefault?: boolean;
}

export interface FragranceNotePyramid {
  top: string[];
  heart: string[];
  base: string[];
}

export interface Fragrance {
  id: string;
  chapter: string;
  number: number;
  name: string;
  slug: string;
  mood: string;
  tagline: string;
  summary: string;
  story: string;
  keyNotes: string[];
  pyramid: FragranceNotePyramid;
  family: string;
  category: 'fresh' | 'woody' | 'floral' | 'amber' | 'earthy';
  palette: {
    primary: string;
    secondary: string;
    accent: string;
    description: string;
  };
  occasion: string;
  gender: 'Unisex';
  concentration: string;
  sizes: FragranceSize[];
  atmosphereImages: string[];
  bottleImage: string;
  bottleAccentColor: string;
}

// Configurable global launch pricing and sizes
export const DEFAULT_SIZES: FragranceSize[] = [
  { id: 'size-50ml', name: 'Signature Bottle', volume: '50 ml / 1.7 FL. OZ.', price: 999, isDefault: true },
  { id: 'size-10ml', name: 'Travel Chapter', volume: '10 ml / 0.34 FL. OZ.', price: 399 },
  { id: 'size-2ml', name: 'Discovery Vial', volume: '2 ml Sample', price: 149 },
];

export const FRAGRANCES: Fragrance[] = [
  {
    id: 'fr-01',
    chapter: 'Chapter 01',
    number: 1,
    name: 'The Morning We Met',
    slug: 'the-morning-we-met',
    mood: 'The beginning',
    tagline: 'Bright light on an untouched table, before words became memories.',
    summary: 'Bright bergamot opens like the first light of morning, neroli brings the softness of an unexpected connection, and white musk leaves the gentle impression of a moment you wish you could revisit.',
    story: 'The city was still waking when two strangers found themselves in the same quiet place. Morning light rested on the table, coffee cooled untouched, and a conversation that should have lasted minutes stretched into hours. Nothing extraordinary happened, yet the day became a reference point for everything that followed. Bright bergamot opens like the first light of morning, neroli brings the softness of an unexpected connection, and white musk leaves the gentle impression of a moment you wish you could revisit.',
    keyNotes: ['Bergamot', 'Neroli', 'White Musk'],
    pyramid: {
      top: ['Sunlit Calabrian Bergamot', 'Italian Mandarin Peel', 'Morning Dew Accord'],
      heart: ['Dewy Neroli Blossom', 'Solar Jasmine Petals', 'Orange Blossom'],
      base: ['Silky White Musk', 'Clean Sun-Warmed Amber', 'Blonde Cedarwood'],
    },
    family: 'Citrus & Soft Floral',
    category: 'fresh',
    palette: {
      primary: '#B8A17A',
      secondary: '#F5F0E8',
      accent: '#96815B',
      description: 'Warm champagne and morning ivory',
    },
    occasion: 'Quiet mornings, serendipitous encounters, beginnings with clarity',
    gender: 'Unisex',
    concentration: 'Eau de Parfum (Provisional Craft Formulation)',
    sizes: DEFAULT_SIZES,
    atmosphereImages: [
      'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1517840905340-8897477ba662?q=80&w=1200&auto=format&fit=crop',
    ],
    bottleImage: '/images/bottles/bottle-the-morning-we-met.jpg',
    bottleAccentColor: '#B8A17A',
  },
  {
    id: 'fr-02',
    chapter: 'Chapter 02',
    number: 2,
    name: 'Somewhere Familiar',
    slug: 'somewhere-familiar',
    mood: 'The feeling of home',
    tagline: 'Old timber, slow warmth, and the doorway that never asks for directions.',
    summary: 'Cardamom brings a quiet warmth, cedarwood recalls old timber and familiar rooms, while vetiver settles into the grounded comfort of belonging. A fragrance for the places that never quite leave us.',
    story: 'There are places we remember without needing directions. The wooden doorway, the afternoon warmth, the familiar sound from another room. Years may pass and the place may change, but a part of us still knows the way back. Cardamom brings a quiet warmth, cedarwood recalls old timber and familiar rooms, while vetiver settles into the grounded comfort of belonging. A fragrance for the places that never quite leave us.',
    keyNotes: ['Cardamom', 'Cedarwood', 'Vetiver'],
    pyramid: {
      top: ['Green Cardamom Pods', 'Smoked Coriander', 'Sweet Bergamot Zest'],
      heart: ['Aged Virginian Cedarwood', 'Nutmeg Grate', 'Warm Sandal Accord'],
      base: ['Earthy Haitian Vetiver', 'Dry Oak Moss', 'Soft Suede Musk'],
    },
    family: 'Warm Woody & Spice',
    category: 'woody',
    palette: {
      primary: '#6E705A',
      secondary: '#D8D0C5',
      accent: '#511E2B',
      description: 'Muted olive and warm wood',
    },
    occasion: 'Solitary afternoons, autumn rainfall, unwinding in comforting spaces',
    gender: 'Unisex',
    concentration: 'Eau de Parfum (Provisional Craft Formulation)',
    sizes: DEFAULT_SIZES,
    atmosphereImages: [
      'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop',
    ],
    bottleImage: '/images/bottles/bottle-somewhere-familiar.jpg',
    bottleAccentColor: '#6E705A',
  },
  {
    id: 'fr-03',
    chapter: 'Chapter 03',
    number: 3,
    name: 'Words We Kept',
    slug: 'words-we-kept',
    mood: 'The unsaid',
    tagline: 'What stays in the margin of an unfinished letter.',
    summary: 'Soft rose meets the powdery elegance of iris before sandalwood settles into a tender, lingering warmth. This is the scent of everything you felt, even when you couldn’t find the words.',
    story: 'Some words are never spoken. They remain in a message left unfinished, a glance held for a second too long, or a goodbye that said less than it meant. Time moves forward, but the unsaid keeps its own quiet place in the heart. Soft rose meets the powdery elegance of iris before sandalwood settles into a tender, lingering warmth. This is the scent of everything you felt, even when you couldn’t find the words.',
    keyNotes: ['Rose', 'Iris', 'Sandalwood'],
    pyramid: {
      top: ['Pink Damask Rosebuds', 'Crisp Nashi Pear', 'Crushed Violet Petals'],
      heart: ['Powdery Florentine Iris Root', 'Heliotrope Mist', 'Paper Accord'],
      base: ['Creamy Mysore Sandalwood', 'Cashmeran Veil', 'Whispering Skin Musk'],
    },
    family: 'Powdery Floral & Soft Woods',
    category: 'floral',
    palette: {
      primary: '#A27B79',
      secondary: '#F5F0E8',
      accent: '#511E2B',
      description: 'Dusty rose and faded mauve',
    },
    occasion: 'Intimate conversations, twilight reading, thoughtful nostalgia',
    gender: 'Unisex',
    concentration: 'Eau de Parfum (Provisional Craft Formulation)',
    sizes: DEFAULT_SIZES,
    atmosphereImages: [
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?q=80&w=1200&auto=format&fit=crop',
    ],
    bottleImage: '/images/bottles/bottle-words-we-kept.jpg',
    bottleAccentColor: '#A27B79',
  },
  {
    id: 'fr-04',
    chapter: 'Chapter 04',
    number: 4,
    name: 'Almost Forever',
    slug: 'almost-forever',
    mood: 'A moment we wanted to keep',
    tagline: 'When the night lengthened and tomorrow felt infinitely far.',
    summary: 'Creamy vanilla and tonka create a close, comforting sweetness, while amber adds a slow, glowing depth. Almost Forever captures the beautiful ache of a moment that felt endless precisely because it could not last.',
    story: 'The evening was ending, but nobody wanted to be the first to leave. The music played a little longer. The conversation found another beginning. For a few hours, tomorrow felt far away and forever seemed almost possible. Creamy vanilla and tonka create a close, comforting sweetness, while amber adds a slow, glowing depth. Almost Forever captures the beautiful ache of a moment that felt endless precisely because it could not last.',
    keyNotes: ['Vanilla', 'Tonka Bean', 'Amber'],
    pyramid: {
      top: ['Golden Saffron Threads', 'Spiced Bitter Almond', 'Cognac Accord'],
      heart: ['Rich Bourbon Vanilla Bean', 'Roasted Venezuelan Tonka', 'Smoked Honey'],
      base: ['Baltic Amber Resin', 'Benzoin Tears', 'Warm Labdanum Velvet'],
    },
    family: 'Warm Amber & Gourmand',
    category: 'amber',
    palette: {
      primary: '#B87B4C',
      secondary: '#171514',
      accent: '#B8A17A',
      description: 'Warm caramel and amber',
    },
    occasion: 'Evenings that linger, candlelit dinners, winter cashmere',
    gender: 'Unisex',
    concentration: 'Eau de Parfum (Provisional Craft Formulation)',
    sizes: DEFAULT_SIZES,
    atmosphereImages: [
      'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1200&auto=format&fit=crop',
    ],
    bottleImage: '/images/bottles/bottle-almost-forever.jpg',
    bottleAccentColor: '#B87B4C',
  },
  {
    id: 'fr-05',
    chapter: 'Chapter 05',
    number: 5,
    name: 'Where We Disappeared',
    slug: 'where-we-disappeared',
    mood: 'Freedom',
    tagline: 'Wind, salt on bare skin, and the quiet relief of being unreachable.',
    summary: 'Crisp lime brings the first rush of air, a sea-salt accord evokes the coast, and mineral woods leave the quiet trace of a place beyond routine.',
    story: 'One morning, we left without making a plan. The road opened, the familiar disappeared behind us, and the sea became the only thing worth following. There were no schedules to keep and no explanations to give. Just wind, salt on the skin, and the rare relief of being unreachable. Crisp lime brings the first rush of air, a sea-salt accord evokes the coast, and mineral woods leave the quiet trace of a place beyond routine.',
    keyNotes: ['Lime', 'Sea-salt accord', 'Mineral woods'],
    pyramid: {
      top: ['Sun-crushed Key Lime', 'Ozone Breeze', 'Crushed Juniper Berries'],
      heart: ['Sea Salt Crystals', 'Wild Clary Sage', 'Driftwood Accord'],
      base: ['Mineral Woods', 'Sun-Bleached Cedar', 'Grey Sea Amber'],
    },
    family: 'Aquatic & Mineral Woods',
    category: 'fresh',
    palette: {
      primary: '#7D8B96',
      secondary: '#F5F0E8',
      accent: '#4D5C68',
      description: 'Coastal grey and muted blue',
    },
    occasion: 'Solo coastal escapes, open road getaways, refreshing clarity',
    gender: 'Unisex',
    concentration: 'Eau de Parfum (Provisional Craft Formulation)',
    sizes: DEFAULT_SIZES,
    atmosphereImages: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
    ],
    bottleImage: '/images/bottles/bottle-where-we-disappeared.jpg',
    bottleAccentColor: '#7D8B96',
  },
  {
    id: 'fr-06',
    chapter: 'Chapter 06',
    number: 6,
    name: 'After Everyone Left',
    slug: 'after-everyone-left',
    mood: 'The quiet after joy',
    tagline: 'Dimmed lamps, empty glasses, and the stillness that stays behind.',
    summary: 'Saffron adds a golden glow, labdanum brings a deep resinous character, and vanilla softens the final hours into something intimate and still.',
    story: 'The last guest has gone. Glasses sit on the table, the lights are dim, and the house begins to breathe again. You walk through the rooms and find little reminders of the evening everywhere. It is a different kind of happiness: not the noise of celebration, but the warmth it leaves behind. Saffron adds a golden glow, labdanum brings a deep resinous character, and vanilla softens the final hours into something intimate and still.',
    keyNotes: ['Saffron', 'Labdanum', 'Vanilla'],
    pyramid: {
      top: ['Kashmiri Saffron Filaments', 'Bitter Orange Peel', 'Warm Nutmeg'],
      heart: ['Dark Spanish Labdanum', 'Incense Smoke', 'Rock Rose Resin'],
      base: ['Aged Smoked Vanilla', 'Soft Leather Accord', 'Burnished Birch'],
    },
    family: 'Resinous Amber & Exotic Spice',
    category: 'amber',
    palette: {
      primary: '#574D45',
      secondary: '#B8A17A',
      accent: '#99804D',
      description: 'Deep taupe and antique gold',
    },
    occasion: 'Midnight contemplation, after-hours unwind, intimate conversations',
    gender: 'Unisex',
    concentration: 'Eau de Parfum (Provisional Craft Formulation)',
    sizes: DEFAULT_SIZES,
    atmosphereImages: [
      'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1200&auto=format&fit=crop',
    ],
    bottleImage: '/images/bottles/bottle-after-everyone-left.jpg',
    bottleAccentColor: '#99804D',
  },
  {
    id: 'fr-07',
    chapter: 'Chapter 07',
    number: 7,
    name: 'Before We Knew',
    slug: 'before-we-knew',
    mood: 'Roots and belonging',
    tagline: 'The unmeasured beauty of ordinary days that shaped who we are.',
    summary: 'Creamy sandalwood, warm saffron, and earthy woods evoke a sense of heritage without needing to name a place. Before We Knew is an ode to the beginnings that shaped us quietly.',
    story: 'Before we understood the world, we knew the feeling of being held by it. Familiar voices, old rituals, the warmth of a room that welcomed us without questions. We did not know then that ordinary days would become the memories we searched for later. Creamy sandalwood, warm saffron, and earthy woods evoke a sense of heritage without needing to name a place. Before We Knew is an ode to the beginnings that shaped us quietly.',
    keyNotes: ['Sandalwood', 'Saffron', 'Earthy woods'],
    pyramid: {
      top: ['Fresh Ginger Root', 'Saffron Thread', 'Golden Cardamom Seed'],
      heart: ['White Indian Sandalwood', 'Vetiver Roots', 'Raw Cedar Leaf'],
      base: ['Terracotta Earth Accord', 'Sacred Oud Infusion', 'Dark Guaiac Wood'],
    },
    family: 'Earthy Sandalwood & Heritage Woods',
    category: 'woody',
    palette: {
      primary: '#684F3F',
      secondary: '#D8D0C5',
      accent: '#511E2B',
      description: 'Earthy brown and natural stone',
    },
    occasion: 'Grounding rituals, family reunions, homecoming moments',
    gender: 'Unisex',
    concentration: 'Eau de Parfum (Provisional Craft Formulation)',
    sizes: DEFAULT_SIZES,
    atmosphereImages: [
      'https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1200&auto=format&fit=crop',
    ],
    bottleImage: '/images/bottles/bottle-before-we-knew.jpg',
    bottleAccentColor: '#684F3F',
  },
  {
    id: 'fr-08',
    chapter: 'Chapter 08',
    number: 8,
    name: 'Nothing to Prove',
    slug: 'nothing-to-prove',
    mood: 'Being yourself',
    tagline: 'The quiet lightness that arrives when you finally allow yourself to be.',
    summary: 'Juicy mandarin and crisp pear bring an easy brightness, while soft musk rests close to the skin. Nothing to Prove is a fragrance for the lightness that arrives when you finally give yourself permission to simply exist.',
    story: 'There is a particular kind of freedom in no longer trying to become someone else. A slow morning, a favourite song, an unplanned afternoon. You laugh without checking who is watching and walk into the day as you are. Juicy mandarin and crisp pear bring an easy brightness, while soft musk rests close to the skin. Nothing to Prove is a fragrance for the lightness that arrives when you finally give yourself permission to simply exist.',
    keyNotes: ['Mandarin', 'Pear', 'Soft musk'],
    pyramid: {
      top: ['Sun-Drenched Green Mandarin', 'Crisp Anjou Pear', 'Crushed Mint Leaf'],
      heart: ['White Tea Leaves', 'Subtle Linden Flower', 'Morning Freesia'],
      base: ['Soft Skin Musk', 'Blonde Driftwood', 'Clean Sheer Cedar'],
    },
    family: 'Crisp Fruity Floral & Skin Musk',
    category: 'fresh',
    palette: {
      primary: '#C9B882',
      secondary: '#F5F0E8',
      accent: '#8F845C',
      description: 'Pale citrus and soft ivory',
    },
    occasion: 'Casual unhurried weekends, crisp white linens, everyday joy',
    gender: 'Unisex',
    concentration: 'Eau de Parfum (Provisional Craft Formulation)',
    sizes: DEFAULT_SIZES,
    atmosphereImages: [
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1200&auto=format&fit=crop',
    ],
    bottleImage: '/images/bottles/bottle-nothing-to-prove.jpg',
    bottleAccentColor: '#C9B882',
  },
  {
    id: 'fr-09',
    chapter: 'Chapter 09',
    number: 9,
    name: 'Still With Me',
    slug: 'still-with-me',
    mood: 'A presence that remains',
    tagline: 'When distance cannot touch the warmth someone left behind.',
    summary: 'Delicate iris and white musk create a soft, intimate opening, while sandalwood gives the fragrance a lasting sense of closeness. Still With Me honours the people whose place in our lives is never measured by distance.',
    story: 'Sometimes a person is absent from the room but present in everything else. A familiar melody, a passing fragrance, a phrase you still hear in their voice. The years may change the shape of a memory, yet its tenderness remains. Delicate iris and white musk create a soft, intimate opening, while sandalwood gives the fragrance a lasting sense of closeness. Still With Me honours the people whose place in our lives is never measured by distance.',
    keyNotes: ['White musk', 'Iris', 'Sandalwood'],
    pyramid: {
      top: ['Sheer Aldehydes', 'White Peony Bud', 'Sunlit Bergamot Mist'],
      heart: ['Florentine Iris Pallida', 'Silk Heliotrope', 'Soft Linen Accord'],
      base: ['Creamy Australian Sandalwood', 'White Cashmeran', 'Subtle Skin Amber'],
    },
    family: 'Ethereal Iris & Sheer Sandalwood',
    category: 'floral',
    palette: {
      primary: '#9EA4A8',
      secondary: '#D8D0C5',
      accent: '#7A8187',
      description: 'Mist grey and soft silver',
    },
    occasion: 'Quiet reflection, rainy days, holding treasured memories close',
    gender: 'Unisex',
    concentration: 'Eau de Parfum (Provisional Craft Formulation)',
    sizes: DEFAULT_SIZES,
    atmosphereImages: [
      'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1200&auto=format&fit=crop',
    ],
    bottleImage: '/images/bottles/bottle-still-with-me.jpg',
    bottleAccentColor: '#9EA4A8',
  },
  {
    id: 'fr-10',
    chapter: 'Chapter 10',
    number: 10,
    name: 'What Remains',
    slug: 'what-remains',
    mood: 'The trace of a life',
    tagline: 'The final chapter: the enduring courage left when details fade.',
    summary: 'Dark fruit opens with a fleeting brightness, incense lends a reflective depth, and patchouli grounds the composition in earthy warmth. What Remains is the final chapter of the collection—and a reminder that the things that change us rarely disappear completely.',
    story: 'Eventually, the details begin to fade. You may forget the exact words, the colour of the room, or the way the journey began. But something stays: a little more courage, a different way of seeing, a feeling you carry without noticing. Dark fruit opens with a fleeting brightness, incense lends a reflective depth, and patchouli grounds the composition in earthy warmth. What Remains is the final chapter of the collection—and a reminder that the things that change us rarely disappear completely.',
    keyNotes: ['Blackcurrant', 'Incense', 'Patchouli'],
    pyramid: {
      top: ['Wild Blackcurrant Nectar', 'Pink Peppercorn', 'Bitter Bergamot'],
      heart: ['Somalian Frankincense Smoke', 'Velvet Damask Rose', 'Smoked Clove'],
      base: ['Aged Indonesian Patchouli', 'Dark Amber Cedar', 'Charred Oak Accord'],
    },
    family: 'Dark Woody Fruity & Smoked Incense',
    category: 'woody',
    palette: {
      primary: '#511E2B',
      secondary: '#171514',
      accent: '#B8A17A',
      description: 'Deep burgundy and ink black',
    },
    occasion: 'Nocturnal gatherings, defining personal milestones, unforgettable evenings',
    gender: 'Unisex',
    concentration: 'Eau de Parfum (Provisional Craft Formulation)',
    sizes: DEFAULT_SIZES,
    atmosphereImages: [
      'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?q=80&w=1200&auto=format&fit=crop',
    ],
    bottleImage: '/images/bottles/bottle-what-remains.jpg',
    bottleAccentColor: '#511E2B',
  },
];

export const BRAND_DETAILS = {
  name: 'The Noiré',
  tagline: 'Some moments never leave.',
  origin: 'India',
  established: 'Emerging Luxury Fragrance House',
  positioning: 'Gender-Neutral & Intimate Olfactory Stories',
  statement:
    'Fragrance is a way of returning to the people, places, and versions of ourselves that shaped us. Every perfume is a chapter in a larger collection of memories.',
  bottleDescription:
    'A rounded rectangular glass flacon with heavy crystal base, dark architectural cap, and textured warm ivory label.',
  shippingPolicySummary:
    'Complimentary shipping across India on orders above ₹1,999. Standard delivery in 3–5 business days.',
  returnsSummary:
    'Unopened flacons eligible for exchange or return within 7 days of delivery. Sample vials included with signature bottles to test before opening seal.',
};

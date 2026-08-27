export const stats = [
  { value: "20+", label: "Years in Landscaping" },
  { value: "8+", label: "Product Lines" },
  { value: "30 mi", label: "Delivery Radius" },
  { value: "100%", label: "Quality Backed" },
];

export const steps = [
  {
    n: "1",
    title: "Visit the Yard",
    body: "Stop by our Loxahatchee Groves location off D Road. Walk the rows, see what's fresh, and pick what catches your eye.",
  },
  {
    n: "2",
    title: "Choose Your Materials",
    body: "Our team can help you figure out exactly what your project needs, from the right plants to the right amount of mulch.",
  },
  {
    n: "3",
    title: "Load Up or We Deliver",
    body: "Bring your truck and we'll load you up. Or schedule a delivery anywhere within 30 miles of Loxahatchee Groves.",
  },
];

export const products = [
  {
    title: "Landscape Plants",
    body: "Hardy, sun-ready plants that thrive in South Florida's climate. Picked for beauty and staying power.",
    icon: "sprout",
    category: "Plants & Flowers",
    slug: "landscape-plants",
    image: "/products/landscape-plant.jpg",
  },
  {
    title: "Flowers",
    body: "Seasonal blooms and year-round color to brighten up any yard, garden bed, or planter.",
    icon: "flower",
    category: "Plants & Flowers",
    slug: "flowers",
    image: "/products/flower-in-hero.jpg",
  },
  {
    title: "Annuals",
    body: "Fresh annuals that bring fast, vibrant color to your landscape. Rotated with the seasons.",
    icon: "leaf",
    category: "Plants & Flowers",
    slug: "annuals",
    image:
      "https://horizongardensinc.com/wp-content/uploads/2026/04/plant-rattlesnake-calathea.webp",
  },
  {
    title: "Topiaries",
    body: "Shaped and sculpted topiaries that add instant character to entryways, patios, and gardens.",
    icon: "tree",
    category: "Plants & Flowers",
    slug: "topiaries",
    image:
      "https://horizongardensinc.com/wp-content/uploads/2026/04/plant-variegated-ficus.webp",
  },
  {
    title: "Mulch",
    body: "Bulk and bagged mulch in multiple varieties. Keeps beds clean and holds moisture in the heat.",
    icon: "layers",
    category: "Mulch & Soil",
    slug: "mulch",
    image:
      "https://horizongardensinc.com/wp-content/uploads/2026/04/mulch-red.webp",
  },
  {
    title: "Topsoil",
    body: "Rich, screened topsoil for garden beds, new lawns, and grading projects.",
    icon: "shovel",
    category: "Mulch & Soil",
    slug: "soils-and-sands",
    image:
      "https://horizongardensinc.com/wp-content/uploads/2026/04/soil-topsoil.webp",
  },
  {
    title: "Aggregate",
    body: "Decorative rock, gravel, and stone for pathways, drainage, and hardscape projects.",
    icon: "mountain",
    category: "Aggregate & Sand",
    slug: "aggregate",
    image:
      "https://horizongardensinc.com/wp-content/uploads/2026/04/stone-river-pebbles-tan-01.webp",
  },
  {
    title: "Sand",
    body: "Clean fill sand and specialty sand for construction, leveling, and landscape use.",
    icon: "wind",
    category: "Aggregate & Sand",
    slug: "soils-and-sands",
    image:
      "https://horizongardensinc.com/wp-content/uploads/2026/04/sand-mason-fine.webp",
  },
] as const;

export const plantPhotos = [
  {
    slug: "landscape-plants",
    title: "Landscape Plants",
    alt: "Yucca landscape plant",
    image: "/products/landscape-plant.jpg",
  },
  {
    slug: "flowers",
    title: "Flowers",
    alt: "Yellow mandevilla flowers",
    image: "/products/flower-in-hero.jpg",
  },
  {
    slug: "annuals",
    title: "Annuals",
    alt: "Rattlesnake calathea annual",
    image:
      "https://horizongardensinc.com/wp-content/uploads/2026/04/plant-rattlesnake-calathea.webp",
  },
  {
    slug: "topiaries",
    title: "Topiaries",
    alt: "Variegated ficus topiary",
    image:
      "https://horizongardensinc.com/wp-content/uploads/2026/04/plant-variegated-ficus.webp",
  },
] as const;

export const productCategories = [
  {
    name: "Plants & Flowers",
    blurb:
      "Hardy, South Florida-ready plants, seasonal color, and shaped topiaries — all picked for our sun, soil, and humidity.",
  },
  {
    name: "Mulch & Soil",
    blurb:
      "Bulk and bagged mulch in every finish, plus screened topsoil for beds, new lawns, and grading work.",
  },
  {
    name: "Aggregate & Sand",
    blurb:
      "Decorative rock and specialty sand for pathways, drainage, hardscape, and construction projects.",
  },
] as const;

export const mulchVarieties = [
  {
    src: "https://horizongardensinc.com/wp-content/uploads/2026/04/mulch-red.webp",
    alt: "Red mulch",
  },
  {
    src: "https://horizongardensinc.com/wp-content/uploads/2026/04/mulch-pine-bark-chunks.webp",
    alt: "Pine bark chunks",
  },
  {
    src: "https://horizongardensinc.com/wp-content/uploads/2026/04/mulch-natural-wood-chips.webp",
    alt: "Natural wood chips",
  },
  {
    src: "https://horizongardensinc.com/wp-content/uploads/2026/04/mulch-dark-brown.webp",
    alt: "Dark brown mulch",
  },
  {
    src: "https://horizongardensinc.com/wp-content/uploads/2026/04/mulch-cypress.webp",
    alt: "Cypress mulch",
  },
  {
    src: "https://horizongardensinc.com/wp-content/uploads/2026/04/mulch-cedar-chips.webp",
    alt: "Cedar chips mulch",
  },
] as const;

// Type list only (names) sourced from thebushelstops.com/mulch, per site owner.
// Real Horizon Gardens photography is used wherever we have a matching product;
// remaining types are shown as color swatches since no photo was available for them.
export const woodMulchTypes = [
  {
    name: "Red Mulch",
    image:
      "https://horizongardensinc.com/wp-content/uploads/2026/04/mulch-red.webp",
  },
  {
    name: "Pine Bark Nuggets",
    image:
      "https://horizongardensinc.com/wp-content/uploads/2026/04/mulch-pine-bark-chunks.webp",
  },
  {
    name: "Wood Chips",
    image:
      "https://horizongardensinc.com/wp-content/uploads/2026/04/mulch-natural-wood-chips.webp",
  },
  {
    name: "Brown Mulch",
    image:
      "https://horizongardensinc.com/wp-content/uploads/2026/04/mulch-dark-brown.webp",
  },
  {
    name: "Cypress Blend",
    image:
      "https://horizongardensinc.com/wp-content/uploads/2026/04/mulch-cypress.webp",
  },
  {
    name: "Cedar Chips",
    image:
      "https://horizongardensinc.com/wp-content/uploads/2026/04/mulch-cedar-chips.webp",
  },
  {
    name: "APS Melaleuca",
    color: "#6b4a35",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/49/Red_cedar_mulch_in_New_Jersey_April.jpg",
  },
  {
    name: "Black Mulch",
    color: "#2b2b28",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2d/Black_cedar_mulch_in_New_Jersey_April.jpg",
  },
  {
    name: "Eucalyptus Mulch",
    color: "#7a4a2e",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Wood_Chip_Mulch_Texture_DTXR-WD-CP-1.jpg/1280px-Wood_Chip_Mulch_Texture_DTXR-WD-CP-1.jpg",
  },
  {
    name: "Gold Mulch",
    color: "#c98a2b",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Wood_chip_pile.jpg/1280px-Wood_chip_pile.jpg",
  },
  {
    name: "Recycled Mulch",
    color: "#6e5a44",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Surfaces_woody_mulch_broken_sticks_on_the_ground.JPG/1280px-Surfaces_woody_mulch_broken_sticks_on_the_ground.JPG",
  },
] as const;

// Real photography above sourced from Wikimedia Commons (CC0 / CC BY-SA — free for
// commercial use). Verified per-image against the actual product before use; niche
// trade names with no confident real-world match are left as color swatches.

// Type list and descriptions sourced from thebushelstops.com/soils-&-sands, per site
// owner. Real Horizon Gardens photography is used wherever we have a matching product;
// remaining types are shown as color swatches since no photo was available for them.
export const soilTypes = [
  {
    name: "Topsoil",
    note: "Screened and ready for beds, new lawns, or grading.",
    image:
      "https://horizongardensinc.com/wp-content/uploads/2026/04/soil-topsoil.webp",
  },
  {
    name: "Black Cow",
    note: "Composted manure, rich in organic matter and nutrients.",
    color: "#2a1f16",
    image: "/materials/black-cow.jpg",
  },
  {
    name: "Mushroom Compost",
    note: "Organic soil made from spent mushroom-farm substrate.",
    color: "#4a3a28",
    image: "/materials/mushroom-compost.jpeg",
  },
  {
    name: "Potting Soil",
    note: "Peat, pine bark, coarse sand, sawdust, and airlite.",
    color: "#5c4530",
    image: "/materials/potting-soil.jpg",
  },
  {
    name: "Peat Moss",
    note: "Conditions soil — light texture that holds moisture.",
    color: "#4a3223",
    image: "/materials/peat-moss.jpg",
  },
  {
    name: "Overburden",
    color: "#8a7050",
    image: "/materials/overburden-soil.jpg",
  },
] as const;

export const sandTypes = [
  {
    name: "Mason Sand",
    note: "For masonry, paver joints, and smooth, refined surfaces.",
    image:
      "https://horizongardensinc.com/wp-content/uploads/2026/04/sand-mason-fine.webp",
  },
  {
    name: "Red Clay",
    note: "Weathered, mineral-rich soil with a natural reddish hue.",
    color: "#a24a2c",
    image: "/materials/red-clay.jpg",
  },
  {
    name: "Green Sand",
    note: "Conditions heavy soils and enhances sandy soils.",
    color: "#7c8a6e",
    image: "/materials/green-sand.jpg",
  },
  {
    name: "Concrete Sand",
    note: "Fine, compactable sand for concrete mix and paver base.",
    color: "#8a8378",
    image: "/materials/concrete-sand.jpg",
  },
  {
    name: "Crushed Sand",
    note: "Crushed and screened sand for fill and construction use.",
    color: "#c9a876",
    image: "/materials/crushed-sand.jpg",
  },
  {
    name: "Recycled Concrete",
    note: "Crushed, reprocessed concrete for new construction.",
    color: "#8d8d85",
    image: "/materials/recycled-concrete.jpg",
  },
  {
    name: "Recycled Asphalt",
    note: "Reclaimed pavement, reused for roads and repairs.",
    color: "#3a3a3a",
    image: "/materials/recycled-asphalt.jpg",
  },
  { name: "Clean Fill", color: "#d9c9a3", image: "/materials/clean-fill.jpg" },
  { name: "DOT Sand", color: "#cbb98e", image: "/materials/dot-sand.jpg" },
] as const;

// Type list sourced from thebushelstops.com/rocks-&-glasses, per site owner —
// glass products intentionally excluded. Real Horizon Gardens photography is used
// wherever we have a matching product; remaining types are shown as color swatches.
export const rockAggregateTypes = [
  {
    name: "River Jack",
    image:
      "https://horizongardensinc.com/wp-content/uploads/2026/04/stone-river-pebbles-tan-01.webp",
  },
  { name: "Amberlite", color: "#c98a3f", image: "/materials/amberlite.jpg" },
  {
    name: "Black Slate",
    color: "#2b2b2c",
    image: "/materials/black-slate.jpeg",
  },
  {
    name: "Black Sparkle",
    color: "#1e1e1f",
    image: "/materials/black-sparkle.jpg",
  },
  {
    name: "Black Lava Rock",
    color: "#1c1a19",
    image: "/materials/black-lava-rock.jpg",
  },
  {
    name: "Brown Chattahoochee",
    color: "#8a6a4a",
    image: "/materials/brown-chattahoochee.jpg",
  },
  {
    name: "Brown River Rock",
    color: "#7a5c3e",
    image: "/materials/brown-river-rock.webp",
  },
  { name: "Granite", color: "#8f8f8c", image: "/materials/granite.webp" },
] as const;

export const rockBoulderTypes = [
  {
    name: "Black Slate",
    color: "#2b2b2c",
    image: "/materials/black-slate.jpeg",
  },
] as const;

export const why = [
  {
    title: "Real Landscaper Knowledge",
    body: "Our team doesn't just sell materials — we install them. Ask us anything about what works in your soil, your sun, your project.",
    icon: "users",
  },
  {
    title: "Job-Site Quality",
    body: "Every plant, every bag of mulch, every load of topsoil meets the same standard we use on our own landscape jobs.",
    icon: "award",
  },
  {
    title: "Everything In One Place",
    body: "Plants, flowers, topiaries, mulch, aggregate, sand, and topsoil — all in one yard, all ready to go.",
    icon: "layers",
  },
  {
    title: "Local Delivery",
    body: "Can't haul it yourself? We deliver bulk materials and plants to homes and job sites within 30 miles of Loxahatchee Groves.",
    icon: "truck",
  },
] as const;

export const faqs = [
  {
    q: "Do I need to be a contractor to shop here?",
    a: "Not at all. We're open to everyone — homeowners, landscapers, contractors, property managers, and anyone else who needs quality landscape materials.",
  },
  {
    q: "Do you offer delivery?",
    a: "Yes. We deliver bulk materials and plants across Palm Beach County, including Wellington, Royal Palm Beach, The Acreage, West Palm Beach, and surrounding areas. Call us for delivery pricing and scheduling.",
  },
  {
    q: "Can you help me figure out how much mulch or soil I need?",
    a: "Absolutely. Tell us your project size and we'll help you calculate the right amount. No guesswork, no wasted material.",
  },
  {
    q: "What types of mulch do you carry?",
    a: "We stock several varieties including natural wood chips, pine bark, cypress, and colored mulch. Available in bags or bulk by the yard.",
  },
  {
    q: "Are your plants suited for South Florida?",
    a: "Every plant in our yard is selected for the South Florida climate. We know what thrives in our sandy soil, humidity, and sun because we plant these same varieties on our own jobs.",
  },
  {
    q: "What are your hours?",
    a: "We're open Monday–Saturday 7:30 AM–4:00 PM and Sunday 9:00 AM–3:00 PM at 230 D Rd in Loxahatchee Groves, FL.",
  },
];

export const gallery = [
  {
    src: "https://horizongardensinc.com/wp-content/uploads/2026/04/mulch-red.webp",
    alt: "Red mulch",
  },
  {
    src: "https://horizongardensinc.com/wp-content/uploads/2026/04/mulch-pine-bark-chunks.webp",
    alt: "Pine bark chunks",
  },
  {
    src: "https://horizongardensinc.com/wp-content/uploads/2026/04/mulch-natural-wood-chips.webp",
    alt: "Natural wood chips",
  },
  {
    src: "https://horizongardensinc.com/wp-content/uploads/2026/04/mulch-dark-brown.webp",
    alt: "Dark brown mulch",
  },
  {
    src: "https://horizongardensinc.com/wp-content/uploads/2026/04/mulch-cypress.webp",
    alt: "Cypress mulch",
  },
  {
    src: "https://horizongardensinc.com/wp-content/uploads/2026/04/mulch-brown-bark-02.webp",
    alt: "Brown bark mulch",
  },
];

export const testimonials = [
  {
    quote:
      "We've been buying our mulch and topsoil here since they opened. The quality is way better than what we were getting from the big stores, and the guys actually help you load up.",
    name: "Mike R.",
    city: "Wellington, FL",
  },
  {
    quote:
      "I came in looking for some annuals for my front garden and ended up getting great advice on what would actually survive our summer heat. Love this place.",
    name: "Sandra T.",
    city: "Royal Palm Beach, FL",
  },
  {
    quote:
      "As a landscaper, I need a supplier I can count on. Horizon Gardens has everything I need in one stop, and the materials are always fresh and ready.",
    name: "Carlos M.",
    city: "West Palm Beach, FL",
  },
];

export const areas = [
  "Loxahatchee Groves",
  "Wellington",
  "Royal Palm Beach",
  "The Acreage",
  "West Palm Beach",
  "Palm Beach Gardens",
  "Greenacres",
  "Boynton Beach",
  "Lake Worth",
  "Lake Clarke Shores",
];

export const PHONE_DISPLAY = "(561) 818-7800";
export const PHONE_TEL = "5618187800";
export const ADDRESS = "230 D Rd, Loxahatchee Groves, FL 33470";
export const MAPS_URL =
  "https://maps.google.com/?q=230+D+Rd,+Loxahatchee+Groves,+FL+33470";
export const MAPS_EMBED_URL =
  "https://maps.google.com/maps?q=230+D+Rd,+Loxahatchee+Groves,+FL+33470&z=15&output=embed";

export const HOURS = [
  { days: "Monday – Saturday", time: "7:30 AM – 4:00 PM" },
  { days: "Sunday", time: "9:00 AM – 3:00 PM" },
];

export const INSTAGRAM_URL = "https://www.instagram.com/horizongardens.inc/";
export const FACEBOOK_URL = "#";
export const GOOGLE_URL =
  "https://www.google.com/search?q=Horizon+Gardens+inc.&stick=H4sIAAAAAAAA_-NgU1I1qLCwSLE0SktMS7Y0N04zMjG1MqhIMjdITTWzSE02Nk4ytjQ3XMQq4pFflFmVn6fgnliUkppXrJCZl6wHAIRagbZAAAAA&hl=en&mat=Cdzlq4TZkIn7ElcBa0lj_wJgNt7rldYypXxgNHJaMWV5bOEK5gU9hoVam4msArFzVnhF9ZHx0OirKUzkPz5rxEtTjfeE-g26V9YTyxu2hme4Dm3H6kSDpctoRyi_A6WTX1I&authuser=0";

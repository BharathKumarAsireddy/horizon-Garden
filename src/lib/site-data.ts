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
    image:
      "https://horizongardensinc.com/wp-content/uploads/2026/04/plant-yucca.webp",
  },
  {
    title: "Flowers",
    body: "Seasonal blooms and year-round color to brighten up any yard, garden bed, or planter.",
    icon: "flower",
    category: "Plants & Flowers",
    image:
      "https://horizongardensinc.com/wp-content/uploads/2026/04/plant-mandevilla-yellow.webp",
  },
  {
    title: "Annuals",
    body: "Fresh annuals that bring fast, vibrant color to your landscape. Rotated with the seasons.",
    icon: "leaf",
    category: "Plants & Flowers",
    image:
      "https://horizongardensinc.com/wp-content/uploads/2026/04/plant-rattlesnake-calathea.webp",
  },
  {
    title: "Topiaries",
    body: "Shaped and sculpted topiaries that add instant character to entryways, patios, and gardens.",
    icon: "tree",
    category: "Plants & Flowers",
    image:
      "https://horizongardensinc.com/wp-content/uploads/2026/04/plant-variegated-ficus.webp",
  },
  {
    title: "Mulch",
    body: "Bulk and bagged mulch in multiple varieties. Keeps beds clean and holds moisture in the heat.",
    icon: "layers",
    category: "Mulch & Soil",
    image:
      "https://horizongardensinc.com/wp-content/uploads/2026/04/mulch-red.webp",
  },
  {
    title: "Topsoil",
    body: "Rich, screened topsoil for garden beds, new lawns, and grading projects.",
    icon: "shovel",
    category: "Mulch & Soil",
    image:
      "https://horizongardensinc.com/wp-content/uploads/2026/04/soil-topsoil.webp",
  },
  {
    title: "Aggregate",
    body: "Decorative rock, gravel, and stone for pathways, drainage, and hardscape projects.",
    icon: "mountain",
    category: "Aggregate & Sand",
    image:
      "https://horizongardensinc.com/wp-content/uploads/2026/04/stone-river-pebbles-tan-01.webp",
  },
  {
    title: "Sand",
    body: "Clean fill sand and specialty sand for construction, leveling, and landscape use.",
    icon: "wind",
    category: "Aggregate & Sand",
    image:
      "https://horizongardensinc.com/wp-content/uploads/2026/04/sand-mason-fine.webp",
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
    a: "Call us at (561) 526-6716 for current hours and availability. We're located at 230 D Rd in Loxahatchee Groves, FL.",
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

export const PHONE_DISPLAY = "(561) 526-6716";
export const PHONE_TEL = "5615266716";
export const ADDRESS = "230 D Rd, Loxahatchee Groves, FL 33470";
export const MAPS_URL =
  "https://maps.google.com/?q=230+D+Rd,+Loxahatchee+Groves,+FL+33470";
export const HERO_VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260511_131941_d136af49-e243-493a-be14-6ff3f24e09e6.mp4";

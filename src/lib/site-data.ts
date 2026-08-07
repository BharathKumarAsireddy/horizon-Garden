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
    image:
      "https://horizongardensinc.com/wp-content/uploads/2026/04/plant-yucca.webp",
  },
  {
    title: "Flowers",
    body: "Seasonal blooms and year-round color to brighten up any yard, garden bed, or planter.",
    icon: "flower",
    category: "Plants & Flowers",
    slug: "flowers",
    image:
      "https://horizongardensinc.com/wp-content/uploads/2026/04/plant-mandevilla-yellow.webp",
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
    image:
      "https://horizongardensinc.com/wp-content/uploads/2026/04/plant-yucca.webp",
  },
  {
    slug: "flowers",
    title: "Flowers",
    alt: "Yellow mandevilla flowers",
    image:
      "https://horizongardensinc.com/wp-content/uploads/2026/04/plant-mandevilla-yellow.webp",
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
  { name: "Grade A Cypress", color: "#b89568" },
  { name: "Pine Fines", color: "#8a6b47" },
  { name: "Pine Straw", color: "#c9a227" },
  {
    name: "Recycled Mulch",
    color: "#6e5a44",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Surfaces_woody_mulch_broken_sticks_on_the_ground.JPG/1280px-Surfaces_woody_mulch_broken_sticks_on_the_ground.JPG",
  },
  { name: "Spanish Gold Mulch", color: "#d1a13c" },
] as const;

// Real photography above sourced from Wikimedia Commons (CC0 / CC BY-SA — free for
// commercial use). Verified per-image against the actual product before use; niche
// trade names with no confident real-world match are left as color swatches.

export const rubberMulchTypes = [
  { name: "Black Rubber Mulch", color: "#1c1c1c" },
  { name: "Blue Rubber Mulch", color: "#2b5c8a" },
  { name: "Brown Rubber Mulch", color: "#5b3a24" },
  { name: "Green Rubber Mulch", color: "#2f6b3a" },
  { name: "Red Rubber Mulch", color: "#8a2a22" },
] as const;

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
  },
  {
    name: "Mushroom Compost",
    note: "Organic soil made from spent mushroom-farm substrate.",
    color: "#4a3a28",
  },
  {
    name: "Vegetable Mix",
    note: "A blend of compost, pine bark, coarse sand, and peat.",
    color: "#3f2c1c",
  },
  {
    name: "Potting Soil",
    note: "Peat, pine bark, coarse sand, sawdust, and airlite.",
    color: "#5c4530",
  },
  {
    name: "Peat Moss",
    note: "Conditions soil — light texture that holds moisture.",
    color: "#4a3223",
  },
  {
    name: "Propagation Mix",
    note: "Canadian peat and perlite for starting cuttings.",
    color: "#6b5847",
  },
  { name: "Atlasgro", color: "#3d2a1a" },
  { name: "Overburden", color: "#8a7050" },
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
  },
  {
    name: "Crushed Coquina",
    note: "Crushed shell for pathways and decorative landscaping.",
    color: "#e8ddc7",
  },
  {
    name: "Green Sand",
    note: "Conditions heavy soils and enhances sandy soils.",
    color: "#7c8a6e",
  },
  {
    name: "Concrete Screening",
    note: "A compactable base layer for pavers and stepping stones.",
    color: "#9a9690",
  },
  {
    name: "Recycled Concrete",
    note: "Crushed, reprocessed concrete for new construction.",
    color: "#8d8d85",
  },
  {
    name: "Recycled Asphalt",
    note: "Reclaimed pavement, reused for roads and repairs.",
    color: "#3a3a3a",
  },
  { name: "Clean Fill", color: "#d9c9a3" },
  { name: "DOT Sand", color: "#cbb98e" },
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
  { name: "Amberlite", color: "#c98a3f" },
  { name: "Black Slate", color: "#2b2b2c" },
  { name: "Black Sparkle", color: "#1e1e1f" },
  { name: "Black Lava Rock", color: "#1c1a19" },
  { name: "Black Lava Mite-T-Lite", color: "#3a3632" },
  { name: "Brown Chattahoochee", color: "#8a6a4a" },
  { name: "Brown River Rock", color: "#7a5c3e" },
  { name: "Granite", color: "#8f8f8c" },
  { name: 'Granite 3/8"', color: "#9a9a97" },
  { name: "Limestone Drainfield", color: "#c9c2b0" },
  { name: "Limestone Pea Rock", color: "#d8d0bd" },
  { name: "Marble Chip", color: "#e8e4da" },
  { name: "New England River Jack", color: "#8a8378" },
  { name: "Palmetto Green", color: "#6e7a5e" },
  { name: 'Peachy River Rock 3/4"', color: "#d9a688" },
  { name: "Pink Flamingo", color: "#e08a9c" },
  { name: "Pink Rose", color: "#d98fa0" },
  { name: "Red Rock Crimson/Cedar Bark", color: "#7a3327" },
  { name: "Red Lava Rock", color: "#5c2a1f" },
  { name: "Red Lava Mite-T-Lite", color: "#7a4030" },
  { name: "Salt & Pepper", color: "#7d7d7d" },
  { name: "Seminole Chip", color: "#c7b393" },
  { name: "Staylite Pumice", color: "#b8b3a8" },
  { name: '3/8" Warning Track', color: "#9c5a3c" },
  { name: "Washed Shell", color: "#ece4d3" },
  { name: "White River Rock", color: "#e6e2d6" },
  { name: 'White River Rock 1/2"', color: "#eae6db" },
] as const;

export const decorativeStoneTypes = [
  { name: "3 Color Mix", color: "#a89a82" },
  { name: "Black Button", color: "#1f1f20" },
  { name: "Coffee Bean", color: "#4a3325" },
  { name: "Jade Pebble", color: "#4f7a5e" },
  { name: "Lava Pebble", color: "#3a2620" },
  { name: "Mexican Beach Pebble", color: "#8a8a86" },
  { name: "Mixed Pebble", color: "#9a8f7c" },
  { name: "Polished Beach Pebble", color: "#b3ac9c" },
  { name: "Salmon Pebble", color: "#d99a80" },
  { name: "Santorini Pebble", color: "#d8d5cc" },
  { name: "Top Class (Black)", color: "#1c1c1d" },
  { name: "Top Class (Red)", color: "#7a2e26" },
  { name: "Top Class (Tiger)", color: "#a37c4a" },
  { name: "Top Class (White)", color: "#e8e6df" },
  { name: "Tumble Jade", color: "#5c8268" },
  { name: "Wood Grain", color: "#9c7f5a" },
] as const;

export const rockBoulderTypes = [
  { name: "Amberwood", color: "#a3754a" },
  { name: "Antique Flagstone (Black)", color: "#3a3a3a" },
  { name: "Antique Flagstone (Gray)", color: "#8a8a85" },
  { name: "Antique Flagstone (White)", color: "#d9d5c8" },
  { name: "Apache Paint", color: "#a3623f" },
  { name: "Black Slate", color: "#2b2b2c" },
  { name: "Blue Frost", color: "#6f8a9c" },
  { name: "Blue Tumble Flagstone", color: "#5f7a8c" },
  { name: "Brown & Silver Flagstone", color: "#8a7560" },
  { name: "Calcide Crystal", color: "#e3e0d6" },
  { name: "Canyon River Flats", color: "#b3805a" },
  { name: "Cap Rocks", color: "#a89a82" },
  { name: "Cap Rocks (Fake)", color: "#9c9c96" },
  { name: "Deco Skippers", color: "#9a9590" },
  { name: "Dragon Aquarium", color: "#4a5c52" },
  { name: "Emerald Gray", color: "#5c7268" },
  { name: "Fern Green", color: "#4f6b4a" },
  { name: "Florida Sunrise", color: "#d98a5c" },
  { name: "Glacier Green", color: "#7a9c85" },
  { name: "Honeycut-Creek", color: "#a3835c" },
  { name: "Irregular Rustic Tumble", color: "#8a7a68" },
  { name: "Maple Creek Flats", color: "#9c7248" },
  { name: "Midnight Black", color: "#171717" },
  { name: "Mixed Pebble", color: "#9a8f7c" },
  { name: "PA Bluestone", color: "#5f6f7a" },
  { name: "Rainbow Sunshine", color: "#d1963f" },
  { name: "Rainbow Sunshine Pebble", color: "#d9a856" },
  { name: "Rip-Rap", color: "#7a7a75" },
  { name: "Riverjack Boulder", color: "#a3906f" },
  { name: "River Slicks Flatstone", color: "#a89880" },
  { name: "Ruby Spar", color: "#8a2f30" },
  { name: "Santorini Boulder", color: "#d3cfc4" },
  { name: "Santorini Tiles", color: "#d8d4c9" },
  { name: "Spaghetti Rock", color: "#9c7f5c" },
  { name: "Spaghetti Rock (Green)", color: "#6e8060" },
  { name: "Tennessee Fieldstone", color: "#8a7a68" },
  { name: "Tennessee Sandstone Gray", color: "#918d84" },
  { name: "Tennessee Strip", color: "#a3835f" },
  { name: "Tennessee River Round", color: "#9c8262" },
  { name: "Tomahawk Warrior Flagstone", color: "#8a4a35" },
  { name: "White-Cream Limestone", color: "#e6e1d2" },
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

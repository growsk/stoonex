export const site = {
  name: "Stoonex Services",
  shortName: "Stoonex",
  tagline: "Quality You Can Trust",
  founded: "2020",
  phone: "306-222-0409",
  phoneHref: "tel:+13062220409",
  email: "hello@stoonexservices.ca",
  emailHref: "mailto:hello@stoonexservices.ca",
  city: "Saskatoon",
  region: "SK",
  country: "Canada",
  url: "https://stoonex.com",
  altUrl: "https://stoonexservices.ca",
  geo: { latitude: 52.1332, longitude: -106.6700 },
  hours: "Mon–Sat · 8am – 7pm",
  social: {
    facebook: "",
    instagram: "",
    google: "",
  },
} as const;

export const services = [
  {
    slug: "landscaping",
    title: "Landscaping",
    short: "Full-yard design, sod, artificial turf, gardens & lighting.",
    description:
      "Design-led landscaping for Saskatoon homes — from grading and sod to artificial turf, garden beds, river rock features, and warm landscape lighting. We compose yards, not just install them.",
    bullets: [
      "Grading and excavation",
      "Sod and artificial turf",
      "Garden beds and planters",
      "River rock and drainage features",
      "Landscape lighting",
    ],
    heroImage: "/projects/yard-evening-lights.jpg",
    gallery: [
      "/projects/yard-evening-lights.jpg",
      "/projects/turf-rock-border.jpg",
      "/projects/turf-frontyard-flowers.jpg",
      "/projects/backyard-blossom-pavers.jpg",
      "/projects/before-after-rocks.jpg",
      "/projects/yard-prep-grading.jpg",
    ],
  },
  {
    slug: "fencing",
    title: "Fencing",
    short: "White vinyl, wood, and composite — built to outlast the prairie.",
    description:
      "Premium white vinyl, cedar, and composite fencing engineered for Saskatchewan winters. Posts set deep, panels plumb, finish flawless. Replacing a fence that finally gave up? We've done dozens.",
    bullets: [
      "White vinyl privacy fencing",
      "Cedar and treated wood fencing",
      "Composite + horizontal slat fencing",
      "Gates with soft-close hardware",
      "Replacement of rotted wood fences",
    ],
    heroImage: "/projects/before-after-fence.jpg",
    gallery: [
      "/projects/before-after-fence.jpg",
      "/projects/turf-backyard-vinyl.jpg",
      "/projects/deck-evening-vinyl.jpg",
      "/projects/side-yard-sunset.jpg",
      "/projects/paver-walkway-vinyl.jpg",
    ],
  },
  {
    slug: "paving",
    title: "Paving Stone",
    short: "Driveways, walkways, patios. Set right, set once.",
    description:
      "ICPI-method installations on a properly compacted base — the kind that survives 30 freeze-thaw cycles a year. We use Techo-Bloc, Barkman, and Belgard pavers, with polymeric sand joints and clean edge restraint.",
    bullets: [
      "Paver driveways",
      "Walkways and pathways",
      "Stone stepping pads",
      "Patio installations",
      "Repairs and re-leveling",
    ],
    heroImage: "/projects/paver-walkway-vinyl.jpg",
    gallery: [
      "/projects/paver-walkway-vinyl.jpg",
      "/projects/side-yard-sunset.jpg",
      "/projects/backyard-blossom-pavers.jpg",
      "/projects/turf-backyard-vinyl.jpg",
      "/projects/yard-evening-lights.jpg",
    ],
  },
  {
    slug: "wall-stone",
    title: "Wall Stone",
    short: "Retaining walls, stone facades, and feature walls that anchor a yard.",
    description:
      "Engineered retaining walls and stone facade work that hold the line and elevate the property. Block, natural stone, or full house-facade stonework — installed by craftsmen who treat every course like the finished face.",
    bullets: [
      "Retaining walls",
      "Garden bed walls and planters",
      "Stone facade and exterior cladding",
      "Stair and step walls",
      "Decorative feature walls",
    ],
    heroImage: "/projects/stone-facade-process.jpg",
    gallery: [
      "/projects/stone-facade-process.jpg",
      "/projects/before-after-rocks.jpg",
      "/projects/deck-river-rock.jpg",
      "/projects/yard-evening-lights.jpg",
    ],
  },
] as const;

export type ServiceSlug = (typeof services)[number]["slug"];

export const projects = [
  {
    slug: "evergreen-evening-lights",
    title: "Evergreen evening lights",
    location: "Evergreen, Saskatoon",
    tags: ["Landscaping", "Lighting", "Pavers"],
    image: "/projects/yard-evening-lights.jpg",
    year: "2025",
    summary:
      "Full backyard build — sod, perimeter warm-light strip, paver step pad, and a clean rock border. Shot at dusk.",
  },
  {
    slug: "stonebridge-composite-deck",
    title: "Composite deck with white railing",
    location: "Stonebridge, Saskatoon",
    tags: ["Decking", "Fencing"],
    image: "/projects/deck-railing-stairs.jpg",
    year: "2025",
    summary:
      "Gray composite deck with white aluminum railing and a paver landing pad in a river-rock surround.",
  },
  {
    slug: "warman-turf-vinyl",
    title: "Backyard turf + vinyl fence",
    location: "Warman, SK",
    tags: ["Turf", "Fencing", "Pavers"],
    image: "/projects/turf-backyard-vinyl.jpg",
    year: "2025",
    summary:
      "Artificial turf, full white vinyl privacy fence, and a paver step path through dark river rock.",
  },
  {
    slug: "stonebridge-vinyl-replacement",
    title: "Rotted wood out, white vinyl in",
    location: "Stonebridge, Saskatoon",
    tags: ["Fencing"],
    image: "/projects/before-after-fence.jpg",
    year: "2025",
    summary:
      "Side-yard fence replacement. The old wood was past saving — we tore it out and installed a full vinyl run in two days.",
  },
  {
    slug: "willowgrove-rock-stream",
    title: "Backyard rock stream feature",
    location: "Willowgrove, Saskatoon",
    tags: ["Landscaping", "Drainage"],
    image: "/projects/before-after-rocks.jpg",
    year: "2025",
    summary:
      "Took a tired patch of grass and turned it into a decorative river-rock stream that also handles spring runoff.",
  },
  {
    slug: "rosewood-deck-river-rock",
    title: "Composite deck + river rock surround",
    location: "Rosewood, Saskatoon",
    tags: ["Decking", "Landscaping"],
    image: "/projects/deck-river-rock.jpg",
    year: "2025",
    summary:
      "Family-friendly composite deck with kid's play area, framed by a clean black-and-white river-rock border.",
  },
  {
    slug: "kensington-front-turf",
    title: "Front yard artificial turf",
    location: "Kensington, Saskatoon",
    tags: ["Turf", "Landscaping"],
    image: "/projects/turf-frontyard-flowers.jpg",
    year: "2025",
    summary:
      "Drought-proof artificial turf front lawn with a marigold-and-zinnia border. Zero mowing, all-summer color.",
  },
  {
    slug: "blossom-paver-pads",
    title: "Round paver pads under blossoms",
    location: "Saskatoon",
    tags: ["Pavers", "Turf"],
    image: "/projects/backyard-blossom-pavers.jpg",
    year: "2025",
    summary:
      "Round paver stepping pads laid into fresh turf — a quiet path under a pink crabapple in full bloom.",
  },
  {
    slug: "stone-facade",
    title: "Black stone facade",
    location: "Saskatoon",
    tags: ["Wall Stone"],
    image: "/projects/stone-facade-process.jpg",
    year: "2025",
    summary:
      "Full-facade stonework on a contemporary build. Hand-cut courses, tight joints, scaffold-up installation.",
  },
] as const;

export const serviceAreas = [
  { slug: "saskatoon", name: "Saskatoon", distanceKm: 0 },
  { slug: "martensville", name: "Martensville", distanceKm: 17 },
  { slug: "warman", name: "Warman", distanceKm: 22 },
  { slug: "clavet", name: "Clavet", distanceKm: 25 },
  { slug: "dalmeny", name: "Dalmeny", distanceKm: 25 },
  { slug: "vanscoy", name: "Vanscoy", distanceKm: 28 },
  { slug: "osler", name: "Osler", distanceKm: 30 },
  { slug: "aberdeen", name: "Aberdeen", distanceKm: 30 },
  { slug: "langham", name: "Langham", distanceKm: 32 },
  { slug: "asquith", name: "Asquith", distanceKm: 33 },
  { slug: "hague", name: "Hague", distanceKm: 45 },
  { slug: "delisle", name: "Delisle", distanceKm: 45 },
  { slug: "allan", name: "Allan", distanceKm: 50 },
  { slug: "borden", name: "Borden", distanceKm: 50 },
  { slug: "hepburn", name: "Hepburn", distanceKm: 50 },
] as const;

export const testimonials = [
  {
    quote:
      "They turned our weed patch into a backyard our kids actually want to play in. The lighting alone made the place look twice as big.",
    author: "The Nguyen Family",
    location: "Evergreen, Saskatoon",
  },
  {
    quote:
      "Tore out 40 feet of rotting fence and replaced it in two days flat. Crew was clean, on-time, and the work is dead straight.",
    author: "Mike R.",
    location: "Stonebridge, Saskatoon",
  },
  {
    quote:
      "Best paver job we've seen in the neighborhood — three years in, still no settling, no weeds, joints tight. Worth every dollar.",
    author: "Sandeep & Priya",
    location: "Willowgrove, Saskatoon",
  },
];

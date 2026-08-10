/**
 * PROJECT DATA
 * ============
 * This is the single source of truth for the "Work" grid on the site.
 * The page (js/main.js) reads this array and builds the project cards
 * automatically — you never need to touch index.html to add a project.
 *
 * To add a new project: copy one of the objects below, paste it inside
 * the PROJECTS array (before the closing "]"), and edit the values.
 * See README.md for a plain-language walkthrough.
 *
 * Fields:
 *   title         - Project name, shown on the card.
 *   category      - One of: "identity" | "packaging" | "social" | "motion" | "photo"
 *   description   - One or two sentences about the project.
 *   image         - Path to a cover image (e.g. "assets/projects/foo.jpg"),
 *                   or "" to show an "Add cover image" placeholder block.
 *   videoEmbedUrl - Optional. For motion projects, a link to the video
 *                   (Vimeo/YouTube/etc). Leave as "" if not applicable.
 *   tags          - Short list of keywords, shown as small metadata labels.
 */

const PROJECTS = [
  {
    title: "Marram & Co. Identity",
    category: "identity",
    description: "Full brand identity and print system for a Dubai-based hospitality group, including stationery and signage guidelines.",
    image: "",
    videoEmbedUrl: "",
    tags: ["branding", "print", "guidelines"]
  },
  {
    title: "Northline Stationery Suite",
    category: "identity",
    description: "Letterhead, business cards and editorial templates built on a modular grid system.",
    image: "",
    videoEmbedUrl: "",
    tags: ["stationery", "editorial", "grid"]
  },
  {
    title: "Studio Nine Skincare",
    category: "packaging",
    description: "Structural packaging and label design for a small-batch skincare line, from concept to print-ready dielines.",
    image: "",
    videoEmbedUrl: "",
    tags: ["packaging", "print", "dieline"]
  },
  {
    title: "Client Three Coffee Bags",
    category: "packaging",
    description: "Pouch design and varietal color system for a specialty coffee roaster's retail line.",
    image: "",
    videoEmbedUrl: "",
    tags: ["packaging", "food & beverage"]
  },
  {
    title: "Ramadan Campaign — Social Set",
    category: "social",
    description: "A month-long content system of story and feed templates for a retail client's seasonal campaign.",
    image: "",
    videoEmbedUrl: "",
    tags: ["social", "campaign", "templates"]
  },
  {
    title: "Client Five Launch Content",
    category: "social",
    description: "Product-launch content series covering feed grid, carousels and countdown assets.",
    image: "",
    videoEmbedUrl: "",
    tags: ["social", "product launch"]
  },
  {
    title: "Northline Brand Film",
    category: "motion",
    description: "A 45-second brand reel introducing Northline's new identity across retail and digital touchpoints.",
    image: "",
    // Example of a populated videoEmbedUrl — replace with a real Vimeo/YouTube link.
    videoEmbedUrl: "https://vimeo.com/",
    tags: ["motion", "brand film", "reel"]
  },
  {
    title: "Studio Nine Product Reel",
    category: "motion",
    description: "Short-form product motion graphics built for paid social placements.",
    image: "",
    videoEmbedUrl: "",
    tags: ["motion", "product", "social ads"]
  },
  {
    title: "Old Dubai — Portrait Series",
    category: "photo",
    description: "A personal portrait series shot across Old Dubai's textile and spice districts.",
    image: "",
    videoEmbedUrl: "",
    tags: ["photography", "portrait", "personal"]
  },
  {
    title: "Marram & Co. Campaign Photography",
    category: "photo",
    description: "Editorial and product photography for Marram & Co.'s seasonal hospitality campaign.",
    image: "",
    videoEmbedUrl: "",
    tags: ["photography", "editorial", "campaign"]
  }
];

// Expose explicitly on window so js/main.js can read it
// (a top-level `const` is not automatically added to `window`).
window.PROJECTS = PROJECTS;

// IMPORTANT: Replace with your own domain address - it's used for SEO in meta tags and schema
const baseURL = "https://demo.magic-portfolio.com";

const routes = {
  "/": true,
  "/about": true,
  "/work": true,
  "/blog": true,
  "/gallery": true,
};

// Enable password protection on selected routes
// Set password in the .env file, refer to .env.example
const protectedRoutes = {
  "/work/automate-design-handovers-with-a-figma-to-code-pipeline": true,
};

import { Geist } from "next/font/google";
import { Geist_Mono } from "next/font/google";

const primaryFont = Geist({
  variable: "--font-primary",
  subsets: ["latin"],
  display: "swap",
});

const monoFont = Geist_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
});

const font = {
  primary: primaryFont,
  secondary: primaryFont,
  tertiary: primaryFont,
  code: monoFont,
};

const style = {
    theme:       'light',         // dark | light
    neutral:     'gray',         // sand | gray | slate
    brand:       'aqua',         // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    accent:      'yellow',       // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    solid:       'contrast',     // color | contrast
    solidStyle:  'flat',         // flat | plastic
    border:      'playful',      // rounded | playful | conservative
    surface:     'translucent',  // filled | translucent
    transition:  'all'           // all | micro | macro
}

const display = {
  location: true,
  time: true,
  themeSwitcher: true
};

/**
 * @typedef {Object} Effects
 * @property {Object} mask
 * @property {boolean} mask.cursor
 * @property {number} mask.x
 * @property {number} mask.y
 * @property {number} mask.radius
 * @property {Object} gradient
 * @property {boolean} gradient.display
 * @property {number} gradient.opacity
 * @property {number} gradient.x
 * @property {number} gradient.y
 * @property {number} gradient.width
 * @property {number} gradient.height
 * @property {number} gradient.tilt
 * @property {string} gradient.colorStart
 * @property {string} gradient.colorEnd
 * @property {Object} dots
 * @property {boolean} dots.display
 * @property {number} dots.opacity
 * @property {string} dots.size
 * @property {string} dots.color
 * @property {Object} grid
 * @property {boolean} grid.display
 * @property {number} grid.opacity
 * @property {string} grid.color
 * @property {string} grid.width
 * @property {string} grid.height
 * @property {Object} lines
 * @property {boolean} lines.display
 * @property {number} lines.opacity
 * @property {string} lines.size
 * @property {number} lines.thickness
 * @property {number} lines.angle
 * @property {string} lines.color
 */

/**
 * @typedef {Object} Mailchimp
 * @property {string} action
 * @property {Effects} effects
 */

const effects = {
  mask: {
    cursor: true,
    x: 50,
    y: 0,
    radius: 100,
  },
  gradient: {
    display: true,
    opacity: 90,
    x: 50,
    y: 0,
    width: 50,
    height: 50,
    tilt: 0,
    colorStart: "accent-background-strong",
    colorEnd: "static-transparent",
  },
  dots: {
    display: true,
    opacity: 20,
    size: "2",
    color: "brand-on-background-weak",
  },
  grid: {
    display: false,
    opacity: 100,
    color: "neutral-alpha-medium",
    width: "0.25rem",
    height: "0.25rem",
  },
  lines: {
    display: false,
    opacity: 100,
    color: "neutral-alpha-medium",
    size: "16",
    thickness: 1,
    angle: 90,
  },
};

const mailchimp = {
  action: "https://url/subscribe/post?parameters",
};

mailchimp.effects = effects;

export { routes, protectedRoutes, effects, style, display, mailchimp, baseURL, font };

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
    transition:  'all',          // all | micro | macro
    scaling:      '100',         // 90 | 95 | 100 | 105 | 110
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

const effects = {
  mask: {
    cursor: false,
    x: 0,
    y: 0,
    radius: 50,
  },
  gradient: {
    display: true,
    opacity: 0.5,
    x: 0,
    y: 0,
    width: 100,
    height: 100,
    tilt: 45,
    colorStart: "#ffffff",
    colorEnd: "#000000",
  },
  dots: {
    display: true,
    opacity: 0.3,
    size: "small",
    color: "#cccccc",
  },
  grid: {
    display: true,
    opacity: 0.2,
    color: "#dddddd",
    width: "10px",
    height: "10px",
  },
  lines: {
    display: true,
    opacity: 0.4,
    size: "medium",
    thickness: 2,
    angle: 30,
    color: "#bbbbbb",
  },
};

/**
 * @typedef {Object} Mailchimp
 * @property {string} action
 * @property {Effects} effects
 */

/**
 * @type {Mailchimp}
 */
const mailchimp = {
  action: "https://url/subscribe/post?parameters",
  effects: effects, // Explicitly include effects in the object definition
};

export { routes, protectedRoutes, effects, style, display, mailchimp, baseURL, font };

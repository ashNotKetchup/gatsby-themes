import { merge } from "theme-ui"
import tailwind from "@theme-ui/preset-tailwind"
import { lightThemeVars, darkThemeVars } from "../utils/prism-themes"
import { colord } from "colord";

// linspace of hues
var hues = [];
for (var i = 0; i < 360; i+=2){
    hues.push(i);
}

var hueBackground = Math.floor(Math.random() * 360);
var hueForeground = Math.floor(Math.random() * 360);

const minHueContrast = 70

if (Math.abs(hueBackground - hueForeground) < minHueContrast){
  if(hueBackground > hueForeground){
    hueBackground+=minHueContrast;
  }
  else{
    hueBackground-=minHueContrast;
  }
}
//  Random set of bgs
// const backgroundColoursLight = hues.map(hue => colord({ h: hue, s: 100, l: 50 }).toHex());
// var bgLight = backgroundColoursLight[Math.floor(Math.random() * backgroundColoursLight.length)] ;



// if()

var bgLight = colord({ h: hueBackground, s: 100, l: 50 }).toHex();
var bgA = bgLight;
var bgB = colord(bgLight).darken(0.4).saturate(0.1).toHex();

//  Random set of fgs
// const foregroundColoursLight = hues.map(hue => colord({ h: hue, s: 100, l: 20 }).toHex());;
var fgLight = colord({ h: hueForeground, s: 100, l: 20 }).toHex();
// if(fgLight-)
var fgA = fgLight;
// colord(fgLight).lighten(0.4).saturate(1).toHex();
var fgB = colord(fgLight).lighten(0.5).toHex();


// implement harmonies from: https://www.npmjs.com/package/colord

// implement font...

// const backgroundColoursB = ['#ffd900', '#ffd900'];
// var bgB = backgroundColoursB[Math.floor(Math.random() * backgroundColoursB.length)] ;

// const foregroundColoursB = ['#226600', '#226600'];
// var fgB = foregroundColoursB[Math.floor(Math.random() * foregroundColoursA.length)];

const theme = merge(tailwind, {
  config: {
    initialColorModeName: `light`,
  },
  colors: {
    text: fgA,
    primary: fgA,
    secondary: fgA,
    background: bgA,
    toggleIcon: fgA,
    heading: fgA,
    divide: fgA,
    muted: fgA,
    highlightLineBg: fgA,
    ...lightThemeVars,
    modes: {
      dark: {
          text: fgB,
          primary: fgB,
          secondary: fgB,
          background: bgB,
          toggleIcon: fgB,
          heading: fgB,
          divide: fgB,
          muted: fgB,
          highlightLineBg: fgB,
        ...darkThemeVars,
      },
    },
    // Combos I like:
    // BG: #00ffa2, FG: #001f66
    // BG: #ffd900, FG: #001f66
    // BG: #ff6200, FG: #226600, or white?
    // Generally, like text with saturation 1, lightness 0.2, and a BG with sat 1, lightness 0.5.
    // randomise combos of hues? With some distance param or nah? can i do this based on cookies? so re-visiting user will get the same experience?
  },
  fonts: {
    body: `-apple-system, BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`,
    heading: 'Georgia, serif',
    monospace: 'Menlo, monospace',
  
  },
  styles: {
    root: {
      color: `text`,
      backgroundColor: `background`,
      margin: 0,
      padding: 0,
      boxSizing: `border-box`,
      textRendering: `optimizeLegibility`,
      WebkitFontSmoothing: `antialiased`,
      MozOsxFontSmoothing: `grayscale`,
    },
    p: {
      fontSize: [1, 1, 2],
      letterSpacing: `-0.003em`,
      lineHeight: `body`,
      "--baseline-multiplier": 0.179,
      "--x-height-multiplier": 0.35,
      wordBreak: `break-word`,
    },
    ul: {
      li: {
        fontSize: [1, 1, 2],
        letterSpacing: `-0.003em`,
        lineHeight: `body`,
        "--baseline-multiplier": 0.179,
        "--x-height-multiplier": 0.35,
      },
    },
    ol: {
      li: {
        fontSize: [1, 1, 2],
        letterSpacing: `-0.003em`,
        lineHeight: `body`,
        "--baseline-multiplier": 0.179,
        "--x-height-multiplier": 0.35,
      },
    },
    h1: {
      variant: `text.heading`,
      fontSize: [4, 5, 5, 6],
      mt: 4,
    },
    h2: {
      variant: `text.heading`,
      fontSize: [3, 4, 4, 5],
      mt: 4,
    },
    h3: {
      variant: `text.heading`,
      fontSize: [2, 3, 3, 4],
      mt: 4,
    },
    h4: {
      variant: `text.heading`,
      fontSize: [1, 2, 2, 3],
      mt: 3,
    },
    h5: {
      variant: `text.heading`,
      fontSize: [1, 2],
      mt: 3,
    },
    h6: {
      variant: `text.heading`,
      fontSize: 1,
      mb: 2,
    },
    blockquote: {
      borderLeftColor: `primary`,
      borderLeftStyle: `solid`,
      borderLeftWidth: `4px`,
      mx: 0,
      pl: 4,
      p: {
        fontStyle: `italic`,
      },
    },
    table: {
      width: `100%`,
      my: 4,
      borderCollapse: `separate`,
      borderSpacing: 0,
      [[`th`, `td`]]: {
        textAlign: `left`,
        py: `4px`,
        pr: `4px`,
        pl: 0,
        borderColor: `muted`,
        borderBottomStyle: `solid`,
      },
    },
    th: {
      verticalAlign: `bottom`,
      borderBottomWidth: `2px`,
      color: `heading`,
    },
    td: {
      verticalAlign: `top`,
      borderBottomWidth: `1px`,
    },
    hr: {
      mx: 0,
    },
    img: {
      borderRadius: `4px`,
      boxShadow: `lg`,
      maxWidth: `100%`,
    },
  },
  layout: {
    container: {
      padding: [3, 4],
      maxWidth: `1024px`,
    },
    content: {
      figure: {
        margin: 0,
        img: {
          borderRadius: `4px`,
          boxShadow: `lg`,
          maxWidth: `100%`,
        },
      },
    },
  },
  text: {
    heading: {
      fontFamily: `heading`,
      fontWeight: `heading`,
      lineHeight: `heading`,
      color: `heading`,
    },
  },
  copyButton: {
    backgroundColor: `background`,
    border: `none`,
    color: `text`,
    cursor: `pointer`,
    fontSize: [`14px`, `14px`, `16px`],
    fontFamily: `body`,
    letterSpacing: `0.025rem`,
    transition: `all 0.3s ease-in-out`,
    "&[disabled]": {
      cursor: `not-allowed`,
    },
    ":not([disabled]):hover": {
      bg: `primary`,
      color: `white`,
    },
    position: `absolute`,
    right: 0,
    zIndex: 1,
    borderRadius: `0 0 0 0.25rem`,
    padding: `0.25rem 0.6rem`,
  },
  dividers: {
    bottom: {
      borderBottomStyle: `solid`,
      borderBottomWidth: `1px`,
      borderBottomColor: `divide`,
      pb: 3,
    },
    top: {
      borderTopStyle: `solid`,
      borderTopWidth: `1px`,
      borderTopColor: `divide`,
      pt: 3,
    },
  },
  links: {
    secondary: {
      color: `secondary`,
      textDecoration: `none`,
      ":hover": {
        color: `heading`,
        textDecoration: `underline`,
      },
      ":focus": {
        color: `heading`,
      },
    },
    listItem: {
      fontSize: [1, 2, 3],
      color: `text`,
    },
  },
})

export default theme

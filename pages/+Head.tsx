// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import "@fortawesome/fontawesome-svg-core/styles.css";
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

// https://vike.dev/Head

// header tags
export default function HeadDefault() {
  return (
    <>
      {/* <!--Meta tags--> */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="description" content="Andrew Vetovitz Personal Site" />
      <meta name="og:description" content="Andrew Vetovitz Personal Site" />

      <link rel="preconnect" href="https://res.cloudinary.com/" crossOrigin="anonymous" />
      {/* fontsource */}
      <link rel="preconnect" href="https://cdn.jsdelivr.net/" crossOrigin="anonymous" />

      <link
        rel="preload"
        as="font"
        type="font/woff2"
        href="https://cdn.jsdelivr.net/fontsource/fonts/allan@latest/latin-400-normal.woff2
"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        type="font/woff2"
        href="https://cdn.jsdelivr.net/fontsource/fonts/roboto:vf@latest/latin-wght-normal.woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        type="font/woff2"
        href="https://cdn.jsdelivr.net/fontsource/fonts/montserrat:vf@latest/latin-wght-normal.woff2"
        crossOrigin="anonymous"
      />

      {/* <!--Icon--> */}
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href="https://res.cloudinary.com/dg25vxfyl/image/upload/w_32,h_32,q_20/v1515015610/website-logo_ruxkwy.png"
      />
    </>
  );
}

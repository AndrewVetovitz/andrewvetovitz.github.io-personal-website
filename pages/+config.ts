import vikeReact from "vike-react/config";
import type { Config } from "vike/types";
import Layout from "../layouts/LayoutDefault";

// Default config (can be overridden by pages)
// https://vike.dev/config

export default {
  // https://vike.dev/Layout
  Layout,

  // https://vike.dev/head-tags
  title: "Andrew Vetovitz Personal Website",
  description:
    "Andrew Vetovitz personal website display his projects, experience, about, and a downloadable copy of his resume",

  // SSG
  prerender: true,

  extends: vikeReact,
} satisfies Config;

import type { ReactElement } from "react";
import App from "./App";

// Single source of truth for every indexable page.
// Paths have no trailing slash (e.g. "/broward-county"), to match vercel.json.
// Each entry is pre-rendered to its own HTML file at build time (see scripts/prerender.mjs)
// and listed in the generated sitemap.xml.
export interface PageRoute {
  path: string;
  title: string;
  description: string;
  element: ReactElement;
}

export const routes: PageRoute[] = [
  {
    path: "/",
    title: "Building Recertification Miami-Dade & Broward | USDC",
    description:
      "Building recertification in Miami-Dade and Broward Counties. Structural and electrical inspections under FBC 8-11(f) and 110.15. Licensed engineers.",
    element: <App />,
  },
];

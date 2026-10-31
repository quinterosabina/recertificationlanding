import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { AppRoutes } from "./app/AppRoutes";

export { routes } from "./app/routes";

// Used only by scripts/prerender.mjs at build time to produce static HTML per route.
export function render(url: string): string {
  return renderToString(
    <StaticRouter location={url}>
      <AppRoutes />
    </StaticRouter>
  );
}

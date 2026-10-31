import { Routes, Route, Link } from "react-router";
import { routes } from "./routes";

function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4 p-8 text-center">
      <h1 className="text-3xl font-bold text-gray-900">Page not found</h1>
      <Link to="/" className="text-blue-600 underline">
        Back to home
      </Link>
    </main>
  );
}

export function AppRoutes() {
  return (
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

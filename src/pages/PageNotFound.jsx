import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

export default function PageNotFound() {
  return (
    <main className="m-10 p-10 bg-[var(--color-dark--1)] min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center text-center">
      <PageNav />
      <div className="mt-32">
        <h1 className="text-5xl mb-8">Page not found 😢</h1>
        <p className="text-2xl mb-12 text-[var(--color-light--1)]">
          We couldn't find the page you were looking for.
        </p>
        <Link to="/" className="bg-[var(--color-brand--2)] text-[var(--color-dark--1)] py-3 px-6 rounded-lg font-semibold text-lg uppercase">
          Go back home
        </Link>
      </div>
    </main>
  );
}

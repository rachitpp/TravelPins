import PageNav from "../components/PageNav";
import { useState, useEffect } from "react";

export default function Pricing() {
  const [animateIn, setAnimateIn] = useState(false);
  
  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => setAnimateIn(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="h-[calc(100vh-5rem)] m-10 bg-[linear-gradient(rgba(36,42,46,0.8),rgba(36,42,46,0.8)),url('/bg.jpg')] bg-cover bg-center p-10 overflow-hidden">
      <PageNav />

      <section className="h-[85%] flex items-center justify-center">
        <div className="w-[clamp(80rem,80%,90rem)] mx-auto grid grid-cols-2 gap-28 items-center">
          <div className={`transition-all duration-1000 ease-out transform ${
            animateIn ? 'translate-x-0 opacity-100' : 'translate-x-[-100px] opacity-0'
          }`}>
            <h2 className="text-4xl leading-tight mb-8 text-[var(--color-brand--2)]">
              Simple pricing.
              <br />
              Just <span className="relative inline-block">
                <span className="absolute -top-4 -right-4 text-sm bg-[var(--color-brand--1)] rounded-full px-2 py-1 transform rotate-12 animate-pulse">Best value!</span>
                $9/month
              </span>.
            </h2>
            <p className="text-base text-[var(--color-light--1)] mb-8">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae vel
              labore mollitia iusto. Recusandae quos provident, laboriosam fugit
              voluptatem iste.
            </p>
            <button 
              className={`bg-[var(--color-brand--2)] text-[var(--color-dark--1)] 
                       font-bold py-3 px-6 rounded-lg uppercase text-base 
                       hover:bg-[var(--color-brand--1)] transition-all duration-300
                       transform hover:scale-105 hover:shadow-lg
                       ${animateIn ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: '400ms' }}
            >
              Subscribe now
            </button>
          </div>
          <img 
            src="img-2.jpg" 
            alt="overview of a large city with skyscrapers" 
            className={`w-full rounded-lg shadow-lg transition-all duration-1000 ease-out transform ${
              animateIn ? 'translate-x-0 opacity-100 rotate-0' : 'translate-x-[100px] opacity-0 rotate-6'
            }`}
            style={{ transitionDelay: '300ms' }}
          />
        </div>
      </section>
    </main>
  );
}

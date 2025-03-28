import PageNav from "../components/PageNav";
import { useState, useEffect } from "react";

export default function Product() {
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
          <img
            src="img-1.jpg"
            alt="person with dog overlooking mountain with sunset"
            className={`w-full rounded-lg shadow-lg transition-all duration-1000 ease-out transform ${
              animateIn ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-[-100px] opacity-0 scale-95'
            }`}
          />
          <div className={`transition-all duration-1000 ease-out transform ${
            animateIn ? 'translate-x-0 opacity-100' : 'translate-x-[100px] opacity-0'
          }`}
            style={{ transitionDelay: '300ms' }}
          >
            <h2 className="text-4xl leading-tight mb-8 text-[var(--color-brand--2)]">
              About WorldWide.
            </h2>
            <p className={`text-base mb-4 text-[var(--color-light--1)] transition-all duration-700 ease-out ${
              animateIn ? 'opacity-100' : 'opacity-0'
            }`}
              style={{ transitionDelay: '600ms' }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo est
              dicta illum vero culpa cum quaerat architecto sapiente eius non
              soluta, molestiae nihil laborum, placeat debitis, laboriosam at fuga
              perspiciatis?
            </p>
            <p className={`text-base text-[var(--color-light--1)] transition-all duration-700 ease-out ${
              animateIn ? 'opacity-100' : 'opacity-0'
            }`}
              style={{ transitionDelay: '900ms' }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
              doloribus libero sunt expedita ratione iusto, magni, id sapiente
              sequi officiis et.
            </p>
            <button 
              className={`mt-8 bg-[var(--color-brand--2)] text-[var(--color-dark--1)] 
                       font-bold py-3 px-6 rounded-lg uppercase text-base 
                       hover:bg-[var(--color-brand--1)] transition-all duration-300
                       transform hover:scale-105 hover:shadow-lg
                       ${animateIn ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: '1200ms' }}
            >
              Learn more
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

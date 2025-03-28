import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import { useState, useEffect } from "react";

export default function Homepage() {
  const [animateIn, setAnimateIn] = useState(false);
  
  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => setAnimateIn(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="h-[calc(100vh-5rem)] m-10 bg-[linear-gradient(rgba(36,42,46,0.8),rgba(36,42,46,0.8)),url('/bg.jpg')] bg-cover bg-center p-10 overflow-hidden">
      <PageNav />

      <section className="flex flex-col h-[85%] items-center justify-center gap-10 text-center">
        <h1 
          className={`text-5xl leading-tight transition-all duration-1000 ease-out transform ${
            animateIn ? 'translate-y-0 opacity-100' : 'translate-y-[-50px] opacity-0'
          }`}
        >
          You travel the world.
          <br />
          WorldWise keeps track of your adventures.
        </h1>
        <h2 
          className={`w-[90%] text-2xl text-[var(--color-light--1)] mb-10 transition-all duration-1000 ease-out delay-300 transform ${
            animateIn ? 'translate-y-0 opacity-100' : 'translate-y-[50px] opacity-0'
          }`}
        >
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>
        <Link 
          to="/login" 
          className={`py-3 px-6 rounded-lg bg-[var(--color-brand--2)] text-[var(--color-dark--1)] 
                     font-bold uppercase no-underline text-base 
                     hover:bg-[var(--color-brand--1)] transition-all duration-300
                     transform hover:scale-110 hover:shadow-lg
                     ${animateIn ? 'animate-bounce opacity-100' : 'opacity-0'}`}
          style={{ animationDelay: '600ms', animationIterationCount: '1' }}
        >
          Start tracking now
        </Link>
      </section>
    </main>
  );
}

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";
import BackButton from "./BackButton";
import Spinner from "./Spinner";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function City() {
  const { id } = useParams();
  const { getCity, currentCity, isLoading } = useCities();
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(
    function () {
      getCity(id);
    },
    [id, getCity]
  );
  
  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => setAnimateIn(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const { cityName, emoji, date, notes, country } = currentCity;

  if (isLoading) return <Spinner />;

  return (
    <div 
      className={`p-8 h-auto max-h-[65vh] bg-[var(--color-dark--2)] rounded-lg overflow-y-auto overflow-x-hidden w-full flex flex-col gap-6 scrollbar-thin shadow-lg transition-all duration-700 ease-out transform ${
        animateIn ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
      }`}
    >
      <div className="flex items-center gap-4 mb-2">
        <div className="w-16 h-16 rounded-full bg-[var(--color-dark--1)] flex items-center justify-center shadow-md">
          <span className="text-4xl">{emoji}</span>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-[var(--color-brand--2)]">{cityName}</h3>
          <p className="text-sm text-[var(--color-light--1)]">{country}</p>
        </div>
      </div>
      
      <div className="flex flex-col gap-2 animate-fadeIn" style={{ animationDelay: '200ms' }}>
        <h6 className="uppercase text-sm font-black text-[var(--color-light--1)] flex items-center">
          <span className="mr-2">📅</span> Visit Date
        </h6>
        <p className="text-base break-words bg-[var(--color-dark--1)] p-3 rounded-md">
          {formatDate(date || null)}
        </p>
      </div>

      {notes && (
        <div className="flex flex-col gap-2 animate-fadeIn" style={{ animationDelay: '300ms' }}>
          <h6 className="uppercase text-sm font-black text-[var(--color-light--1)] flex items-center">
            <span className="mr-2">📝</span> Your notes
          </h6>
          <p className="text-base break-words bg-[var(--color-dark--1)] p-4 rounded-md">
            {notes}
          </p>
        </div>
      )}

      <div className="flex flex-col gap-2 animate-fadeIn" style={{ animationDelay: '400ms' }}>
        <h6 className="uppercase text-sm font-black text-[var(--color-light--1)] flex items-center">
          <span className="mr-2">🔍</span> Learn more
        </h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
          className="text-base bg-[var(--color-dark--1)] p-3 rounded-md text-[var(--color-brand--1)] break-words flex items-center transition-all duration-300 hover:bg-[var(--color-brand--1)] hover:text-[var(--color-dark--1)]"
        >
          <span className="mr-2">🌐</span>
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>

      <div className="mt-auto pt-4 border-t border-[var(--color-dark--1)] animate-fadeIn" style={{ animationDelay: '500ms' }}>
        <BackButton />
      </div>
    </div>
  );
}

export default City;

import { Link } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";
import { useState } from "react";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

function CityItem({ city }) {
  const { currentCity, deleteCity } = useCities();
  const { cityName, emoji, date, id, position, country } = city;
  const [isDeleting, setIsDeleting] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    setIsDeleting(true);
    
    // Delay actual deletion for animation
    setTimeout(() => {
      deleteCity(id);
    }, 300);
  }

  return (
    <li 
      className={`transition-all duration-300 ease-in-out transform ${isDeleting ? 'opacity-0 scale-95 -translate-x-8' : 'opacity-100'}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Link
        className={`flex gap-6 items-center bg-[var(--color-dark--2)] rounded-lg p-4 pl-8 border-l-4 
                   cursor-pointer text-inherit no-underline 
                   transition-all duration-300 ease-in-out 
                   hover:translate-x-2 hover:shadow-lg
                   ${isHovering ? 'border-[var(--color-brand--1)]' : 'border-[var(--color-brand--2)]'}
                   ${id === currentCity.id
                     ? "border-2 border-[var(--color-brand--2)] border-l-4 bg-[var(--color-dark--1)]"
                     : "hover:bg-[var(--color-dark--1)]"}`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <div className="flex flex-col items-center justify-center w-12">
          <span className="text-2xl flex items-center justify-center w-8 h-8 transition-all duration-300 transform-gpu group-hover:scale-110 mb-1">{emoji}</span>
          <span className="text-xs text-[var(--color-light--2)] opacity-70">{country}</span>
        </div>

        <div className="flex flex-col mr-auto">
          <h3 className="text-xl font-semibold">{cityName}</h3>
          <span className="text-xs text-[var(--color-light--1)] opacity-70">Visited on {formatDate(date)}</span>
        </div>

        <button
          className="h-9 w-9 rounded-full border-none bg-[var(--color-dark--1)] text-[var(--color-light--2)] text-xl font-normal cursor-pointer 
                   transition-all duration-200 
                   hover:bg-[var(--color-brand--1)] hover:text-[var(--color-dark--1)] 
                   hover:scale-110 hover:rotate-90
                   focus:outline-none focus:ring-2 focus:ring-[var(--color-brand--2)]
                   relative group"
          onClick={handleClick}
          title="Delete city"
          aria-label="Delete city"
        >
          &times;
          <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[var(--color-dark--1)] text-[var(--color-light--2)] text-xs py-1 px-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Delete city
          </span>
        </button>
      </Link>
    </li>
  );
}

export default CityItem;

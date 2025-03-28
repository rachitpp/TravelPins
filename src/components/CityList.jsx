import Spinner from "./Spinner";
import CityItem from "./CityItem";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";
import { useState, useEffect } from "react";

function CityList() {
  const { cities, isLoading, error, resetCities } = useCities();
  const [isResetting, setIsResetting] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const [animateHeader, setAnimateHeader] = useState(false);

  // Apply animation to header on component mount
  useEffect(() => {
    setAnimateHeader(true);
  }, []);

  // Filter cities based on search query
  useEffect(() => {
    if (!cities) return;
    
    const filtered = searchQuery === "" 
      ? cities 
      : cities.filter(city => 
          city.cityName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          city.country.toLowerCase().includes(searchQuery.toLowerCase())
        );
    
    setFilteredCities(filtered);
    
    // Show message when no cities match search
    setShowMessage(searchQuery !== "" && filtered.length === 0);
  }, [searchQuery, cities]);

  function handleReset() {
    if (!window.confirm("Are you sure you want to reset all your cities to the default list?")) 
      return;
    
    setIsResetting(true);
    setTimeout(() => {
      resetCities();
      setIsResetting(false);
      setSearchQuery("");
    }, 500);
  }

  if (isLoading) return <Spinner />;

  if (error) return <Message message={error} />;

  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  return (
    <div className="w-full h-full flex flex-col">
      <div className={`transition-all duration-700 ease-out transform ${animateHeader ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'}`}>
        <div className="mb-6 px-2 flex justify-between items-center">
          <h2 className="text-xl font-bold text-[var(--color-brand--2)]">
            {cities.length} {cities.length === 1 ? "City" : "Cities"}
          </h2>
          
          <button 
            onClick={handleReset}
            disabled={isResetting}
            className="text-sm bg-[var(--color-dark--1)] hover:bg-[var(--color-brand--1)] hover:text-[var(--color-dark--1)] transition-all duration-300 py-1.5 px-4 rounded-md text-[var(--color-light--2)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand--2)] disabled:opacity-50 disabled:cursor-not-allowed shadow-md transform hover:scale-105"
          >
            {isResetting ? "Resetting..." : "Reset to Default"}
          </button>
        </div>
        
        <div className="mb-6 px-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search cities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-3 pl-10 rounded-lg bg-[var(--color-dark--1)] text-[var(--color-light--2)] 
                        focus:outline-none focus:ring-2 focus:ring-[var(--color-brand--2)] 
                        border-2 border-transparent transition-all duration-300"
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-light--2)]">
              🔍
            </span>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-light--2)] hover:text-[var(--color-brand--1)] transition-colors duration-300"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </div>
      
      {showMessage ? (
        <div className="flex-grow flex items-center justify-center animate-fadeIn">
          <Message message={`No cities found matching "${searchQuery}"`} />
        </div>
      ) : (
        <ul className="w-full h-full overflow-y-auto overflow-x-hidden flex flex-col gap-4 scrollbar-thin pr-2">
          {filteredCities.map((city, i) => (
            <div 
              key={city.id} 
              className="animate-slideIn" 
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <CityItem city={city} />
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CityList;

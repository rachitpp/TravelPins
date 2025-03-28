import {
  createContext,
  useEffect,
  useContext,
  useReducer,
  useCallback,
} from "react";

// Import the static city data
import { initialCities } from "../data/cities";

const CitiesContext = createContext();

const initialState = {
  cities: [],
  isLoading: false,
  currentCity: {},
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };

    case "cities/loaded":
      return {
        ...state,
        isLoading: false,
        cities: action.payload,
      };

    case "city/loaded":
      return { ...state, isLoading: false, currentCity: action.payload };

    case "city/created":
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload],
        currentCity: action.payload,
      };

    case "city/deleted":
      return {
        ...state,
        isLoading: false,
        cities: state.cities.filter((city) => city.id !== action.payload),
        currentCity: {},
      };

    case "rejected":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      throw new Error("Unknown action type");
  }
}

// Function to check if data exists in localStorage
function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem('cities');
    if (serializedState === null) {
      return initialCities;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    console.error("Error loading from localStorage:", e);
    return initialCities;
  }
}

// Function to save data to localStorage
function saveToLocalStorage(cities) {
  try {
    const serializedState = JSON.stringify(cities);
    localStorage.setItem('cities', serializedState);
  } catch (e) {
    console.error("Error saving to localStorage:", e);
  }
}

function CitiesProvider({ children }) {
  const [{ cities, isLoading, currentCity, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  // Initial load of cities from localStorage or static data
  useEffect(function () {
    async function loadCities() {
      dispatch({ type: "loading" });
      
      // Simulate async loading for a smoother experience
      setTimeout(() => {
        const loadedCities = loadFromLocalStorage();
        dispatch({ type: "cities/loaded", payload: loadedCities });
      }, 500);
    }
    loadCities();
  }, []);

  const getCity = useCallback(
    async function getCity(id) {
      if (Number(id) === currentCity.id) return;

      dispatch({ type: "loading" });

      // Simulate async loading for a smoother experience
      setTimeout(() => {
        const city = cities.find(city => city.id === Number(id));
        
        if (city) {
          dispatch({ type: "city/loaded", payload: city });
        } else {
          dispatch({
            type: "rejected",
            payload: "City not found. Please try another city.",
          });
        }
      }, 500);
    },
    [currentCity.id, cities]
  );

  async function createCity(newCity) {
    dispatch({ type: "loading" });

    // Generate a random ID for the new city
    const id = Math.floor(Math.random() * 100000000);
    const createdCity = { ...newCity, id };
    
    // Simulate async loading for a smoother experience
    setTimeout(() => {
      // Add to state
      dispatch({ type: "city/created", payload: createdCity });
      
      // Update localStorage
      const updatedCities = [...cities, createdCity];
      saveToLocalStorage(updatedCities);
    }, 500);
  }

  async function deleteCity(id) {
    dispatch({ type: "loading" });

    // Simulate async loading for a smoother experience
    setTimeout(() => {
      // Remove from state
      dispatch({ type: "city/deleted", payload: id });
      
      // Update localStorage
      const updatedCities = cities.filter(city => city.id !== id);
      saveToLocalStorage(updatedCities);
    }, 500);
  }

  // Reset to initial cities data (for testing)
  function resetCities() {
    saveToLocalStorage(initialCities);
    dispatch({ type: "cities/loaded", payload: initialCities });
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        error,
        getCity,
        createCity,
        deleteCity,
        resetCities
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("CitiesContext was used outside the CitiesProvider");
  return context;
}

export { CitiesProvider, useCities };

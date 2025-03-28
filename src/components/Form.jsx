// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Button from "./Button";
import BackButton from "./BackButton";

import { useUrlPosition } from "../hooks/useUrlPosition";
import Message from "./Message";
import Spinner from "./Spinner";
import { useCities } from "../contexts/CitiesContext";
import { useNavigate } from "react-router-dom";

export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

function Form() {
  const [lat, lng] = useUrlPosition();
  const { createCity, isLoading } = useCities();
  const navigate = useNavigate();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false);
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [emoji, setEmoji] = useState("");
  const [geocodingError, setGeocodingError] = useState("");

  useEffect(
    function () {
      if (!lat && !lng) return;

      async function fetchCityData() {
        try {
          setIsLoadingGeocoding(true);
          setGeocodingError("");

          const res = await fetch(
            `${BASE_URL}?latitude=${lat}&longitude=${lng}`
          );
          
          if (!res.ok) 
            throw new Error("Failed to get location data. Please try again.");
          
          const data = await res.json();

          if (!data.countryCode)
            throw new Error(
              "That doesn't seem to be a city. Click somewhere else 😉"
            );

          setCityName(data.city || data.locality || "");
          setCountry(data.countryName);
          setEmoji(convertToEmoji(data.countryCode));
        } catch (err) {
          console.error("Error in geocoding:", err);
          setGeocodingError(err.message);
        } finally {
          setIsLoadingGeocoding(false);
        }
      }
      fetchCityData();
    },
    [lat, lng]
  );

  async function handleSubmit(e) {
    e.preventDefault();

    if (!cityName || !date) {
      alert("Please provide both a city name and a date");
      return;
    }

    setIsSubmitting(true);

    const newCity = {
      cityName,
      country,
      emoji,
      date,
      notes,
      position: { lat, lng },
    };

    await createCity(newCity);
    setIsSubmitting(false);
    navigate("/app/cities");
  }

  if (isLoadingGeocoding) return <Spinner />;

  if (!lat && !lng)
    return <Message message="Start by clicking somewhere on the map" />;

  if (geocodingError) return <Message message={geocodingError} />;

  return (
    <form
      className={`bg-[var(--color-dark--2)] rounded-lg p-8 w-full flex flex-col gap-8 
                 shadow-lg transform animate-slideIn
                 ${isLoading || isSubmitting ? "opacity-70 pointer-events-none" : ""}`}
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-2 relative group">
        <label htmlFor="cityName" className="text-base font-semibold text-[var(--color-light--1)] transition-colors duration-300">
          City name
        </label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
          className="text-lg p-3 rounded-md bg-[var(--color-dark--1)] 
                   text-[var(--color-light--2)] focus:outline-none 
                   focus:ring-2 focus:ring-[var(--color-brand--2)] 
                   transition-all duration-300"
          required
        />
        <span className="absolute right-4 top-[2.7rem] text-4xl transform transition-transform duration-300 group-hover:scale-110">{emoji}</span>
      </div>

      <div className="flex flex-col gap-2 relative">
        <label htmlFor="date" className="text-base font-semibold text-[var(--color-light--1)]">
          When did you go to {cityName || "this city"}?
        </label>

        <DatePicker
          id="date"
          onChange={(date) => setDate(date)}
          selected={date}
          dateFormat="dd/MM/yyyy"
          className="text-lg p-3 w-full rounded-md bg-[var(--color-dark--1)] 
                    text-[var(--color-light--2)] focus:outline-none 
                    focus:ring-2 focus:ring-[var(--color-brand--2)] 
                    transition-all duration-300"
        />
      </div>

      <div className="flex flex-col gap-2 relative">
        <label htmlFor="notes" className="text-base font-semibold text-[var(--color-light--1)]">
          Notes about your trip to {cityName || "this city"}
        </label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
          className="text-lg p-3 h-32 rounded-md bg-[var(--color-dark--1)] 
                    text-[var(--color-light--2)] focus:outline-none 
                    focus:ring-2 focus:ring-[var(--color-brand--2)] 
                    transition-all duration-300 resize-none"
        />
      </div>

      <div className="flex justify-between">
        <Button type="primary" className="transform hover:scale-105 transition-transform duration-300">
          {isSubmitting ? "Adding..." : "Add"}
        </Button>
        <BackButton />
      </div>
    </form>
  );
}

export default Form;

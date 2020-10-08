import React, { useState, useEffect } from "react";

function LocationFilter({ handleFulltime, handleCityChange }) {
  const [cities, setCities] = useState([
    "London",
    "Amsterdam",
    "Newyork",
    "Berlin",
    "Hamburg",
  ]);
  const [location, setLocation] = useState("");

 
  const handleLocationChange = (value) => {
    setLocation(value);
  }

  return (
    <div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          name="fulltimeCheck"
          onChange={(e) => handleFulltime(e.target.checked)}
        />
        <label class="form-check-label" for="fulltimeCheck">
          Fulltime
        </label>
      </div>
      <label for="Location" className="mt-3">
        Location
      </label>
      <div class="input-group mb-2">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">
            <i class="material-icons">public</i>
          </span>
        </div>
        <input
          type="text"
          class="form-control"
          placeholder="city, state, zip code, country"
          aria-label="Location"
          aria-describedby="basic-addon1"
          value={location}
          name="city"
          onChange={(e) => handleLocationChange(e.target.value)}
          onKeyUp={(e) => e.key === 'Enter' ? handleCityChange(location) : console.log(e.key)}
        />
      </div>
      {cities.map((city) => {
        return (
          <div class="form-check mt-2">
            <input
              type="radio"
              class="form-check-input"
              value={city}
              id={city}
              name="city"
              onChange={e => handleCityChange(e.target.value)}
            />
            <label class="form-check-label" for={city}>
              {city}
            </label>
          </div>
        );
      })}
    </div>
  );
}

export default LocationFilter;

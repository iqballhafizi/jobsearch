import React, { useState, useEffect } from "react";


import Search from "./components/Search.js";
import LocationFilter from "./components/LocationFilter.js";
import Joblist from "./components/Joblist.js";


function Home() {
      // Declare a new state variable, which we'll call "jobList"
  const [jobs, setJobs] = useState([]);
  const [query, setQuery] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("hamburg");
  const [fulltime, setFulltime] = useState(false);

  useEffect(() => {
    fetch(
      `https://cors-anywhere.herokuapp.com/jobs.github.com/positions.json?${query}`
    )
      .then((response) => response.json())
      .then((data) => setJobs(data))
      .catch((error) => console.log("error fetching jobs" + error));
  }, [query]);

  const updateDescription = (description) => {
    setDescription(description);
  };

  const handleFulltime = (fulltime) => {
    setFulltime(fulltime);
  };

  const handleCityChange = (location) => {
    if (location.trim() !== "") {
      setLocation(location);
    }
  };

  useEffect(() => {
    const prepareQuery = () => {
      let queryString = "";

      queryString += "&location=" + location;

      queryString += "&description=" + description;

      queryString += "&fulltime=" + fulltime;

      setQuery(queryString);
    };

    prepareQuery();
  }, [description, location, fulltime]); // ✅ OK (our effect only uses `someProp`)

  return (
    <section>
      <header>
        <div className="search-wrapper mt-3">
          <Search updateDescription={updateDescription} />
        </div>
      </header>
      <div class="row mt-4">
        <div class="col-md-4">
          {" "}
          <LocationFilter
            handleFulltime={handleFulltime}
            handleCityChange={handleCityChange}
          />

        </div>
        <div class="col-md-8">
          <Joblist jobs={jobs} />
        </div>
      </div>
    </section>
  );
}

export default Home;

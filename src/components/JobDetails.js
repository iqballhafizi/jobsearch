import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import parse from "html-react-parser";

import "./styles/JobDetails.css";

function JobDetails() {
  const { id } = useParams();
  const [job, setJob] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://cors-anywhere.herokuapp.com/jobs.github.com/positions/${id}.json`
    )
      .then((response) => response.json())
      .then((data) => {
        setJob(data);
        setLoading(false);
      })
      .catch((error) => console.log("error fetching jobs" + error));
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col-sm-12 col-md-4 job-detail-side-col">
          <p>
            <Link to="/" className="d-flex align-items-center">
              <span class="material-icons">keyboard_backspaces</span>
              Back to search
            </Link>
          </p>
          <p>How to Apply</p>
          {loading === false && parse(job.how_to_apply)}
        </div>
        <div className="col-sm-12 col-md-8">
          {loading ? (
            <p>Loading </p>
          ) : (
            <React.Fragment>
              <div className="job-title mb-2">
                <h3>{job.title}</h3>
                <span className="job-type">{job.type}</span>
              </div>
              <p class="announced-at d-flex align-items-center">
                <i className="material-icons mr-2">query_builder</i>
                <small>
                  {new Date(new Date() - new Date(job.created_at)).getDay() ===
                  0
                    ? "Today"
                    : new Date(new Date() - new Date(job.created_at)).getDay() +
                      "day ago"}
                </small>
              </p>
              <div className="row company-details-wrapper">
                <div className="col-2 image-wrapper">
                  <img src={job.company_logo} />
                </div>
                <div className=" col-10 company-details">
                  <h5>{job.company}</h5>
                  <p className="company-location">
                    <i className="material-icons mr-2">public</i> {job.location}
                  </p>
                </div>
              </div>
              {parse(job.description)};
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
}

export default JobDetails;

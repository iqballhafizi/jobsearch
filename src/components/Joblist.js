import React from "react";

import "./styles/joblist.css";
import { Link } from "react-router-dom";

function Joblist({ jobs }) {
  let jobList = jobs.map((job) => {
    return (
      <div className="job-item">
        <div className="row" key={job.id}>
          <div className="col-3 col-md-2">
            <Link to={`/job/${job.id}`}>
              <img src={job.company_logo} />
            </Link>
          </div>

          <div className="col-9 col-md-10">
            <Link to={`/job/${job.id}`}>
              <p>{job.company}</p>
              <p>{job.title}</p>
              <p>{job.type}</p>
            </Link>
          </div>
        </div>
        <div className="row">
          <div class="col-6  offset-md-2  col-md-4  d-flex align-items-center">
            <i class="material-icons">public</i>
            <small>{job.location}</small>
          </div>
          <div class="col-6 col-md-4 d-flex align-items-center">
            <i class="material-icons">query_builder</i>
            <small>
              {new Date(new Date() - new Date(job.created_at)).getDay() === 0
                ? "Today"
                : new Date(new Date() - new Date(job.created_at)).getDay() +
                  "day ago"}
            </small>
          </div>
        </div>
      </div>
    );
  });
  return <div className="job-wrapper">{jobList}</div>;
}

export default Joblist;

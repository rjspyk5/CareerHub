import { useEffect, useState } from "react";
import { getIteam } from "../../../assets/utilites/localstorage";

import { useLoaderData } from "react-router-dom";
import { JobCard } from "../FetauredJob/JobCard";

export const Applied = () => {
  const { data } = useLoaderData();
  const [jobs, setjobs] = useState([]);
  const [displayJob, setdisplayJob] = useState([]);
  const handleClick = (filter) => {
    if (filter === "remote") {
      const update = jobs.filter((el) => el.remote_or_onsite === "Remote");
      setdisplayJob(update);
    } else if (filter === "onsite") {
      const update = jobs.filter((el) => el.remote_or_onsite === "Onsite");
      setdisplayJob(update);
    } else if (filter === "all") {
      setdisplayJob(jobs);
    }
  };

  useEffect(() => {
    if (data.length > 0) {
      const jobsApplied = getIteam();
      const jobs = data.filter((el) => jobsApplied.includes(el.id));
      setjobs(jobs);
      setdisplayJob(jobs);
    }
  }, [data]);

  return (
    <div>
      <h1 className="text-center font-bold text-3xl py-14">Applied Jobs</h1>
      <div className="space-y-6">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1">
            Filter
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li onClick={() => handleClick("all")}>
              <a>All Jobs</a>
            </li>
            <li onClick={() => handleClick("remote")}>
              <a>Remote</a>
            </li>
            <li onClick={() => handleClick("onsite")}>
              <a>Onsite</a>
            </li>
          </ul>
        </div>
        {displayJob.map((el) => (
          <JobCard key={el.id} job={el} />
        ))}
      </div>
    </div>
  );
};

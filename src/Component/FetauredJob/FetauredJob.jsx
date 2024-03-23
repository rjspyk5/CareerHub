import React, { useEffect, useState } from "react";
import { JobCard } from "./JobCard";
import axios from "axios";

export const FetauredJobs = () => {
  const [jobs, setjobs] = useState([]);
  const [dataLength, setdataLength] = useState(4);
  useEffect(() => {
    axios.get("jobs.json").then((res) => setjobs(res.data));
  }, []);

  return (
    <>
      <div className="grid grid-cols-2 gap-6">
        {jobs.slice(0, dataLength).map((el) => (
          <JobCard key={el.id} job={el} />
        ))}
      </div>
      <div className={dataLength === jobs.length && "hidden"}>
        <button
          onClick={() => setdataLength(jobs.length)}
          type="button"
          className="bg-gradient-to-t   rounded-lg from-[#7E90FE] font-semibold text-white px-4 py-2 to-[#7E90FE]"
        >
          Show all
        </button>
      </div>
    </>
  );
};

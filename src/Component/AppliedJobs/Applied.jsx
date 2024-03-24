import { useEffect, useState } from "react";
import { getIteam } from "../../../assets/utilites/localstorage";

import { useLoaderData } from "react-router-dom";
import { EachJob } from "./EachJob";

export const Applied = () => {
  const { data } = useLoaderData();
  const [jobs, setjobs] = useState([]);
  const [displayJob, setdisplayJob] = useState([]);

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
        {displayJob.map((el) => (
          <EachJob key={el.id} />
        ))}
      </div>
    </div>
  );
};

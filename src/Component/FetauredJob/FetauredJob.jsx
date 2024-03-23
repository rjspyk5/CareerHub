import React from "react";
import { JobCard } from "./JobCard";

export const FetauredJobs = ({ jobs }) => {
  return (
    <div className="grid grid-cols-2 gap-6">
      {jobs.map((el) => (
        <JobCard key={el.id} job={el} />
      ))}
    </div>
  );
};

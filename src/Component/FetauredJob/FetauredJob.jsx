import React from "react";
import { Job } from "./Job";

export const FetauredJobs = ({ jobs }) => {
  return (
    <div>
      {jobs.map((el) => (
        <Job key={el.id} job={el} />
      ))}
    </div>
  );
};

import React from "react";
import { Banner } from "../Banner/Banner";
import { JobCatagory } from "../JobCatagory/JobCatagory";

import { useLoaderData } from "react-router-dom";
import { FetauredJobs } from "../FetauredJob/FetauredJob";

export const Home = () => {
  const jobs = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <JobCatagory></JobCatagory>
      <FetauredJobs jobs={jobs.data}></FetauredJobs>
    </div>
  );
};

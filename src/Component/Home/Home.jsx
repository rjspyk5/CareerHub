import React from "react";
import { Banner } from "../Banner/Banner";
import { JobCatagory } from "../JobCatagory/JobCatagory";
import { FetauredJob } from "../FetauredJob/FetauredJob";

export const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <JobCatagory></JobCatagory>
      <FetauredJob></FetauredJob>
    </div>
  );
};

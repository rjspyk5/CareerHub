import { Banner } from "../Banner/Banner";
import { JobCatagory } from "../JobCatagory/JobCatagory";

import { FetauredJobs } from "../FetauredJob/FetauredJob";

export const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <JobCatagory></JobCatagory>
      <FetauredJobs></FetauredJobs>
    </div>
  );
};

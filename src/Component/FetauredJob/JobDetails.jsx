import React from "react";
import { useLoaderData } from "react-router-dom";

export const JobDetails = () => {
  const jobs = useLoaderData();
  return <div>JobDetails</div>;
};

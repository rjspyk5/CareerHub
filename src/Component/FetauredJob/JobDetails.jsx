import React from "react";
import { useLoaderData, useParams, useRouteLoaderData } from "react-router-dom";

export const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  console.log(jobs.data);

  return <div>JobDetails</div>;
};

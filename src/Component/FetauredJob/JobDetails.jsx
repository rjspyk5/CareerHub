import React from "react";
import { useLoaderData, useParams, useRouteLoaderData } from "react-router-dom";

export const JobDetails = () => {
  const { data } = useLoaderData();
  const { id } = useParams();
  console.log(data);

  return <div>JobDetails</div>;
};

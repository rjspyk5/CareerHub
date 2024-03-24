import React from "react";
import { useLoaderData, useParams, useRouteLoaderData } from "react-router-dom";
import {
  getIteam,
  setIteam,
  removeIteam,
} from "../../../assets/utilites/localstorage";
export const JobDetails = () => {
  const { data } = useLoaderData();
  const { id } = useParams();
  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    job_title,
    contact_information: { phone, adress, email },
  } = data.find((el) => parseInt(id) === el.id);
  const handleApply = (id) => {
    setIteam(id);
  };
  return (
    <div>
      <h1 className="text-center font-bold text-3xl py-14">Job Details</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <h1>
            <span className="font-semibold text-lg">Job description:</span>
            {job_description}
          </h1>
          <h1>
            <span className="font-semibold text-lg">Job Responsibility:</span>
            {job_responsibility}
          </h1>
          <h1>
            <span className="font-semibold text-lg">
              Educational Requirements:
            </span>
            {educational_requirements}
          </h1>
          <h1>
            <span className="font-semibold text-lg">Experiences:</span>
            {experiences}
          </h1>
        </div>

        <div className="bg-[#7E90FE1A] p-4 rounded-md">
          <div>
            <p className="text-lg font-bold pb-4 border-b">Job Details</p>
            <h1>
              <span className="font-medium">Salary:</span>
              {salary}
            </h1>
            <h1>
              <span className="font-medium">Job Title:</span>
              {job_title}
            </h1>
            <button
              onClick={() => handleApply(id)}
              className="btn btn-sm my-5 btn-primary"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { useNavigate } from "react-router-dom";

export const JobCard = ({
  job: {
    id,
    logo,
    job_title,
    remote_or_onsite,
    location,
    job_type,
    salary,
    company_name,
  },
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/post/${id}`);
  };
  return (
    <>
      {" "}
      <div className="card card-compact p-10 border bg-base-100 shadow-xl space-y-5">
        <div className="max-w-44 ">
          <img className="w-full" src={logo} alt="Shoes" />
        </div>
        <h1 className="mt-5 font-bold text-2xl">{job_title}</h1>
        <p className="text-[#757575] text-lg">{company_name}</p>
        <div className="flex gap-3">
          <div className="px-4 border font-semibold border-[#7E90FE] rounded-md text-[#9873FF] py-2">
            {remote_or_onsite}
          </div>
          <div className="px-4 border font-semibold border-[#7E90FE] rounded-md text-[#9873FF] py-2">
            {job_type}
          </div>
        </div>
        <button
          onClick={handleClick}
          type="button"
          className="bg-gradient-to-t max-w-32 rounded-lg from-[#7E90FE] font-semibold text-white px-4 py-2 to-[#7E90FE]"
        >
          view Details
        </button>
      </div>
    </>
  );
};

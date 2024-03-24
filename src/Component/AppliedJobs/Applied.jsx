import React, { useEffect, useState } from "react";
import { getIteam } from "../../../assets/utilites/localstorage";
import axios from "axios";
import { useLoaderData } from "react-router-dom";

export const Applied = () => {
  const { data } = useLoaderData();

  const [jobsId, setjobsId] = useState([]);

  useEffect(() => {
    if (data.length > 0) {
      const jobsApplied = getIteam();
      const jobs = data.filter((el) => jobsApplied.includes(el.id));
      console.log(jobs);
    }
  }, []);
  return <div></div>;
};

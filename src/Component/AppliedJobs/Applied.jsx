import React, { useEffect, useState } from "react";
import { getIteam } from "../../../assets/utilites/localstorage";
import axios from "axios";

export const Applied = () => {
  const [jobsId, setjobsId] = useState([]);
  const [jobs, setjobs] = useState([]);
  useEffect(() => {
    axios.get("jobs.json").then((res) => setjobs(res));
  }, []);
  return <div></div>;
};

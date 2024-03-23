import axios from "axios";
import React, { useEffect, useState } from "react";
import { CatagoryCard } from "./CatagoryCard";

export const JobCatagory = () => {
  const [catagory, setCatagory] = useState([]);
  useEffect(() => {
    axios.get("catagories.json").then((res) => setCatagory(res.data));
  }, []);

  return (
    <div>
      {catagory.map((el) => (
        <CatagoryCard key={el.id} catagory={el} />
      ))}
    </div>
  );
};

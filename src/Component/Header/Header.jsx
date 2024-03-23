import { NavLink } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

export const Header = () => {
  const [toggle, settoggle] = useState(true);
  const menu = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-green-500 font-bold" : ""
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/statistics"
        className={({ isActive }) =>
          isActive ? "text-green-500 font-bold" : ""
        }
      >
        Statistics
      </NavLink>
      <NavLink
        to="/applied"
        className={({ isActive }) =>
          isActive ? "text-green-500 font-bold" : ""
        }
      >
        Applied Jobs
      </NavLink>
      <NavLink
        to="/blog"
        className={({ isActive }) =>
          isActive ? "text-green-500 font-bold" : ""
        }
      >
        Blog
      </NavLink>
    </>
  );
  return (
    <>
      <div className=" flex justify-between items-center">
        <h1 className="font-bold md:text-2xl flex items-center justify-center gap-3">
          <span className="md:hidden block">
            {toggle ? (
              <MdMenu onClick={() => settoggle(!toggle)} />
            ) : (
              <RxCross2 onClick={() => settoggle(!toggle)} />
            )}
          </span>
          CarrerHub
        </h1>
        <ul className="space-x-5 hidden md:block">{menu}</ul>
        <button className="font-extrabold rounded-lg p-2 text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">
          Start Applying
        </button>
      </div>
      <div className="block md:hidden">
        {toggle ? "" : <ul className="flex flex-col">{menu}</ul>}
      </div>
    </>
  );
};

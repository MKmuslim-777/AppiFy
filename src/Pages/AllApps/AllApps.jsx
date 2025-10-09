import React, { Suspense, useState } from "react";
import useApps from "../../Hooks/useApps";
import AllAppsCards from "./AllAppsCards";
import NotFoundApps from "../Errors/NotFoundApps";

const AllApps = () => {
  const { apps } = useApps();
  const [search, setSearch] = useState("");
  const trimed = search.trim().toLocaleLowerCase();
  const searchAbleApps = trimed
    ? apps.filter((searchApp) =>
        searchApp.title.toLocaleLowerCase().includes(trimed)
      )
    : apps;

  return (
    <div className="md:container mx-auto my-20">
      <div className="pb-10">
        <h1 className="text-center text-5xl font-bold">Our All Applications</h1>
        <p className="text-center text-[20px] mt-4.5 text-gray-500 md:px-0 px-2.5">
          Explore All Apps on the market Developed by us. We Code for Millions
        </p>
      </div>
      <div className="flex justify-between items-center py-8">
        <div>
          <h1 className="text-2xl font-bold">
            ({searchAbleApps.length}) Apps Found
          </h1>
        </div>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            required
            placeholder="Search app"
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>
      </div>
      <div className=" ">
        {searchAbleApps.length === 0 ? (
          <NotFoundApps />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 px-2.5">
            {searchAbleApps.map((app) => (
              <AllAppsCards key={app.id} app={app}></AllAppsCards>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllApps;

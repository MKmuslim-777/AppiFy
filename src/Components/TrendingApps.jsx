import React, { use } from "react";
import { Link } from "react-router";
import useApps from "../Hooks/useApps";
import SingleApp from "./SingleApp";
import { TrendingUp } from "lucide-react";

const TrendingApps = () => {
  const { apps } = useApps();
  const appsLimit = apps.slice(0, 8);

  return (
    <div>
      <div className="md:container mx-auto my-10 ">
        <h1 className="text-center  text-4xl md:text-[45px] font-bold">
          <span className="flex justify-center items-center">Trending Apps <TrendingUp className="text-[#632EE3] ml-2.5 "/></span>
          
        </h1>
        <p className="text-center py-5 text-[20px] md:px-0 px-2.5">
          Explore All Trending Apps on the Market Developed by us
        </p>

        <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-20 ">
          {appsLimit.map((app) => (
            <SingleApp key={app.id} app={app}></SingleApp>
          ))}
        </div>

        <div className="text-center">
          <Link
            className="btn bg-gradient-to-br from-[#632EE3] to-[#632EE3]/60 text-white transition-all duration-300 ease-in-out hover:scale-103 hover:shadow-lg mt-10"
            to={"/AllApps"}
          >
            Show All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrendingApps;

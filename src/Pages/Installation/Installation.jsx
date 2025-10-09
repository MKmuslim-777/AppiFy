import React from "react";
import { getDate } from "../../Until/localStorage";
import useApps from "../../Hooks/useApps";

import InstalledApps from "./InstalledApps";
import NoInstalledApps from "../Errors/NoInstalledApps";

const Installation = () => {
  const { apps } = useApps();
  const installedData = getDate();

  const installedApps = apps.filter((app) => installedData.includes(app.id));

  return (
    <div className="container">
      <div className="my-20">
        <h1 className="text-center  text-4xl md:text-[45px] font-bold">
          Your Installed Apps
        </h1>
        <p className="text-[18px] text-gray-500 my-2.5 text-center">
          Explore All Trending Apps on the Market developed by us.
        </p>
        <div className="flex justify-between items-center mt-20">
          <h1 className="text-2xl font-bold">
            You installed ({installedApps.length}) Apps
          </h1>
          <button className="btn">Sort</button>
        </div>
        <div>
          {installedApps.length === 0 ? (
            <NoInstalledApps />
          ) : (
            installedApps.map((apk) => (
              <InstalledApps key={apk.id} apk={apk}></InstalledApps>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Installation;

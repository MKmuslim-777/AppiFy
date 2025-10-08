import React from "react";
import useApps from "../../Hooks/useApps";

import AllAppsCards from "./AllAppsCards";

const AllApps = () => {
    const {apps} = useApps()
  return (
    <div className="md:container mx-auto my-20">
        <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {
            apps.map(app => <AllAppsCards key={app.id} app={app}></AllAppsCards>)
          }
        </div>
    </div>
  );
};

export default AllApps;

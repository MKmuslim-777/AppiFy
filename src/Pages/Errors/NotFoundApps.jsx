import React from "react";
import { useNavigate } from "react-router";

const NotFoundApps = () => {
    const navigate = useNavigate()
  return (
    <div className="min-h-screen flex items-center justify-center p-6 ">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-light text-error"><span className="text-5xl">🔍</span> App Not Available</h1>
        <p className="text-base-content/50 text-xl">
          This application is not found in your library.
        </p>
      </div>
    </div>
  );
};

export default NotFoundApps;

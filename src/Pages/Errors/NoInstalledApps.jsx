import React from "react";
import { useNavigate } from "react-router";

const NoInstalledApps = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-base-200 to-base-300 flex items-center justify-center p-6">
      <div className="text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-light text-base-content">
            No apps yet
          </h1>
          <p className="text-base-content/50 text-lg">
            Start by installing your first application
          </p>
        </div>
        
        <button 
          onClick={() => navigate('/AllApps')}
          className="btn btn-primary btn-wide text-lg"
        >
          Explore Apps
        </button>
      </div>
    </div>
  );
};

export default NoInstalledApps;

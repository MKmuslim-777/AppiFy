import React from "react";
import errorimg from "../../assets/Images/error-404.png";
import { Link, useNavigate } from "react-router";

const RouteError = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-[1350px] mx-auto flex justify-center">
      <div className="my-18 text-center">
        <img src={errorimg} alt="" />
        <h1 className="text-5xl font-bold my-3.5">Oops, page not found!</h1>
        <p className="text-[18px] text-gray-500 my-2.5">The page you are looking for is not available.</p>
        <button
          className="btn bg-gradient-to-br from-[#632EE3] to-[#632EE3]/60 text-white transition-all duration-300 ease-in-out hover:scale-103 hover:shadow-lg"
          onClick={() => navigate(-1)}
        >
          {" "}
          Go Back!
        </button>
      </div>
    </div>
  );
};

export default RouteError;

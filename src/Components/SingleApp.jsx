import React from "react";
import downloadIcon from "../assets/Images/icon-downloads.png";
import starIcon from "../assets/Images/icon-ratings.png";
import { Link } from "react-router";

const SingleApp = ({ app }) => {
  const { image, title, downloads, ratingAvg } = app;
  return (
    <div>
      <Link to={`/AppDetails/${app.id}`}>
        <div className="card bg-base-100 md:w-96 shadow-sm pt-4 px-4 transition-all duration-300 ease-in-out hover:scale-103 hover:shadow-lg">
          <figure>
            <img src={image} alt="Shoes" className="rounded-lg h-[200px] md:h-[300px] " />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <div className="flex justify-between items-center">
              <div className="flex items-center btn bg-green-100/30 border-none">
                <img src={downloadIcon} className="w-5" alt="" />
                <p className="text-green-500 ml-2.5">{downloads}</p>
              </div>
              <div className="flex items-center btn bg-[#FF8811]/10 border-none">
                <img src={starIcon} className="w-5" alt="" />
                <p className="text-[#FF8811] ml-2.5">{ratingAvg}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SingleApp;

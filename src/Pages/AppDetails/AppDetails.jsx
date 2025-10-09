import React from "react";
import useApps from "../../Hooks/useApps";
import { useParams } from "react-router";
import downloadIcon from "../../assets/Images/icon-downloads.png";
import starIcon from "../../assets/Images/icon-ratings.png";
import reviewIcon from "../../assets/Images/icon-review.png";
import AppsError from "../Errors/AppsError";
import { setData } from "../../Until/localStorage";



const AppDetails = () => {
  const { apps, loading } = useApps();
  const { id } = useParams();
  // const app = apps.map(apk => console.log(apk.id))
  if (loading) {
    return <h1>Loading....</h1>;
  }
  const app = apps.find((p) => p.id === Number(id));

  if (!app) {
    return <AppsError></AppsError>;
  }

  const {
    image,
    title,
    downloads,
    reviews,
    size,
    description,
    companyName,
    ratingAvg,
    ratings,
  } = app || {};
  // console.log(image);


  return (
    <div className="container my-20 px-5">
      <div className="flex md:flex-row flex-col border-b-2 border-gray-300 py-10">
        <div className="my-10">
          <img className="w-[200px] md:w-[250px]" src={image} alt="" />
        </div>
        <div className="ml-10">
          <div className="border-b-2 border-gray-300 w-full py-3">
            <h1 className="text-3xl text-[#001931] font-bold mb-2.5">
              {title}
            </h1>
            <p className="text-gray-500">
              Developed by:{" "}
              <span className="text-[#632EE3] font-bold">{companyName}</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-2.5 gap-10">
            <div>
              <img src={downloadIcon} alt="" />
              <p className="text-gray-500 my-2.5">Downloads</p>
              <p className="text-5xl font-bold">{downloads}</p>
            </div>

            <div>
              <img src={starIcon} alt="" />
              <p className="text-gray-500 my-2.5">Average Rating</p>
              <p className="text-5xl font-bold">{ratingAvg}</p>
            </div>

            <div>
              <img src={reviewIcon} alt="" />
              <p className="text-gray-500 my-2.5">Average Rating</p>
              <p className="text-5xl font-bold">{reviews}</p>
            </div>
          </div>
          <div>
            <button
              className="btn bg-green-500 text-white my-5 transition-all duration-300 ease-in-out hover:scale-103"
              onClick={() => setData(app)}
            >
              Install Now <span>({size}) MB</span>
            </button>
            
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-[20px] font-bold my-2">Ratings</h1>

        <div></div>
      </div>
      <div className="my-14">
        <h1 className="text-[20px] font-bold my-2">Description</h1>
        <p className="text-[18px] text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;

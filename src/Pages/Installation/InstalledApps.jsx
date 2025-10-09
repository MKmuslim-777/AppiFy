import React from "react";
import downloadIcon from "../../assets/Images/icon-downloads.png";
import starIcon from "../../assets/Images/icon-ratings.png";

const InstalledApps = ({ apk }) => {
  const { image, title, downloads, size, ratingAvg } = apk;
  return (
    <div>
      <div>
        <div className="md:flex mt-3.5 items-center justify-between bg-white p-3.5 rounded-2xl">
          <div className="flex items-center">
            <figure className="w-[100px] h-[100px] bg-gray-100 rounded-2xl p-5 flex justify-center items-center">
              <img
                src={image}
                alt="apps"
                className="rounded-lg h-[100px] w-[100px] m-2.5"
              />
            </figure>
            <div className="ml-7">
              <h1 className="text-2xl font-bold">{title}</h1>
              <div className="flex mt-2.5">
                <div className="flex items-center">
                  <img className="w-[20px]" src={downloadIcon} alt="" />
                  <p className="text-green-500 ml-2.5 font-bold">{downloads}</p>
                </div>

                <div className="flex items-center ml-1.5">
                  <img className="w-[20px]" src={starIcon} alt="" />
                  <p className="text-yellow-500 ml-1.5 font-bold">
                    {ratingAvg}
                  </p>
                </div>
                <div className="ml-1.5">
                  <p className="text-gray-500">{size} MB</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button className="btn md:ml-0 ml-40 text-center bg-green-500 text-white my-5 transition-all duration-300 ease-in-out hover:scale-103">
              Uninstall
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstalledApps;

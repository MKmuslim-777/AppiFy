import React from "react";
import bannerImg from "../assets/Images/hero.png";

const Banner = () => {
  return (
    <div className="">
      <div className="container">
        <div className="flex flex-col justify-center items-center mt-[80px]">
          <h1 className="text-[#003049] text-8xl font-bold">We Build</h1>
          <h1 className="text-[#003049] text-8xl font-bold">
            <span className="bg-gradient-to-r from-[#632EE3] to-[#632EE3]/70 text-transparent bg-clip-text font-extrabold">
              Productive
            </span>{" "}
            Apps
          </h1>
        </div>
        <div className="text-center my-12 mx-10">
          <p className="px-10 text-[24px] text-gray-500">
            AppiFy is a modern digital hub where innovation meets productivity.
            We craft and share powerful, user-friendly apps that simplify life,
            inspire creativity, and empower users everywhere.
          </p>
        </div>
        <div className="text-center gap-4">
          <button className="btn mr-3 bg-white ">Play Store</button>
          <button className="btn bg-white ">App Store</button>
        </div>
        <div>
          <img src={bannerImg} className="mx-auto mt-10" alt="" />
        </div>
      </div>
      <div className="h-[250px] w-full bg-[#632EE3]">

      </div>
    </div>
  );
};

export default Banner;

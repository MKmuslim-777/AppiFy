import React from "react";
import bannerImg from "../assets/Images/hero.png";
import playStoreIcon from "../assets/Images/playstore.png";
import appStoreIcon from "../assets/Images/appstore.png";

const Banner = () => {
  return (
    <div className="">
      <div className="">
        <div className="flex flex-col justify-center items-center mt-[80px]">
          <h1 className="text-[#003049] text-6xl md:text-8xl font-bold">We Build</h1>
          <h1 className="text-[#003049] text-6xl md:text-8xl font-bold text-center">
            <span className="bg-gradient-to-r from-[#632EE3] to-[#632EE3]/70 text-transparent bg-clip-text font-extrabold">
              Productive
            </span>{" "}
            Apps
          </h1>
        </div>
        <div className="text-center my-12 mx-10">
          <p className="md:px-10 text-[18px] md:text-[24px] text-gray-500 md:w-[1200px] w-full mx-auto">
            AppiFy is a modern digital hub where innovation meets productivity.
            We craft and share powerful, user-friendly apps that simplify life,
            inspire creativity, and empower users everywhere.
          </p>
        </div>
        <div className="text-center gap-4">
          <button className="btn mr-3 bg-white ">
            <img className="w-[22px]" src={playStoreIcon} alt="" /> Play Store
          </button>
          <button className="btn bg-white ">
            <img className="w-[22px]" src={appStoreIcon} alt="" />
            App Store
          </button>
        </div>
        <div>
          <img
            src={bannerImg}
            className="mx-auto mt-10 md:w-[1000px] w-[300px]"
            alt=""
          />
        </div>
      </div>
      <div className=" w-full bg-[#632EE3] ">
        <div className="md:container mx-auto py-10">
          <h1 className="py-10 text-white text-center font-bold text-4xl md:text-[45px]">Trusted By Millions, Built For You</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="customersValue">
            <h4 className="text-white">Total Downloads</h4>
            <p className="customersCount">29.6M</p>
            <p className="text-white">21% More Than Last Month</p>
          </div>
          
          <div className="customersValue">
            <h4 className="text-white">Total Reviews</h4>
            <p className="customersCount">906K</p>
            <p className="text-white">46% More Than Last Month</p>
          </div>
          
          <div className="customersValue">
            <h4 className="text-white">Active Apps</h4>
            <p className="customersCount">132+</p>
            <p className="text-white">31% More Than Last Month</p>
          </div>
          
        </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

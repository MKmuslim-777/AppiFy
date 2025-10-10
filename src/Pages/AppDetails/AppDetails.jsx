import React, { useState } from "react";
import useApps from "../../Hooks/useApps";
import { useParams } from "react-router";
import downloadIcon from "../../assets/Images/icon-downloads.png";
import starIcon from "../../assets/Images/icon-ratings.png";
import reviewIcon from "../../assets/Images/icon-review.png";
import AppsError from "../Errors/AppsError";
import { getDate, setData } from "../../Until/localStorage";
import { toast, ToastContainer } from "react-toastify/unstyled";
import "react-toastify/dist/ReactToastify.css";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

const AppDetails = () => {
  const { apps, loading } = useApps();
  const { id } = useParams();
  const [isDisable, setIsDisable] = useState(false)

  // const app = apps.map(apk => console.log(apk.id))
  if (loading) {
    return (
      <span className="loading loading-infinity loading-xl"></span>
    )
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
  const data = getDate()
  const checkData = data.some( ap => ap === app.id)
  const handleInstallBtn = () => {
    setData(app);
    if(checkData) {
      setIsDisable(true)
      return
    }else{
      toast.success("Installing App");
    }
  };

  return (
    <div className="container my-20 px-5">
      <div className="flex md:flex-row items-center flex-col border-b-2 border-gray-300 py-10">
        <div className="my-10">
          <img className="w-[200px] md:w-[320px]  " src={image} alt="" />
        </div>
        <div className="ml-40">
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
              className={`btn bg-green-500  my-5 transition-all duration-300 ease-in-out hover:scale-103 ${isDisable ? "cursor-not-allowed" : "text-white"}`}
              onClick={handleInstallBtn}
            >
              {isDisable ? "Installed" : `Install Now ${size} MB`}
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-[20px] font-bold my-2">Ratings</h1>
          <ResponsiveContainer width='100%' height={400}>
            <BarChart 
            data={[...ratings].reverse()}
            layout="vertical"
            margin={{top: 20, right: 30, left: 40, bottom: 5}}
            >
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis
              type="number" 
               />
              <YAxis
              type="category"
              dataKey="name"
              width="88"
               />
              <Tooltip />
              <Legend />

              <Bar 
              dataKey='count' 
              fill='#EDC001'
              barSize={26} />
            </BarChart>
          </ResponsiveContainer>
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

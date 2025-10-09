import React from 'react';
import appErrorImg from "../../assets/Images/App-Error.png"
import { useNavigate } from 'react-router';

const AppsError = () => {
    const navigate = useNavigate()
    return (
        <div className="max-w-[1350px] mx-auto flex justify-center">
              <div className="my-18 text-center">
                <img className='text-center md:ml-20' src={appErrorImg} alt="" />
                <h1 className="text-5xl font-bold my-3.5">Oops, App Not Found!</h1>
                <p className="text-[18px] text-gray-500 my-2.5 text-center">The App you are requesting is not found on our system, please try another apps.</p>
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

export default AppsError;
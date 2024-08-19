import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link, useParams } from "react-router-dom";
import { axiosInstance } from "../lib/axios";
import { toastError } from "../lib/toast";

export default function Detail() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (id) => {
    setIsLoading(true);
    axiosInstance
      .get("/users/" + id)
      .then((response) => {
        setData(response.data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        toastError(error.response.data.error);
      });
  };

  useEffect(() => {
    if (id) {
      fetchData(id);
    }
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="mt-[5%] w-full flex flex-col justify-center items-center px-2">
        <p className="font-medium text-2xl my-4">USER DETAIL</p>
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
          {data && !isLoading && (
            <div className="flex flex-col items-center p-10">
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src={data.avatar}
                alt="User Avatar"
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900">
                {data.first_name}&nbsp;{data.last_name}
              </h5>
              <span className="text-sm text-gray-500">{data.email}</span>
              <p className="text-sm text-center mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                nesciunt fuga minus impedit deleniti consectetur in sequi
                doloribus vero numquam.
              </p>
              <div className="flex mt-4 md:mt-6">
                <Link
                  to="/"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                  Back Home
                </Link>
              </div>
            </div>
          )}
          {isLoading && (
            <div className="flex flex-col items-center p-10">
              <div role="status" className="animate-pulse mb-3">
                <div className="flex items-center justify-center">
                  <svg
                    className="w-24 h-24 text-gray-200 me-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20">
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                  </svg>
                </div>
                <span className="sr-only">Loading...</span>
              </div>
              <div role="status" className="animate-pulse">
                <div className="w-28 h-6 bg-gray-200 rounded-full m-1"></div>
                <span className="sr-only">Loading...</span>
              </div>
              <div role="status" className="animate-pulse">
                <div className="w-32 h-3 mt-2 bg-gray-200 rounded-full"></div>
                <span className="sr-only">Loading...</span>
              </div>
              <div className="flex mt-4 md:mt-6">
                <Link
                  to="/"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                  Back Home
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import { axiosInstance } from "../lib/axios";
import { toastError } from "../lib/toast";

export default function Home() {
  const [data, setData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (page) => {
    setIsLoading(true);
    axiosInstance
      .get("/users?delay=2&page=" + page)
      .then((response) => {
        setData(response.data.data);
        setTotalPage(response.data.total_pages);
        setIsLoading(false);
      })
      .catch((error) => {
        toastError(error.response.data.error);
      });
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (totalPage > currentPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-screen-xl mx-auto p-2">
        <p className="font-medium text-2xl my-4">LIST USERS</p>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg inline-block md:hidden w-full mx-auto">
          <table className="w-full text-left rtl:text-right">
            <thead className=" text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  User
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {isLoading &&
                [1, 2, 3, 4].map((i) => (
                  <tr key={i} className="bg-white border-b hover:bg-gray-50">
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium whitespace-nowrap flex items-center gap-4">
                      <div role="status" className="animate-pulse">
                        <div className="flex items-center justify-center">
                          <svg
                            className="w-10 h-10 text-gray-200 me-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20">
                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                          </svg>
                        </div>
                        <span className="sr-only">Loading...</span>
                      </div>
                      <div>
                        <div role="status" className="animate-pulse mb-2">
                          <div className="w-28 h-4 bg-gray-200 rounded-full"></div>
                          <span className="sr-only">Loading...</span>
                        </div>
                        <div role="status" className="animate-pulse">
                          <div className="w-28 h-4 bg-gray-200 rounded-full"></div>
                          <span className="sr-only">Loading...</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div role="status" className="animate-pulse">
                        <div className="w-28 h-4 bg-gray-200 rounded-full"></div>
                        <span className="sr-only">Loading...</span>
                      </div>
                    </td>
                  </tr>
                ))}
              {data &&
                !isLoading &&
                data.map((user, i) => (
                  <tr key={i} className="bg-white border-b hover:bg-gray-50">
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium whitespace-nowrap flex items-center gap-4">
                      <img
                        src={user.avatar}
                        alt="User Avatar"
                        className="min-h-10 min-w-10 max-h-14 max-w-14 rounded-full"
                      />
                      <div>
                        <p>
                          {user.first_name}&nbsp;{user.last_name}
                        </p>
                        <p className="font-normal text-sm text-slate-500">
                          {user.email}
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <Link
                        to={`/detail/${user.id}`}
                        className="font-medium text-blue-600 hover:underline">
                        Detail
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg hidden md:inline-block w-full mx-auto">
          <table className="w-full text-left rtl:text-right">
            <thead className=" text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Avatar</span>
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Firstname
                </th>
                <th scope="col" className="px-6 py-3">
                  Lastname
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {isLoading &&
                [1, 2, 3, 4].map((i) => (
                  <tr key={i} className="bg-white border-b hover:bg-gray-50">
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium whitespace-nowrap">
                      <div role="status" className="animate-pulse">
                        <div className="flex items-center justify-center">
                          <svg
                            className="w-10 h-10 text-gray-200 me-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20">
                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                          </svg>
                        </div>
                        <span className="sr-only">Loading...</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div role="status" className="animate-pulse">
                        <div className="w-28 h-4 bg-gray-200 rounded-full"></div>
                        <span className="sr-only">Loading...</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div role="status" className="animate-pulse">
                        <div className="w-28 h-4 bg-gray-200 rounded-full"></div>
                        <span className="sr-only">Loading...</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div role="status" className="animate-pulse">
                        <div className="w-28 h-4 bg-gray-200 rounded-full"></div>
                        <span className="sr-only">Loading...</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div role="status" className="animate-pulse">
                        <div className="w-28 h-4 bg-gray-200 rounded-full"></div>
                        <span className="sr-only">Loading...</span>
                      </div>
                    </td>
                  </tr>
                ))}
              {data &&
                !isLoading &&
                data.map((user, i) => (
                  <tr key={i} className="bg-white border-b hover:bg-gray-50">
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium  whitespace-nowrap">
                      <img
                        src={user.avatar}
                        alt="User Avatar"
                        className="min-h-10 min-w-10 max-h-14 max-w-14 rounded-full mx-auto"
                      />
                    </td>
                    <td className="px-6 py-4">{user.email}</td>
                    <td className="px-6 py-4">{user.first_name}</td>
                    <td className="px-6 py-4">{user.last_name}</td>
                    <td className="px-6 py-4">
                      <Link
                        to={`/detail/${user.id}`}
                        className="font-medium text-blue-600 hover:underline">
                        Detail
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-end mt-5">
          <button
            disabled={currentPage <= 1}
            className="flex items-center justify-center px-4 h-10 me-3 text-base font-medium bg-white text-gray-700 disabled:bg-gray-100 disabled:text-gray-500  border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700"
            onClick={handlePrevPage}>
            <svg
              className="w-3.5 h-3.5 me-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 5H1m0 0 4 4M1 5l4-4"
              />
            </svg>
            Previous
          </button>
          <button
            disabled={currentPage >= totalPage}
            className="flex items-center justify-center px-4 h-10 text-base font-medium bg-white text-gray-700 disabled:bg-gray-100 disabled:text-gray-500  border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700"
            onClick={handleNextPage}>
            Next
            <svg
              className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

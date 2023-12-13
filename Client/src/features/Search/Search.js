import React from "react";
import { Link } from "react-router-dom";

export default function Search() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 87];
  return (
    <>
      <div className="bg-[#ccdce1] h-96 px-5 flex flex-col pt-16 gap-5 sm:items-center sm:px-10 lg:px-56 xl:pt-24 xl:px-96 sm:text-center sm:gap-5 sm:h-[28rem]">
        <h1 className="font-semibold text-2xl sm:text-4xl xl:text-5xl sm:leading-snug">
          Jobs for Unemployed Youth No Experience? No Problem
        </h1>
        <p>Empowering Youth through No Experience Job Opportunity</p>
        <button className="bg-blue-700 text-white px-3 py-2 w-fit rounded-lg sm:text-lg">
          Find a Job
        </button>
      </div>
      <h1 className="text-3xl my-5 text-center">Recommended Jobs </h1>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 sm:grid grid-cols-2 lg:px-8">
        {arr.map((data) => {
          return (
            <Link to="/jobdetails">
              <div className="flex justify-between p-3 items-start gap-2">
                <div>
                  <h2 className="text-indigo-600 font-semibold text-lg">
                    Front End Developer
                  </h2>
                  <h3 className="">Renesas Electronics India Pvt. Ltd.</h3>

                  <div className="flex divide-x-2">
                    <div className="pe-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4 me-1 inline-block"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="align-middle">3.6L - 6L</span>
                    </div>
                    <div className="px-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4 inline-block me-1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                        />
                      </svg>
                      <span className="align-middle">2Y</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <p className="bg-green-50 text-green-600 px-2 rounded-lg truncate">
                    Full-time
                  </p>
                  <div className="my-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 inline-block"
                    >
                      <path
                        className="evenodd"
                        d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <p className="align-middle inline-block">Remote</p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <Link to="/alljobs" className="text-center block ">Explore all jobs</Link>
      <h1 className="text-3xl my-5 text-center">Top Freelance Projects </h1>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 sm:grid grid-cols-2 lg:px-8">
        {arr.map((data) => {
          return (
            <Link to="/jobdetails">
              <div className="flex justify-between p-3 items-start gap-2">
                <div>
                  <h2 className="text-indigo-600 font-semibold text-lg">
                    Front End Developer
                  </h2>
                  <h3 className="">Renesas Electronics India Pvt. Ltd.</h3>

                  <div className="flex divide-x-2">
                    <div className="pe-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4 me-1 inline-block"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="align-middle">3.6L - 6L</span>
                    </div>
                    <div className="px-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4 inline-block me-1"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                        />
                      </svg>
                      <span className="align-middle">2Y</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <p className="bg-green-50 text-green-600 px-2 rounded-lg truncate">
                    Full-time
                  </p>
                  <div className="my-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 inline-block"
                    >
                      <path
                        className="evenodd"
                        d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <p className="align-middle inline-block">Remote</p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}

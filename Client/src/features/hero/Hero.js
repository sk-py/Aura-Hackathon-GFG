import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 87];
  return (
    <>
      <div className="bg-[#ccdce1] h-80 px-5 flex justify-center flex-col gap-5 items-center sm:px-10 lg:px-56 xl:pt- xl:px-96 sm:text-center sm:gap-5 sm:h-[28rem]">
        <h1 className="font-semibold text-center text-2xl sm:text-4xl xl:text-5xl sm:leading-tight">
          Jobs for Unemployed Youth No Experience? No Problem
        </h1>
        <p className="text-center">
          Empowering Youth through No Experience Job Opportunity
        </p>
        <button className="bg-blue-700 text-white px-3 py-2 w-fit rounded-lg sm:text-lg">
          Find a Job
        </button>
      </div>
      <h1 className="text-3xl my-10 text-center">Recommended Jobs </h1>
      <div className="mx-auto space-y-3 max-w-7xl px-4 sm:px-6 md:space-y-0 md:grid grid-cols-2 lg:px-8 gap-3">
        {arr.map((data) => {
          return (
            <Link to="/jobdetails" className="border rounded-md block">
              <div className="flex justify-between p-3 items-start gap-2">
                <div>
                  <h2 className="text-indigo-600 font-semibold md:text-lg">
                    Front End Developer
                  </h2>
                  <h3 className="text-xs md:text-sm">
                    Renesas Electronics India Pvt. Ltd.
                  </h3>

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
                      <span className="align-middle text-sm">3.6L - 6L</span>
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
                      <span className="align-middle text-sm">2Y</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <p className="bg-green-50 text-green-600 px-2 rounded-lg truncate text-xs md:text-sm">
                    Full-time
                  </p>
                  <div className="my-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4 inline-block mr-1"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>

                    <p className="align-middle inline-block text-xs md:text-sm">
                      Remote
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <Link to="/jobs" className="text-center block text-[#0b70ff] my-8">
        Explore all jobs &rarr;
      </Link>
      <h1 className="text-3xl my-10 text-center">Top Freelance Projects </h1>

      <div className="mx-auto space-y-3 max-w-7xl px-4 sm:px-6 md:space-y-0 md:grid grid-cols-2 lg:px-8 gap-3">
        {arr.map((data) => {
          return (
            <Link to="/jobdetails" className="border rounded-md block">
              <div className="flex justify-between p-3 items-start gap-2">
                <div>
                  <h2 className="text-indigo-600 font-semibold md:text-lg">
                    Front End Developer
                  </h2>
                  <h3 className="text-xs md:text-sm">
                    Renesas Electronics India Pvt. Ltd.
                  </h3>

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
                      <span className="align-middle text-sm">3.6L - 6L</span>
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
                      <span className="align-middle text-sm">2Y</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <p className="bg-green-50 text-green-600 px-2 rounded-lg truncate text-xs md:text-sm">
                    Full-time
                  </p>
                  <div className="my-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4 inline-block mr-1"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>

                    <p className="align-middle inline-block text-xs md:text-sm">
                      Remote
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <Link to="/freelance" className="text-center block text-[#0b70ff] my-8">
        Explore all Freelance Projects &rarr;
      </Link>
    </>
  );
}

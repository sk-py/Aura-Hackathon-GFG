import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import JobDetails from "../JobDetails/JobDetails";

export default function Hero() {
  const [FetchedJobsData, setFetchedJobsData] = useState([]);
  const [FetchedFreelanceJobs, setFetchedFreelanceJobs] = useState([]);
  const navigate = useNavigate();
  const arr = [1, 2, 3, 4, 5, 6, 7, 87];
  const [Isloading, setIsloading] = useState(true);
  const [NoData, setNoData] = useState(false);
  const getRecommendedJobsData = async () => {
    try {
      const JobsData = await fetch(
        `http://localhost:9000/api/jobs/getRecommendedJobs`,

        {
          headers: {
            "auth-token": localStorage.getItem("auth-token"),
          },
        }
      );
      const fetchedJobs = await JobsData.json();
      !fetchedJobs.length > 0
        ? setNoData(true)
        : setFetchedJobsData(fetchedJobs);
      setIsloading(false);
      console.log("fetchedJobs :", fetchedJobs);
    } catch (error) {
      console.log("error", error.message);
    }
  };

  const getRecommendedFreelanceData = async () => {
    try {
      const FreelanceData = await fetch(
        "http://localhost:9000/api/freelance/recommended",
        {
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("auth-token"),
          },
        }
      );
      const fetchedData = await FreelanceData.json();
      setFetchedFreelanceJobs(fetchedData);
      console.log("FreelanceData", fetchedData);
    } catch (error) {
      console.log("error", error.message);
    }
  };

  useEffect(() => {
    getRecommendedJobsData();
    getRecommendedFreelanceData();
  }, []);
  return (
    <>
      <div className="bg-[#ccdce1] h-80 px-5 flex justify-center flex-col gap-5 items-center sm:px-10 lg:px-56 xl:pt- xl:px-96 sm:text-center sm:gap-5 sm:h-[28rem]">
        <h1 className="font-semibold text-center text-2xl sm:text-4xl xl:text-5xl sm:leading-tight">
          Explore Exciting Career Opportunities
        </h1>
        <p className="text-center">
          Unlock your potential with our diverse job listings for all experience
          levels.
        </p>
        <Link to={"/jobs"}>
          <button className="bg-blue-700 text-white px-3 py-2 w-fit rounded-lg sm:text-lg">
            Discover Jobs
          </button>
        </Link>
      </div>
      <h1 className="text-3xl my-10 text-center">Recommended Jobs </h1>
      <div className="mx-auto space-y-3 max-w-7xl px-4 sm:px-6 md:space-y-0 md:grid grid-cols-2 lg:px-8 gap-3">
        {FetchedJobsData.length > 0 &&
          FetchedJobsData.map((job) => {
            return (
              <Link
                to={{
                  pathname: `/api/jobs/jobdetails/${job._id}`,
                  state: { JobDetails: job },
                }}
                key={job._id}
                className="border rounded-md block"
              >
                <div className="flex justify-between p-3 items-start gap-2">
                  <div>
                    <h2 className="text-indigo-600 font-semibold md:text-lg">
                      {job.role}
                    </h2>
                    <h3 className="text-xs md:text-sm">{job.companyName}</h3>

                    <div className="flex divide-x-2">
                      <div className="pe-5">
                        {/* <svg
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
                      </svg> */}
                        <span className="align-middle text-sm">
                          {" "}
                          {job.package[0]} - {job.package[1]}
                        </span>
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
                        <span className="align-middle text-sm">
                          {job.type.level}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <p className="bg-green-50 text-green-600 px-2 rounded-lg truncate text-xs md:text-sm">
                      {job.type.jobType}
                    </p>
                    <div className="mt-[0.85rem] flex flex-row">
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
                        {job.type.workLocation}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
      {!NoData && Isloading && (
        <span className="text-center flex items-center justify-center h-[20vh]">
          <div class=" left-1/2 mt-10 -ml-2 h-8 w-4 text-indigo-700">
            <div class=" z-10 -ml-2 h-8 w-8 animate-bounce">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="animate-spin"
                fill="currentColor"
                stroke="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
              >
                <path d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 4c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4zM12.773 12.773c-1.275 1.275-2.97 1.977-4.773 1.977s-3.498-0.702-4.773-1.977-1.977-2.97-1.977-4.773c0-1.803 0.702-3.498 1.977-4.773l1.061 1.061c0 0 0 0 0 0-2.047 2.047-2.047 5.378 0 7.425 0.992 0.992 2.31 1.538 3.712 1.538s2.721-0.546 3.712-1.538c2.047-2.047 2.047-5.378 0-7.425l1.061-1.061c1.275 1.275 1.977 2.97 1.977 4.773s-0.702 3.498-1.977 4.773z"></path>
              </svg>
            </div>
            <div
              class="absolute top-4 h-5 w-4 animate-bounce border-l-2 border-gray-200"
              // style="rotate: -90deg"
            ></div>
            <div
              class="absolute top-4 h-5 w-4 animate-bounce border-r-2 border-gray-200"
              // style="rotate: 90deg"
            ></div>
          </div>
        </span>
      )}
      {NoData && (
        <span className="w-screen flex items-center justify-center">
          <span className="text-center w-max text-lg">
            Boost your chances of getting your dream job (AI-Recommended) by
            adding your skills to your profile.
            <br /> Don't miss out on opportunities that align perfectly with
            your goals.
            <br />
            <Link to={"/postsignup"} className="text-[#0b38ff] my-8">
              {" "}
              Take action now!
            </Link>
          </span>
        </span>
      )}
      <Link to="/jobs" className="text-center block text-[#0b70ff] my-8">
        {FetchedJobsData.length > 0 && "Explore all jobs "}
      </Link>
      <h1 className="text-3xl my-10 text-center">Top Freelance Projects </h1>

      <div className="mx-auto space-y-3 max-w-7xl px-4 sm:px-6 md:space-y-0 md:grid grid-cols-2 lg:px-8 gap-3">
        {FetchedFreelanceJobs.length > 0 &&
          FetchedFreelanceJobs.map((freelance) => {
            return (
              <Link
                to={{
                  pathname: `/api/freelance/details/${freelance._id}`,
                }}
                key={freelance._id}
                className="border rounded-md block"
              >
                <div className="flex justify-between p-3 items-start gap-2">
                  <div>
                    <h2 className="text-indigo-600 font-semibold md:text-lg">
                      {freelance.projectName}
                    </h2>
                    <h3 className="text-xs md:text-sm">
                      {freelance.postedBy[1]}
                    </h3>

                    <div className="flex divide-x-2">
                      <div className="pe-5">
                        {/* <svg
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
                      </svg> */}
                        <span className="align-middle text-sm">
                          {" "}
                          {freelance.payment}
                        </span>
                      </div>
                      {/* <div className="px-5">
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
                        <span className="align-middle text-sm">Level</span>
                      </div> */}
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <p className="bg-green-50 text-green-600 px-2 rounded-lg truncate text-xs md:text-sm">
                      {freelance.status}
                    </p>
                    <div className="mt-[0.85rem] flex flex-row gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="14"
                        width="12"
                        viewBox="0 0 384 512"
                        className="mt-1"
                      >
                        <path d="M0 32C0 14.3 14.3 0 32 0H64 320h32c17.7 0 32 14.3 32 32s-14.3 32-32 32V75c0 42.4-16.9 83.1-46.9 113.1L237.3 256l67.9 67.9c30 30 46.9 70.7 46.9 113.1v11c17.7 0 32 14.3 32 32s-14.3 32-32 32H320 64 32c-17.7 0-32-14.3-32-32s14.3-32 32-32V437c0-42.4 16.9-83.1 46.9-113.1L146.7 256 78.9 188.1C48.9 158.1 32 117.4 32 75V64C14.3 64 0 49.7 0 32zM96 64V75c0 25.5 10.1 49.9 28.1 67.9L192 210.7l67.9-67.9c18-18 28.1-42.4 28.1-67.9V64H96zm0 384H288V437c0-25.5-10.1-49.9-28.1-67.9L192 301.3l-67.9 67.9c-18 18-28.1 42.4-28.1 67.9v11z" />
                      </svg>

                      <p className="align-middle inline-block text-xs md:text-sm">
                        {freelance.duration}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
      {!NoData && Isloading && (
        <span className="text-center flex items-center justify-center h-[20vh]">
          <div class=" left-1/2 mt-10 -ml-2 h-8 w-4 text-indigo-700">
            <div class=" z-10 -ml-2 h-8 w-8 animate-bounce">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="animate-spin"
                fill="currentColor"
                stroke="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
              >
                <path d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 4c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4zM12.773 12.773c-1.275 1.275-2.97 1.977-4.773 1.977s-3.498-0.702-4.773-1.977-1.977-2.97-1.977-4.773c0-1.803 0.702-3.498 1.977-4.773l1.061 1.061c0 0 0 0 0 0-2.047 2.047-2.047 5.378 0 7.425 0.992 0.992 2.31 1.538 3.712 1.538s2.721-0.546 3.712-1.538c2.047-2.047 2.047-5.378 0-7.425l1.061-1.061c1.275 1.275 1.977 2.97 1.977 4.773s-0.702 3.498-1.977 4.773z"></path>
              </svg>
            </div>
            <div
              class="absolute top-4 h-5 w-4 animate-bounce border-l-2 border-gray-200"
              // style="rotate: -90deg"
            ></div>
            <div
              class="absolute top-4 h-5 w-4 animate-bounce border-r-2 border-gray-200"
              // style="rotate: 90deg"
            ></div>
          </div>
        </span>
      )}
      {NoData && (
        <span className="w-screen flex items-center justify-center">
          <span className="text-center w-max text-lg">
            Boost your chances of getting your dream job (AI-Recommended) by
            adding your skills to your profile.
            <br /> Don't miss out on opportunities that align perfectly with
            your goals.
            <br />
            <Link to={"/postsignup"} className="text-[#0b38ff] my-8">
              {" "}
              Take action now!
            </Link>
          </span>
        </span>
      )}
      <Link to="/freelance" className="text-center block text-[#0b70ff] my-8">
        {FetchedJobsData.length > 0 && "Explore all opportunities "}
      </Link>
    </>
  );
}

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
export default function FreelanceDetails() {
  const { Id } = useParams();
  const [loading, setloading] = useState(true);
  const userId = localStorage.getItem("userId");
  const [JobDetails, setJobDetails] = useState([]);
  const [DataIndicator, setDataIndicator] = useState("Job_Data");
  // console.log("jobDetails from details page", Id);
  const getJobDetails = async () => {
    try {
      const JobsData = await fetch(
        `http://localhost:9000/api/freelance/getFreelanceDetails/${Id}`
      );
      const fetchedJobDetail = await JobsData.json();
      // fetchedJobs;
      setJobDetails(fetchedJobDetail);
      setloading(false);
    } catch (error) {
      console.log("error", error.message);
    }
  };
  useEffect(() => {
    getJobDetails();
    if (JobDetails.projectName) {
      setDataIndicator("Freelance_Data");
    }
  }, []);
  console.log("Indic", DataIndicator);

  const createApplication = async () => {
    try {
      const date = new Date();
      const res = await fetch("http://localhost:9000/api/application/apply", {
        method: "POST",
        body: JSON.stringify({
          auth_token: localStorage.getItem("auth-token"),
          jobId: Id,
          projectName: JobDetails.projectName,
          postedBy: JobDetails.postedBy,
          indicator: DataIndicator,
          appliedDate: date.toLocaleDateString(),
        }),
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("auth-token"),
        },
      });

      res.status === 409
        ? toast.info("Already applied for this post")
        : res.status === 200
        ? toast.success("Connection request sent !")
        : toast.error("Unable to apply, please try again later.");
    } catch (error) {
      console.log("error", error.message);
    }
  };

  return !loading ? (
    <>
      {/* Job Header */}
      <div className="p-5 py-8 space-y-6 lg:flex justify-between bg-[#f4f6fc] lg:p-20 items-center">
        <div className="space-y-3 lg:flex lg:space-y-0 gap-5 items-center">
          <div className="bg-black text-white w-14 h-14 text-3xl lg:w-20 lg:h-20 rounded-md flex lg:text-5xl justify-center items-center">
            {JobDetails.projectName.substring(0, 2)}
          </div>
          <div className="space-y-4 lg:space-y-3">
            <h1 className="font-semibold text-2xl">
              {JobDetails.projectName} - {JobDetails.postedBy[1]}
            </h1>
            <ul className="gap-x-5 gap-y-1 flex lg:gap-6 flex-wrap">
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="14"
                  width="12"
                  viewBox="0 0 384 512"
                  //   className="mt-1"
                >
                  <path d="M0 32C0 14.3 14.3 0 32 0H64 320h32c17.7 0 32 14.3 32 32s-14.3 32-32 32V75c0 42.4-16.9 83.1-46.9 113.1L237.3 256l67.9 67.9c30 30 46.9 70.7 46.9 113.1v11c17.7 0 32 14.3 32 32s-14.3 32-32 32H320 64 32c-17.7 0-32-14.3-32-32s14.3-32 32-32V437c0-42.4 16.9-83.1 46.9-113.1L146.7 256 78.9 188.1C48.9 158.1 32 117.4 32 75V64C14.3 64 0 49.7 0 32zM96 64V75c0 25.5 10.1 49.9 28.1 67.9L192 210.7l67.9-67.9c18-18 28.1-42.4 28.1-67.9V64H96zm0 384H288V437c0-25.5-10.1-49.9-28.1-67.9L192 301.3l-67.9 67.9c-18 18-28.1 42.4-28.1 67.9v11z" />
                </svg>
                <p className="text-stone-700 text-base">
                  {JobDetails.duration}
                </p>
              </li>
              {/* <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>

                <p className="text-stone-700 text-base">London, UK</p>
              </li> */}
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-stone-700 text-base">
                  {JobDetails.datePosted || "12-May-2023"}
                </p>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                  />
                </svg>
                <p className="text-stone-700 text-base">{JobDetails.payment}</p>
              </li>
            </ul>
            {/* <ul className="flex gap-3 flex-wrap">
              <li className="text-sm bg-blue-200 text-blue-700 px-4 py-1 rounded-3xl">
                {JobDetails.type.jobType}
              </li>
              <li className="text-sm bg-green-200 text-green-700 px-4 py-1 rounded-3xl">
                Private
              </li>
              <li className="text-sm bg-orange-200 text-orange-700 px-4 py-1 rounded-3xl">
                {JobDetails.type.level}
              </li>
            </ul> */}
          </div>
        </div>

        <div className="flex items-center gap-5">
          <button
            className="bg-[#1967d2] text-white px-10 py-3 rounded-md"
            onClick={createApplication}
          >
            Connect with client
          </button>
          {/* <button className="bg-[#e2eaf8] text-[#1967d2] px-3 py-3 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
              />
            </svg>
          </button> */}
        </div>
      </div>

      {/* Main job Div */}
      <div className="max-w-7xl space-y-10 mx-auto px-3 my-8 lg:grid lg:space-y-0 grid-cols-12 gap-8 justify-between">
        <div className="left col-span-8">
          <h1 className="text-xl font-semibold mb-5">Job Description </h1>
          {JobDetails.description}
          {/* <h1 className="text-xl font-semibold mt-8 mb-5">
            Key Responsibilities
          </h1> */}
          {/* <ul className="list-disc space-y-7 ps-4">
            <li>
              Be involved in every step of the product design cycle from
              discovery to developer handoff and user acceptance testing.
            </li>
            <li>
              Work with BAs, product managers and tech teams to lead the Product
              Design
            </li>
            <li>
              Maintain quality of the design process and ensure that when
              designs are translated into code they accurately reflect the
              design specifications.
            </li>
            <li>
              Accurately estimate design tickets during planning sessions.
            </li>
            <li>
              Contribute to sketching sessions involving non-designersCreate,
              iterate and maintain UI deliverables including sketch files, style
              guides, high fidelity prototypes, micro interaction specifications
              and pattern libraries.
            </li>
            <li>
              Ensure design choices are data led by identifying assumptions to
              test each sprint, and work with the analysts in your team to plan
              moderated usability test sessions.
            </li>
            <li>
              Design pixel perfect responsive UI’s and understand that adopting
              common interface patterns is better for UX than reinventing the
              wheel
            </li>
            <li>
              Present your work to the wider business at Show & Tell sessions.
            </li>
          </ul> */}
          <h1 className="text-xl font-semibold mt-8 mb-5">
            Skill & Experience
          </h1>
          <ul className="list-disc space-y-7 ps-4">
            <li>
              You have at least 3 years’ experience working as a Product
              Designer.
            </li>
            <li>You have experience using Sketch and InVision or Framer X</li>
            <li>
              You have some previous experience working in an agile environment
              – Think two-week sprints.
            </li>
            <li>You are familiar using Jira and Confluence in your workflow</li>
          </ul>
        </div>
        <div className="right col-span-4 bg-[#f5f7fc] p-8 rounded-xl space-y-10">
          <h2 className="font-semibold text-xl">Job Overview</h2>
          <div className="space-y-5 sm:space-y-0 sm:grid grid-cols-2 md:grid-cols-3 gap-6 lg:block lg:space-y-5">
            <div className="flex items-center gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-[#0b70ff]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                />
              </svg>
              <div>
                <h3 className="font-semibold">Expiration date:</h3>
                <p>April 06, 2024</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-[#0b70ff]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                />
              </svg>
              <div>
                <h3 className="font-semibold">Date Posted</h3>
                <p> {JobDetails.datePosted || "12-May-2023"}</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                width="20"
                viewBox="0 0 384 512"
                className="fill-blue-500"
              >
                <path d="M0 32C0 14.3 14.3 0 32 0H64 320h32c17.7 0 32 14.3 32 32s-14.3 32-32 32V75c0 42.4-16.9 83.1-46.9 113.1L237.3 256l67.9 67.9c30 30 46.9 70.7 46.9 113.1v11c17.7 0 32 14.3 32 32s-14.3 32-32 32H320 64 32c-17.7 0-32-14.3-32-32s14.3-32 32-32V437c0-42.4 16.9-83.1 46.9-113.1L146.7 256 78.9 188.1C48.9 158.1 32 117.4 32 75V64C14.3 64 0 49.7 0 32zM96 64V75c0 25.5 10.1 49.9 28.1 67.9L192 210.7l67.9-67.9c18-18 28.1-42.4 28.1-67.9V64H96zm0 384H288V437c0-25.5-10.1-49.9-28.1-67.9L192 301.3l-67.9 67.9c-18 18-28.1 42.4-28.1 67.9v11z" />
              </svg>

              <div>
                <h3 className="font-semibold">Duration:</h3>
                <p>{JobDetails.duration}</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6  text-[#0b70ff]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>

              <div>
                <h3 className="font-semibold">Job Title:</h3>
                <p>{JobDetails.projectName}</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6  text-[#0b70ff]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                />
              </svg>

              <div>
                <h3 className="font-semibold">Payment:</h3>
                <p> {JobDetails.payment}</p>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <h2 className="font-semibold text-xl">Job Skills</h2>
            <div className="flex flex-wrap gap-3">
              {JobDetails.requiredSkills.map((skill) => {
                return (
                  <p className="bg-white px-5 rounded-lg py-1 text-sm inline-block">
                    {skill}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <div className="w-full h-[70vh] flex items-center justify-center ">
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
    </div>
  );
}

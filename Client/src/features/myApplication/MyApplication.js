import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function MyApplication() {
  const [AllApplications, setAllApplications] = useState([]);
  const [Isloading, setIsloading] = useState(true);
  const [NoData, setNoData] = useState(false);
  let IsFreelance;
  const fetchApplications = async () => {
    try {
      const response = await fetch(
        "http://localhost:9000/api/application/getApplications",
        {
          headers: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("auth-token"),
          },
        }
      );
      const applications = await response.json();
      !applications.length > 0
        ? setNoData(true)
        : setAllApplications(applications);
      setIsloading(false);
      console.log("ResponseDara", applications);
    } catch (error) {}
  };
  useEffect(() => {
    fetchApplications();
  }, []);
  console.log("AllApplications : ", AllApplications);

  return (
    <>
      <div className="max-w-5xl mx-auto px-3 my-0">
        <h1 className="text-2xl text-center mb-8 sm:text-3xl">Applied job</h1>
        <div className="overflow-auto">
          <table className="w-full whitespace-nowrap">
            <tr className="bg-[#e2eaf8] rounded-lg text-[#0b70ff] font-semibold">
              <td className="py-5 ps-5">Jobs</td>
              <td className="py-5 text-center">Date Applied</td>
              <td className="py-5 text-center">Status</td>
            </tr>
            {AllApplications.length > 0 &&
              AllApplications.map((application) => {
                {
                  application.projectName
                    ? (IsFreelance = true)
                    : (IsFreelance = false);
                }
                return (
                  <tr className="hover:bg-slate-50">
                    <Link
                      to={`/api/${
                        IsFreelance ? "freelance/details" : "jobs/jobdetails"
                      }/${application.jobId}`}
                    >
                      <td className="ps-4 py-5 pe-5">
                        <h2 className="text-indigo-600 font-semibold md:text-lg">
                          {IsFreelance
                            ? application.projectName
                            : application.role}
                        </h2>
                        <h3 className="text-xs md:text-sm">
                          {IsFreelance
                            ? application.postedBy
                            : application.companyName}
                        </h3>{" "}
                      </td>
                    </Link>
                    <td className="ps-2 py-5 pe-5 text-center text-sm">
                      {application.appliedDate}
                    </td>
                    <td className="ps-2 py-5 pe-5 text-center text-sm text-green-700">
                      {application.status ? application.status : "Pending"}
                    </td>
                  </tr>
                );
              })}
          </table>
          {!NoData && Isloading && (
            <span className="text-center flex items-center justify-center h-[70vh]">
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
          {NoData > 0 && (
            <span className="text-center flex items-center justify-center h-[70vh]">
              <p>
                You haven't applied to any jobs yet. <br />
                Start applying to exciting opportunities and take the next step
                in your career!<br></br>
                <Link to={"/jobs"} className="text-blue-800 text-lg">
                  Explore Jobs
                </Link>
              </p>
            </span>
          )}
        </div>
      </div>
    </>
  );
}

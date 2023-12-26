import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Candidates = ({ SelectedJobId }) => {
  const [ApplicationData, setApplicationData] = useState([]);
  console.log(`${SelectedJobId}`);
  const applications = async () => {
    try {
      const data = await fetch(
        `http://localhost:9000/api/application/view/${SelectedJobId}`,
        {
          header: {
            "Content-Type": "application/json",
            "auth-token": localStorage.getItem("auth-token"),
          },
        }
      ); ///Sending job id to fetch applications from appliedJobs model
      const apps = await data.json();
      setApplicationData(apps);
    } catch (error) {}
  };
  useEffect(() => {
    applications();
  }, [SelectedJobId]);

  const actionHandler = async (applicationId, e) => {
    const status = e.target.value;
    console.log("Action data", applicationId, status);
    try {
      const res = await fetch("http://localhost:9000/api/freelance/status", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("auth-token"),
        },
        body: JSON.stringify({ applicationId, status }),
      });
    } catch (error) {}
  };

  console.log("ApplicationData", ApplicationData);
  return (
    <div className="w-full flex flex-col items-center">
      <span className="p-4 text-xl text-black flex items-center justify-center flex-row font-[600]">
        Applicants
      </span>
      <span className="bg-slate-200 flex w-full justify-between px-6 py-4">
        <span className="w-[30%] text-center text-lg">Name of applicant</span>
        <span className="w-[30%] text-center text-lg">Date Applied</span>
        <span className="w-[30%] text-center text-lg">Action</span>
      </span>
      {ApplicationData.length > 0 ? (
        ApplicationData.map((candidate) => {
          return (
            <span className="hover:bg-slate-50 flex w-full justify-between px-6 py-4">
              <Link
                to={"/candidate"}
                className="w-[30%] text-center text-lg text-blue-800 font-medium"
              >
                {candidate.applicantName}
              </Link>
              <span className="w-[30%] text-center text-lg text-green-800 font-medium">
                {candidate.appliedDate}
              </span>
              <span className="w-[30%] text-center text-lg">
                {candidate.status ? (
                  <span
                    className={`${
                      candidate.status == "Accepted"
                        ? "bg-green-200 text-green-900 "
                        : " bg-red-300 text-red-900 "
                    } p-2 rounded`}
                  >
                    {candidate.status}
                  </span>
                ) : (
                  <select
                    onChange={(e) => actionHandler(candidate._id, e)}
                    className="border-none cursor-pointer focus:outline-none "
                  >
                    <option disabled selected>
                      Choose
                    </option>
                    <option value={"Accepted"}>Accept</option>
                    <option value={"Rejected"}>Reject</option>
                  </select>
                )}
              </span>
            </span>
          );
        })
      ) : (
        <span className="w-full h-full flex items-center justify-center text-center flex-col">
          It looks like there are no applications for this post yet.
        </span>
      )}
    </div>
  );
};

export default Candidates;

import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Candidates from "./Candidates";
import { Link } from "react-router-dom";

const PostedJobs = () => {
  const [PostsList, setPostsList] = useState([]);
  const [SelectedJobId, setSelectedJobId] = useState([]);
  const getPosts = async () => {
    try {
      const posts = await fetch(
        "http://localhost:9000/api/freelance/getFreelancePosts",
        {
          headers: {
            "Content-type": "application/json",
            "auth-token": localStorage.getItem("auth-token"),
          },
        }
      );
      const data = await posts.json();
      if (data.length === 0) {
        console.log(`No data available`);
      }
      setPostsList(data);
      console.log("data", data.length);
    } catch (error) {}
  };
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <>
      <Navbar></Navbar>
      <div className="flex flex-row items-center justify-center">
        <div className="w-[80vw] min-h-[90vh] flex flex-row ">
          <div className="w-[40%] bg-white flex flex-col border-r-2">
            <div className="p-4 text-xl text-black flex items-center justify-center flex-row font-[600]">
              Freelance opportunities posted by you
            </div>
            <div className="flex flex-col w-full">
              {PostsList.length > 0 ? (
                PostsList.map((job) => {
                  return (
                    <div
                      className={`p-3 flex flex-row items-center justify-between hover:bg-slate-100 cursor-pointer`}
                      onClick={() => {
                        setSelectedJobId(job._id);
                      }}
                    >
                      <span className="flex flex-col">
                        <span className="text-blue-700 font-semibold text-lg">
                          {job.projectName}
                        </span>
                        <span>{job.description.substring(0, 50)}.....</span>
                      </span>
                      <span></span>
                    </div>
                  );
                })
              ) : (
                <span className="w-full h-[50vh] flex items-center justify-center">
                  No jobs posted by you yet
                </span>
              )}
            </div>
          </div>
          {/* //Element  Rendering*/}
          {PostsList.length > 0 ? (
            SelectedJobId.length > 0 ? (
              <Candidates SelectedJobId={SelectedJobId} />
            ) : (
              <span className="w-full flex items-center justify-center text-center flex-col">
                Select a job post from the list to see applications for that
                specific job.
              </span>
            )
          ) : (
            <span className="w-full flex items-center justify-center text-center flex-col">
              It looks like you haven't posted any freelance jobs or projects
              yet.<br></br> Post it and connect with talented freelancers.
              <Link
                to={"/hirefreelancer"}
                className="p-4 text-blue-600 font-semibold text-xl"
              >
                Post Now
              </Link>
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default PostedJobs;

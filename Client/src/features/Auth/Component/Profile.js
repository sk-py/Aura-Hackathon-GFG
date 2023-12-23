import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Modal from "./Modal.js";
import Linkify from "react-linkify";
import { toast } from "react-toastify";
export default function Profile() {
  const [userDetails, setuserDetails] = useState([]);
  const [formState, setFormState] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [skillArray, setSkillArray] = useState([]);
  const [summaryUpdated, setSummaryUpdated] = useState(false);
  const navigate = useNavigate();
  const [projectForm, setProjectForm] = useState(false);
  const [experienceForm, setExperienceForm] = useState(false);
  const [skills, setSkills] = useState([]);
  const [project, setProject] = useState([]);
  const [Allow, setAllow] = useState(false);
  const [experience, setExperience] = useState([]);

  const {
    // register,
    // handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  // const handleAddSkills = () => {
  //   // console.log(document.getElementById("skill").value);
  //   const arr = [...skills];
  //   arr.push(document.getElementById("skill").value);
  //   setSkills(arr);
  // };

  const callApi = async () => {
    try {
      const res = await axios.get(
        "http://localhost:9000/api/profile/displayprofile",
        {
          headers: {
            "auth-token": localStorage.getItem("auth-token"),
          },
        }
      );
      // console.log(res.data);
      setExperience(res.data.experience);
      setProject(res.data.projects);
      setSkillArray(res.data.skills);
      setuserDetails(res.data.userDetail);
      setSummaryUpdated(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFormChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
    console.log(formState);
    if (formState.projectName && formState.link && formState.description) {
      setAllow(true);
    }
    if (formState.companyName && formState.duration && formState.position) {
      setAllow(true);
    }
  };

  const handleProjectAdd = async () => {
    const projectobj = {
      projectName: formState.projectName,
      description: formState.description,
      link: formState.link,
    };

    const res = await axios.post(
      "http://localhost:9000/api/projects/add",
      // { skills: formState.skill},
      projectobj,
      {
        headers: {
          "auth-token": localStorage.getItem("auth-token"),
        },
      }
    );
    // if (res.status === "201") {
    //   toast.success("Project Added Succesfully");
    // }
    setSummaryUpdated(true);
    setProject([...project, projectobj]);
  };

  // console.log("Project State", projectForm);
  // console.log("Experince State", experienceForm);

  useEffect(() => {
    callApi();
  }, [, summaryUpdated]);

  const handleConnectClick = (mail) => {
    const emailAddress = mail;
    const subject = "Connecting with you from JobTrek";

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}`;

    window.location.href = mailtoLink;
  };

  const handleSkillChange = (e) => {
    setSkills(e.target.value);
  };

  const handleAddSkills = async () => {
    // console.log(formState.skill?.trim().length);
    try {
      if (skills.trim().length) {
        const res = await axios.post(
          "http://localhost:9000/api/skills/add",
          { skills: skills },
          {
            headers: {
              "auth-token": localStorage.getItem("auth-token"),
            },
          }
        );
        const updatedSkills = await res.data.skills;

        console.log("updatedSkills", updatedSkills);
        if (res.status === 409) {
          toast.info("Entered skill already exists");
        }

        // console.log("skillArray", skillArray);
        setSummaryUpdated(true);
        setSkills([]);
        toast.success("Skill Added");
      } else {
        toast.error("Skill input field can't be Empty");
      }
    } catch (error) {
      console.log("Error", error.message);
      toast.error("Entered skill Already Exists");
    }
  };

  const handleDelete = async (skill) => {
    try {
      const res = await fetch("http://localhost:9000/api/skills/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("auth-token"),
        },
        body: JSON.stringify({ skill }),
      });

      if (res.ok) {
        setSummaryUpdated(true);
        toast.success(res.data.message);
        console.log("Skill deleted successfully");
      } else {
        console.log("Failed to delete skill");
      }
    } catch (error) {
      console.log("Error", error.message);
    }
  };

  const handleFormDataDelete = async (id) => {
    try {
      const res = await fetch("http://localhost:9000/api/projects/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("auth-token"),
        },
        body: JSON.stringify({ id: id }),
      });
      if (res.ok) {
        toast.success("Project deleted successfully");
        setSummaryUpdated(true);
      }
    } catch (error) {
      console.log("Error", error.message);
      toast.error(error.message);
    }
  };

  const handleExperienceAdd = async () => {
    console.log(`Clicked`);
    try {
      const response = await fetch("http://localhost:9000/api/experience/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("auth-token"),
        },
        body: JSON.stringify(formState),
      });
      if (response.ok) {
        setFormState({});
        setSummaryUpdated(true);
        setExperienceForm(false);
      }
    } catch (error) {
      console.log("Error", error.message);
      toast.error(error.message);
    }
  };

  const handleDeleteExperience = async (experienceId) => {
    try {
      const res = await fetch("http://localhost:9000/api/experience/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("auth-token"),
        },
        body: JSON.stringify({ experienceId }),
      });

      // console.log(`Response : ${res}`);
      setSummaryUpdated(true);
    } catch (error) {
      console.log("Error", error.message);
      toast.error(error.message);
    }
  };

  return (
    <>
      <div className="pt-16 lg:p-14 ">
        <div className="p-8 bg-white lg:mt-24">
          <div className="flex justify-between flex-col gap-y-2">
            <div className="">
              <div className="lg:w-44 lg:h-44 w-20 h-20 bg-indigo-100 mx-auto rounded-full shadow-2xl inset-x-0 top-0 -mt-24 mb-5 flex items-center justify-center text-indigo-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full -mt-3 "
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div className="lg:mt-5 text-center pb-8">
              <h1 className="lg:text-4xl text-2xl lg:font-medium text-gray-700">
                {userDetails.userName}
              </h1>
            </div>
          </div>
          <div className="lg:mt-8 flex flex-col items-center justify-center lg:w-[70%] mx-auto">
            <p className="text-black text-center font-medium lg:px-16">
              {userDetails.summary
                ? userDetails.summary
                : "Write a few sentences describing yourself so that others can get to know you better."}
            </p>
            <button
              onClick={() => setShowModal(true)}
              className="text-indigo-500 py-2 px-4 w-fit font-medium mt-4"
            >
              Edit summary
            </button>
          </div>
        </div>
      </div>
      <div className="space-x-8 flex justify-center mt-0 md:justify-center">
        <button
          onClick={() => handleConnectClick(userDetails.userEmail)}
          className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
        >
          Connect
        </button>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8">
        <h1 className="text-center text-3xl my-5">Skills & Experiences</h1>
        <div>
          <div className="space-y-12">
            <h2 className="text-xl font-semibold leading-4 text-gray-900">
              Skills :
            </h2>
            <input
              onChange={handleSkillChange}
              type="text"
              id="skill"
              name="skill"
              value={skills}
              placeholder="Add your skills"
              className="rounded-md border-gray-300 p-1 sm:text-sm"
            />
            <button
              onClick={handleAddSkills}
              className="mx-4 text-sm bg-green-500 text-white px-3 rounded-md py-1"
            >
              Add
            </button>
            <div>
              {skillArray.map((skill, i) => {
                return (
                  <p className="bg-slate-200 px-5 mx-1 relative my-1 rounded-lg py-1 text-sm inline-block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      onClick={() => handleDelete(skill)}
                      className="w-6 h-6 absolute fill-black text-white -right-2 -top-2 cursor-pointer"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                    {skill}
                  </p>
                );
              })}
            </div>
            <div className="border-b border-gray-900/10 pb-12">
              <div className="mt-5 sm:grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
                {/* Project Details */}
                <div className="col-span-full flex justify-between mt-5">
                  <label
                    htmlFor="username"
                    className="block text-xl font-medium leading-6 text-gray-900"
                  >
                    Projects :
                  </label>
                  {projectForm ? (
                    <>
                      <div>
                        <button
                          className="text-sm bg-black text-white px-3 rounded-md py-1"
                          onClick={() => {
                            setProjectForm(!projectForm) && setFormState({});
                          }}
                        >
                          Cancel
                        </button>
                        <button
                          className={`mx-4 text-sm bg-green-500 text-white px-3 rounded-md py-1 ${
                            Allow ? "cursor-pointer" : "cursor-not-allowed"
                          }`}
                          onClick={handleProjectAdd}
                          disabled={Allow ? "false" : "true"}
                        >
                          Save
                        </button>
                      </div>
                    </>
                  ) : (
                    <button
                      className="mx-4 text-sm bg-green-500 text-white px-3 rounded-md py-1"
                      onClick={() => {
                        setProjectForm(!projectForm);
                      }}
                    >
                      Add
                    </button>
                  )}
                  {/* {projectForm ? "Save" : "Add"} */}
                </div>
                {showModal && (
                  <Modal
                    summary={userDetails.summary}
                    setSummaryUpdated={setSummaryUpdated}
                    setShowModal={setShowModal}
                  />
                )}
                {projectForm && (
                  <>
                    <div className="sm:col-span-full sm:grid grid-cols-2 gap-5">
                      <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                          <input
                            required={true}
                            onChange={handleFormChange}
                            type="text"
                            name="projectName"
                            id="username"
                            autoComplete="username"
                            placeholder="Project Name"
                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                          <input
                            required={true}
                            onChange={handleFormChange}
                            type="text"
                            name="link"
                            id="link"
                            placeholder="Link of live project or of github repository for that project"
                            autoComplete="true"
                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-span-full">
                      <div className="mt-2">
                        <textarea
                          required={true}
                          onChange={(e) => {
                            handleFormChange(e);
                          }}
                          id="about"
                          name="description"
                          rows={3}
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder="Project Description"
                        />
                      </div>
                    </div>
                  </>
                )}
                {project.map((data) => {
                  // const linkedText = find(data.link);
                  // console.log("linkedText", linkedText);

                  return (
                    <div className="col-span-3 relative m-1 space-y-2 p-4 border rounded-md overflow-hidden">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        onClick={() => handleFormDataDelete(data._id)}
                        className="w-6 h-6 absolute fill-black text-white -right-1 top-0 cursor-pointer "
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                      <h1 className="font-semibold">{data.projectName}</h1>
                      <Linkify>
                        <p className="text-blue-700">{data.link}</p>
                      </Linkify>
                      <p className="max-h-[150px] overflow-y-scroll scrollbar-thin scrollbar-thumb-rounded-lg scrollbar-thumb-blue-500 scrollbar-track-slate-200 ">
                        {data.description}
                      </p>
                    </div>
                  );
                })}

                {
                  /* Exprerience Details */
                  console.log("allow :" + Allow, "projectSatte :" + projectForm)
                }
                <div className="col-span-full flex justify-between mt-5">
                  <label
                    htmlFor="username"
                    className="block text-xl font-medium leading-6 text-gray-900"
                  >
                    Experience
                  </label>
                  {experienceForm ? (
                    <>
                      <div>
                        <button
                          className="text-sm bg-black text-white px-3 rounded-md py-1"
                          onClick={() => {
                            setExperienceForm(!experienceForm) &&
                              setFormState({});
                          }}
                        >
                          Cancel
                        </button>
                        <button
                          disabled={Allow ? false : true}
                          className={`mx-4 text-sm bg-green-500 text-white px-3 rounded-md py-1 ${
                            Allow && !projectForm
                              ? "cursor-pointer"
                              : "cursor-not-allowed"
                          }`}
                          onClick={() => handleExperienceAdd()}
                        >
                          Save
                        </button>
                      </div>
                    </>
                  ) : (
                    <button
                      className="mx-4 text-sm bg-green-500 text-white px-3 rounded-md py-1"
                      onClick={() => {
                        setExperienceForm(!experienceForm);
                      }}
                    >
                      Add
                    </button>
                  )}
                </div>

                {experienceForm && (
                  <>
                    <>
                      <div className="sm:col-span-full sm:grid grid-cols-3 gap-5">
                        <div className="mt-2">
                          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                            <input
                              required={true}
                              onChange={handleFormChange}
                              type="text"
                              value={formState.companyName}
                              name="companyName"
                              id="companyName"
                              autoComplete="username"
                              placeholder="Company Name"
                              className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-500 focus:ring-0 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                        <div className="mt-2">
                          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                            <input
                              required={true}
                              onChange={handleFormChange}
                              type="text"
                              value={formState.duration}
                              name="duration"
                              id="duration"
                              placeholder="Duration : ( 2 years or 10 months )"
                              autoComplete="true"
                              className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-500 focus:ring-0 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                        <div className="mt-2">
                          <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                            <input
                              required={true}
                              onChange={handleFormChange}
                              type="text"
                              value={formState.position}
                              name="position"
                              id="position"
                              placeholder="Position : ( Software Developer, Data Analyst )"
                              autoComplete="true"
                              className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-500 focus:ring-0 sm:text-sm sm:leading-6"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="col-span-full">
                        <div className="mt-2">
                          <textarea
                            required={true}
                            onChange={(e) => {
                              handleFormChange(e);
                            }}
                            id="about"
                            value={formState.description}
                            name="description"
                            rows={3}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Describe some work done by you in the mentioned organization"
                          />
                        </div>
                      </div>
                    </>
                  </>
                )}
                {experience.length > 0 &&
                  experience.map((data) => {
                    return (
                      <div className="col-span-3 space-y-2 p-4 relative border rounded-md">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          onClick={() => handleDeleteExperience(data._id)}
                          className="w-6 h-6 absolute fill-black text-white -right-2 -top-2 cursor-pointer"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          />
                        </svg>
                        <div className="flex gap-4">
                          <h1 className="font-semibold">{data.companyName}</h1>
                          <p className="bg-gray-200 px-2 rounded-md">
                            {data.duration}
                          </p>
                        </div>
                        <div className="divide-y">
                          <p className="text-gray-900 font-normal">
                            {data.position}
                          </p>
                          <p className="text-sm mt-1 font-normal">
                            <li>{data.description}</li>
                          </p>
                        </div>
                      </div>
                    );
                  })}
              </div>
              {!experience.length > 0 && (
                <span className="w-full flex items-center justify-center text-center">
                  Enhance your profile by adding your valuable experiences!
                  <br></br>
                  Click 'Add Experience' to add new experiences.
                </span>
              )}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              onClick={() => {
                navigate("/");
                window.scrollTo(0, 0);
              }}
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
          {/* <h2 className="text-base font-semibold leading-7 text-gray-900 my-2">
                Skills
              </h2>
              <input
                type="text"
                id="skill"
                placeholder="Add your skills"
                className="rounded-md border-gray-300 p-1 sm:text-sm"
              />
              <button
                className="mx-4 text-sm bg-green-500 text-white px-3 rounded-md py-1"
                onClick={handleAddSkills}
              >
                Add
              </button> */}
          {/* <div className="space-x-5 mt-3">
                {skills.map((data, i) => {
                  return (
                    <span key={i} className="bg-gray-100 rounded-md px-3">
                      {data}
                    </span>
                  );
                })}
              </div> */}
        </div>
      </div>
    </>
  );
}

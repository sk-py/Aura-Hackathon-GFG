import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
// import Cookies from 'js-cookie';

export default function PostSignUpForm() {
  const [skillArray, setSkillArray] = useState([]);
  const [formState, setFormState] = useState({});
  const navigate = useNavigate();
  const [project, setProject] = useState([
    // {
    //   name: "Ecommerce App",
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, consequuntur quibusdam architecto, nisi, non dolore nulla iure sed facere quam repellendus modi labore deleniti voluptates rerum! Sed placeat porro itaque!",
    //   url: "http://localhost:3000/postsignup",
    // },
    // {
    //   name: "Ecommerce App",
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, consequuntur quibusdam architecto, nisi, non dolore nulla iure sed facere quam repellendus modi labore deleniti voluptates rerum! Sed placeat porro itaque!",
    //   url: "http://localhost:3000/postsignup",
    // },
  ]);
  const [experience, setExperience] = useState([]);
  const handleFormChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
    console.log(formState);
  };
  const handleAddSkills = async () => {
    // console.log(formState.skill?.trim().length);
    if (formState.skill?.trim().length)  {
      const res = await axios.post(
        "http://localhost:9000/api/skills/add",
        { skills: formState.skill},
        {
          headers: {
            "auth-token": localStorage.getItem("auth-token"),
          },
        }
      );
      if (res.status == "201") {
        setSkillArray([...skillArray, formState.skill]);
      }
    } else {
      toast.error("Skill can't be Empty");
    }
  };
  const handleProjectAdd = async () =>{
    const projectobj={projectName:formState.projectName, description:formState.description, link:formState.url }
    console.log(formState)
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
      if (res.status == "201") {
        setProject([...project, projectobj]);
      }
  }

  const handleExperienceAdd = async () =>{
    const expobj={companyName: formState.companyName, duration: formState.duration, position:formState.role}
    console.log(formState)
      const res = await axios.post(
        "http://localhost:9000/api/experience/add",
        // { skills: formState.skill},
        expobj,
        {
          headers: {
            "auth-token": localStorage.getItem("auth-token"),
          },
        }
      );
      if (res.status == "201") {
        toast.success("done")
        setExperience([...experience, expobj]);
      }
  }
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-center text-3xl my-5">Please Fill The Details</h1>
        <div>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900 my-2">
                Skills
              </h2>
              <input
                onChange={handleFormChange}
                type="text"
                id="skill"
                name="skill"
                placeholder="Add your skills"
                className="rounded-md border-gray-300 p-1 sm:text-sm"
              />
              <button
                onClick={handleAddSkills}
                className="mx-4 text-sm bg-green-500 text-white px-3 rounded-md py-1"
              >
                Add
              </button>
              <div className="space-x-5 mt-3">
                {skillArray.map((data, i) => {
                  return (
                    <span key={i} className="bg-gray-100 rounded-md px-3">
                      {data}
                    </span>
                  );
                })}
              </div>

              <div className="mt-5 sm:grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
                {/* Project Details */}
                <div className="col-span-full flex justify-between mt-5">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Projects Details
                  </label>
                  <button
                    className="mx-4 text-sm bg-green-500 text-white px-3 rounded-md py-1"
                    onClick={handleProjectAdd}
                  >
                    Add
                  </button>
                </div>

                <div className="sm:col-span-full sm:grid grid-cols-2 gap-5">
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                      <input
                        onChange={handleFormChange}
                        type="text"
                        name="projectName"
                        id="projectName"
                        placeholder="project Name"
                        autoComplete="username"
                        className="block  flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                      <input
                        onChange={handleFormChange}
                        type="text"
                        name="url"
                        id="url"
                        autoComplete="username"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="project Url"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-span-full">
                  <div className="mt-2">
                    <textarea
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
                {project.map((data, i) => {
                  return (
                    <div
                      key={i}
                      className="col-span-3 space-y-2 p-4 border rounded-md"
                    >
                      <h1 className="font-semibold">{data.projectName}</h1>
                      <p>URL:{data.url}</p>
                      <p>{data.description}</p>
                    </div>
                  );
                })}

                {/* Exprerience Details */}
                <div className="col-span-full flex justify-between mt-5">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Experience
                  </label>
                  <button
                    className="mx-4 text-sm bg-green-500 text-white px-3 rounded-md py-1"
                    onClick={handleExperienceAdd}
                  >
                    Add
                  </button>
                </div>

                <div className="sm:col-span-full sm:grid grid-cols-2 gap-5">
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                      <input
                        onChange={handleFormChange}
                        type="text"
                        name="companyName"
                        id="companyName"
                        placeholder="companyName"
                        autoComplete="companyName"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 ">
                      <input
                        onChange={handleFormChange}
                        type="text"
                        name="duration"
                        id="duration"
                        autoComplete="username"
                        placeholder="Job duration"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-span-full">
                  <div className="mt-2">
                    <textarea
                      id="about"
                      onChange={handleFormChange}
                      name="role"
                      rows={3}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      placeholder="Describe Your Job Role"
                    />
                  </div>
                </div>
                {experience.map((data) => {
                  return (
                    <div className="col-span-3 space-y-2 p-4 border rounded-md">
                      <div className="flex gap-4">
                        <h1 className="font-semibold">{data.companyName}</h1>
                        <p className="bg-gray-200 px-2 rounded-md">
                          {data.duration}
                        </p>
                      </div>
                      <p>{data.role}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                navigate("/");
              }}
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

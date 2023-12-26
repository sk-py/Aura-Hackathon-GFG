import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../features/Navbar/Navbar";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setLocal } from "../features/Auth/AuthSlice";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function HireFreelancerForm() {
  const dispatch = useDispatch();
  const callApi = async () => {
    const res = await axios.post("http://localhost:9000/tokenVerify", {
      token: localStorage.getItem("auth-token"),
    });
    console.log(res.data);
    dispatch(setLocal({ ...res.data }));
  };
  useEffect(() => {
    callApi();
  }, []);
  const navigate = useNavigate();
  const [agreed, setAgreed] = useState(false);
  const [skills, setSkills] = useState([]);
  const [SkillsInput, setSkillsInput] = useState("");

  const initialState = {
    projectName: "",
    payment: "",
    duration: "",
    description: "",
    requiredSkills: [],
  };

  const [FormData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    if (e.target.id == "skill") {
      setSkillsInput(e.target.value);
      setFormData((prev) => {
        return { ...prev, requiredSkills: [...skills, e.target.value] };
      });
    } else {
      const name = e.target.name;
      const value = e.target.value;
      setFormData((prev) => {
        return { ...prev, [name]: value };
      });
    }
    console.log("SkillsInput", SkillsInput);
  };

  const handleAddSkills = (e) => {
    e.preventDefault();
    if (SkillsInput.trim() !== "") {
      setSkills((prevSkills) => [...prevSkills, SkillsInput.trim()]);
      setSkillsInput(""); // Clear the input after adding the skill
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:9000/api/freelance/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("auth-token"),
        },
        body: JSON.stringify(FormData),
      });
      if (response.status == 201) {
        toast.success("Project posted! \nLet the freelancing magic begin");
        setFormData(initialState);
        navigate("/freelance");
      } else {
        const errorMsg = await response.json();
        toast.error(errorMsg.err);
        // console.log("response", await response.json());
      }
    } catch (error) {}
  };

  return (
    <>
      <Navbar></Navbar>

      <div className=" bg-white px-6 py-3 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Freelance Project Form
          </h2>
          {/* <p className="mt-2 text-lg leading-8 text-gray-600">
            Aute magna irure deserunt veniam aliqua magna enim voluptate.
          </p> */}
        </div>
        <form
          // action="http://localhost:9000/api/freelance/add"
          onSubmit={handleSubmit}
          method="POST"
          className="mx-auto mt-16 max-w-xl sm:mt-20"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label
                htmlFor="projectName"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Project Name
              </label>
              <div className="mt-2.5">
                <input
                  onChange={handleChange}
                  value={FormData.projectName}
                  type="text"
                  name="projectName"
                  id="company"
                  autoComplete="organization"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="payment"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Payment
              </label>
              <div className="mt-2.5">
                <input
                  onChange={handleChange}
                  value={FormData.payment}
                  type="text"
                  name="payment"
                  id="payment"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Duration
              </label>
              <div className="mt-2.5">
                <input
                  onChange={handleChange}
                  value={FormData.duration}
                  type="text"
                  name="duration"
                  id="duration"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="description"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Description
              </label>
              <div className="mt-2.5">
                <textarea
                  onChange={handleChange}
                  value={FormData.description}
                  name="description"
                  id="description"
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
            </div>
          </div>

          <h2 className="text-base font-semibold leading-7 text-gray-900 my-2">
            Required Skills
          </h2>
          <input
            type="text"
            id="skill"
            value={SkillsInput}
            placeholder="Add required skills"
            onChange={handleChange}
            className="rounded-md border-gray-300 p-1 sm:text-sm"
          />
          <button
            className="mx-4 text-sm bg-green-500 text-white px-3 rounded-md py-1"
            onClick={handleAddSkills}
          >
            Add
          </button>
          <div className="space-x-5 mt-3">
            {skills.map((data, i) => {
              return (
                <span key={i} className="bg-gray-100 rounded-md px-3">
                  {data}
                </span>
              );
            })}
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-[#0b70ff] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Post your Freelance Projects
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

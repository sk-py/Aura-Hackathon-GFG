import React from "react";
import Navbar from "../features/Navbar/Navbar";
import { useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function HireFreelancerForm() {
  const [agreed, setAgreed] = useState(false);
  const [skills, setSkills] = useState(["Html", "Css", "Java"]);
  const handleAddSkills = () => {
    // console.log(document.getElementById("skill").value);
    const arr = [...skills];
    arr.push(document.getElementById("skill").value);
    setSkills(arr);
  };
  return (
    <>
      <Navbar></Navbar>

      <div className="isolate bg-white px-6 py-3 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Freelance Project Form
          </h2>
          {/* <p className="mt-2 text-lg leading-8 text-gray-600">
            Aute magna irure deserunt veniam aliqua magna enim voluptate.
          </p> */}
        </div>
        <form
          action="#"
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
                  type="text"
                  name="company"
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
                placeholder="Add your skills"
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

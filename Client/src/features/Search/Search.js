import React from "react";

export default function Search() { 
  return (
    <>
      <div className="bg-[#ccdce1] h-96 px-5 flex flex-col pt-16 gap-5 sm:items-center sm:px-10 lg:px-56 xl:pt-24 xl:px-96 sm:text-center sm:gap-5 sm:h-[28rem]">
        <h1 className="font-semibold text-2xl sm:text-4xl xl:text-5xl sm:leading-snug">
          Jobs for Unemployed Youth No Experience? No Problem
        </h1>
        <p>Empowering Youth through No Experience Job Opportunity</p>
        <button className="bg-blue-700 text-white px-3 py-2 w-fit rounded-lg sm:text-lg">
          Find a Job
        </button>
      </div>
      {/* SearchBox */}
    </>
  );
}

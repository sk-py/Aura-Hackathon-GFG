import React from "react";

export default function JobDetails() {
  return (
    <>
      {/* Job Header */}
      <div className="p-5 py-8 space-y-6 lg:flex justify-between bg-[#f4f6fc] lg:p-20 items-center">
        <div className="space-y-3 lg:flex lg:space-y-0 gap-5 items-center">
          <div className="bg-black text-white w-14 h-14 text-3xl lg:w-20 lg:h-20 rounded-md flex lg:text-5xl justify-center items-center">
            M
          </div>
          <div className="space-y-4 lg:space-y-3">
            <h1 className="font-semibold text-2xl">
              Senior Full Stack Engineer, Creator Success
            </h1>
            <ul className="gap-x-5 gap-y-1 flex lg:gap-6 flex-wrap">
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
                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                  />
                </svg>
                <p className="text-stone-700 text-base">Medium</p>
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
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>

                <p className="text-stone-700 text-base">London, UK</p>
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
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-stone-700 text-base">11 hours ago</p>
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
                <p className="text-stone-700 text-base">$35k - $45k</p>
              </li>
            </ul>
            <ul className="flex gap-3 flex-wrap">
              <li className="text-sm bg-blue-200 text-blue-700 px-4 py-1 rounded-3xl">
                Full Time
              </li>
              <li className="text-sm bg-green-200 text-green-700 px-4 py-1 rounded-3xl">
                Private
              </li>
              <li className="text-sm bg-orange-200 text-orange-700 px-4 py-1 rounded-3xl">
                Urgent
              </li>
            </ul>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <button className="bg-[#1967d2] text-white px-10 py-3 rounded-md">
            Apply For Job
          </button>
          <button className="bg-[#e2eaf8] text-[#1967d2] px-3 py-3 rounded-md">
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
          </button>
        </div>
      </div>

      {/* Main job Div */}
      <div className="max-w-7xl space-y-10 mx-auto px-3 my-8 lg:grid lg:space-y-0 grid-cols-12 gap-8 justify-between">
        <div className="left col-span-8">
          <h1 className="text-xl font-semibold mb-5">Job Description </h1>
          As a Product Designer, you will work within a Product Delivery Team
          fused with UX, engineering, product and data talent. You will help the
          team design beautiful interfaces that solve business challenges for
          our clients. We work with a number of Tier 1 banks on building
          web-based applications for AML, KYC and Sanctions List management
          workflows. This role is ideal if you are looking to segue your career
          into the FinTech or Big Data arenas.
          <h1 className="text-xl font-semibold mt-8 mb-5">
            Key Responsibilities
          </h1>
          <ul className="list-disc space-y-7 ps-4">
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
          </ul>
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
                <p>April 06, 2021</p>
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
                <p>Posted 1 hours ago</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6  text-[#0b70ff]"
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

              <div>
                <h3 className="font-semibold">Location:</h3>
                <p>London, UK</p>
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
                <p>Designer</p>
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
                <h3 className="font-semibold">Salary:</h3>
                <p>$35k - $45k</p>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <h2 className="font-semibold text-xl">Job Skills</h2>
            <div className="flex flex-wrap gap-3">
              <p className="bg-white px-5 rounded-lg py-1 text-sm inline-block">
                app
              </p>
              <p className="bg-white px-5 rounded-lg py-1 text-sm inline-block">
                administrative
              </p>
              <p className="bg-white px-5 rounded-lg py-1 text-sm inline-block">
                android
              </p>
              <p className="bg-white px-5 rounded-lg py-1 text-sm inline-block">
                wordpress
              </p>
              <p className="bg-white px-5 rounded-lg py-1 text-sm inline-block">
                design
              </p>
              <p className="bg-white px-5 rounded-lg py-1 text-sm inline-block">
                react
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

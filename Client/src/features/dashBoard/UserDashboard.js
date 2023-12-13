import React from "react";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
// import Homepage from "../../Pages/HomePage";


const router = createBrowserRouter([
  {
    path: "/test",
    element: <h1>TEst</h1>,
  },
  // {
  //   path: "jobdetails",
  //   element: <JobDetailsPage></JobDetailsPage>,
  // },
  // {
  //   path: "login",
  //   element: <LoginPage></LoginPage>,
  // },
  // {
  //   path: "myapplication",
  //   element: <MyApplicationPage></MyApplicationPage>,
  // },
  // {
  //   path: "signup",
  //   element: <SignUpPage></SignUpPage>,
  // },
  // {
  //   path: "postsignup",
  //   element: <PostSignUpPage></PostSignUpPage>,
  // },
  // {
  //   path: "jobs",
  //   element: <JobPage></JobPage>,
  // },
  // {
  //   path: "freelance",
  //   element: <FreelancePage></FreelancePage>,
  // },
  // {
  //   path:"/about",
  //   element:<AboutPage></AboutPage>
  // },
  // {
  //   path:"/dashboard",
  //   element:<DashboardPage></DashboardPage>
  // }
]);

export default function UserDashboard({children}) {
  return (
    <>
      <div className="mx-auto max-w-7xl mt-5 px-4 min-h-screen sm:px-6 lg:px-8 md:grid grid-cols-12 gap-2">
        <div className="hidden md:block bg-[#ecf3ff] rounded-md px-4 col-span-3">
          <div className="flex justify-center items-center my-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-[#0b70ff]"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
              />
            </svg>

            <h1 className="text-xl">Dashboard</h1>
          </div>
          <ul className="space-y-4">
            <Link to="/" className="bg- block px-3 py-3 bg-[#0b70ff] text-white rounded-md" >User profile</Link>
            <li className="bg- block  text-[#0b70ff] px-3 py-3 rounded-md" >Applied Projects</li>
            <li className="bg- block  text-[#0b70ff] px-3 py-3 rounded-md" >Freelance Projects</li>
            <li className="bg- block  text-[#0b70ff] px-3 py-3 rounded-md" >Applied Jobs</li>
            <li className="bg- block  text-[#0b70ff] px-3 py-3 rounded-md" >Add Freelance Projects</li>
          </ul>
        </div>
        <div className="bg-gray-50 rounded-md col-span-9">
          {/* <h1 className="text-xl">Profile</h1> */}
          {/* <RouterProvider router={router} /> */}
          {children}
        </div>
      </div>
    </>
  );
}

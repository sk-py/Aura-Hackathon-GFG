import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./Pages/HomePage";
import JobDetailsPage from "./Pages/JobDetailsPage";
import LoginPage from "./Pages/LoginPage";
import MyApplicationPage from "./Pages/MyApplicationPage";
import SignUpPage from "./Pages/SignUpPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PostSignUpPage from "./Pages/PostSignUpPage";
import FreelancePage from "./Pages/FreelancePage";
import JobPage from "./Pages/JobPage";
import AboutPage from "./Pages/AboutPage";
import ProfilePage from "./Pages/ProfilePage";
import HireFreelancerForm from "./Pages/HireFreelancerForm";
import FreelanceDetails from "./features/JobDetails/FreelanceDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage></Homepage>,
  },
  {
    path: "api/jobs/jobdetails/:Id",
    element: <JobDetailsPage></JobDetailsPage>,
  },
  {
    path: "/api/freelance/details/:Id",
    element: <FreelanceDetails />,
  },
  {
    path: "login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "myapplication",
    element: <MyApplicationPage></MyApplicationPage>,
  },
  {
    path: "signup",
    element: <SignUpPage></SignUpPage>,
  },
  {
    path: "postsignup",
    element: <PostSignUpPage></PostSignUpPage>,
  },
  {
    path: "jobs",
    element: <JobPage></JobPage>,
  },
  {
    path: "freelance",
    element: <FreelancePage></FreelancePage>,
  },
  {
    path: "/about",
    element: <AboutPage></AboutPage>,
  },
  {
    path: "/profile",
    element: <ProfilePage></ProfilePage>,
  },
  {
    path: "/hirefreelancer",
    element: <HireFreelancerForm></HireFreelancerForm>,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();
  const [recruiter, setRecruiter] = useState(false);
  const navigate = useNavigate();
  const handleUser = (e) => {
    if (
      (recruiter && e.target.value !== "recruiter") ||
      (!recruiter && e.target.value !== "candidate")
    ) {
      setRecruiter(!recruiter);
    }
  };
  const handleShow = () => {
    document.getElementsByName("password")[0].setAttribute("type", "text");
  };
  const handleHide = () => {
    document.getElementsByName("password")[0].setAttribute("type", "password");
  };

  const submitAction = async (formData) => {
    if (recruiter) {
      console.log("Recruiter SignUp");
      try {
        const response = await axios.post(
          "http://localhost:9000/api/auth/recruiter/signup",
          formData
        );
        if (response.status === 201) {
          toast.success("Account Created and Loggedin successFully");
        }
      } catch (error) {
        toast.error(error.response.data);
      }
    } else {
      console.log("USer SignUp");
      try {
        const response = await axios.post(
          "http://localhost:9000/api/auth/user/signup",
          formData
        );
        if (response.status === 201)
          toast.success("Account Created and Loggedin successFully");
        navigate("/postsignup");
      } catch (error) {
        toast.error(error.response.data.err);
      }
    }
    // navigate("/postsignup")
  };
  return (
    <div>
      {/* Button Group */}
      <div className="w-fit mx-auto rounded-xl my-5 overflow-hidden">
        <button
          value="candidate"
          onClick={(e) => handleUser(e)}
          className={`bg-[#e2eaf8] text-[#0b70ff] px-5 py-2 ${
            !recruiter ? "bg-[rgb(10,112,255)] text-[#e2eaf8]" : ""
          }`}
        >
          Candidate
        </button>
        <button
          value="recruiter"
          onClick={(e) => handleUser(e)}
          className={`bg-[#e2eaf8] text-[#0b70ff] px-5 py-2 ${
            recruiter ? "bg-[rgb(10,112,255)] text-[#e2eaf8]" : ""
          }`}
        >
          Recruiter
        </button>
      </div>

      <section className="min-h-[70vh] w-fit mx-auto">
        {/* <!-- Signup container --> */}
        <div className="flex rounded-2xl lg:shadow-lg max-w-3xl p-5 items-center">
          {/* <!-- form --> */}
          <div className=" px-8 w-80 sm:w-96 md:p">
            <h2 className="font-bold mb-5 text-center text-2xl text-[#002D74]">
              Signup{" "}
            </h2>

            <form
              className="flex flex-col gap-4"
              onSubmit={handleSubmit(submitAction)}
            >
              <div className="grid grid-cols-2 gap-2">
                <input
                  className="rounded-xl border"
                  type="text"
                  // name="firstName"
                  {...register("firstName")}
                  placeholder="First name"
                  autoComplete="firstName"
                  required
                />
                <input
                  className="rounded-xl border"
                  type="text"
                  // name="lastName"
                  {...register("lastName")}
                  autoComplete="lastName"
                  placeholder="Last name"
                  required
                />
              </div>
              <input
                className="rounded-xl border"
                type="email"
                // name="email"
                {...register("email")}
                placeholder="Email"
                autoComplete="email"
                required
              />
              {recruiter && (
                <input
                  className="rounded-xl border"
                  type="text"
                  // name="companyName"
                  {...register("companyName")}
                  placeholder="Comapany Name"
                  autoComplete="companyName"
                  required
                />
              )}
              <input
                className="rounded-xl border"
                type="password"
                // name="password"
                {...register("password")}
                placeholder="Password"
                autoComplete="password"
                required
              />
              <div>
                <div className="relative">
                  <input
                    className="p-2 w-full rounded-xl border"
                    type="text"
                    {...register("cnfmPassword", {
                      validate: (value, formValue) =>
                        value === formValue.password,
                    })}
                    placeholder="Confirm password"
                    autoComplete="current-password"
                  />
                  <svg
                    onMouseDown={handleShow}
                    onMouseUp={handleHide}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="gray"
                    className="bi cursor-pointer bi-eye absolute top-1/2 right-3 -translate-y-1/2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                  </svg>
                </div>
                {errors.cnfmPassword && (
                  <p className="text-sm ps-1 text-red-700">
                    Password not matching
                  </p>
                )}
              </div>
              <button className="bg-[#0b70ff] rounded-xl text-white py-2 hover:scale-105 duration-300">
                Signup
              </button>
            </form>

            {/* <div className="flex"> */}

            <p className="mt-8 text-center text-sm">
              Already a user ?{" "}
              <Link
                to="/login"
                className="ms-1 text-green-600 underline underline-offset-4"
              >
                Login now
              </Link>
            </p>
            {/* </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}

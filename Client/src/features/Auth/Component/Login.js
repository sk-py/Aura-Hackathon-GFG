import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setData, selectLoggedIn } from "../AuthSlice";

export default function Login() {
  const loggedIn = useSelector(selectLoggedIn);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (loggedIn) {
      console.log(loggedIn);
      // eslint-disable-next-line
      navigate("/");
    }
  }, [loggedIn]);

  const submitAction = async (data) => {
    console.log(data);
    try {
      const response = await axios.post(
        "http://localhost:9000/api/auth/login",
        data
        );
        console.log("Logging");
      console.log(response.data.user.firstName);
      if (response.status === 200) {
        dispatch(setData({ ...response.data, type: response.data.user.type }));
        toast.success(`Logged in sucessfully ${response.data.user.firstName}`);
      }
    } catch (error) {
      toast.error(error.response.data.err);
    }
  };

  const handleShow = () => {
    document.getElementsByName("password")[0].setAttribute("type", "text");
  };
  const handleHide = () => {
    document.getElementsByName("password")[0].setAttribute("type", "password");
  };
  return (
    <div>
      <section className="min-h-[70vh] lg:min-h-[80vh] flex items-center justify-center">
        {/* <!-- login container --> */}
        <div className="flex rounded-2xl lg:shadow-lg max-w-3xl p-5 items-center">
          {/* <!-- form --> */}
          <div className=" px-8 w-80 sm:w-96 md:p">
            <h2 className="font-bold text-center text-2xl text-[#002D74]">
              Login
            </h2>

            <form
              onSubmit={handleSubmit(submitAction)}
              className="flex flex-col gap-8"
            >
              <div>
                <input
                  className="p-2 w-full mt-8 rounded-xl border"
                  type="email"
                  // name="email"
                  {...register("email", { required: true })}
                  placeholder="Email"
                  autoComplete="email"
                />
                {errors.email && (
                  <p className="text-sm ps-1 text-red-700">Email Required</p>
                )}
              </div>
              <div>
                <div className="relative">
                  <input
                    className="p-2 w-full rounded-xl border"
                    type="password"
                    {...register("password", { required: true })}
                    placeholder="Password"
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
                {errors.password && (
                  <p className="text-sm ps-1 text-red-700">Password Required</p>
                )}
              </div>
              <button className="bg-[#0b70ff] rounded-xl text-white py-2 hover:scale-105 duration-300">
                Login
              </button>
            </form>

            {/* <div className="flex"> */}

            <p className="mt-8 text-center text-sm">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="ms-1 underline text-green-600 underline-offset-4"
              >
                Signup now
              </Link>
            </p>
            <p className="text-center my-5 text-red-900 text-sm">
              Forgot password
            </p>
            {/* </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}

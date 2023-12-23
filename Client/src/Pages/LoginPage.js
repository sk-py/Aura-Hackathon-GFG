import React, { useEffect } from "react";
import Navbar from "../features/Navbar/Navbar";
import Login from "../features/Auth/Component/Login";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { useDispatch} from "react-redux";
import { setLocal } from "../features/Auth/AuthSlice";

export default function LoginPage() {
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
  const localDetail = useSelector((state) => state.auth.localDetail);

  return (
    <>
    {localDetail&&<Navigate to="/"></Navigate>}
      <Navbar></Navbar>
      <Login></Login>
    </>
  );
}

import React, { useEffect } from "react";
import Navbar from "../features/Navbar/Navbar";
import Freelance from "../features/FreelanceList/Freelance";
import axios from "axios";
import { useDispatch} from "react-redux";
import { setLocal } from "../features/Auth/AuthSlice";

export default function FreelancePage() {
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
  return (
    <>
      <Navbar></Navbar>
      <Freelance></Freelance>
    </>
  );
}

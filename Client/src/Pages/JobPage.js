import React, { useEffect } from 'react'
import Navbar from '../features/Navbar/Navbar'
import Jobs from '../features/JobList/Jobs'
import axios from "axios";
import { useDispatch} from "react-redux";
import { setLocal } from "../features/Auth/AuthSlice";

export default function JobPage() {
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
    <Jobs></Jobs>
    </>
  )
}
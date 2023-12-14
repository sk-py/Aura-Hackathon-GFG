import React, { useEffect, useState } from "react";
import Navbar from "../features/Navbar/Navbar";
import Search from "../features/hero/Hero";
import Jobs from "../features/JobList/Jobs";
import Footer from "../features/footer/Footer";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectUserDetail, setLocal } from "../features/Auth/AuthSlice";


export default function HomePage() {
  const dispatch = useDispatch();
  const userDetails = useSelector((state)=>state.auth.localDetail);
  console.log(userDetails);
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
      <Search></Search>
      <Footer></Footer>
    </>
  );
}

import React, { useEffect } from "react";
import Navbar from "../features/Navbar/Navbar";
import Search from "../features/hero/Hero";
import Jobs from "../features/JobList/Jobs";
import Footer from "../features/footer/Footer";
import axios from "axios";

export default function HomePage() {
  const callApi = async () => {
    const res = await axios.post("http://localhost:9000/tokenVerify", {
      token: localStorage.getItem("auth-token"),
    });
    console.log("OUT");
    console.log(res);
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

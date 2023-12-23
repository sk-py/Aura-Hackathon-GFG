import React, { useEffect } from 'react'
import Navbar from '../features/Navbar/Navbar'
import Signup from '../features/Auth/Component/SignUp'
import axios from "axios";
import { useDispatch, useSelector} from "react-redux";
import { setLocal } from "../features/Auth/AuthSlice";
import { Navigate } from 'react-router-dom';

export default function SignUpPage() {
  const dispatch = useDispatch();
  const localDetail = useSelector((state) => state.auth.localDetail);
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
    
  {localDetail&&<Navigate to="/"></Navigate>} 
        <Navbar></Navbar>
        <Signup></Signup>
    </>
  )
}

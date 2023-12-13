import React from 'react'
import Navbar from "../features/Navbar/Navbar"
import UserDashboard from '../features/dashBoard/UserDashboard'

export default function DashboardPage() {
  return (
    <>
        <Navbar></Navbar>
        <UserDashboard></UserDashboard>
    </>
  )
}

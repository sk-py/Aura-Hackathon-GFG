import React from 'react'
import Navbar from '../features/Navbar/Navbar'
import Search from '../features/hero/Hero'
import Jobs from '../features/JobList/Jobs'
import Footer from '../features/footer/Footer'

export default function HomePage() {
  return (
    <>
        <Navbar></Navbar>
        <Search></Search>
        <Footer></Footer>
    </>
  )
}

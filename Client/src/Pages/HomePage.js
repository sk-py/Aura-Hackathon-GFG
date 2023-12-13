import React from 'react'
import Navbar from '../features/Navbar/Navbar'
import Search from '../features/Search/Search'
import Jobs from '../features/JobList/Jobs'

export default function HomePage() {
  return (
    <>
        <Navbar></Navbar>
        <Search></Search>
    </>
  )
}

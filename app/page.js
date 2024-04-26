"use client"
import BackgroundAdd1 from '@/Components/BackgroundAdd1'
import LandingPage from '@/Components/LandingPage'
import Navbar from '@/Components/Navbar'
import React from 'react'

const page = () => {
  return (
    <>
    <div className="main">
      <Navbar/>
      <LandingPage/> 
      <BackgroundAdd1/>
    </div>
    </>
  )
}

export default page

import React from 'react'
import { TopNavBar, LeftNavBar } from './Explore'
import TopSection from './TopSection'
import NavBar from './NavBar'
import { useNavigate } from 'react-router-dom'
export const AboutHackathon = () => {
  const navigate = useNavigate()
  const back = () => {
    navigate(-1)
  }
  return (
    <div className='bg-[url("/images/bg.png")] pb-10'>
      <div className='flex flex-col lg:mr-20'>
        <TopSection />
      </div>
      <div className='flex flex-row'>
        <NavBar />
        <div className='w-screen ml-43 mt-30'>
          <div className='h-full flex flex-col border-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] p-5 w-[90%] rounded-2xl bg-white gap-y-10 justify-center'>
            <div className='w-17 border-2 flex items-center p-5 rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] cursor-pointer bg-white' onClick={back}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.1431 12L0.857422 12M0.857422 12L6.85742 6M0.857422 12L6.85742 18" stroke="black" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div className='font-bold text-[26px] font-[Jost] pl-20'>About this Hackathon: </div>
            <div className='border-3 px-8 py-10 font-[Jost] text-[20px] w-[86%] mx-auto font-bold rounded-2xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'>
              CodeSprint 2024 is a 48-hour global coding marathon that brings together developers, designers, and innovators to build impactful solutions using AI, fintech, and sustainability-driven technologies. Participants will collaborate in teams, attend expert-led workshops, and receive mentorship from top industry professionals to bring their creative ideas to life.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

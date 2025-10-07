import React from 'react'
import { TopNavBar, LeftNavBar } from './Explore'
import TopSection from './TopSection'
import NavBar from './NavBar'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom'
const RoleDescription = () => {
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
          <div className='flex flex-col border-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] p-5 w-[90%] rounded-2xl bg-white gap-y-10 justify-center'>
            <div className='w-17 border-2 flex items-center p-5 rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] cursor-pointer bg-white' onClick={back}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.1431 12L0.857422 12M0.857422 12L6.85742 6M0.857422 12L6.85742 18" stroke="black" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div className='font-bold text-[26px] font-[Jost] pl-20'>Roles and Responsibility: </div>
            <div className='border-3 px-8 py-10 font-[Jost] text-[20px] w-[86%] mx-auto font-bold rounded-2xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'>
              Durante seu estágio, você pode aprimorar seu conhecimento e ganhar experiência profissional trabalhando em projetos de clientes. Esta função oferece uma oportunidade excepcional para construir um portfólio atraente, adquirir novas habilidades, obter insights sobre diversos setores e abraçar novos desafios para sua futura carreira.
            </div>
            <div className='font-bold text-[26px] font-[Jost] pl-20'>Perks:</div>
            <div className='flex flex-row justify-between w-[86%] mx-auto '>
              <div className='px-6 py-2 font-[Jost] border-2 border-[#1fa7e3] shadow-[#1fa7e3] text-[27px] font-bold rounded-2xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'>Certificate</div>
              <div className='px-6 py-2 font-[Jost] border-2 border-[#1fa7e3] shadow-[#1fa7e3] text-[27px] font-bold rounded-2xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'>Letter of recommendation</div>
              <div className='px-6 py-2 font-[Jost] border-2 border-[#1fa7e3] shadow-[#1fa7e3] text-[27px] font-bold rounded-2xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'>Stipend</div>
            </div>
            <div className='font-bold text-[26px] font-[Jost] pl-20'>Details:</div>
            <div className='border-3 px-8 py-10 font-[Jost] text-[20px] font-bold rounded-2xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] w-[86%] mx-auto'>
              Durante seu estágio, você pode aprimorar seu conhecimento e ganhar experiência profissional trabalhando em projetos de clientes. Esta função oferece uma oportunidade excepcional para construir um portfólio atraente, adquirir novas habilidades, obter insights sobre diversos setores e abraçar novos desafios para sua futura carreira.
            </div>
          </div>
        </div>
      </div>
      <Link className='flex justify-center text-center mt-4' to={"/jobdetails/about"}>More</Link>
    </div>
  )
}

export default RoleDescription
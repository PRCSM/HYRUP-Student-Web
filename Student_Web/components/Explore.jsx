import React from 'react'
import TopSection from './TopSection'
import NavBar from './NavBar'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

export const Card = ({typeOf}) => {
  return(
    <> 
    <Link to={typeOf}>
      <div className=' w-[full] h-[full] bg-white flex flex-col border-3 items-start font-[Jost] py-4 rounded-2xl shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]'>
        <div className='bg-blue-900 w-[90%] h-[150px] mx-auto rounded-2xl'>
          <img src='/images/home.png' className='w-full h-full rounded-2xl object-contain'></img>
        </div>
        <div className='flex flex-row mt-3 justify-between'>
          <div className='flex flex-col ml-6'>
            <div className='text-[29px] font-[600] whitespace-nowrap'>UI/UX Designer</div>
            <div className='flex flex-row justify-between items-center'>
              <div className='font-regular text-[18px] whitespace-nowrap'>Lumel Technologies</div>
              <div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.3173 2.2385C10.7351 0.188233 13.6648 0.188232 14.0827 2.2385C14.369 3.64376 16.0383 4.25131 17.1609 3.35889C18.7989 2.05686 21.0432 3.94004 20.0453 5.7792C19.3614 7.03977 20.2496 8.57814 21.6832 8.61614C23.7749 8.67158 24.2836 11.5568 22.3371 12.3243C21.0029 12.8503 20.6944 14.5997 21.7682 15.5503C23.3349 16.9373 21.8701 19.4745 19.8856 18.8112C18.5254 18.3566 17.1646 19.4984 17.3762 20.9168C17.6848 22.9864 14.9318 23.9884 13.8379 22.2047C13.0882 20.9821 11.3118 20.9821 10.5621 22.2047C9.46824 23.9884 6.71522 22.9864 7.02384 20.9168C7.23537 19.4984 5.8746 18.3566 4.51442 18.8112C2.52993 19.4745 1.06508 16.9373 2.63176 15.5503C3.70556 14.5997 3.3971 12.8503 2.06292 12.3243C0.116351 11.5568 0.625088 8.67158 2.71676 8.61614C4.1504 8.57814 5.03858 7.03977 4.35467 5.7792C3.35684 3.94004 5.60113 2.05686 7.23907 3.35889C8.36173 4.25131 10.031 3.64376 10.3173 2.2385Z" fill="#1FA7E3"/>
                </svg>
              </div>
            </div>
          </div>
          <div className='flex flex-col ml-6 mr-3'>
            <div className='border-2 px-7 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rounded-4xl font-regular text-[12px] m-1 text-center'>START UP</div>
            <div className='border-2 px-7 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rounded-4xl font-regular text-[12px] m-1 text-center whitespace-nowrap'>E-COMMERCE</div>
          </div>
        </div>
        <div className='text-[#666565] flex flex-col ml-6'>
          <div className=''>Coimbatore, Tamil Nadu, India · 3 weeks ago · </div>
          <div className=''>Over 100 people clicked apply</div>
        </div>
      </div>
    </Link>
    </>
  )
}
export const Explore = () => {
  return (
    <>
    <div className='pb-10 hidden sm:block'>
      <div className='flex flex-row'>
        <div className='flex-1'>
          <div className='font-[Jost] m-8'>
          <div className='font-semibold text-[45px]'>Top job picks for you</div>
          <div className='font-regular text-[26px]'>Based on your profile, preference and activity like applies, searches and saves</div>
          </div>
          <div className='flex flex-row m-8 justify-between'>
            <div className='flex flex-row gap-x-12'>
              <button className='bg-[#E3FEAA] text-[17px] cursor-pointer border-2 px-6 py-2 rounded-md font-medium font-[Jost]'>Featured</button>
              <button className='bg-white text-[17px] h-[50px] cursor-pointer border-2 px-6 py-2 rounded-md font-medium font-[Jost]'>Live</button>
              <button className='bg-white text-[17px] h-[50px] cursor-pointer border-2 px-6 py-2 rounded-md font-medium font-[Jost]'>Upcoming</button>
              <button className='bg-white text-[17px] h-[50px] cursor-pointer border-2 px-6 py-2 rounded-md font-medium font-[Jost]'>New</button>
            </div>
            <div className='font-[Jost] text-[25px] underline font-medium align-bottom pr-10'><span className='cursor-pointer'><Link to={"/jobs"}>View more</Link></span></div>
          </div>
          <div className='flex flex-row px-9 gap-x-14 relative px-10'>
            <div className='border-3 flex justify-center items-center w-[65px] h-[65px] rounded-full shadow-[5px_5px_5px_0px_rgba(0,0,0,0.8)] cursor-pointer absolute bg-white top-[45%] left-1'>
              <svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.11621 10.6874L13.0596 1.43445L14.4268 2.58972L5.75195 9.92371L4.84863 10.6874L5.75195 11.451L14.4268 18.786L13.0596 19.9413L2.11621 10.6874Z" fill="#1D1B20" stroke="black" stroke-width="2"/>
              </svg>
            </div>          
            <Card typeOf={"/jobdetails/maincard"}/>
            <Card typeOf={"/jobdetails/maincard"}/>
            <Card typeOf={"/jobdetails/maincard"}/>
            <div className='border-3 flex justify-center items-center w-[65px] h-[65px] rounded-full shadow-[5px_5px_5px_0px_rgba(0,0,0,0.8)] cursor-pointer absolute bg-white top-[45%] right-5'>
              <svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.8838 11.3126L2.94043 20.5656L1.57324 19.4103L10.248 12.0763L11.1514 11.3126L10.248 10.549L1.57324 3.21399L2.94043 2.05872L13.8838 11.3126Z" fill="#1D1B20" stroke="black" stroke-width="2"/>
              </svg>
            </div>
          </div>

          <div className='font-[Jost] m-8'>
          <div className='font-semibold text-[45px]'>Hackathon</div>
          <div className='font-regular text-[26px]'>Based on your profile, preference and activity like applies, searches and saves</div>
          </div>
          <div className='flex flex-row m-8 justify-between'>
            <div className='flex flex-row gap-x-12'>
              <button className='bg-[#E3FEAA] text-[17px] cursor-pointer border-2 px-6 py-2 rounded-md font-medium font-[Jost]'>Featured</button>
              <button className='bg-white text-[17px] h-[50px] cursor-pointer border-2 px-6 py-2 rounded-md font-medium font-[Jost]'>Live</button>
              <button className='bg-white text-[17px] h-[50px] cursor-pointer border-2 px-6 py-2 rounded-md font-medium font-[Jost]'>Upcoming</button>
              <button className='bg-white text-[17px] h-[50px] cursor-pointer border-2 px-6 py-2 rounded-md font-medium font-[Jost]'>New</button>
            </div>
            <div className='font-[Jost] text-[25px] underline font-medium align-bottom pr-10'><span className='cursor-pointer'><Link to={"/hackathons"}>View more</Link></span></div>
          </div>
          <div className='flex flex-row px-9 gap-x-14 relative px-10'>
            <div className='border-3 flex justify-center items-center w-[65px] h-[65px] rounded-full shadow-[5px_5px_5px_0px_rgba(0,0,0,0.8)] cursor-pointer absolute bg-white top-[45%] left-1'>
              <svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.11621 10.6874L13.0596 1.43445L14.4268 2.58972L5.75195 9.92371L4.84863 10.6874L5.75195 11.451L14.4268 18.786L13.0596 19.9413L2.11621 10.6874Z" fill="#1D1B20" stroke="black" stroke-width="2"/>
              </svg>
            </div>          
            <Card typeOf={"/hackathondetails/maincard"}/>
            <Card typeOf={"/hackathondetails/maincard"}/>
            <Card typeOf={"/hackathondetails/maincard"}/>
            <div className='border-3 flex justify-center items-center w-[65px] h-[65px] rounded-full shadow-[5px_5px_5px_0px_rgba(0,0,0,0.8)] cursor-pointer absolute bg-white top-[45%] right-5'>
              <svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.8838 11.3126L2.94043 20.5656L1.57324 19.4103L10.248 12.0763L11.1514 11.3126L10.248 10.549L1.57324 3.21399L2.94043 2.05872L13.8838 11.3126Z" fill="#1D1B20" stroke="black" stroke-width="2"/>
              </svg>
            </div>
          </div>
          </div>
      </div>
    </div>
    <div className='bg-[url("/images/bg.png")] md:hidden p-3 mb-30'>
      <div className='flex flex-col'>
        <div className="flex justify-center"><TopSection /></div>
        <div className='flex flex-col gap-y-4 mt-10'>
          <div className='font-[Jost]'>
          <div className='font-semibold text-[1.2rem] mb-2'>Top job picks for you</div>
          <div className='font-regular text-[#646464] text-[0.8rem]'>Based on your profile, preference and activity like applies, searches and saves</div>
          </div>
          <div className='flex flex-row justify-between gap-x-3'>
            <div className='flex flex-row gap-x-3 overflow-x-auto text-[0.8rem] '>
              <button className='bg-[#E3FEAA] cursor-pointer border-2  rounded-md font-medium font-[Jost] px-2 py-1'>Featured</button>
              <button className='bg-white cursor-pointer border-2 rounded-md font-medium font-[Jost] px-2 py-1'>Live</button>
              <button className='bg-white cursor-pointer border-2 rounded-md font-medium font-[Jost] px-2 py-1'>Upcoming</button>
              <button className='bg-white cursor-pointer border-2 rounded-md font-medium font-[Jost] px-2 py-1'>New</button>
              <button className='bg-white cursor-pointer border-2 rounded-md font-medium font-[Jost] px-2 py-1'>Always Open</button>
            </div>
          </div>
        </div>
        <div className='mt-3'>
          <div className='flex flex-row overflow-x-auto gap-x-3'>
            <Link to={"/jobdetails/maincard"}>
            <div className='flex flex-col border-2 rounded-2xl gap-y-6 p-4'>
            <div className='bg-blue-900 w-[260px] h-[100px] rounded-2xl mx-auto my-auto'>
              
            </div>
            <div className='flex flex-row'>
              <div className='flex flex-col gap-y-1'>
                <div className='font-semibold text-lg whitespace-nowrap'>UI/UX Designer</div>
                <div className='flex flex-row'>
                  <div className='text-[#232323] whitespace-nowrap text-sm mr-1'>Lumel Technologies</div>
                  <div className='ml-1 relative'>
                <div className='absolute top-2 left-[6px]'>
                  <svg width="9" height="7" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.976562 4.62418L3.92493 7.74598C4.08933 7.92005 4.37121 7.90287 4.51325 7.71011L9.61656 0.78418" stroke="white" stroke-width="1.536" stroke-linecap="round"/>
                  </svg>
                </div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.3173 2.2385C10.7351 0.188233 13.6648 0.188232 14.0827 2.2385C14.369 3.64376 16.0383 4.25131 17.1609 3.35889C18.7989 2.05686 21.0432 3.94004 20.0453 5.7792C19.3614 7.03977 20.2496 8.57814 21.6832 8.61614C23.7749 8.67158 24.2836 11.5568 22.3371 12.3243C21.0029 12.8503 20.6944 14.5997 21.7682 15.5503C23.3349 16.9373 21.8701 19.4745 19.8856 18.8112C18.5254 18.3566 17.1646 19.4984 17.3762 20.9168C17.6848 22.9864 14.9318 23.9884 13.8379 22.2047C13.0882 20.9821 11.3118 20.9821 10.5621 22.2047C9.46824 23.9884 6.71522 22.9864 7.02384 20.9168C7.23537 19.4984 5.8746 18.3566 4.51442 18.8112C2.52993 19.4745 1.06508 16.9373 2.63176 15.5503C3.70556 14.5997 3.3971 12.8503 2.06292 12.3243C0.116351 11.5568 0.625088 8.67158 2.71676 8.61614C4.1504 8.57814 5.03858 7.03977 4.35467 5.7792C3.35684 3.94004 5.60113 2.05686 7.23907 3.35889C8.36173 4.25131 10.031 3.64376 10.3173 2.2385Z" fill="#1FA7E3"/>
                </svg>
              </div>
                </div>
              </div>
              <div>
                <div className='flex flex-col font-[Jost] text-[0.7rem] gap-y-3 ml-3'>
                  <div className='whitespace-nowrap border-1 shadow-[2px_2px_0_0_black] px-4 py-1 rounded-3xl text-center'>START UP</div>
                  <div className='whitespace-nowrap border-1 shadow-[2px_2px_0_0_black] px-4 py-1 rounded-3xl text-center '>E-COMMERCE</div>
                </div>
              </div>
            </div>
          </div>
            </Link>
            <Link to={"/jobdetails/maincard"}>
            <div className='flex flex-col border-2 rounded-2xl gap-y-6 p-4'>
            <div className='bg-blue-900 w-[260px] h-[100px] rounded-2xl mx-auto my-auto'>
              
            </div>
            <div className='flex flex-row'>
              <div className='flex flex-col gap-y-1'>
                <div className='font-semibold text-lg whitespace-nowrap'>UI/UX Designer</div>
                <div className='flex flex-row'>
                  <div className='text-[#232323] whitespace-nowrap text-sm mr-1'>Lumel Technologies</div>
                  <div className='ml-1 relative'>
                <div className='absolute top-2 left-[6px]'>
                  <svg width="9" height="7" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.976562 4.62418L3.92493 7.74598C4.08933 7.92005 4.37121 7.90287 4.51325 7.71011L9.61656 0.78418" stroke="white" stroke-width="1.536" stroke-linecap="round"/>
                  </svg>
                </div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.3173 2.2385C10.7351 0.188233 13.6648 0.188232 14.0827 2.2385C14.369 3.64376 16.0383 4.25131 17.1609 3.35889C18.7989 2.05686 21.0432 3.94004 20.0453 5.7792C19.3614 7.03977 20.2496 8.57814 21.6832 8.61614C23.7749 8.67158 24.2836 11.5568 22.3371 12.3243C21.0029 12.8503 20.6944 14.5997 21.7682 15.5503C23.3349 16.9373 21.8701 19.4745 19.8856 18.8112C18.5254 18.3566 17.1646 19.4984 17.3762 20.9168C17.6848 22.9864 14.9318 23.9884 13.8379 22.2047C13.0882 20.9821 11.3118 20.9821 10.5621 22.2047C9.46824 23.9884 6.71522 22.9864 7.02384 20.9168C7.23537 19.4984 5.8746 18.3566 4.51442 18.8112C2.52993 19.4745 1.06508 16.9373 2.63176 15.5503C3.70556 14.5997 3.3971 12.8503 2.06292 12.3243C0.116351 11.5568 0.625088 8.67158 2.71676 8.61614C4.1504 8.57814 5.03858 7.03977 4.35467 5.7792C3.35684 3.94004 5.60113 2.05686 7.23907 3.35889C8.36173 4.25131 10.031 3.64376 10.3173 2.2385Z" fill="#1FA7E3"/>
                </svg>
              </div>
                </div>
              </div>
              <div>
                <div className='flex flex-col font-[Jost] text-[0.7rem] gap-y-3 ml-3'>
                  <div className='whitespace-nowrap border-1 shadow-[2px_2px_0_0_black] px-4 py-1 rounded-3xl text-center'>START UP</div>
                  <div className='whitespace-nowrap border-1 shadow-[2px_2px_0_0_black] px-4 py-1 rounded-3xl text-center '>E-COMMERCE</div>
                </div>
              </div>
            </div>
          </div>
            </Link>
            <Link to={"/jobdetails/maincard"}>
            <div className='flex flex-col border-2 rounded-2xl gap-y-6 p-4'>
            <div className='bg-blue-900 w-[260px] h-[100px] rounded-2xl mx-auto my-auto'>
              
            </div>
            <div className='flex flex-row'>
              <div className='flex flex-col gap-y-1'>
                <div className='font-semibold text-lg whitespace-nowrap'>UI/UX Designer</div>
                <div className='flex flex-row'>
                  <div className='text-[#232323] whitespace-nowrap text-sm mr-1'>Lumel Technologies</div>
                  <div className='ml-1 relative'>
                <div className='absolute top-2 left-[6px]'>
                  <svg width="9" height="7" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.976562 4.62418L3.92493 7.74598C4.08933 7.92005 4.37121 7.90287 4.51325 7.71011L9.61656 0.78418" stroke="white" stroke-width="1.536" stroke-linecap="round"/>
                  </svg>
                </div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.3173 2.2385C10.7351 0.188233 13.6648 0.188232 14.0827 2.2385C14.369 3.64376 16.0383 4.25131 17.1609 3.35889C18.7989 2.05686 21.0432 3.94004 20.0453 5.7792C19.3614 7.03977 20.2496 8.57814 21.6832 8.61614C23.7749 8.67158 24.2836 11.5568 22.3371 12.3243C21.0029 12.8503 20.6944 14.5997 21.7682 15.5503C23.3349 16.9373 21.8701 19.4745 19.8856 18.8112C18.5254 18.3566 17.1646 19.4984 17.3762 20.9168C17.6848 22.9864 14.9318 23.9884 13.8379 22.2047C13.0882 20.9821 11.3118 20.9821 10.5621 22.2047C9.46824 23.9884 6.71522 22.9864 7.02384 20.9168C7.23537 19.4984 5.8746 18.3566 4.51442 18.8112C2.52993 19.4745 1.06508 16.9373 2.63176 15.5503C3.70556 14.5997 3.3971 12.8503 2.06292 12.3243C0.116351 11.5568 0.625088 8.67158 2.71676 8.61614C4.1504 8.57814 5.03858 7.03977 4.35467 5.7792C3.35684 3.94004 5.60113 2.05686 7.23907 3.35889C8.36173 4.25131 10.031 3.64376 10.3173 2.2385Z" fill="#1FA7E3"/>
                </svg>
              </div>
                </div>
              </div>
              <div>
                <div className='flex flex-col font-[Jost] text-[0.7rem] gap-y-3 ml-3'>
                  <div className='whitespace-nowrap border-1 shadow-[2px_2px_0_0_black] px-4 py-1 rounded-3xl text-center'>START UP</div>
                  <div className='whitespace-nowrap border-1 shadow-[2px_2px_0_0_black] px-4 py-1 rounded-3xl text-center '>E-COMMERCE</div>
                </div>
              </div>
            </div>
          </div>
            </Link>
          </div>
            <div className='mt-4'>
                <div className='font-[Jost] text-[0.8rem] underline font-medium flex justify-end'><span className='cursor-pointer'><Link to={"/jobs"}>View more</Link></span></div>
            </div>
        </div>
        <div className='flex flex-col gap-y-4 mt-10'>
          <div className='font-[Jost]'>
          <div className='font-semibold text-[1.2rem] mb-2'>Hackathon</div>
          <div className='font-regular text-[#646464] text-[0.8rem]'>Based on your profile, preference and activity like applies, searches and saves</div>
          </div>
          <div className='flex flex-row justify-between gap-x-3'>
            <div className='flex flex-row gap-x-3 overflow-x-auto text-[0.8rem] '>
              <button className='bg-[#E3FEAA] cursor-pointer border-2  rounded-md font-medium font-[Jost] p-2'>Featured</button>
              <button className='bg-white cursor-pointer border-2 rounded-md font-medium font-[Jost] p-2'>Upcoming</button>
            </div>
          </div>
        </div>
        <div className='flex flex-row overflow-x-auto gap-x-3 mt-3'>
          <Link to={"/hackathondetails/maincard"}>
            <div className='flex flex-col border-2 rounded-2xl gap-y-6 p-4'>
            <div className='bg-blue-900 w-[260px] h-[100px] rounded-2xl mx-auto my-auto'>
              
            </div>
            <div className='flex flex-row'>
              <div className='flex flex-col gap-y-1'>
                <div className='font-semibold text-lg whitespace-nowrap'>UI/UX Designer</div>
                <div className='flex flex-row'>
                  <div className='text-[#232323] whitespace-nowrap text-sm mr-1'>Lumel Technologies</div>
                  <div className='ml-1 relative'>
                <div className='absolute top-2 left-[6px]'>
                  <svg width="9" height="7" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.976562 4.62418L3.92493 7.74598C4.08933 7.92005 4.37121 7.90287 4.51325 7.71011L9.61656 0.78418" stroke="white" stroke-width="1.536" stroke-linecap="round"/>
                  </svg>
                </div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.3173 2.2385C10.7351 0.188233 13.6648 0.188232 14.0827 2.2385C14.369 3.64376 16.0383 4.25131 17.1609 3.35889C18.7989 2.05686 21.0432 3.94004 20.0453 5.7792C19.3614 7.03977 20.2496 8.57814 21.6832 8.61614C23.7749 8.67158 24.2836 11.5568 22.3371 12.3243C21.0029 12.8503 20.6944 14.5997 21.7682 15.5503C23.3349 16.9373 21.8701 19.4745 19.8856 18.8112C18.5254 18.3566 17.1646 19.4984 17.3762 20.9168C17.6848 22.9864 14.9318 23.9884 13.8379 22.2047C13.0882 20.9821 11.3118 20.9821 10.5621 22.2047C9.46824 23.9884 6.71522 22.9864 7.02384 20.9168C7.23537 19.4984 5.8746 18.3566 4.51442 18.8112C2.52993 19.4745 1.06508 16.9373 2.63176 15.5503C3.70556 14.5997 3.3971 12.8503 2.06292 12.3243C0.116351 11.5568 0.625088 8.67158 2.71676 8.61614C4.1504 8.57814 5.03858 7.03977 4.35467 5.7792C3.35684 3.94004 5.60113 2.05686 7.23907 3.35889C8.36173 4.25131 10.031 3.64376 10.3173 2.2385Z" fill="#1FA7E3"/>
                </svg>
              </div>
                </div>
              </div>
              <div>
                <div className='flex flex-col font-[Jost] text-[0.7rem] gap-y-3 ml-3'>
                  <div className='whitespace-nowrap border-1 shadow-[2px_2px_0_0_black] px-4 py-1 rounded-3xl text-center'>START UP</div>
                  <div className='whitespace-nowrap border-1 shadow-[2px_2px_0_0_black] px-4 py-1 rounded-3xl text-center '>E-COMMERCE</div>
                </div>
              </div>
            </div>
          </div>
            </Link>
            <Link to={"/hackathondetails/maincard"}>
            <div className='flex flex-col border-2 rounded-2xl gap-y-6 p-4'>
            <div className='bg-blue-900 w-[260px] h-[100px] rounded-2xl mx-auto my-auto'>
              
            </div>
            <div className='flex flex-row'>
              <div className='flex flex-col gap-y-1'>
                <div className='font-semibold text-lg whitespace-nowrap'>UI/UX Designer</div>
                <div className='flex flex-row'>
                  <div className='text-[#232323] whitespace-nowrap text-sm mr-1'>Lumel Technologies</div>
                  <div className='ml-1 relative'>
                <div className='absolute top-2 left-[6px]'>
                  <svg width="9" height="7" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.976562 4.62418L3.92493 7.74598C4.08933 7.92005 4.37121 7.90287 4.51325 7.71011L9.61656 0.78418" stroke="white" stroke-width="1.536" stroke-linecap="round"/>
                  </svg>
                </div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.3173 2.2385C10.7351 0.188233 13.6648 0.188232 14.0827 2.2385C14.369 3.64376 16.0383 4.25131 17.1609 3.35889C18.7989 2.05686 21.0432 3.94004 20.0453 5.7792C19.3614 7.03977 20.2496 8.57814 21.6832 8.61614C23.7749 8.67158 24.2836 11.5568 22.3371 12.3243C21.0029 12.8503 20.6944 14.5997 21.7682 15.5503C23.3349 16.9373 21.8701 19.4745 19.8856 18.8112C18.5254 18.3566 17.1646 19.4984 17.3762 20.9168C17.6848 22.9864 14.9318 23.9884 13.8379 22.2047C13.0882 20.9821 11.3118 20.9821 10.5621 22.2047C9.46824 23.9884 6.71522 22.9864 7.02384 20.9168C7.23537 19.4984 5.8746 18.3566 4.51442 18.8112C2.52993 19.4745 1.06508 16.9373 2.63176 15.5503C3.70556 14.5997 3.3971 12.8503 2.06292 12.3243C0.116351 11.5568 0.625088 8.67158 2.71676 8.61614C4.1504 8.57814 5.03858 7.03977 4.35467 5.7792C3.35684 3.94004 5.60113 2.05686 7.23907 3.35889C8.36173 4.25131 10.031 3.64376 10.3173 2.2385Z" fill="#1FA7E3"/>
                </svg>
              </div>
                </div>
              </div>
              <div>
                <div className='flex flex-col font-[Jost] text-[0.7rem] gap-y-3 ml-3'>
                  <div className='whitespace-nowrap border-1 shadow-[2px_2px_0_0_black] px-4 py-1 rounded-3xl text-center'>START UP</div>
                  <div className='whitespace-nowrap border-1 shadow-[2px_2px_0_0_black] px-4 py-1 rounded-3xl text-center '>E-COMMERCE</div>
                </div>
              </div>
            </div>
          </div>
            </Link>
            <Link to={"/hackathondetails/maincard"}>
            <div className='flex flex-col border-2 rounded-2xl gap-y-6 p-4'>
            <div className='bg-blue-900 w-[260px] h-[100px] rounded-2xl mx-auto my-auto'>
              
            </div>
            <div className='flex flex-row'>
              <div className='flex flex-col gap-y-1'>
                <div className='font-semibold text-lg whitespace-nowrap'>UI/UX Designer</div>
                <div className='flex flex-row'>
                  <div className='text-[#232323] whitespace-nowrap text-sm mr-1'>Lumel Technologies</div>
                  <div className='ml-1 relative'>
                <div className='absolute top-2 left-[6px]'>
                  <svg width="9" height="7" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.976562 4.62418L3.92493 7.74598C4.08933 7.92005 4.37121 7.90287 4.51325 7.71011L9.61656 0.78418" stroke="white" stroke-width="1.536" stroke-linecap="round"/>
                  </svg>
                </div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.3173 2.2385C10.7351 0.188233 13.6648 0.188232 14.0827 2.2385C14.369 3.64376 16.0383 4.25131 17.1609 3.35889C18.7989 2.05686 21.0432 3.94004 20.0453 5.7792C19.3614 7.03977 20.2496 8.57814 21.6832 8.61614C23.7749 8.67158 24.2836 11.5568 22.3371 12.3243C21.0029 12.8503 20.6944 14.5997 21.7682 15.5503C23.3349 16.9373 21.8701 19.4745 19.8856 18.8112C18.5254 18.3566 17.1646 19.4984 17.3762 20.9168C17.6848 22.9864 14.9318 23.9884 13.8379 22.2047C13.0882 20.9821 11.3118 20.9821 10.5621 22.2047C9.46824 23.9884 6.71522 22.9864 7.02384 20.9168C7.23537 19.4984 5.8746 18.3566 4.51442 18.8112C2.52993 19.4745 1.06508 16.9373 2.63176 15.5503C3.70556 14.5997 3.3971 12.8503 2.06292 12.3243C0.116351 11.5568 0.625088 8.67158 2.71676 8.61614C4.1504 8.57814 5.03858 7.03977 4.35467 5.7792C3.35684 3.94004 5.60113 2.05686 7.23907 3.35889C8.36173 4.25131 10.031 3.64376 10.3173 2.2385Z" fill="#1FA7E3"/>
                </svg>
              </div>
                </div>
              </div>
              <div>
                <div className='flex flex-col font-[Jost] text-[0.7rem] gap-y-3 ml-3'>
                  <div className='whitespace-nowrap border-1 shadow-[2px_2px_0_0_black] px-4 py-1 rounded-3xl text-center'>START UP</div>
                  <div className='whitespace-nowrap border-1 shadow-[2px_2px_0_0_black] px-4 py-1 rounded-3xl text-center '>E-COMMERCE</div>
                </div>
              </div>
            </div>
          </div>
            </Link>
          </div>
            <div className='mt-4'>
                <div className='font-[Jost] text-[0.8rem] underline font-medium flex justify-end'><span className='cursor-pointer'><Link to={"/hackathons"}>View more</Link></span></div>
            </div>
      </div>
      <div>
        <NavBar />
      </div>
    </div>
    </>
  )
}

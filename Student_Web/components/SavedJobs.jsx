import React from 'react'
import { Card } from './Explore'
import TopSection from './TopSection'
import NavBar from './NavBar'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
const SavedJobs = () => {
  return (
    <>
        <div className='hidden md:block overflow-y-auto'>
          <div className='flex flex-row max-h-[calc(100vh-10px)] '>
            <div className='flex-1'>
              <div className='font-[Jost] m-8'>
              <div className='font-semibold text-[45px]'>Saved Jobs</div>
              <div className='font-regular text-[26px]'>All your saved jobs will be shown here</div>
              </div>
              <div className='flex flex-row m-8 justify-between'>
                <div className='flex flex-row gap-x-12 '>
                  <button className='bg-[#E3FEAA] text-[17px] h-[50px] cursor-pointer border-2 px-6 py-2 rounded-md font-medium font-[Jost]'>Featured</button>
                  <button className='bg-white text-[17px] h-[50px] cursor-pointer border-2 px-6 py-2 rounded-md font-medium font-[Jost]'>Live</button>
                  <button className='bg-white text-[17px] h-[50px] cursor-pointer border-2 px-6 py-2 rounded-md font-medium font-[Jost]'>Upcoming</button>
                  <button className='bg-white text-[17px] h-[50px] cursor-pointer border-2 px-6 py-2 rounded-md font-medium font-[Jost]'>New</button>
                </div>
              </div>
              <div className='flex flex-wrap flex-row px-9 gap-x-14 relative px-10 gap-y-10'>         
                <Card typeOf={"/savedjobdetails/maincard"}/>
                <Card typeOf={"/savedjobdetails/maincard"}/>
                <Card typeOf={"/savedjobdetails/maincard"}/>
                <Card typeOf={"/savedjobdetails/maincard"}/>
                <Card typeOf={"/savedjobdetails/maincard"}/>
                <Card typeOf={"/savedjobdetails/maincard"}/>
                <Card typeOf={"/savedjobdetails/maincard"}/>
                <Card typeOf={"/savedjobdetails/maincard"}/>
                <Card typeOf={"/savedjobdetails/maincard"}/>
              </div>
            </div>
          </div>
        </div>
        <div className='md:hidden pb-20'>
          <div className='flex flex-col p-3'>
            <div className='flex flex-row justify-center'><TopSection /></div>
            <div className='flex flex-col mt-10'>
                    <div className='font-[Jost]'>
                <div className='font-semibold text-[1.2rem] mb-2'>Saved Jobs</div>
                <div className='font-regular text-[#646464] text-[0.8rem]'>All your saved jobs will be shown here</div>
                    </div>
                    <div className='flex flex-row justify-between gap-x-3 mt-4'>
                      <div className='flex flex-row gap-x-3 overflow-x-auto text-[0.8rem] '>
                        <button className='bg-[#E3FEAA] cursor-pointer border-2  rounded-md font-medium font-[Jost] px-2'>Featured</button>
                        <button className='bg-white cursor-pointer border-2 rounded-md font-medium font-[Jost] px-2'>Live</button>
                        <button className='bg-white cursor-pointer border-2 rounded-md font-medium font-[Jost] px-2'>Upcoming</button>
                        <button className='bg-white cursor-pointer border-2 rounded-md font-medium font-[Jost] px-2'>New</button>
                        <button className='bg-white cursor-pointer border-2 rounded-md font-medium font-[Jost] px-2'>Always Open</button>
                      </div>
                    </div>
                    <div className='flex flex-col gap-y-5 mt-4'>
                    <Link to={"/savedjobdetails/maincard"}>
                    
                    <div className='flex flex-col border-2 rounded-2xl gap-y-6 p-4'>
                      <div className='bg-blue-900 w-[100%] h-[100px] rounded-2xl mx-auto my-auto'>
                        
                      </div>
                      <div className='flex flex-row justify-between'>
                        <div className='flex flex-col gap-y-1'>
                          <div className='font-semibold text-lg whitespace-nowrap'>UI/UX Designer</div>
                          <div className='flex flex-row'>
                            <div className='text-[#232323] whitespace-nowrap text-sm mr-1'>Lumel Technologies</div>
                            <div className=''>
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
                    <Link to={"/savedjobdetails/maincard"}>
                    
                    <div className='flex flex-col border-2 rounded-2xl gap-y-6 p-4'>
                      <div className='bg-blue-900 w-[100%] h-[100px] rounded-2xl mx-auto my-auto'>
                        
                      </div>
                      <div className='flex flex-row justify-between'>
                        <div className='flex flex-col gap-y-1'>
                          <div className='font-semibold text-lg whitespace-nowrap'>UI/UX Designer</div>
                          <div className='flex flex-row'>
                            <div className='text-[#232323] whitespace-nowrap text-sm mr-1'>Lumel Technologies</div>
                            <div className=''>
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
                      <div className='bg-blue-900 w-[100%] h-[100px] rounded-2xl mx-auto my-auto'>
                        
                      </div>
                      <div className='flex flex-row justify-between'>
                        <div className='flex flex-col gap-y-1'>
                          <div className='font-semibold text-lg whitespace-nowrap'>UI/UX Designer</div>
                          <div className='flex flex-row'>
                            <div className='text-[#232323] whitespace-nowrap text-sm mr-1'>Lumel Technologies</div>
                            <div className=''>
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
                    <Link to={"/savedjobdetails/maincard"}>
                    
                    <div className='flex flex-col border-2 rounded-2xl gap-y-6 p-4'>
                      <div className='bg-blue-900 w-[100%] h-[100px] rounded-2xl mx-auto my-auto'>
                        
                      </div>
                      <div className='flex flex-row justify-between'>
                        <div className='flex flex-col gap-y-1'>
                          <div className='font-semibold text-lg whitespace-nowrap'>UI/UX Designer</div>
                          <div className='flex flex-row'>
                            <div className='text-[#232323] whitespace-nowrap text-sm mr-1'>Lumel Technologies</div>
                            <div className=''>
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
            </div>
          </div>
          <div className='ml-3'>
            <NavBar />
          </div>
        </div>
    </>
  )
}

export default SavedJobs
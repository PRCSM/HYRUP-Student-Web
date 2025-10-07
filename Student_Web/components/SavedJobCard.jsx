import React from 'react'
import TopSection from './TopSection'
import NavBar from './NavBar'
import { useNavigate } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
const SavedJobCard = () => {
  const navigate = useNavigate()
  const back = () => {
    navigate(-1)
  }
  return (
    <>
    <div className='hidden md:block border-3 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] p-5 w-[90%] rounded-2xl bg-white'>
      <div className='flex flex-row overflow-y-auto max-h-[calc(100vh-100px)]'>
        <div className='w-screen'>
          <div className='flex flex-col '>
            <div className='flex flex-row justify-between'>
              <div className='border-2 flex items-center p-5 rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] cursor-pointer bg-white' onClick={back}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.1431 12L0.857422 12M0.857422 12L6.85742 6M0.857422 12L6.85742 18" stroke="black" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <div className='relative'>
                <svg  width="269" height="70" viewBox="0 0 269 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_321_2733)">
                <path d="M238.223 0.0505555L0.000274658 0.0505555L44.6669 33.0253L0.000274658 66L238.223 66H259.5H268.001C268.001 66 268 20.2116 268 9.4719C268 -1.26779 269 0.0512988 259.253 0.0512988C249.506 0.0512988 246.411 0.0505555 238.223 0.0505555Z" fill="#FAB648"/>
                <path d="M267.005 3.51172C267.062 4.87234 267 6.73446 267 9.47168C267 14.8415 267.001 28.9741 267.001 41.7637V65L3.03906 65L45.2607 33.8301L46.3506 33.0254L45.2607 32.2207L3.03906 1.05078L248.153 1.05078C251.169 1.05097 254.38 1.05176 259.253 1.05176C261.768 1.05176 263.433 0.968978 264.697 1.0127C265.988 1.05731 266.383 1.24122 266.56 1.42578C266.755 1.63023 266.945 2.10262 267.005 3.51172Z" stroke="black" stroke-width="2"/>
                </g>
                <defs>
                <filter id="filter0_d_321_2733" x="0" y="0" width="268.029" height="70" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.7 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_321_2733"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_321_2733" result="shape"/>
                </filter>
                </defs>
                </svg>
                <div className='text-[2rem] font-[Jost] top-0 absolute left-[30%] top-[10%]'>In House</div>
              </div>
            </div>
            <div className='flex flex-row justify-between items-center pl-20 pt-5'>
              <div className='flex flex-col gap-y-8'>
                <div className='flex flex-col'>
                  <div className='text-[45px] font-bold'>UI/UX Designer</div>
                <div className='flex flex-row items-center'>
                  <div className='font-regular text-[30px]'>Lumel Technologies</div>
                  <div className='ml-2'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.3173 2.2385C10.7351 0.188233 13.6648 0.188232 14.0827 2.2385C14.369 3.64376 16.0383 4.25131 17.1609 3.35889C18.7989 2.05686 21.0432 3.94004 20.0453 5.7792C19.3614 7.03977 20.2496 8.57814 21.6832 8.61614C23.7749 8.67158 24.2836 11.5568 22.3371 12.3243C21.0029 12.8503 20.6944 14.5997 21.7682 15.5503C23.3349 16.9373 21.8701 19.4745 19.8856 18.8112C18.5254 18.3566 17.1646 19.4984 17.3762 20.9168C17.6848 22.9864 14.9318 23.9884 13.8379 22.2047C13.0882 20.9821 11.3118 20.9821 10.5621 22.2047C9.46824 23.9884 6.71522 22.9864 7.02384 20.9168C7.23537 19.4984 5.8746 18.3566 4.51442 18.8112C2.52993 19.4745 1.06508 16.9373 2.63176 15.5503C3.70556 14.5997 3.3971 12.8503 2.06292 12.3243C0.116351 11.5568 0.625088 8.67158 2.71676 8.61614C4.1504 8.57814 5.03858 7.03977 4.35467 5.7792C3.35684 3.94004 5.60113 2.05686 7.23907 3.35889C8.36173 4.25131 10.031 3.64376 10.3173 2.2385Z" fill="#1FA7E3"/>
                    </svg>
                  </div>
                </div>
                </div>
                  <div className='text-[#666565] flex flex-col text-[20px]'>
                    <div className=''>Coimbatore, Tamil Nadu, India · 3 weeks ago · </div>
                    <div className=''>Over 100 people clicked apply</div>
                  </div>
                <div className='flex flex-row gap-x-6'>
                  <div className='flex flex-row border-2 border-dashed px-3 py-2 rounded-4xl bg-[#f3f9c6] text-[#2c2c2c] text-[16px]'>
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_61_284)">
                    <path d="M20.5 7L9.5 18L4.5 13" stroke="#343434" stroke-linecap="square"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_61_284">
                    <rect width="24" height="24" fill="white" transform="translate(0.5 0.5)"/>
                    </clipPath>
                    </defs>
                    </svg>
                    On-site
                  </div>
                  <div className='flex flex-row border-2 border-dashed px-3 py-2 rounded-4xl bg-[#f3f9c6] text-[#2c2c2c] text-[16px]'>
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_61_284)">
                    <path d="M20.5 7L9.5 18L4.5 13" stroke="#343434" stroke-linecap="square"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_61_284">
                    <rect width="24" height="24" fill="white" transform="translate(0.5 0.5)"/>
                    </clipPath>
                    </defs>
                    </svg>
                    Full-time
                  </div>
                </div>
                <div className='border-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rounded-lg py-3 px-5 font-semibold font-[Jost] flex justify-center bg-[#e3efaa] cursor-pointer'>Apply Now</div>
              </div>
              <div className='flex flex-col gap-y-14 xl:pr-40'>
                <div className='flex flex-row justify-center items-center gap-x-20'>
                  <div className='flex flex-row border-2 bg-white rounded-md bg-white shadow-[3px_3px_0_0_rgba(0,0,0,1)] p-2 cursor-pointer'>
                    <svg className="mr-2" width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.0769 13.1154H28.6923M12.0769 21.1923H23.1538M12.0769 33.3077L1 36L3.76923 27.9231V3.69231C3.76923 2.97826 4.06099 2.29346 4.58032 1.78856C5.09965 1.28365 5.80402 1 6.53846 1H34.2308C34.9652 1 35.6696 1.28365 36.1889 1.78856C36.7082 2.29346 37 2.97826 37 3.69231V30.6154C37 31.3294 36.7082 32.0142 36.1889 32.5191C35.6696 33.024 34.9652 33.3077 34.2308 33.3077H12.0769Z" stroke="black" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <div className='font-[Jost] text-[24px]'>Chat</div>
                  </div>
                  <div className='border-2 rounded-md shadow-[0_2px_0_0_rgba(0,0,0,1)] p-3 bg-[#F4B4E7] cursor-pointer'>
                    <svg width="34" height="27" viewBox="0 0 34 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32.5307 14.4973C28.364 22.3869 18.164 26.4557 17.7307 26.6307C17.3986 26.7448 17.0294 26.7448 16.6973 26.6307C16.2807 26.4557 6.06401 22.3869 1.89734 14.4973C-0.685994 9.58274 0.747339 4.28899 3.56401 2.01399C4.55061 1.27422 5.72365 0.749709 6.98683 0.483527C8.25002 0.217345 9.56734 0.217076 10.8307 0.482742C13.4157 0.996901 15.6732 2.36604 17.1307 4.30358C18.5908 2.36188 20.8555 0.992036 23.4473 0.482742C24.7107 0.217076 26.028 0.217345 27.2912 0.483527C28.5544 0.749709 29.7274 1.27422 30.714 2.01399C33.6807 4.28899 35.1307 9.58274 32.5307 14.4973Z" fill="#DD31AD"/>
                    </svg>
                  </div>
                </div>
                <div className='bg-white border-2 rounded-xl px-3 py-1 flex flex-col justify-center items-center shadow-[3px_3px_0_0_rgba(0,0,0,1)] text-[27px] '>
                  <div className='font-bold font-[Jost] text-center'>No. of openings</div>
                  <div className='font-bold font-[Jost] text-center'>75</div>
                </div>
              </div>
            </div>
            <div className='flex flex-col pl-20'>
              <div className='font-[Jost] font-[900] text-[35px] my-8'>About the job:</div>
              <div className='border-3 rounded-2xl p-5 w-[90%] flex flex-col gap-y-8 bg-white'>
                <div className='flex flex-row justify-between'>
                  <div className='border-2 shadow-[4px_4px_0_0_rgba(0,0,0,1)] px-4 py-2 rounded-2xl justify-center bg-white'>
                    <div className='text-[27px] font-semibold text-center'>Job Type</div>
                    <div className='text-[#666565] text-[21px] text-center'>Full Time</div>
                  </div>
                  <div className='border-2 shadow-[4px_4px_0_0_rgba(0,0,0,1)] px-4 py-2 rounded-2xl justify-center bg-white'>
                    <div className='text-[27px] font-semibold text-center'>Duration</div>
                    <div className='text-[#666565] text-[21px] text-center'>2 months</div>
                  </div>
                  <div className='border-2 shadow-[4px_4px_0_0_rgba(0,0,0,1)] px-4 py-2 rounded-2xl justify-center bg-white'>
                    <div className='text-[27px] font-semibold text-center'>Mode</div>
                    <div className='text-[#666565] text-[21px] text-center'>Online</div>
                  </div>
                  <div className='border-2 shadow-[4px_4px_0_0_rgba(0,0,0,1)] px-4 py-2 rounded-2xl justify-center bg-white'>
                    <div className='text-[27px] font-semibold text-center'>Stipend</div>
                    <div className='text-[#666565] text-[21px] text-center'>20k/month</div>
                  </div>
                </div>
                <div>
                  <div className='flex flex-row border-2 rounded-xl px-4 py-2 shadow-[4px_4px_0_0_rgba(0,0,0,1)] justify-center items-center gap-x-2'>
                    <div className='font-semibold text-[27px] mr-4'>Skills:</div>
                    <div className='flex flex-row flex-wrap xl:justify-between items-center gap-x-14 gap-y-2'>
                      <div className='px-6 flex justify-center items-center font-[Jost] rounded-4xl font-bold border-2 border-[#000] shadow-[3px_3px_0_0_rgba(0,0,0,1)] text-[#1fa7e3]'>ADOBE</div>
                      <div className='px-6 flex justify-center items-center font-[Jost] rounded-4xl font-bold border-2 border-[#000] shadow-[3px_3px_0_0_rgba(0,0,0,1)] text-[#1fa7e3]'>FIGMA</div>
                      <div className='px-6 flex justify-center items-center font-[Jost] rounded-4xl font-bold border-2 border-[#000] shadow-[3px_3px_0_0_rgba(0,0,0,1)] text-[#1fa7e3]'>CANVA</div>
                      <div className='px-6 flex justify-center items-center font-[Jost] rounded-4xl font-bold border-2 border-[#000] shadow-[3px_3px_0_0_rgba(0,0,0,1)] text-[#1fa7e3]'>ADOBE</div>
                      <div className='px-6 flex justify-center items-center font-[Jost] rounded-4xl font-bold border-2 border-[#000] shadow-[3px_3px_0_0_rgba(0,0,0,1)] text-[#1fa7e3]'>ADOBE</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='font-bold text-[35px] font-[Jost] pl-20 my-10'>Roles and Responsibility: </div>
            <div className='border-3 px-8 py-10 font-[Jost] text-[20px] w-[86%] mx-auto font-bold rounded-2xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'>
              Durante seu estágio, você pode aprimorar seu conhecimento e ganhar experiência profissional trabalhando em projetos de clientes. Esta função oferece uma oportunidade excepcional para construir um portfólio atraente, adquirir novas habilidades, obter insights sobre diversos setores e abraçar novos desafios para sua futura carreira.
            </div>
            <div className='font-bold text-[35px] font-[Jost] pl-20 my-10'>Perks:</div>
            <div className='flex flex-row justify-between w-[86%] mx-auto '>
              <div className='px-6 py-2 font-[Jost] border-2 border-[#1fa7e3] shadow-[#1fa7e3] text-[27px] font-bold rounded-2xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'>Certificate</div>
              <div className='px-6 py-2 font-[Jost] border-2 border-[#1fa7e3] shadow-[#1fa7e3] text-[27px] font-bold rounded-2xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'>Letter of recommendation</div>
              <div className='px-6 py-2 font-[Jost] border-2 border-[#1fa7e3] shadow-[#1fa7e3] text-[27px] font-bold rounded-2xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'>Stipend</div>
            </div>
            <div className='font-bold text-[35px] font-[Jost] pl-20 my-10'>Details:</div>
            <div className='border-3 px-8 py-10 font-[Jost] text-[20px] font-bold rounded-2xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] w-[86%] mx-auto'>
              Durante seu estágio, você pode aprimorar seu conhecimento e ganhar experiência profissional trabalhando em projetos de clientes. Esta função oferece uma oportunidade excepcional para construir um portfólio atraente, adquirir novas habilidades, obter insights sobre diversos setores e abraçar novos desafios para sua futura carreira.
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className='bg-[url("/images/bg.png")] pb-10 md:hidden font-[Jost] p-1 mb-30'>
      <div className='flex flex-row justify-center'>
        <TopSection />
      </div>
      <div className='flex flex-col mt-5'>
        <div className='border-t-2 py-3 px-2'>
          <div className='border-2 flex items-center p-2 rounded-xl inline-block shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] cursor-pointer bg-white' onClick={back}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.1431 12L0.857422 12M0.857422 12L6.85742 6M0.857422 12L6.85742 18" stroke="black" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
          </div>
          <div className='flex flex-row justify-between'>
            <div className='flex flex-row'>
              <div className='whitespace-nowrap'>
                Lumel Technologies
              </div>
              <div className='ml-1'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.3173 2.2385C10.7351 0.188233 13.6648 0.188232 14.0827 2.2385C14.369 3.64376 16.0383 4.25131 17.1609 3.35889C18.7989 2.05686 21.0432 3.94004 20.0453 5.7792C19.3614 7.03977 20.2496 8.57814 21.6832 8.61614C23.7749 8.67158 24.2836 11.5568 22.3371 12.3243C21.0029 12.8503 20.6944 14.5997 21.7682 15.5503C23.3349 16.9373 21.8701 19.4745 19.8856 18.8112C18.5254 18.3566 17.1646 19.4984 17.3762 20.9168C17.6848 22.9864 14.9318 23.9884 13.8379 22.2047C13.0882 20.9821 11.3118 20.9821 10.5621 22.2047C9.46824 23.9884 6.71522 22.9864 7.02384 20.9168C7.23537 19.4984 5.8746 18.3566 4.51442 18.8112C2.52993 19.4745 1.06508 16.9373 2.63176 15.5503C3.70556 14.5997 3.3971 12.8503 2.06292 12.3243C0.116351 11.5568 0.625088 8.67158 2.71676 8.61614C4.1504 8.57814 5.03858 7.03977 4.35467 5.7792C3.35684 3.94004 5.60113 2.05686 7.23907 3.35889C8.36173 4.25131 10.031 3.64376 10.3173 2.2385Z" fill="#1FA7E3"/>
                </svg>
              </div>
            </div>
            <div className='flex flex-row justify-end relative'>
              <span className='absolute right-9 top-1'>In House</span>
              <svg  width="155" className="flex flex-row justify-end pr-0" height="31" viewBox="0 0 175 51" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_419_894)">
              <path d="M156.454 0.565459L0.000274658 0.565459L29.3353 23.5151L0.000274658 46.4647L156.454 46.4647H170.428H176.011L176.01 7.12249C176.01 -0.352077 176.667 0.565976 170.266 0.565976C163.864 0.565976 161.832 0.565459 156.454 0.565459Z" fill="#FAB648"/>
              <path d="M175.014 2.98438C175.051 3.92489 175.011 5.20396 175.011 7.12207V45.4648L2.90137 45.4648L29.9512 24.3027L30.958 23.5146L29.9512 22.7275L2.90137 1.56543L162.976 1.56543C164.956 1.56556 167.065 1.56641 170.266 1.56641C171.949 1.5664 173.002 1.50882 173.827 1.53906C174.667 1.56984 174.784 1.69734 174.796 1.71094C174.843 1.76312 174.974 1.99068 175.014 2.98438Z" stroke="black" stroke-width="2"/>
              </g>
              <defs>
              <filter id="filter0_d_419_894" x="0" y="0.530273" width="176.029" height="49.9343" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="4"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.7 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_419_894"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_419_894" result="shape"/>
              </filter>
              </defs>
              </svg>
            </div>
          </div>
          <div className='font-bold text-xl mb-2'>
            UI/UX Designer
          </div>
          <div className='text-[#666565] text-sm mb-3'>
            Coimbatore, Tamil Nadu, India · 3 weeks ago · Over 100 people clicked apply
          </div>
          <div className='flex flex-row whitespace-nowrap gap-x-6 mb-8'>
            <div className='flex flex-row border-2 border-dashed px-1 rounded-4xl bg-[#f3f9c6] text-[#2c2c2c] text-[10px]'>
                    <svg width="20" height="20" viewBox="0 0 25 25" className="mt-[3px]" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_61_284)">
                    <path d="M20.5 7L9.5 18L4.5 13" stroke="#343434" stroke-linecap="square"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_61_284">
                    <rect width="24" height="24" fill="white" transform="translate(0.5 0.5)"/>
                    </clipPath>
                    </defs>
                    </svg>
                    <span className='flex flex-row items-center'>On-site</span>
            </div>
            <div className='flex flex-row border-2 border-dashed px-1 rounded-4xl bg-[#f3f9c6] text-[#2c2c2c] text-[10px]'>
                    <svg width="20" height="20" viewBox="0 0 25 25" className="mt-[3px]" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_61_284)">
                    <path d="M20.5 7L9.5 18L4.5 13" stroke="#343434" stroke-linecap="square"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_61_284">
                    <rect width="24" height="24" fill="white" transform="translate(0.5 0.5)"/>
                    </clipPath>
                    </defs>
                    </svg>
                    <span className='flex flex-row items-center'>Full Time</span>
            </div>
            <div className='flex flex-row border-2 bg-white rounded-md items-center justify-center bg-white shadow-[3px_3px_0_0_rgba(0,0,0,1)] cursor-pointer px-1 py-1'>
                    <svg className="mr-2" width="21" height="20" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.0769 13.1154H28.6923M12.0769 21.1923H23.1538M12.0769 33.3077L1 36L3.76923 27.9231V3.69231C3.76923 2.97826 4.06099 2.29346 4.58032 1.78856C5.09965 1.28365 5.80402 1 6.53846 1H34.2308C34.9652 1 35.6696 1.28365 36.1889 1.78856C36.7082 2.29346 37 2.97826 37 3.69231V30.6154C37 31.3294 36.7082 32.0142 36.1889 32.5191C35.6696 33.024 34.9652 33.3077 34.2308 33.3077H12.0769Z" stroke="black" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
            <div className='border-2 rounded-md shadow-[0_2px_0_0_rgba(0,0,0,1)] bg-[#F4B4E7] cursor-pointer flex flex-row items-center px-1'>
                    <svg width="25" height="18" viewBox="0 0 34 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32.5307 14.4973C28.364 22.3869 18.164 26.4557 17.7307 26.6307C17.3986 26.7448 17.0294 26.7448 16.6973 26.6307C16.2807 26.4557 6.06401 22.3869 1.89734 14.4973C-0.685994 9.58274 0.747339 4.28899 3.56401 2.01399C4.55061 1.27422 5.72365 0.749709 6.98683 0.483527C8.25002 0.217345 9.56734 0.217076 10.8307 0.482742C13.4157 0.996901 15.6732 2.36604 17.1307 4.30358C18.5908 2.36188 20.8555 0.992036 23.4473 0.482742C24.7107 0.217076 26.028 0.217345 27.2912 0.483527C28.5544 0.749709 29.7274 1.27422 30.714 2.01399C33.6807 4.28899 35.1307 9.58274 32.5307 14.4973Z" fill="#DD31AD"/>
                    </svg>
            </div>
          </div>
          <div className='flex flex-row justify-between mb-8'>
                <div className='border-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]  rounded-lg py-3 px-10 font-regular font-[Jost] whitespace-nowrap flex justify-center bg-[#e3efaa] cursor-pointer text-xs'>Apply Now</div>
                <div className='whitespace-nowrap bg-white border-2 rounded-xl px-3 py-1 flex flex-row justify-center items-center shadow-[3px_3px_0_0_rgba(0,0,0,1)] text-[0.8rem]'>
                  <div className='font-bold font-[Jost] text-center'>No. of openings: </div>
                  <div className='font-bold font-[Jost] text-center ml-1'>75</div>
                </div>
          </div>
          <div className='flex flex-col'>
              <div className='font-[Jost] font-[900] mb-5 text-xl'>About the job:</div>
              <div className='border-2 rounded-2xl p-5 w-[90%] flex flex-col bg-white mx-auto mb-6'>
                <div className='grid grid-cols-[1fr_1fr] gap-x-6 gap-y-8 mb-6'>
                  <div className='border-2 shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-2xl justify-center items-center bg-white p-2'>
                    <div className='font-semibold text-center'>Job Type</div>
                    <div className='text-[#666565] text-center'>Full Time</div>
                  </div>
                  <div className='border-2 shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-2xl justify-center items-center bg-white p-2'>
                    <div className='font-semibold text-center'>Duration</div>
                    <div className='text-[#666565] text-center'>2 months</div>
                  </div>
                  <div className='border-2 shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-2xl justify-center items-center bg-white p-2'>
                    <div className='font-semibold text-center'>Mode</div>
                    <div className='text-[#666565] text-center'>Online</div>
                  </div>
                  <div className='border-2 shadow-[4px_4px_0_0_rgba(0,0,0,1)] rounded-2xl justify-center items-center bg-white p-2'>
                    <div className='font-semibold text-center'>Stipend</div>
                    <div className='text-[#666565] text-center'>20k/month</div>
                  </div>
                </div>
                <div>
                  <div className='flex flex-col border-2 rounded-xl  shadow-[4px_4px_0_0_rgba(0,0,0,1)] justify-center items-center mt-3 py-3 mb-5'>
                    <div className='font-semibold '>Skills:</div>
                    <div className='grid grid-cols-[1fr_1fr_1fr] gap-3'>
                      <div className='flex justify-center items-center font-[Jost] rounded-4xl font-bold border-2 border-[#000] shadow-[3px_3px_0_0_rgba(0,0,0,1)] text-[#1fa7e3] text-[0.6rem] px-3 py-1'>ADOBE</div>
                      <div className='flex justify-center items-center font-[Jost] rounded-4xl font-bold border-2 border-[#000] shadow-[3px_3px_0_0_rgba(0,0,0,1)] text-[#1fa7e3] text-[0.6rem] px-3 py-1'>FIGMA</div>
                      <div className='flex justify-center items-center font-[Jost] rounded-4xl font-bold border-2 border-[#000] shadow-[3px_3px_0_0_rgba(0,0,0,1)] text-[#1fa7e3] text-[0.6rem] px-3 py-1'>CANVA</div>
                      <div className='flex justify-center items-center font-[Jost] rounded-4xl font-bold border-2 border-[#000] shadow-[3px_3px_0_0_rgba(0,0,0,1)] text-[#1fa7e3] text-[0.6rem] px-3 py-1'>ADOBE</div>
                      <div className='flex justify-center items-center font-[Jost] rounded-4xl font-bold border-2 border-[#000] shadow-[3px_3px_0_0_rgba(0,0,0,1)] text-[#1fa7e3] text-[0.6rem] px-3 py-1'>ADOBE</div>
                      <div className='flex justify-center items-center font-[Jost] rounded-4xl font-bold border-2 border-[#000] shadow-[3px_3px_0_0_rgba(0,0,0,1)] text-[#1fa7e3] text-[0.6rem] px-3 py-1'>FIGMA</div>
                      <div className='flex justify-center items-center font-[Jost] rounded-4xl font-bold border-2 border-[#000] shadow-[3px_3px_0_0_rgba(0,0,0,1)] text-[#1fa7e3] text-[0.6rem] px-3 py-1'>CANVA</div>
                      <div className='flex justify-center items-center font-[Jost] rounded-4xl font-bold border-2 border-[#000] shadow-[3px_3px_0_0_rgba(0,0,0,1)] text-[#1fa7e3] text-[0.6rem] px-3 py-1'>ADOBE</div>
                      <div className='flex justify-center items-center font-[Jost] rounded-4xl font-bold border-2 border-[#000] shadow-[3px_3px_0_0_rgba(0,0,0,1)] text-[#1fa7e3] text-[0.6rem] px-3 py-1'>ADOBE</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          <div className='font-bold font-[Jost] text-xl mb-5'>Roles and Responsibility: </div>
          <div className='border-2 text-[15px] w-[86%] mx-auto font-semibold py-6 px-6 rounded-2xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] mb-6'>
              Durante seu estágio, você pode aprimorar seu conhecimento e ganhar experiência profissional trabalhando em projetos de clientes. Esta função oferece uma oportunidade excepcional para construir um portfólio atraente, adquirir novas habilidades, obter insights sobre diversos setores e abraçar novos desafios para sua futura carreira.
          </div>
          <div className='font-bold font-[Jost] text-xl mb-6'>Perks:</div>
          <div className='flex flex-col justify-between mx-auto gap-y-5 mb-6'>
              <div className='py-2 text-center font-[Jost] border-2 border-[#1fa7e3]  shadow-[#1fa7e3] font-bold rounded-2xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'>Certificate</div>
              <div className='py-2 text-center font-[Jost] border-2 border-[#1fa7e3]  shadow-[#1fa7e3]  font-bold rounded-2xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'>Letter of recommendation</div>
              <div className='py-2 text-center font-[Jost] border-2 border-[#1fa7e3]  shadow-[#1fa7e3]  font-bold rounded-2xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'>Stipend</div>
          </div>
          <div className='font-bold text-xl font-[Jost] mb-6'>Details: </div>
          <div className='border-2 text-[15px] w-[86%] mx-auto font-semibold py-6 px-6 rounded-2xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] mb-6'>
              Durante seu estágio, você pode aprimorar seu conhecimento e ganhar experiência profissional trabalhando em projetos de clientes. Esta função oferece uma oportunidade excepcional para construir um portfólio atraente, adquirir novas habilidades, obter insights sobre diversos setores e abraçar novos desafios para sua futura carreira.
          </div>
          <div className='font-bold text-xl font-[Jost] mb-6'>About Lumel Technologies: </div>
          <div className='border-2 text-[15px] w-[86%] mx-auto font-semibold py-6 px-6 rounded-2xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] mb-6'>
              Durante seu estágio, você pode aprimorar seu conhecimento e ganhar experiência profissional trabalhando em projetos de clientes. Esta função oferece uma oportunidade excepcional para construir um portfólio atraente, adquirir novas habilidades, obter insights sobre diversos setores e abraçar novos desafios para sua futura carreira.
          </div>
        </div>
        <div className='ml-3'>
          <NavBar />
        </div>
      </div>
    </div>
    </>
  )
}

export default SavedJobCard
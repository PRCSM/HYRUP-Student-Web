import React from 'react'
import SearchBar from './SearchBar'

const TopSection = () => {
  return (
    <>
    {/* Top Section for Laptops */}
    <div className='hidden md:flex flex flex-row justify-center w-[70%] mx-auto pt-7 gap-x-10 items-center xl:ml-[23%] lg:ml-[29%]'>
      <div className='w-full h-[43px] bg-white z-50 border-1 shadow-[2px_2px_2px_2px_rgba(0,0,0,1)] rounded-full flex items-center pl-8 pr-6'>
          <input type="text" className='w-full h-full focus:outline-none' />
          <div>
              <svg width="26" height="33" viewBox="0 0 26 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.5 0.5C16.0228 0.5 20.5 4.97715 20.5 10.5C20.5 16.0228 16.0228 20.5 10.5 20.5C4.97715 20.5 0.500001 16.0228 0.5 10.5C0.5 4.97715 4.97715 0.5 10.5 0.5Z" fill="#D9D9D9" stroke="black"/>
              <line x1="15.8222" y1="19.4308" x2="24.3603" y2="31.7637" stroke="black" stroke-width="2"/>
              <circle cx="10.5" cy="10.5" r="8" fill="black" fill-opacity="0.5" stroke="black"/>
              </svg>
          </div>
      </div>
      <div className='w-[135px] h-[55px] flex items-center justify-between'>
          <div className='w-[45px] h-[45px] z-50 bg-white flex items-center justify-center rounded-full border-1 shadow-[2px_2px_3px_black] cursor-pointer'>
              <svg width="30" height="30" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M27.7087 30.625L17.5003 23.3333L7.29199 30.625V7.29167C7.29199 6.51812 7.59928 5.77625 8.14626 5.22927C8.69325 4.68229 9.43511 4.375 10.2087 4.375H24.792C25.5655 4.375 26.3074 4.68229 26.8544 5.22927C27.4014 5.77625 27.7087 6.51812 27.7087 7.29167V30.625Z" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
          </div>
          <div className='w-[45px] h-[45px] bg-white z-50 flex items-center justify-center rounded-full border-1 shadow-[2px_2px_3px_black] cursor-pointer'>
              <svg width="25" height="30" viewBox="0 0 30 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.6111 29.4773C18.6111 31.3738 16.8276 33 15 33C13.1724 33 11.3889 31.3738 11.3889 29.4773M15.0929 2C20.7891 2 26.424 7.02631 26.424 12.9084C26.424 18.7905 28 26.6591 28 26.6591H2C2 26.6591 3.76171 18.5996 3.76171 12.9084C3.76171 7.2172 9.39666 2 15.0929 2Z" stroke="black" stroke-width="3.75" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
          </div>
      </div>
    </div>
    {/* Top Section for Mobiles */}
    <div className='md:hidden'>
      <div className='flex flex-row p-2 gap-x-3'>
        <div className='flex flex-row gap-x-2 bg-[#D7C3FF] border-2 rounded-lg shadow-[2px_2px_0_0_black] py-2 pr-7 px-2'>
          <div className='p-1 border-1 shadow-[2px_2px_0_0_black] rounded-md bg-white'>
            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.1879 11.6667C13.2299 10.5338 13.8681 9.00962 13.8681 7.33333C13.8681 3.83553 11.0893 1 7.66135 1C4.23345 1 1.45459 3.83553 1.45459 7.33333C1.45459 10.8311 4.23345 13.6667 7.66135 13.6667C9.44647 13.6667 11.0556 12.8977 12.1879 11.6667ZM12.1879 11.6667L15.4546 15" stroke="black" stroke-width="1.31683" stroke-linecap="round"/>
            </svg>
            </div>
          <input placeholder='Search jobs' className='focus:outline-none focus:ring-0 focus:border-none text-xs font-semibold text-black placeholder-black placeholder:text-xs placeholder:font-semibold font-[Jost]'/>
        </div>
        <div className='border-2 flex items-center rounded-md shadow-[2px_2px_0_0_black] px-2'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 21L12 16L5 21V5C5 4.46957 5.21071 3.96086 5.58579 3.58579C5.96086 3.21071 6.46957 3 7 3H17C17.5304 3 18.0391 3.21071 18.4142 3.58579C18.7893 3.96086 19 4.46957 19 5V21Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <div className='border-2 flex items-center rounded-md shadow-[2px_2px_0_0_black] px-2'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.9614 17.986H18.7714C19.0366 18.0008 19.3012 17.9475 19.5399 17.8311C19.7786 17.7147 19.9836 17.5391 20.1352 17.321C20.2868 17.1029 20.38 16.8496 20.406 16.5853C20.4319 16.321 20.3897 16.0544 20.2834 15.811C19.9234 14.723 18.4884 13.418 18.4884 12.134C18.4884 9.28397 18.4884 8.53397 17.0844 6.85797C16.6295 6.31905 16.0663 5.88191 15.4314 5.57497L14.6484 5.19497C14.5166 5.11621 14.4029 5.01044 14.3148 4.88463C14.2267 4.75882 14.1663 4.6158 14.1374 4.46497C14.0591 3.95738 13.7907 3.49856 13.3866 3.18156C12.9826 2.86457 12.473 2.71313 11.9614 2.75797C11.459 2.72781 10.9634 2.88599 10.5714 3.20163C10.1794 3.51728 9.91911 3.96772 9.8414 4.46497C9.80621 4.62079 9.73718 4.76696 9.63919 4.89312C9.5412 5.01927 9.41666 5.12233 9.2744 5.19497L8.4914 5.57497C7.85683 5.88203 7.29397 6.31916 6.8394 6.85797C5.4364 8.53397 5.4364 9.28397 5.4364 12.134C5.4364 13.418 4.0664 14.592 3.7064 15.745C3.4894 16.442 3.3694 17.986 5.1864 17.986H11.9614Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M15.2245 17.986C15.2333 18.4169 15.155 18.8452 14.9941 19.2451C14.8333 19.6449 14.5933 20.0082 14.2885 20.313C13.9837 20.6177 13.6204 20.8578 13.2206 21.0186C12.8207 21.1795 12.3924 21.2578 11.9615 21.249C11.5305 21.2581 11.1022 21.1799 10.7022 21.0192C10.3022 20.8584 9.93894 20.6184 9.63418 20.3135C9.32942 20.0087 9.0895 19.6453 8.92887 19.2453C8.76823 18.8453 8.6902 18.4169 8.69947 17.986" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
    </>
  )
}

export default TopSection

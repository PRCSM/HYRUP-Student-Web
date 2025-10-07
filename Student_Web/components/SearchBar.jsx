import React from 'react'

const SearchBar = () => {
  return (
    <>
    <div className='fixed top-3 mx-1 
        flex items-center
        w-[50%] max-w-[400px] min-w-[240px]
        h-[44px]
        bg-[#D7C3FF] rounded-xl
        px-3 border border-black
        shadow-[3px_3px_0px_black]
        transition-all duration-500 ease-in-out
      '>
        <div flex items-center justify-center mr-2>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_363_115)">
<rect y="0.54541" width="24.9091" height="24.9091" rx="4.36364" fill="#F7F4EF" shape-rendering="crispEdges"/>
<rect x="0.272727" y="0.818137" width="24.3636" height="24.3636" rx="4.09091" stroke="black" stroke-width="0.545455" shape-rendering="crispEdges"/>
<path d="M16.1874 16.6667C17.2294 15.5338 17.8676 14.0096 17.8676 12.3333C17.8676 8.83553 15.0888 6 11.6609 6C8.23296 6 5.4541 8.83553 5.4541 12.3333C5.4541 15.8311 8.23296 18.6667 11.6609 18.6667C13.446 18.6667 15.0551 17.8977 16.1874 16.6667ZM16.1874 16.6667L19.4541 20" stroke="black" stroke-width="1.31683" stroke-linecap="round"/>
</g>
<defs>
<filter id="filter0_d_363_115" x="0" y="0.54541" width="27.091" height="27.0909" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="2.18182" dy="2.18182"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_363_115"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_363_115" result="shape"/>
</filter>
</defs>
</svg>

      </div>
        
        <input type="text" className='
        px-1
        flex-1 h-full
    bg-transparent
    text-black placeholder-gray-700
    focus:outline-none
    transition-all duration-300 ease-in-out
    focus:w-full' />
        
    </div>


      <div className='fixed top-3 mx-1 
        flex items-center
        w-[50%] max-w-[400px] min-w-[240px]
        h-[44px]
        bg-[#D7C3FF] rounded-xl
        px-3 border border-black
        shadow-[3px_3px_0px_black]
        transition-all duration-500 ease-in-out
      "'>
        <div flex items-center justify-center mr-2>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_363_115)">
<rect y="0.54541" width="24.9091" height="24.9091" rx="4.36364" fill="#F7F4EF" shape-rendering="crispEdges"/>
<rect x="0.272727" y="0.818137" width="24.3636" height="24.3636" rx="4.09091" stroke="black" stroke-width="0.545455" shape-rendering="crispEdges"/>
<path d="M16.1874 16.6667C17.2294 15.5338 17.8676 14.0096 17.8676 12.3333C17.8676 8.83553 15.0888 6 11.6609 6C8.23296 6 5.4541 8.83553 5.4541 12.3333C5.4541 15.8311 8.23296 18.6667 11.6609 18.6667C13.446 18.6667 15.0551 17.8977 16.1874 16.6667ZM16.1874 16.6667L19.4541 20" stroke="black" stroke-width="1.31683" stroke-linecap="round"/>
</g>
<defs>
<filter id="filter0_d_363_115" x="0" y="0.54541" width="27.091" height="27.0909" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="2.18182" dy="2.18182"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_363_115"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_363_115" result="shape"/>
</filter>
</defs>
</svg>

      </div>
        
        <input type="text" className='
        px-1
        flex-1 h-full
    bg-transparent
    text-black placeholder-gray-700
    focus:outline-none
    transition-all duration-300 ease-in-out
    focus:w-full' />
        
    </div>
    <div className='w-[864px] h-[43px] fixed top-[34px] left-[352px]  border-1 shadow-[2px_2px_5px_black] bg-white rounded-full flex items-center px-8'>
        <input type="text" className='w-full h-full focus:outline-none' />
        <div>
            <svg width="26" height="33" viewBox="0 0 26 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5 0.5C16.0228 0.5 20.5 4.97715 20.5 10.5C20.5 16.0228 16.0228 20.5 10.5 20.5C4.97715 20.5 0.500001 16.0228 0.5 10.5C0.5 4.97715 4.97715 0.5 10.5 0.5Z" fill="#D9D9D9" stroke="black"/>
<line x1="15.8222" y1="19.4308" x2="24.3603" y2="31.7637" stroke="black" stroke-width="2"/>
<circle cx="10.5" cy="10.5" r="8" fill="black" fill-opacity="0.5" stroke="black"/>
</svg>
      </div>
    </div>
    </>
  )
}

export default SearchBar

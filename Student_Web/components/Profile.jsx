
import React, { useEffect } from 'react';

// --- Reusable Data Structures ---

const experienceData = [
    {
        organization: "MaxWells Coperations",
        position: "AI Intern",
        timeline: "Jan 2025 - Feb 2025",
        description: "Manage the qualifications or preference used to hide jobs from your searchManage the qualifications or preference used to hide jobs from your search"
    },
    {
        organization: "MaxWells Coperations",
        position: "AI Intern",
        timeline: "Jan 2025 - Feb 2025",
        description: "Manage the qualifications or preference used to hide jobs from your searchManage the qualifications or preference used to hide jobs from your search"
    }
];

const jobPreferences = ["App Development", "UI/UX", "Full Stack Development", "AI/ML"];
const skills = [
    { name: "ADOBE", color: "#FBEF80" },
    { name: "REACT", color: "white" },
    { name: "FLUTTER", color: "#A5C6FA" },
    { name: "FIGMA", color: "#74F4BF" },
    { name: "TENSOR FLOW", color: "white" },
];
const projectData = {
    name: "MaxWells Coperations",
    link: "https://amxa.com/pro/1",
    description: "Manage the qualifications or preference used to hide jobs from your searchManage the qualifications or preference used to hide jobs from your searchManage the qualifications or preference used to hide jobs from your search"
};


// --- Reusable Card Components ---





const Profile = () => {
    return (<>
        {/* mobile */}
        <div className='w-full max-w-lg  h-[735px] mx-2 rounded-md my-3 border-2 border-black shadow-[3px_2px_1px_black] overflow-y-scroll bg-[#F7F4EF] flex flex-col gap-6 p-4 md:hidden'>
            
            {/* 1. Profile Picture and Resume */}
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between gap-4'>
                    <div className='w-40 h-40 border-2 border-black shadow-[3px_2px_1px_black] rounded-md overflow-hidden'>
                        {/* Placeholder for ./images/paik.png */}
                        {/* Note: In a real app, you'd use a dynamic path or import the image. */}
                        <img src="./images/paik.png" alt="profilepic" className='w-full h-full object-cover'/>
                    </div>
                    
                    {/* Resume Button */}
                    <div className='w-full sm:w-40 h-[50px] p-3 flex items-center justify-center gap-x-3 border-2 border-black rounded-md shadow-[5px_3px_1px_black] bg-[#E3FEAA] cursor-pointer'>
                        <div className='font-bold text-2xl'>Resume</div>
                        <div>
                            <svg width="24" height="24" viewBox="0 0 43 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.06047 29.2947L39.7945 8.93275M39.7945 8.93275L35.9647 25.3476M39.7945 8.93275L23.8444 3.48208" stroke="black" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Name and Edit Profile (Screenshot 3) */}
            <div className='relative w-full border-2 border-black rounded-md shadow-[5px_3px_1px_black] p-4 bg-white'>
                <div className='text-5xl font-extrabold leading-tight'>
                    ALEX <br/> MAXWELLS
                </div>
                {/* Edit Profile Button */}
                <div className='absolute right-4 top-4  bg-[#A5C6FA] w-fit px-4 h-[40px] border-2 border-black p-2 rounded-full shadow-[3px_3px_1px_black] flex items-center justify-center gap-2 '>
                    <div className='text-lg font-semibold'>Edit Profile</div>
                    <div>
                        <svg width="18" height="18" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.0033 22.0974L2.28906 24.2574L4.44906 16.5431L18.5748 2.486C18.7344 2.32272 18.9251 2.19299 19.1356 2.10441C19.3461 2.01584 19.5721 1.97021 19.8005 1.97021C20.0289 1.97021 20.2549 2.01584 20.4654 2.10441C20.6759 2.19299 20.8666 2.32272 21.0262 2.486L24.0605 5.53743C24.221 5.69691 24.3483 5.88655 24.4352 6.09544C24.5221 6.30432 24.5669 6.52833 24.5669 6.75457C24.5669 6.98081 24.5221 7.20482 24.4352 7.41371C24.3483 7.62259 24.221 7.81223 24.0605 7.97172L10.0033 22.0974Z" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>

            {/* 3. About Section (Screenshot 3) */}
            <div className='relative w-full border-2 border-black rounded-md shadow-[5px_3px_1px_black] p-4 bg-white'>
                <div className='text-2xl font-bold px-2 text-[#463172]'>About:</div>
                <div className='p-2 text-base text-center'>
                    CodeSprint 2024 is a 48-hour global coding marathon that brings together developers, designers, and innovators to build impactful solutions using AI, .
                </div>
            </div>
            

            {/* 5. Education Section */}
            <div className='relative w-full border-2 border-black rounded-md shadow-[5px_3px_1px_black] p-4 pt-10 bg-white'>
                {/* <HeaderTag title="Education" /> */}
                <div className={` bg-[#FDE779] w-[148px] border-2 border-black px-4 py-1 rounded-md shadow-[3px_3px_0_black] text-xl font-bold`}>
        Education
    </div>
                <div className='text-lg font-bold p-2 leading-relaxed'>
                    <p>Sastra University</p>
                    <p>Deemed University</p>
                    <p>Btech</p>
                    <p className='text-base'>125984@sastra.ac.in</p>
                    <p>2027</p>
                </div>
            </div>

            {/* 6. Skills Section */}
            <div className=' w-full border-2 rounded-md shadow-[5px_3px_1px_black] p-4 pt-3 bg-white'>
                <div className='flex items-center mb-4 justify-between'>
                  <div className={` bg-[#FDE779] w-[120px] border-2 border-black px-4 py-1 rounded-md shadow-[3px_3px_0_black] text-xl font-bold`}>
        Skills
    </div>
                <div className={` bg-[#FFC6A5]  w-[150px] border-2 border-black px-4 py-1 rounded-md shadow-[3px_3px_0_black] text-xl font-bold`}>
        Verify Skills
    </div>

                </div>
                <div className='flex flex-wrap gap-3 mt-2'>
                    {skills.map((skill, index) => (
                        <div 
                            className='border-2 border-black rounded-full px-4 py-1 text-base cursor-pointer shadow-[3px_3px_0_black] font-semibold'
                            style={{ backgroundColor: skill.color }} // 🎯 FIX: Changed 'bgColor' to 'skill.color'
                            key={index}
                        >
                            {skill.name}
                        </div> 
                    ))}
                </div>
            </div>

            {/* 7. Job Preference Section  */}
            <div className='relative w-full border-2 rounded-md shadow-[5px_3px_1px_black] p-4 pt-3 bg-white'>
                <div className={` bg-[#FDE779] mb-4 w-fit border-2 border-black px-4 py-1 rounded-md shadow-[3px_3px_0_black] text-xl font-bold`}>
        Job Preferance
    </div>
                <div className='flex flex-wrap gap-3 mt-2'>
                    {jobPreferences.map((pref, index) => (
                        <div 
                            className='border-2 border-black rounded-full px-4 py-1 text-base cursor-pointer shadow-[3px_3px_0_black] font-semibold bg-white'
                            style={{ color: '#277DFF' }} key={index}
                        >
                            {pref}
                        </div>
                    ))}
                </div>
            </div>

            {/* 8. Projects Section */}
            <div className='relative w-full border-2 rounded-md shadow-[5px_3px_1px_black] p-4 pt-3 bg-white'>
                <div className={` w-fit bg-[#FDE779] mb-4 border-2 border-black px-4 py-1 rounded-md shadow-[3px_3px_0_black] text-xl font-bold`}>
        Projects
    </div>
                <div className='p-2'>
                    <div className='font-bold text-base'>Name of Project : <span className='font-normal'>{projectData.name}</span></div>
                    <div className='text-sm text-blue-600 underline cursor-pointer'>
                        Link : <a href={projectData.link} target="_blank" rel="noopener noreferrer">{projectData.link}</a>
                    </div>
                    <div className='mt-2 text-sm'>
                        <span className='font-bold'>Description :</span> {projectData.description}
                    </div>
                </div>
            </div>
                        {/* 4. Experience Section (Screenshot 2) */}
            <div className='relative w-full border-2 rounded-md shadow-[5px_3px_1px_black] p-4 pt-3 mb-4 bg-white'>
<div className={ `w-fit bg-[#FDE779] mb-4 border-2 border-black px-4 py-1 rounded-md shadow-[3px_3px_0_black] text-xl font-bold`}>
        Experience
    </div>                {experienceData.map((item, index) => (
                    <div key={index} className='p-3 border-2 border-black rounded-md shadow-[3px_2px_1px_black] bg-white mb-4 last:mb-0'>
                        <div className='font-bold text-base'>Name of Organization : <span className='font-normal'>{item.organization}</span></div>
                        <div className='text-sm'>Position : <span className='font-normal'>{item.position}</span></div>
                        <div className='text-sm'>Timeline : <span className='font-normal'>{item.timeline}</span></div>
                        <div className='mt-2 text-sm'>
                            <span className='font-bold'>Description :</span> {item.description}
                        </div>
                    </div>
                ))}
            </div>

        </div>
        {/* desktop */}
        <div className='font-[Jost] h-[686px] w-fit rounded-md my-3  border-1 shadow-[3px_2px_1px_black] overflow-y-scroll bg-[#F7F4EF]  flex-col  hidden lg:flex mx-auto scroll-hide'>
      <div className='flex flex-col w-full'>
      <div className=' p-4 flex items-center gap-10 justify-center bg-[#F7F4EF]'>
        <div className='w-[293px] mx-3 my-3 flex flex-col gap-4'>

                <div className='w-[293px] h-[250px] border-1 rounded-2xl overflow-hidden '><img src="./images/paik.png" alt="profilepic" className='w-full h-full object-cover'/></div>
                <div className='w-full h-[50px] p-3 flex items-center justify-center gap-x-3 border-1 rounded-md shadow-[5px_3px_1px_black] bg-[#E3FEAA] hover:bg-[#6AB8FA] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] cursor-pointer'>
                        <div className='text-[Jost]-700 text-[40px] '>Resume</div>
                        <div><svg width="43" height="32" viewBox="0 0 43 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.06047 29.2947L39.7945 8.93275M39.7945 8.93275L35.9647 25.3476M39.7945 8.93275L23.8444 3.48208" stroke="black" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
                </div>
                <div className='w-full h-[301px] rounded-md border-2 shadow-[3px_2px_1px_black] flex flex-col items-center p-4 justify-between'>
                    <div className='w-[169px] h-[52px] border-1 rounded-md shadow-[4px_2px_1px_black] p-2 text-center text-[25px] font-bold text-[Jost]-800 bg-[#FDE779] cursor-default'>
                        Education</div>
                    <div className='text-[25px] text-[Jost]-600'>Sastra University
Deemed University
Btech
125984@sastra.ac.in
2027</div>
                </div>
        </div>
        <div className='w-[656px] mx-3 my-3 flex flex-col gap-2'>
            <div className='w-[656px] h-[226px] relative border-1 rounded-md shadow-[4px_2px_1px_black] '>
              <div className='w-[400px] text-[65px] h-[170px] p-4 font-extrabold'>ALEX 
MAXWELLS</div>
              <div className=' absolute cursor-pointer right-5 top-5 bg-[#A5C6FA] w-[243px] h-[52px] border-1 p-2 rounded-full shadow-[5px_4px_1px_black]  flex items-center justify-center gap-2'>
                  <div className='text-[30px]'>Edit Profile</div>
                  <div><svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.0033 22.0974L2.28906 24.2574L4.44906 16.5431L18.5748 2.486C18.7344 2.32272 18.9251 2.19299 19.1356 2.10441C19.3461 2.01584 19.5721 1.97021 19.8005 1.97021C20.0289 1.97021 20.2549 2.01584 20.4654 2.10441C20.6759 2.19299 20.8666 2.32272 21.0262 2.486L24.0605 5.53743C24.221 5.69691 24.3483 5.88655 24.4352 6.09544C24.5221 6.30432 24.5669 6.52833 24.5669 6.75457C24.5669 6.98081 24.5221 7.20482 24.4352 7.41371C24.3483 7.62259 24.221 7.81223 24.0605 7.97172L10.0033 22.0974Z" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
              </div>
            </div>
            <div className='w-[656px] h-[164px] flex flex-col border-1 rounded-md shadow-[4px_2px_1px_black]'> 
              <div className='text-[30px]  text-[Jost]-600 px-2'> About :</div>
              <div className='w-full flex items-center justify-center'>
                <div className=' w-[564px] p-4 text-center text-[20px]'>
                CodeSprint 2024 is a 48-hour global coding marathon that brings together developers, designers, and innovators to build impactful solutions using AI, .
                </div>
                </div>
            </div>
            <div>

            </div>
            <div className='w-[656px] h-[226px] relative  border-1 rounded-md shadow-[4px_2px_1px_black] '>
              <div className='flex items-center p-5  border-b-3 justify-between'>
                  <div className={`cursor-default bg-[#FDE779] w-[120px] border-2 border-black px-4 py-1 rounded-md shadow-[3px_3px_0_black] text-xl font-bold`}>
        Skills
    </div>
                <div className={`  bg-[#FFC6A5]  w-[150px] border-2 border-black px-4 py-1 rounded-md shadow-[3px_3px_0_black] text-xl font-bold hover:bg-[#fba674] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] cursor-pointer`}>
        Verify Skills
    </div>

                </div>
                {/* <HeaderTag title="Verify Skills" bgColor="" extraClass='!left-auto right-4' /> */}
                <div className='flex flex-wrap gap-3 mt-2 p-5'>
                    {skills.map((skill, index) => (
                        <div 
                            className='border-2 border-black rounded-full px-4 py-1 text-base cursor-pointer shadow-[3px_3px_0_black] font-semibold hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] cursor-pointer'
                            style={{ backgroundColor: skill.color }} // 🎯 FIX: Changed 'bgColor' to 'skill.color'
                            key={index}
                        >
                            {skill.name}
                        </div> 
                    ))}
                </div>
            </div>
        </div>
        
    </div>
    </div>
    <div className='flex  items-center p-5 justify-between'>
        {/* add the code for the image sent here */}
        <div className='flex flex-col gap-5 p-5'>
          <div className='w-[432px] h-[360px] relative border-2 border-black rounded-md shadow-[5px_3px_1px_black] p-4'>
                    <div 
        className='w-fit border-2 cursor-default  bg-[#FDE779] border-black rounded-md shadow-[4px_2px_1px_black] p-2 text-center text-[25px] font-bold text-[Jost]-800'
    >
        Job Preferences
    </div>
                    <div className='flex flex-wrap gap-3 m-2 mt-5'>
                        {jobPreferences.map((pref, index) => (
                            <div 
                                className='border-2 border-black rounded-full px-4 py-1 text-base cursor-pointer shadow-[3px_3px_0_black] font-semibold bg-white text-lg hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] cursor-pointer'
                                style={{ color: '#277DFF' }} key={index}
                            >
                                {pref}
                            </div>
                        ))}
                    </div>
                </div>
        <div className='w-[432px] h-[352px] p-4  border-1 rounded-md shadow-[5px_3px_1px_black]'>
           <div 
        className='cursor-default w-fit bg-[#FDE779] border-2 border-black rounded-md shadow-[4px_2px_1px_black] p-2 text-center text-[25px] font-bold text-[Jost]-800'
    >
        Projects
    </div>
          <div className='p-2'>
                        <div className='font-bold text-xl mb-2'>Project Name: <span className='font-normal'>{projectData.name}</span></div>
                        <div className='text-lg text-blue-600 underline cursor-pointer'>
                            Link: <a href={projectData.link} target="_blank" rel="noopener noreferrer">{projectData.link}</a>
                        </div>
                        <div className='mt-3 text-lg'>
                            <span className='font-bold'>Description:</span> {projectData.description}
                        </div>
                    </div>
        </div>
        </div>
          <div className='w-[550px] h-[588px] p-4 border-1 rounded-md shadow-[5px_3px_1px_black]'>
                        <div 
        className='cursor-default w-fit bg-[#FDE779] mb-5 border-2 border-black rounded-md shadow-[4px_2px_1px_black] p-2 text-center text-[25px] font-bold text-[Jost]-800'
    >
        Experience
    </div>
            {experienceData.map((item, index) => (
                        <div key={index} className='p-3 border-2 border-black rounded-md shadow-[3px_2px_1px_black] bg-white mb-4 last:mb-0'>
                            <div className='font-bold text-xl'>Organization: <span className='font-normal'>{item.organization}</span></div>
                            <div className='text-lg'>Position: <span className='font-normal'>{item.position}</span></div>
                            <div className='text-lg'>Timeline: <span className='font-normal'>{item.timeline}</span></div>
                            <div className='mt-2 text-lg'>
                                <span className='font-bold'>Description:</span> {item.description}
                            </div>
                        </div>
                    ))}
          </div>

    </div>
    </div>
        </>
    )
}

export default Profile;
import React from 'react'
import TopSection from './TopSection'

const Hiring = () => {
  return (
    <div className='flex flex-col gap-y-10'>
      <div className='flex flex-row justify-center'>
      <TopSection /></div>
      <div className='flex flex-col gap-y-5 p-3'>
      <div className='w-full'>
        <img className="w-full h-full rounded-2xl" src='/images/we_are_hiring.png'></img>
      </div>
      <div className='flex flex-col gap-y-2'>
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
      <div className='font-[Jost] text-lg'>Don't know it is friend or foe between the two legends </div>
      <div className='font-[Jost] cursor-pointer font-semibold text-xs p-2 bg-[#96E7E5] rounded-[8px] border-2 shadow-[6px_4px_0px_0_black] w-[60%] flex mx-auto items-center justify-center'>
                      Know More
      </div>
      </div>
    </div>
  )
}

export default Hiring
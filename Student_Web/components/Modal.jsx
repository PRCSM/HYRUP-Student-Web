import React from 'react'
import { BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
const Modal = ({setModalOpen,Image}) => {
    
  return (
    <div className='fixed inset-0 bg-black/70 z-100 flex items-center justify-center bg-[#253745]'>
      <div className='relative w-100 h-90 md:w-[848px] md:h-[628px] rounded-[12px] bg-white border-1 shadow-[2px_2px_5px_black] flex items-center justify-between md:p-[25px] px-3'>
            <div className='w-70 h-70 md:w-[371px] md:h-[590px] rounded-xl'>
            <img src={Image} alt="goku" className='w-full h-full object-cover rounded-xl pr-4' />
            </div>
            <div className='w-70 h-full md:w-[335px] md-h-full flex flex-col px-1'>
                <button onClick={() => setModalOpen(false)} className='absolute cursor-pointer top-3 right-4 w-7 h-7 md:top-10 md:right-10 md:w-[44px] md:h-[44px] rounded-[8px] shadow-[2px_2px_5px_black] flex items-center justify-center'>
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.01167 0C0.755775 0 0.488175 0.0860058 0.292875 0.281006C-0.097625 0.672006 -0.097625 1.32799 0.292875 1.71899L6.57417 8L0.292875 14.281C-0.097625 14.672 -0.097625 15.328 0.292875 15.719C0.683475 16.109 1.33987 16.109 1.73047 15.719L8.01167 9.438L14.2929 15.719C14.6835 16.109 15.3399 16.109 15.7305 15.719C16.121 15.328 16.121 14.672 15.7305 14.281L9.44917 8L15.7305 1.71899C16.121 1.32799 16.121 0.672006 15.7305 0.281006C15.5352 0.0860058 15.2675 0 15.0117 0C14.7558 0 14.4883 0.0860058 14.2929 0.281006L8.01167 6.562L1.73047 0.281006C1.53517 0.0860058 1.26757 0 1.01167 0Z" fill="#2A343D"/>
</svg>
</button>
                <div className='absolute top-20 md:top-20'>
                    <div className='mb-6'>
                    <div className='text-[20px] md:text-[45px] font-bold font-[Jost]'>Friends or Foe</div>
                    <div className='text-[15px] md:text-[30px] font-[Jost] flex flex-row items-center gap-x-2'>
                      <div>
                        by Lumel Technologies
                      </div>
                    <div className=''>
                      <svg className="" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.3173 2.2385C10.7351 0.188233 13.6648 0.188232 14.0827 2.2385C14.369 3.64376 16.0383 4.25131 17.1609 3.35889C18.7989 2.05686 21.0432 3.94004 20.0453 5.7792C19.3614 7.03977 20.2496 8.57814 21.6832 8.61614C23.7749 8.67158 24.2836 11.5568 22.3371 12.3243C21.0029 12.8503 20.6944 14.5997 21.7682 15.5503C23.3349 16.9373 21.8701 19.4745 19.8856 18.8112C18.5254 18.3566 17.1646 19.4984 17.3762 20.9168C17.6848 22.9864 14.9318 23.9884 13.8379 22.2047C13.0882 20.9821 11.3118 20.9821 10.5621 22.2047C9.46824 23.9884 6.71522 22.9864 7.02384 20.9168C7.23537 19.4984 5.8746 18.3566 4.51442 18.8112C2.52993 19.4745 1.06508 16.9373 2.63176 15.5503C3.70556 14.5997 3.3971 12.8503 2.06292 12.3243C0.116351 11.5568 0.625088 8.67158 2.71676 8.61614C4.1504 8.57814 5.03858 7.03977 4.35467 5.7792C3.35684 3.94004 5.60113 2.05686 7.23907 3.35889C8.36173 4.25131 10.031 3.64376 10.3173 2.2385Z" fill="#1FA7E3"/>
                      </svg>
                    </div>
                      </div>
                </div>
                <div className='text-[10px] w-40 md:text-[20px] md:w-[250px] font-[Jost]'>Don't know it is friend or foe between the two legends </div>
                </div>
                <Link to={"/hiring"}>
                <div className='font-[Jost] cursor-pointer absolute bottom-11 font-semibold md:bottom-30 md:w-[210px] md:h-[48px] text-xs p-2 bg-[#96E7E5] rounded-[8px] border-1 shadow-[6px_4px_0px_0_black] flex items-center justify-center'>
                      Know More
                </div>
                </Link>
            </div>
      </div>
    </div>
  )
}

export default Modal

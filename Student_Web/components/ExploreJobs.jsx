import React , { useState } from 'react'
import Masonry from './Masonry'
import Modal from './Modal'

const ExploreJobs = ({isMobile}) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [Image, setImage] = useState(false)

  return (
    <div className='flex flex-col'>
      <div className='flex flex-row'>
        <div>    
          <div className='flex flex-col items-center mt-6'>
            <div className='flex flex-row justify-center items-center gap-x-7 mb-6 font-bold font-[Jost] text-[16px] px-4'>
              <div className='text-center border-3 rounded-lg px-3 py-2 border-[#B8D1E6]'>Unread</div>
              <div className='text-center border-3 rounded-lg px-3 py-2 border-[#B8D1E6]'>Photos</div>
              <div className='text-center border-3 rounded-lg px-3 py-2 border-[#B8D1E6]'>Videos</div>
              <div className='text-center border-3 rounded-lg px-3 py-2 border-[#B8D1E6]'>Links</div>
              <div className='text-center border-3 rounded-lg px-3 py-2 border-[#B8D1E6]'>Gif</div>
              <div className='text-center border-3 rounded-lg px-3 py-2 border-[#B8D1E6]'>Gif</div>
            </div>
            <div className="text-5xl font-regular md:block font-[RubikDoodle] hidden text-center flex justify-center">EXPLORE YOUR DREAMS</div>
            <Masonry setModalOpen={setModalOpen} setImage={setImage} isMobile={isMobile}/>
            {modalOpen && (
              <Modal setModalOpen={setModalOpen} Image={Image}/>
            )}
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default ExploreJobs

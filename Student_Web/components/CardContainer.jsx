import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import MainCard from './MainCard'; 
import { dummyJobData } from './data'; 

// Corrected prop destructuring for CardContainer
const CardContainer = ({ isMobile = false }) => { 
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const containerRef = useRef(null);
  const totalCards = dummyJobData.length;
  
  // Get the data for the current card
  const currentCardData = dummyJobData[currentCardIndex];
  
  useGSAP(() => {
    // GSAP context is not strictly necessary here but good practice
  }, [currentCardIndex]);
  
  // Function to transition to the next card (Used by BOTH buttons now)
  const goToNextCard = () => {
    // Calculate the next index, looping back to 0
    const nextIndex = (currentCardIndex + 1) % totalCards;
    
    // Only animate if not in mobile view or if you want a subtle slide on mobile
    if (!isMobile) {
        gsap.to(containerRef.current, {
          x: -500, // Slide out left
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => {
            setCurrentCardIndex(nextIndex);
            gsap.set(containerRef.current, { x: 500 });
            gsap.to(containerRef.current, {
              x: 0, // Slide in to center
              opacity: 1,
              duration: 0.3,
              ease: "power2.out",
            });
          },
        });
    } else {
        // Immediate index update for simplicity on mobile, or you can add a fade/slide
        setCurrentCardIndex(nextIndex);
    }
  };

  // Function to transition to the previous card (kept for completeness)
  const goToPreviousCard = () => {
    const prevIndex = (currentCardIndex - 1 + totalCards) % totalCards;
    
    if (!isMobile) {
        gsap.to(containerRef.current, {
          x: 500, // Slide out right
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => {
            setCurrentCardIndex(prevIndex);
            gsap.set(containerRef.current, { x: -500 });
            gsap.to(containerRef.current, {
              x: 0, 
              opacity: 1,
              duration: 0.3,
              ease: "power2.out",
            });
          },
        });
    } else {
        setCurrentCardIndex(prevIndex);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center p-10 overflow-hidden'>
      <div 
        ref={containerRef} 
        className={`relative flex items-center justify-center ${isMobile ? 'w-full max-w-sm p-1 h-auto' : 'w-[1145px]  h-[689px]'}`}
      >
        {currentCardData && (
          <MainCard 
            key={currentCardData.id} 
            isMobile={isMobile} 
            cardData={currentCardData} 
            onSwipeRight={goToNextCard} // Next card action (used by BOTH buttons in MainCard)
            onSwipeLeft={goToPreviousCard} // Previous card action
          />
        )}
      </div>
      {/* Optional Card Index Indicator */}
{/*       <div className='mt-4 text-xl font-bold'>
        Card {currentCardIndex + 1} of {totalCards}
      </div> */}
    </div>
  );
};

export default CardContainer;
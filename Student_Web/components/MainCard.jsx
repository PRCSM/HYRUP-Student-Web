import React, { useState, useRef } from 'react';
import { IoArrowDownCircleSharp, IoArrowUpCircle } from "react-icons/io5";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const MainCard = ({ isMobile, cardData, onSwipeRight, onSwipeLeft }) => { // onSwipeLeft is now redundant but kept
    // --- INTERNAL PANEL SCROLLING LOGIC REMAINS ---
    const [currentPanel, setCurrentPanel] = useState(0); 
    const totalPanels = 3; 
    const panelHeight = 689; 
    const containerRef = useRef(null); 
    const [coords, setCoords] = useState({x:0 , y: 0 });
    const [lowerHalf,setLowerHalf] = useState(false)
    const [upperHalf,setUpperHalf]=useState(false)

    if (!cardData) return null; 

    const { 
        title, 
        company, 
        location, 
        posted, 
        applicants, 
        type, 
        duration, 
        image, 
        rolesAndResponsibilities,
        details,
        aboutCompany,
        perks
    } = cardData;

    // --- MOUSE MOVE LOGIC (Remains the same for internal panel scroll) ---
    const handleMouseMove = (e) => {
        const viewport = document.getElementById('scroll-viewport');
        if (!viewport) return;

        const rect = viewport.getBoundingClientRect();
        const y = e.clientY - rect.top;
        const x = e.clientX - rect.left;

        setCoords({ x, y });
        const midY = rect.height / 2;
        setLowerHalf(y > midY);
        setUpperHalf(y < midY);
    };

    const handleMouseLeave = () => {
        setLowerHalf(false);
        setUpperHalf(false);
    };

    // --- SCROLL ANIMATION LOGIC (Remains the same for internal panel scroll) ---
    const animateScroll = (direction) => {
        let nextPanel;

        if (direction === 'down') {
            nextPanel = (currentPanel + 1) % totalPanels; 
        } else if (direction === 'up') {
            nextPanel = (currentPanel - 1 + totalPanels) % totalPanels; 
        } else {
            return; 
        }

        const scrollY = nextPanel * -panelHeight; 
        
        if (containerRef.current) {
            gsap.to(containerRef.current, { 
                y: scrollY, 
                duration: 0.8, 
                ease: "power2.inOut",
            });
            setCurrentPanel(nextPanel);
        }
    };

    const handleClick = () => {
        const direction = lowerHalf ? 'down' : 'up';
        animateScroll(direction);
    }
    
    // Function to render Perk tags dynamically
    const renderPerks = (perkArray) => (
        <div className='flex flex-row justify-between w-[86%] mx-auto '>
            {perkArray.map((perk, index) => (
                <div key={index} className='px-6 py-2 font-[Jost] border-2 border-[#1fa7e3] bg-white shadow-[#1fa7e3] text-[27px] font-bold rounded-2xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'>
                    {perk}
                </div>
            ))}
        </div>
    );


    // --- MOBILE VIEW ---
    if (isMobile){
        return(
            <div className='relative flex flex-col bg-[#E6D3FC] m-2 p-2 rounded-2xl border-2 shadow-[4px_4px_0px_black]'>
                <div className=''><img className='rounded-4xl' src={image} alt={title} /></div>
                <div className='flex items-center justify-between p-3'>
                    <div className='flex flex-col gap-2 mb-2'>
                        <div className='text-[20px] font-bold'>{title}</div>
                        <div className='flex flex-row items-center'>
                            <div className='font-regular text-[16px]'>{company}</div>
                            <div className='ml-2'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.3173 2.2385C10.7351 0.188233 13.6648 0.188232 14.0827 2.2385C14.369 3.64376 16.0383 4.25131 17.1609 3.35889C18.7989 2.05686 21.0432 3.94004 20.0453 5.7792C19.3614 7.03977 20.2496 8.57814 21.6832 8.61614C23.7749 8.67158 24.2836 11.5568 22.3371 12.3243C21.0029 12.8503 20.6944 14.5997 21.7682 15.5503C23.3349 16.9373 21.8701 19.4745 19.8856 18.8112C18.5254 18.3566 17.1646 19.4984 17.3762 20.9168C17.6848 22.9864 14.9318 23.9884 13.8379 22.2047C13.0882 20.9821 11.3118 20.9821 10.5621 22.2047C9.46824 23.9884 6.71522 22.9864 7.02384 20.9168C7.23537 19.4984 5.8746 18.3566 4.51442 18.8112C2.52993 19.4745 1.06508 16.9373 2.63176 15.5503C3.70556 14.5997 3.3971 12.8503 2.06292 12.3243C0.116351 11.5568 0.625088 8.67158 2.71676 8.61614C4.1504 8.57814 5.03858 7.03977 4.35467 5.7792C3.35684 3.94004 5.60113 2.05686 7.23907 3.35889C8.36173 4.25131 10.031 3.64376 10.3173 2.2385Z" fill="#1FA7E3"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div>
                        {/* Heart SVG code */}
                        <svg width="60" height="63" viewBox="0 0 60 63" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_415_583)">
<rect width="60" height="60" rx="12" fill="#F4B4E7" shape-rendering="crispEdges"/>
<rect x="0.375" y="0.375" width="59.25" height="59.25" rx="11.625" stroke="black" stroke-width="0.75" shape-rendering="crispEdges"/>
<path d="M38.2353 30.683C35.7353 36.093 29.6153 38.883 29.3553 39.003C29.156 39.0813 28.9346 39.0813 28.7353 39.003C28.4853 38.883 22.3553 36.093 19.8553 30.683C18.3053 27.313 19.1653 23.683 20.8553 22.123C21.4473 21.6157 22.1511 21.2561 22.909 21.0736C23.6669 20.891 24.4573 20.8908 25.2153 21.073C26.7663 21.4256 28.1208 22.3644 28.9953 23.693C29.8714 22.3616 31.2302 21.4222 32.7853 21.073C33.5433 20.8908 34.3337 20.891 35.0916 21.0736C35.8495 21.2561 36.5533 21.6157 37.1453 22.123C38.9253 23.683 39.7953 27.313 38.2353 30.683Z" fill="#DD31AD"/>
</g>
<defs>
<filter id="filter0_d_415_583" x="0" y="0" width="60" height="63" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="3"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_415_583"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_415_583" result="shape"/>
</filter>
</defs>
</svg>

                    </div>
                </div>
                <hr />
                <div className='flex  items-center justify-between p-6'> 
                    <div className='flex gap-3'>
                        {location.split(',')[0]} 
                    </div>
                    <div className='flex items-center'>
                        {/* Time/Type SVG code */}
                        <svg width="62" height="16" viewBox="0 0 62 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 6.30002C2 6.95069 2.064 7.55336 2.192 8.10802C2.32 8.65202 2.50667 9.12669 2.752 9.53202C2.99733 9.92669 3.29067 10.236 3.632 10.46C3.984 10.6734 4.37333 10.78 4.8 10.78C5.23733 10.78 5.62667 10.6734 5.968 10.46C6.30933 10.236 6.60267 9.92669 6.848 9.53202C7.09333 9.12669 7.28 8.65202 7.408 8.10802C7.536 7.55336 7.6 6.95069 7.6 6.30002C7.6 5.64936 7.536 5.05202 7.408 4.50802C7.28 3.95336 7.09333 3.47869 6.848 3.08402C6.60267 2.67869 6.30933 2.36936 5.968 2.15602C5.62667 1.93202 5.23733 1.82002 4.8 1.82002C4.37333 1.82002 3.984 1.93202 3.632 2.15602C3.29067 2.36936 2.99733 2.67869 2.752 3.08402C2.50667 3.47869 2.32 3.95336 2.192 4.50802C2.064 5.05202 2 5.64936 2 6.30002ZM0.64 6.30002C0.64 5.18002 0.816 4.18802 1.168 3.32402C1.52 2.46002 2.00533 1.78269 2.624 1.29202C3.25333 0.79069 3.97867 0.540024 4.8 0.540024C5.62133 0.540024 6.34133 0.79069 6.96 1.29202C7.58933 1.78269 8.08 2.46002 8.432 3.32402C8.784 4.18802 8.96 5.18002 8.96 6.30002C8.96 7.42002 8.784 8.41202 8.432 9.27602C8.08 10.14 7.58933 10.8227 6.96 11.324C6.34133 11.8147 5.62133 12.06 4.8 12.06C3.97867 12.06 3.25333 11.8147 2.624 11.324C2.00533 10.8227 1.52 10.14 1.168 9.27602C0.816 8.41202 0.64 7.42002 0.64 6.30002ZM9.67375 8.70002V7.50002H12.8738V8.70002H9.67375ZM13.2731 11.9L18.5691 6.25202C18.8145 5.98536 19.0225 5.72402 19.1931 5.46802C19.3745 5.20136 19.5078 4.93469 19.5931 4.66802C19.6891 4.39069 19.7371 4.10269 19.7371 3.80402C19.7371 3.55869 19.6891 3.31869 19.5931 3.08402C19.4971 2.84936 19.3531 2.63602 19.1611 2.44402C18.9798 2.25202 18.7558 2.09736 18.4891 1.98002C18.2225 1.86269 17.9185 1.80402 17.5771 1.80402C17.0971 1.80402 16.6811 1.91602 16.3291 2.14002C15.9878 2.35336 15.7265 2.66802 15.5451 3.08402C15.3638 3.48936 15.2731 3.97469 15.2731 4.54002H13.9131C13.9131 3.74002 14.0571 3.04136 14.3451 2.44402C14.6331 1.83602 15.0491 1.36669 15.5931 1.03602C16.1478 0.694691 16.8091 0.524024 17.5771 0.524024C18.1958 0.524024 18.7291 0.630691 19.1771 0.844024C19.6251 1.04669 19.9931 1.31336 20.2811 1.64402C20.5691 1.96402 20.7825 2.31069 20.9211 2.68402C21.0598 3.05736 21.1291 3.41469 21.1291 3.75602C21.1291 4.33202 20.9905 4.90269 20.7131 5.46802C20.4358 6.03336 20.0785 6.54002 19.6411 6.98802L16.0731 10.62H21.1771V11.9H13.2731ZM33.8994 4.54002L29.0994 15.42H27.6594L29.6754 10.86L26.8594 4.54002H28.3794L30.7154 10.3L30.1874 10.236L32.4594 4.54002H33.8994ZM37.7199 12.06C37.0372 12.06 36.4292 11.9 35.8959 11.58C35.3732 11.2494 34.9625 10.796 34.6639 10.22C34.3759 9.64402 34.2319 8.97736 34.2319 8.22002C34.2319 7.45202 34.3812 6.78002 34.6799 6.20402C34.9892 5.62802 35.4159 5.18002 35.9599 4.86002C36.5145 4.54002 37.1545 4.38002 37.8799 4.38002C38.6052 4.38002 39.2239 4.53469 39.7359 4.84402C40.2585 5.14269 40.6585 5.57469 40.9359 6.14002C41.2132 6.70536 41.3519 7.37736 41.3519 8.15602C41.3519 8.23069 41.3465 8.31069 41.3359 8.39602C41.3359 8.47069 41.3359 8.51869 41.3359 8.54002H35.0479V7.45202H40.3279L39.8159 8.18802C39.8479 8.13469 39.8799 8.05469 39.9119 7.94802C39.9439 7.83069 39.9599 7.73469 39.9599 7.66002C39.9599 7.22269 39.8692 6.84402 39.6879 6.52402C39.5172 6.20402 39.2772 5.95336 38.9679 5.77202C38.6585 5.59069 38.2959 5.50002 37.8799 5.50002C37.3892 5.50002 36.9679 5.60669 36.6159 5.82002C36.2745 6.02269 36.0079 6.32136 35.8159 6.71602C35.6345 7.10002 35.5385 7.57469 35.5279 8.14002C35.5279 8.71602 35.6185 9.20669 35.7999 9.61202C35.9812 10.0174 36.2479 10.3267 36.5999 10.54C36.9519 10.7534 37.3785 10.86 37.8799 10.86C38.3812 10.86 38.8239 10.7534 39.2079 10.54C39.5919 10.316 39.9172 9.98002 40.1839 9.53202L41.2239 10.188C40.8399 10.8067 40.3545 11.276 39.7679 11.596C39.1919 11.9054 38.5092 12.06 37.7199 12.06ZM43.6823 9.62802C43.6823 9.90536 43.7463 10.1454 43.8743 10.348C44.0129 10.5507 44.1996 10.7054 44.4343 10.812C44.6796 10.908 44.9569 10.956 45.2663 10.956C45.6609 10.956 46.0129 10.876 46.3223 10.716C46.6423 10.556 46.8929 10.332 47.0743 10.044C47.2663 9.74536 47.3623 9.40402 47.3623 9.02002L47.6183 9.98002C47.6183 10.4494 47.4743 10.8387 47.1863 11.148C46.9089 11.4574 46.5623 11.6867 46.1463 11.836C45.7409 11.9854 45.3356 12.06 44.9303 12.06C44.4823 12.06 44.0609 11.9694 43.6663 11.788C43.2823 11.596 42.9729 11.324 42.7383 10.972C42.5036 10.62 42.3863 10.1934 42.3863 9.69202C42.3863 8.97736 42.6369 8.40669 43.1383 7.98002C43.6503 7.54269 44.3596 7.32402 45.2663 7.32402C45.7996 7.32402 46.2423 7.38802 46.5943 7.51602C46.9569 7.63336 47.2449 7.77202 47.4583 7.93202C47.6716 8.08136 47.8156 8.20402 47.8903 8.30002V9.05202C47.5169 8.79602 47.1329 8.61469 46.7383 8.50802C46.3436 8.39069 45.9223 8.33202 45.4743 8.33202C45.0583 8.33202 44.7169 8.38536 44.4503 8.49202C44.1943 8.59869 44.0023 8.74802 43.8743 8.94002C43.7463 9.13202 43.6823 9.36136 43.6823 9.62802ZM43.4903 6.23602L42.8663 5.29202C43.1436 5.08936 43.5223 4.88669 44.0023 4.68402C44.4929 4.48136 45.0796 4.38002 45.7623 4.38002C46.3383 4.38002 46.8396 4.47069 47.2663 4.65202C47.7036 4.82269 48.0396 5.07336 48.2743 5.40402C48.5196 5.73469 48.6423 6.14002 48.6423 6.62002V11.9H47.3623V6.79602C47.3623 6.54002 47.3196 6.33202 47.2343 6.17202C47.1489 6.00136 47.0263 5.86802 46.8663 5.77202C46.7169 5.67602 46.5409 5.60669 46.3383 5.56402C46.1356 5.52136 45.9223 5.50002 45.6983 5.50002C45.3356 5.50002 45.0049 5.54269 44.7063 5.62802C44.4183 5.71336 44.1729 5.81469 43.9703 5.93202C43.7676 6.04936 43.6076 6.15069 43.4903 6.23602ZM52.0894 4.54002V11.9H50.8094V4.54002H52.0894ZM54.3134 5.94802C54.1427 5.82002 53.988 5.72936 53.8494 5.67602C53.7107 5.61202 53.5347 5.58002 53.3214 5.58002C53.0014 5.58002 52.7507 5.66002 52.5694 5.82002C52.388 5.98002 52.26 6.19869 52.1854 6.47602C52.1214 6.75336 52.0894 7.06802 52.0894 7.42002H51.5134C51.5134 6.83336 51.6147 6.31602 51.8174 5.86802C52.0307 5.40936 52.3027 5.04669 52.6334 4.78002C52.964 4.51336 53.3 4.38002 53.6414 4.38002C53.908 4.38002 54.1534 4.41736 54.3774 4.49202C54.612 4.55602 54.8254 4.68936 55.0174 4.89202L54.3134 5.94802ZM56.5978 9.64402C56.7471 9.86802 56.9178 10.076 57.1098 10.268C57.3018 10.46 57.5204 10.6147 57.7658 10.732C58.0218 10.8387 58.2991 10.892 58.5978 10.892C58.9604 10.892 59.2431 10.812 59.4458 10.652C59.6591 10.4814 59.7658 10.252 59.7658 9.96402C59.7658 9.70802 59.6804 9.49469 59.5098 9.32402C59.3498 9.14269 59.1418 8.99336 58.8858 8.87602C58.6298 8.74802 58.3578 8.63069 58.0698 8.52402C57.7498 8.39602 57.4244 8.24669 57.0938 8.07602C56.7738 7.89469 56.5018 7.66536 56.2778 7.38802C56.0644 7.10002 55.9578 6.74269 55.9578 6.31602C55.9578 5.87869 56.0698 5.51602 56.2938 5.22802C56.5284 4.94002 56.8271 4.72669 57.1898 4.58802C57.5631 4.44936 57.9471 4.38002 58.3418 4.38002C58.7364 4.38002 59.1044 4.44402 59.4458 4.57202C59.7978 4.70002 60.1071 4.87069 60.3738 5.08402C60.6404 5.29736 60.8484 5.54269 60.9978 5.82002L59.9738 6.47602C59.7711 6.19869 59.5151 5.96936 59.2057 5.78802C58.9071 5.60669 58.5658 5.51602 58.1818 5.51602C57.9151 5.51602 57.6858 5.57469 57.4938 5.69202C57.3018 5.80936 57.2057 5.99069 57.2057 6.23602C57.2057 6.42802 57.2804 6.59869 57.4298 6.74802C57.5791 6.89736 57.7711 7.03069 58.0058 7.14802C58.2404 7.26536 58.4858 7.37736 58.7418 7.48402C59.1684 7.65469 59.5578 7.84136 59.9098 8.04402C60.2618 8.23602 60.5391 8.47069 60.7418 8.74802C60.9551 9.02536 61.0618 9.38269 61.0618 9.82002C61.0618 10.46 60.8271 10.9934 60.3578 11.42C59.8991 11.8467 59.2911 12.06 58.5338 12.06C58.0431 12.06 57.6004 11.9747 57.2057 11.804C56.8111 11.6227 56.4751 11.3934 56.1978 11.116C55.9311 10.8387 55.7284 10.556 55.5898 10.268L56.5978 9.64402Z" fill="#232323"/>
</svg>

                    </div>
                </div>
                {/* --- SWIPE/NEXT CARD BUTTONS (Both call onSwipeRight) --- */}
                <div className='absolute -bottom-12 justify-center w-full items-center'>
                <div className='flex items-center justify-center'>
                    {/* Pass/Swipe Left button - Calls next card logic */}
                    <div onClick={onSwipeRight}> {/* <--- MODIFIED HERE */}
                      <svg width="85" height="83" viewBox="0 0 85 83" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_415_658)">
<path d="M38.3867 1C59.0572 1 75.7744 17.3635 75.7744 37.5C75.7744 57.6365 59.0572 74 38.3867 74C17.7164 73.9998 1 57.6364 1 37.5C1 17.3636 17.7164 1.0002 38.3867 1Z" fill="white" stroke="black" stroke-width="2"/>
<path d="M54.8391 22.3141L22.5811 53.3058M54.8391 53.3058L22.5811 22.3141" stroke="black" stroke-width="4" stroke-linecap="round"/>
</g>
<defs>
<filter id="filter0_d_415_658" x="0" y="0" width="84.7744" height="83" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="4" dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.7 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_415_658"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_415_658" result="shape"/>
</filter>
</defs>
</svg>

                    </div>
                    {/* Like/Swipe Right button - Calls next card logic */}
                    <div onClick={onSwipeRight}>
                        <svg width="85" height="83" viewBox="0 0 85 83" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_415_661)">
<path d="M38.6123 1C59.2828 1 76 17.3635 76 37.5C76 57.6365 59.2828 74 38.6123 74C17.942 73.9998 1.22559 57.6364 1.22559 37.5C1.22559 17.3636 17.942 1.0002 38.6123 1Z" fill="white" stroke="black" stroke-width="2"/>
<path d="M22.8066 39.633C26.0034 42.0637 32.3969 48.7482 35.0124 53.3058C38.2091 46.0136 46.3463 29.6063 55.0647 22.3141" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<filter id="filter0_d_415_661" x="0.225586" y="0" width="84.7744" height="83" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="4" dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.7 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_415_661"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_415_661" result="shape"/>
</filter>
</defs>
</svg>

                    </div>
                </div>
</div>
            </div>  
        )
    }

    // --- DESKTOP VIEW ---
    return (
        <div className='w-[1145px]'>
        <div 
            id="scroll-viewport" 
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove} 
            className='relative w-[1145px] h-[689px] rounded-xl border-1 shadow-[2px_1px_2px_black] overflow-hidden cursor-none' 
            >
            <div 
                ref={containerRef} 
                onClick={handleClick} 
                className='w-full h-[300%] absolute top-0 left-0' 
                style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                }} 
            >          
                {/* --- PANEL 1: Summary --- */}
                <div className='w-[100%] h-[100%] rounded-xl shadow-[2px_1px_2px_black] px-10 flex items-center justify-between bg-[#E6D3FC]'>
                    <div className='w-[570px] h-[548px] overflow-hidden rounded-xl border-2'>
                        <img src={image} alt={title} className="w-full h-full object-cover"/>
                    </div>
                    <div className='w-[400px]'>
                        <div className='flex flex-col gap-2 mb-2'>
                            <div className='text-[45px] font-bold'>{title}</div>
                            <div className='flex flex-row items-center'>
                                <div className='font-regular text-[30px]'>{company}</div>
                                <div className='ml-2'>
                                    {/* Verified SVG */}
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.3173 2.2385C10.7351 0.188233 13.6648 0.188232 14.0827 2.2385C14.369 3.64376 16.0383 4.25131 17.1609 3.35889C18.7989 2.05686 21.0432 3.94004 20.0453 5.7792C19.3614 7.03977 20.2496 8.57814 21.6832 8.61614C23.7749 8.67158 24.2836 11.5568 22.3371 12.3243C21.0029 12.8503 20.6944 14.5997 21.7682 15.5503C23.3349 16.9373 21.8701 19.4745 19.8856 18.8112C18.5254 18.3566 17.1646 19.4984 17.3762 20.9168C17.6848 22.9864 14.9318 23.9884 13.8379 22.2047C13.0882 20.9821 11.3118 20.9821 10.5621 22.2047C9.46824 23.9884 6.71522 22.9864 7.02384 20.9168C7.23537 19.4984 5.8746 18.3566 4.51442 18.8112C2.52993 19.4745 1.06508 16.9373 2.63176 15.5503C3.70556 14.5997 3.3971 12.8503 2.06292 12.3243C0.116351 11.5568 0.625088 8.67158 2.71676 8.61614C4.1504 8.57814 5.03858 7.03977 4.35467 5.7792C3.35684 3.94004 5.60113 2.05686 7.23907 3.35889C8.36173 4.25131 10.031 3.64376 10.3173 2.2385Z" fill="#1FA7E3"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className='text-[#666565] flex flex-col text-[20px] my-4'>
                            <div className=''>{location}</div>
                            <div>{posted} · </div>
                            <div className=''>{applicants}</div>
                        </div>
                        <div className='flex flex-row gap-x-6 my-9'>
                            <div className='flex flex-row border-2 border-dashed px-3 py-2 rounded-4xl bg-[#f3f9c6] text-[#2c2c2c] text-[16px]'>
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_61_284)"><path d="M20.5 7L9.5 18L4.5 13" stroke="#343434" strokeLinecap="square"/></g>
                                    <defs><clipPath id="clip0_61_284"><rect width="24" height="24" fill="white" transform="translate(0.5 0.5)"/></clipPath></defs>
                                </svg>
                                {type}
                            </div>
                            <div className='flex flex-row border-2 border-dashed px-3 py-2 rounded-4xl bg-[#f3f9c6] text-[#2c2c2c] text-[16px]'>
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_61_284)"><path d="M20.5 7L9.5 18L4.5 13" stroke="#343434" strokeLinecap="square"/></g>
                                    <defs><clipPath id="clip0_61_284"><rect width="24" height="24" fill="white" transform="translate(0.5 0.5)"/></clipPath></defs>
                                </svg>
                                {duration}
                            </div>
                        </div>
                        <div className='flex w-full items-center justify-center pr-6'>
                            <div className='flex w-full justify-between items-center'>
                                {/* Chat Button (Static) */}
                                <div className='flex w-[219px] items-center justify-center border-2 bg-white rounded-md bg-white shadow-[3px_3px_0_0_rgba(0,0,0,1)] p-2 '>
                                    <svg className="mr-2" width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.0769 13.1154H28.6923M12.0769 21.1923H23.1538M12.0769 33.3077L1 36L3.76923 27.9231V3.69231C3.76923 2.97826 4.06099 2.29346 4.58032 1.78856C5.09965 1.28365 5.80402 1 6.53846 1H34.2308C34.9652 1 35.6696 1.28365 36.1889 1.78856C36.7082 2.29346 37 2.97826 37 3.69231V30.6154C37 31.3294 36.7082 32.0142 36.1889 32.5191C35.6696 33.024 34.9652 33.3077 34.2308 33.3077H12.0769Z" stroke="black" strokeWidth="1.71429" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <div className='font-[Jost] text-[24px]'>Chat</div>
                                </div>
                                {/* Like Button (Static) */}
                                <div className='border-2 rounded-md shadow-[0_2px_0_0_rgba(0,0,0,1)] p-3 bg-[#F4B4E7]'>
                                    <svg width="34" height="27" viewBox="0 0 34 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M32.5307 14.4973C28.364 22.3869 18.164 26.4557 17.7307 26.6307C17.3986 26.7448 17.0294 26.7448 16.6973 26.6307C16.2807 26.4557 6.06401 22.3869 1.89734 14.4973C-0.685994 9.58274 0.747339 4.28899 3.56401 2.01399C4.55061 1.27422 5.72365 0.749709 6.98683 0.483527C8.25002 0.217345 9.56734 0.217076 10.8307 0.482742C13.4157 0.996901 15.6732 2.36604 17.1307 4.30358C18.5908 2.36188 20.8555 0.992036 23.4473 0.482742C24.7107 0.217076 26.028 0.217345 27.2912 0.483527C28.5544 0.749709 29.7274 1.27422 30.714 2.01399C33.6807 4.28899 35.1307 9.58274 32.5307 14.4973Z" fill="#DD31AD"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* --- PANEL 2: Roles & Perks --- */}
                <div className='w-[100%] h-[100%] bg-[#E6D3FC]'>
                    <div className='flex flex-col shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] p-5 w-[100%] h-[100%] gap-y-10 justify-center'>
                        <div className='font-bold text-[26px] font-[Jost] pl-20'>Roles and Responsibility: </div>
                        <div className='border-3 px-8 py-10 font-[Jost] text-[20px] bg-white w-[86%] mx-auto font-bold rounded-2xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]'>
                            {rolesAndResponsibilities}
                        </div>
                        <div className='font-bold text-[26px] font-[Jost] pl-20'>Perks:</div>
                        {renderPerks(perks)}
                    </div>
                </div>

                {/* --- PANEL 3: Details & About Company --- */}
                <div className='w-full h-full bg-[#E6D3FC]'>
                    <div className='h-full flex flex-col shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] p-5 w-[100%] rounded-2xl gap-y-10 justify-center'>
                        <div className='font-bold text-[26px] font-[Jost] pl-20'>Details:</div>
                        <div className='border-3 px-8 py-10 font-[Jost] text-[20px] bg-white font-bold rounded-2xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] w-[86%] mx-auto'>
                            {details}
                        </div>
                        <div className='font-bold text-[26px] font-[Jost] pl-20'>About {company}: </div>
                        <div className='border-3 px-8 py-10 font-[Jost] text-[20px] w-[86%] mx-auto bg-white font-bold rounded-2xl shadow-[3px_3px_0px_0_rgba(0,0,0,1)]'>
                            {aboutCompany}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* --- SWIPE/NEXT CARD BUTTONS (Both call onSwipeRight) --- */}
        <div className='absolute -bottom-10 flex items-center justify-center w-[1145px]'>
            <div className='w-[400px] flex items-center justify-between'>
                {/* Pass/Swipe Left Button - Calls next card logic */}
                <div className='cursor-pointer' onClick={onSwipeRight}> {/* <--- MODIFIED HERE */}
                    <svg width="127" height="129" viewBox="0 0 127 129" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_34_565)">
                        <path d="M59.5 1C91.793 1 118 27.6233 118 60.5C118 93.3767 91.793 120 59.5 120C27.207 120 1 93.3767 1 60.5C1 27.6233 27.207 1 59.5 1Z" fill="white" stroke="black" stroke-width="2"/>
                        <path d="M85 36L35 86M85 86L35 36" stroke="black" stroke-width="4" stroke-linecap="round"/>
                        </g>
                        <defs><filter id="filter0_d_34_565" x="0" y="0" width="127" height="129" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dx="4" dy="4"/><feGaussianBlur stdDeviation="2"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.7 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_34_565"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_34_565" result="shape"/></filter></defs>
                    </svg>
                </div>
                {/* Like/Swipe Right Button - Calls next card logic */}
                <div className='cursor-pointer' onClick={onSwipeRight}>
                    <svg width="127" height="129" viewBox="0 0 127 129" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_263_103)">
                        <path d="M59.5 1C91.793 1 118 27.6233 118 60.5C118 93.3767 91.793 120 59.5 120C27.207 120 1 93.3767 1 60.5C1 27.6233 27.207 1 59.5 1Z" fill="white" stroke="black" stroke-width="2"/>
                        <path d="M35 63.9412C39.955 67.8627 49.8649 78.6471 53.9189 86C58.8739 74.2353 71.4865 47.7647 85 36" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs><filter id="filter0_d_263_103" x="0" y="0" width="127" height="129" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dx="4" dy="4"/><feGaussianBlur stdDeviation="2"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.7 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_263_103"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_263_103" result="shape"/></filter></defs>
                    </svg>
                </div>
            </div>
        </div>

        {/* Custom Arrow Cursors (for internal panel scroll visualization) */}
        <IoArrowDownCircleSharp
            className="text-black-500"
            size={40}
            style={{
                position: "absolute",
                left: coords.x + 180, 
                top: coords.y + 30, 
                pointerEvents: "none", 
                opacity: lowerHalf ? 1 : 0,
            }}
        />
        <IoArrowUpCircle
            className="text-black-500"
            size={40}
            style={{
                position: "absolute",
                left: coords.x + 180, 
                top: coords.y + 30, 
                pointerEvents: "none", 
                opacity: upperHalf ? 1 : 0,
            }}
        />
        </div>
    )
}

export default MainCard;
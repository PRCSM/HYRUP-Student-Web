import React from 'react'
const images=[
    "images/masonry/berserk.jpeg",
    "images/masonry/cris.jpg",
    "images/masonry/darkspidy.jpeg",
    "images/masonry/goku.jpeg",
    "images/masonry/hands_up.jpeg",
    "images/masonry/kimetsu.jpeg",
    "images/masonry/kimiNoNamaiWa.jpeg",
    "images/masonry/Luffy and Thousand Sunny.jpeg",
    "images/masonry/Senbonzakura.jpeg",
    "images/masonry/solo.jpeg",
    "images/masonry/spidy.jpeg ",
    "images/masonry/yourname.jpeg",
]
const Masonry = ({ setModalOpen ,setImage }) => {
  return (
    <div className="md:ml-[160px] md:mt-[50px] md:mr-[40px] md:mb-[40px]">
      <div className="columns-3 sm:columns-2 lg:columns-5 gap-2 md:gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => {setModalOpen(true);setImage(image)}}
            className="group relative mb-2 md:mb-6 w-full break-inside-avoid rounded-xl shadow-md overflow-hidden cursor-pointer"
          >
            <img
              src={image}
              alt={`img-${index}`}
              className="w-full rounded-xl transform transition-transform duration-300 group-hover:scale-105 group-hover:opacity-90"
            />
          </div>
        ))}
      </div>
    </div>
  );
};


export default Masonry

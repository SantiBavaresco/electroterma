import React, { useState, useEffect } from 'react';
// import './logica.js'; // Importa el archivo de lógica
import './style.css'; 


// Importa el archivo de lógica

interface CarouselItemProps {
  index: number;
}

const CarouselItem: React.FC<CarouselItemProps> = ({ index }) => {
  const colors = ['blue', 'purple', 'green', 'yellow', 'red', 'orange', 'teal'];
  const color = colors[index % colors.length];

  

  return (
    <div
      className={`relative aspect-[1/1] w-[85%] shrink-0 snap-start snap-always rounded-xl bg-${color}-200 md:w-[calc(33.33%-(32px/3))]`}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-8xl font-bold text-white">{index + 1}</div>
      </div>
    </div>
  );
};

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 6 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 6 ? 0 : prevIndex + 1));
  };

  // useEffect(() => {
  //   // Lógica adicional del carrusel (opcional)
  //   // Puedes utilizar la función "updateCarousel" importada de logica.js
    
  //   require("./logica.js");
  // }, [currentIndex]);

  useEffect(() => {
    require("./logica.js");
    // return () => {};
}, [currentIndex]);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center">
  <div className="carousel scrollbar-hide flex w-full snap-x snap-mandatory gap-4 overflow-x-scroll scroll-smooth">
    <div className="relative aspect-[1/1] w-[85%] shrink-0 snap-start snap-always rounded-xl bg-blue-200 md:w-[calc(33.33%-(32px/3))]">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-8xl font-bold text-white">1</div>
      </div>
    </div>

    <div className="relative aspect-[1/1] w-[85%] shrink-0 snap-start snap-always rounded-xl bg-purple-200 md:w-[calc(33.33%-(32px/3))]">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-8xl font-bold text-white">2</div>
      </div>
    </div>

    <div className="relative aspect-[1/1] w-[85%] shrink-0 snap-start snap-always rounded-xl bg-green-200 md:w-[calc(33.33%-(32px/3))]">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-8xl font-bold text-white">3</div>
      </div>
    </div>

    <div className="relative aspect-[1/1] w-[85%] shrink-0 snap-start snap-always rounded-xl bg-yellow-200 md:w-[calc(33.33%-(32px/3))]">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-8xl font-bold text-white">4</div>
      </div>
    </div>

    <div className="relative aspect-[1/1] w-[85%] shrink-0 snap-start snap-always rounded-xl bg-red-200 md:w-[calc(33.33%-(32px/3))]">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-8xl font-bold text-white">5</div>
      </div>
    </div>

    <div className="relative aspect-[1/1] w-[85%] shrink-0 snap-start snap-always rounded-xl bg-orange-200 md:w-[calc(33.33%-(32px/3))]">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-8xl font-bold text-white">6</div>
      </div>
    </div>

    <div className="relative aspect-[1/1] w-[85%] shrink-0 snap-start snap-always rounded-xl bg-teal-200 md:w-[calc(33.33%-(32px/3))]">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-8xl font-bold text-white">7</div>
      </div>
    </div>
  </div>
  
  <div id="pagination" className="pagination my-4 flex gap-2">
    <span className="h-3 w-3 ease-out duration-300 rounded-full bg-black w-8"></span>
    <span className="h-3 w-3 ease-out duration-300 rounded-full bg-black"></span>
    <span className="h-3 w-3 ease-out duration-300 rounded-full bg-black"></span>
    <span className="h-3 w-3 ease-out duration-300 rounded-full bg-black"></span>
    <span className="h-3 w-3 ease-out duration-300 rounded-full bg-black"></span>
    <span className="h-3 w-3 ease-out duration-300 rounded-full bg-black md:hidden"></span>
    <span className="h-3 w-3 ease-out duration-300 rounded-full bg-black md:hidden"></span>
  </div>
  
  <div>
    <button id="prev-btn" className="prev-btn bg-gray-200 p-2" onClick={handlePrev}>Prev</button>
    <button id="next-btn" className="next-btn bg-gray-200 p-2" onClick={handleNext}>Next</button>
  </div>
</div>
  );
};

export default Carousel;
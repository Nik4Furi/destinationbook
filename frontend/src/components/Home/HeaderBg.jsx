import React from 'react';

// import bg from '../../assets/bg.mp4'
import bg from '../../assets/bg.webp'

const HeaderBg = () => {
  return (
    <div className="bg-img w-screen ">


      {/* Text Overlay */}
      <div className="absolute p-2 top-0 left-0 w-full h-full flex items-center text-white z-20">
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold mb-4 fs-primary">Book Your Place To Move On</h1>
          <p className="text-lg font-medium">You can book a place where you can conduct meet, spent time, enjoy vocation or make other things </p>

          <a href="#Explore"> <button className="px-4 m-2 btn-primary py-2 rounded-md  focus:outline-none">Explore Now</button></a>
        </div>

      {/* Div section to showing the options to choose that  */}

      </div>
    </div>
  );
};

export default HeaderBg;

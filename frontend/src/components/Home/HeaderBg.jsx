import React from 'react';

// import bg from '../../assets/bg.mp4'
import bg from '../../assets/bg.webp'

const HeaderBg = () => {
  return (
    <div className="bg-img h-[288px] w-screen overflow-hidden bg-blend-darken">
      {/* Video */}
      {/* <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 object-cover h-full w-full z-10"
      >
        <source src={bg} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      {/* <div className="bg-img"></div> */}
      {/* <img src={bg} alt="bg" /> */}

      {/* Text Overlay */}
      <div className="absolute p-2 top-0 left-0 w-full h-full flex items-center justify-center text-white z-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 fs-primary">Book Your Place To Move On</h1>
          <p className="text-lg font-medium">You can book a place where you can conduct meet, spent time, enjoy vocation or make other things </p>
         <a href="#Explore"> <button className="px-4 m-2 btn-primary py-2 rounded-md  focus:outline-none">Explore Now</button></a>
         {/* <a href="#Explore"> <button className="px-4 m-2 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Explore Now</button></a> */}
        </div>
      </div>
    </div>
  );
};

export default HeaderBg;

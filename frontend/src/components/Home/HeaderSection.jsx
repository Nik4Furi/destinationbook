import React, { useState } from 'react'
import SelectionWork from './SelectionWork';

const HeaderSection = () => {
  // eslint-disable-next-line
  const [tabsLink, setTabsLink] = useState('spaces'); //Tabs links to show data according that

  return (
    <>
      <section id="HeaderSection">


        <div className=''>

          <div className="background-container relative text-start">
            <div className="text-overlay">

              <p className="text-md text-black">Book Your Destination, We Help You To Achieve</p>

              <h1 className="text-3xl font-semibold">Search And Book Your </h1>
              {/* Wrapper text to watching typing effect  */}
              <div className="wrapper ">
                {/* <div class="static-txt">Book Your </div> */}
                <ul className="dynamic-txts text-3xl font-bold text-black fs-primary block mx-auto">
                  <li><span>MEETING ROOM</span></li>
                  <li><span>VIRTUAL OFFICE</span></li>
                  <li><span>INTERVIEW ROOM</span></li>
                  <li><span>CONFRENCE ROOM</span></li>
                </ul>


              </div>
              <p className="text-sm text-black">Booking your needed place to move on, and filling your purpose</p>

              <a href="#Explore"> <button className="btn-primary block my-2 mx-auto w-full text-xl">Explore Now!</button></a>
              {/* <p className='text-center font-medium'>We are offering the virtual spaces, offices, confrenses rooms to reserve. We are also giving other offers which is warm for you, So start to place your booking <button className="btn-secondary">NOW</button></p> */}
            </div>

            {/* Used this when typing text not selected  */}
            {/* <div className="text-overlay ">

              <p className="text-md text-black my-2">Book Your Destination, We Help You To Achieve</p>

              <h1 className="text-3xl font-semibold my-2">Search And Book Your </h1>
              
              <div className="flex items-center justify-evenly my-3">
                <button className="btn-secondary mx-2">Virtual Offices</button>
                <button className="btn-secondary mx-2">Meeting Rooms</button>
                <button className="btn-secondary mx-2">Confrenses Rooms</button>
                <button className="btn-secondary mx-2">Interview Room</button>
              </div>

              <p className="text-md">Booking your needed place to move on, and filling your purpose</p>

              <a href="#Explore"> <button className="btn-primary block my-2 mx-auto w-full text-xl">Explore Now!</button></a>
            </div> */}


            {/* Div or container to overlapping the images where we show the choosing the service what they want  */}
            <div className='bg-clip absolute top-[63%] bg-slate-50 w-[90%] min-h-[239px] mx-auto left-[5%]'>
              <h1 className="text-center fs-primary text-xl my-2">What Are You Looking For Today?</h1>
              <div className="container mx-auto my-4">
                <div className="flex items-center justify-evenly">
                  <h2 onClick={() => setTabsLink('spaces')} className={`cursor-pointer font-bold text-2xl ${tabsLink === 'spaces' ? 'tab-active text-red-400' : ''} `}>🏢 Work Spaces</h2>
                  <h2 onClick={() => setTabsLink('contactus')} className={`cursor-pointer font-bold text-2xl ${tabsLink === 'contactus' ? 'tab-active text-red-400' : ''} `}>📞 Connect For Book</h2>
                </div>
              </div>

              {/* Showing the content according to tab link  */}
              {/* Showing the option to search the work spaces  */}
              {tabsLink === 'spaces' && <div className='container mx-auto my-3'>
                <SelectionWork />

              </div>}

              {/* Showing the options to contact with us  */}
              {tabsLink === 'contactus' && <div className="container mx-auto my-3">
                {/* <ContactSection /> */}
                <h2 className="text-xl text-center text-bold my-2">Click On <a href="#Explore" className='text-red-500'>Explore Now</a> To Book Place</h2>
                <p className='text-center my-1'>After searching your place, can fill capacity according to need</p>
              </div>}

            </div>

          </div>



        </div>
      </section>

    </>
  )
}

export default HeaderSection

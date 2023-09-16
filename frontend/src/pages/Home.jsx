import React from 'react'

//Css
import '../styles/Home.modules.css'

//Components Stuff
import HeaderBg from '../components/Home/HeaderBg'
import Services from '../components/Home/Services'
import HowBookPlace from '../components/Home/HowBookPlace'
import Testimonials from '../components/Home/Testimonials'
import SearchingPlaces from '../components/Home/SearchingPlaces'
import LocationInfo from '../components/Layout/LocationInfo'
import HeaderSection from '../components/Home/HeaderSection'

const Home = () => {
  return (
    <>
      <section id="Home" className='z-[100]'>

        {/* Our header section to show video on bg  */}
        {/* <HeaderBg />  */}

        <HeaderSection />


      </section>

      {/* Services section to providing the services / choices  */}
      <section id="Services">
        <Services />
      </section>

      {/* Here we show the steps to how can book a place  */}
      <section id="HowBookPlace" className=' bg-gray-100 my-5 p-2'>
        <div className="container mx-auto my-2 ">

          <h4 className='text-sm mt-4'>We are showing the steps, how can book a place</h4>
          <h1 className="text-3xl fs-primary font-bold my-3">Watch The Stpes How Can Book Place 🎒</h1>
          <p>You can checkout the places booking procedure, so that getting the idea about how can book the places!</p>
          <HowBookPlace />
        </div>
      </section>

      {/* Section of testimonials to watch out our customers says  */}
      <section id="Testimonials" className='container mx-auto my-4 p-2'>
        <h1 className="text-2xl text-center font-bold my-2">Watch what our customers says</h1>

        <div className="grid grid-cols-2 gap-5">

          <Testimonials name={"Suyesh"} description={"I am a traveller, onces my friend is recommended me to check out this place, when I used this I realized that, What oppurturnity I always missed during my travelling, it's giving me the best choices to fit my purpose and fashion"} />
          {/* <Testimonials name={"Suyesh"} description={"I am a traveller, onces my friend is recommended me to check out this place, when I used this I realized that, What oppurturnity I always missed during my travelling, it's giving me the best choices to fit my purpose and fashion"} /> */}
          <Testimonials name={"Neha"} description={"I am doing my business trips, and during the trips, I want to enjoy the whole place, but I can't do. But after using this platform, got more time to spent with me 😇"} />

        </div>
      </section>

      {/* Accessing the location of the users  */}
      <section id="Geolocation">
        {/* <LocationInfo /> */}
      </section>

      {/* Section of our exploration spaces  */}
      <section id="Explore" className='mx-5 my-5 p-2'>
        <h4 className='text-sm mt-4'>You can explore the spaces</h4>
        <h1 className="text-3xl font-bold my-3">Explore Top Spaces 🚀</h1>

        {/* Categories section, to categorized the exploration spaces  */}
        <div className="flex items-center justify-evenly">

          {/* Searching functionality implement to searching the data of places  */}
          <SearchingPlaces />

        </div>

      </section>

    </>
  )
}

export default Home

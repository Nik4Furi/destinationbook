import React from 'react'
import HeaderBg from '../components/Home/HeaderBg'
import Services from '../components/Home/Services'
import CategoriesBtns from '../components/Home/CategoriesBtns'
import Destinations from '../components/Home/Destinations'
import Testimonials from '../components/Home/Testimonials'

const Home = () => {
  return (
    <>
      <section id="Home">

        {/* Our header section to show video on bg  */}
        {/* <HeaderBg /> */}


      </section>

      {/* Services section to providing the services / choices  */}
      <section id="Services">
        <Services />
      </section>

      {/* Section of our exploration spaces  */}
      <section id="Explore" className='mx-5 my-3'>
        <h4 className='text-sm'>You can explore the spaces</h4>
        <h1 className="text-3xl font-bold">Explore Top Spaces 🚀</h1>

        {/* Categories section, to categorized the exploration spaces  */}
        <CategoriesBtns />

        {/* Destination section to show all the destinations  */}
        <Destinations />
      </section>

      {/* Section of testimonials to watch out our customers says  */}
      <section id="Testimonials">
        <h1 className="text-2xl text-center font-bold">Watch what our customers says</h1>

        <div className="grid grid-cols-3 grid-gap-4">

          <Testimonials name={"Suyesh"} description={"I am a traveller, onces my friend is recommended me to check out this place, when I used this I realized that, What oppurturnity I always missed during my travelling, it's giving me the best choices to fit my purpose and fashion"} />
          <Testimonials name={"Suyesh"} description={"I am a traveller, onces my friend is recommended me to check out this place, when I used this I realized that, What oppurturnity I always missed during my travelling, it's giving me the best choices to fit my purpose and fashion"} />
          <Testimonials name={"Suyesh"} description={"I am a traveller, onces my friend is recommended me to check out this place, when I used this I realized that, What oppurturnity I always missed during my travelling, it's giving me the best choices to fit my purpose and fashion"} />

        </div>
      </section>

      {/* Sponser section to showing the  */}

    </>
  )
}

export default Home

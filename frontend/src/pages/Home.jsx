import React from 'react'

//Css
import '../styles/Home.modules.css'

//Components Stuff
import Services from '../components/pages/Home/Services'
import HowBookPlace from '../components/pages/Home/HowBookPlace'
import Testimonials from '../components/pages/Home/Testimonials'
import WhatsappApi from '../components/Layout/WhatsappApi'
import TransHeader from '../components/pages/Home/TransHeader'
import WhyChooseUs from '../components/pages/Home/WhyChooseUs'
import FAQs from '../components/pages/Home/FAQs'
import IdelSpaceProcedure from '../components/pages/Home/IdelSpaceProcedure/IdelSpaceProcedure'
import DestinationCard from '../components/pages/Home/DestinationCard'


//-------- Images stuff
import sponser1 from '../assets/Sponser/sponser-1.png'
import sponser2 from '../assets/Sponser/sponser-2.png'
import sponser3 from '../assets/Sponser/sponser-3.png'
import sponser4 from '../assets/Sponser/sponser-4.png'
import sponser5 from '../assets/Sponser/sponser-5.png'

import Office1 from '../assets/Home/Spaces/office-1.webp'
import Office2 from '../assets/Home/Spaces/office-2.webp'
import Office3 from '../assets/Home/Spaces/office-3.webp'
import Office4 from '../assets/Home/Spaces/office-4.webp'


const Home = () => {

  return (
    <>

      <section id="Home" className=''>

        {/* Header, have the images and trasnparent navbar  */}
        <TransHeader />
      </section>


      {/* Section for the why you need to choose us  */}
      <section id="WhyChooseUs">
        <WhyChooseUs />
      </section>


      {/* Services section to providing the services / choices  */}
      <section id="Services">
        <Services />
      </section>


      {/* Sponser section to show our details of sponsers  */}
      {/* Sponser Section to show case our sponser  */}
      <section id="Sponser" style={{ minHeight: "20vh" }}>
        <div className="container my-auto mx-auto" style={{ overflow: 'hidden' }}>
          <div className='flex items-center my-10'>
            <img src={sponser1} alt="sponser" className='animate-bounce' style={{ opacity: "0.4", maxWidth: "100px", margin: "2px 28px" }} />
            <img src={sponser3} alt="sponser" className='animate-bounce' style={{ opacity: "0.4", maxWidth: "100px", margin: "2px 28px" }} />
            <img src={sponser2} alt="sponser" className='animate-bounce' style={{ opacity: "0.4", maxWidth: "100px", margin: "2px 28px" }} />
            <img src={sponser4} alt="sponser" className='animate-bounce' style={{ opacity: "0.4", maxWidth: "100px", margin: "2px 28px" }} />
            <img src={sponser5} alt="sponser" className='animate-bounce' style={{ opacity: "0.4", maxWidth: "100px", margin: "2px 28px" }} />
            <img src={sponser3} alt="sponser" className='animate-bounce' style={{ opacity: "0.4", maxWidth: "100px", margin: "2px 28px" }} />
            <img src={sponser2} alt="sponser" className='animate-bounce' style={{ opacity: "0.4", maxWidth: "100px", margin: "2px 28px" }} />
            <img src={sponser1} alt="sponser" className='animate-bounce' style={{ opacity: "0.4", maxWidth: "100px", margin: "2px 28px" }} />
          </div>
        </div>
      </section>


      {/* Section of our exploration spaces  */}
      <section id="Explore" className='mx-5 my-5 p-2'>
        <h4 className='text-sm mt-4'>You can explore the spaces</h4>
        <h1 className="text-3xl font-bold my-3">Explore Top Spaces 🚀</h1>
        <p className="text-sm">You need to watch out these spaces which are majorly effect your purpose</p>

        {/* Categories section, to categorized the exploration spaces  */}
        <div className="grid md:grid-cols-4 gap-3 grid-cols-2">

          {/* <DestinationCard img={Office1} heading={'Virtual Office'} descripiton={"Virtually handle your meetings and other stuff"} link={} /> */}
          <DestinationCard img={Office1} heading={'Virtual Office'} descripiton={"Virtually handle your meetings"} link={`/spaces?space=virtual office`} />
          <DestinationCard img={Office2} heading={'Conferences Room'} descripiton={"Can do your confrence or discussion"} link={`/spaces?space=virtual office`} />
          <DestinationCard img={Office4} heading={'Meeting Room'} descripiton={"Build you dream in real at this space"} link={`/spaces?space=virtual office`} />
          <DestinationCard img={Office3} heading={'Interview Room'} descripiton={"Hire who one being your dream part"} link={`/spaces?space=virtual office`} />

        </div>
      </section>


      {/* Here we show the steps to how can book a place  */}
      <section id="HowBookPlace" className=' p-5'>
        <div className="container mx-auto ">

          <h4 className='text-sm mt-4'>We are showing the steps, how can book a place</h4>
          <h1 className="text-3xl fs-primary font-bold my-3">Easy 4 Steps To Book Your Idel Space 🎒</h1>
          <p>You can checkout the places booking procedure, so that getting the idea about how can book the places!</p>

        </div>

        {/* Showing the idel procedure to how booking is done  */}
        <IdelSpaceProcedure />

        {/* Showing the gifs to booking a place  */}
        <HowBookPlace />

      </section>


      {/* Section of testimonials to watch out our customers says  */}
      <section id="Testimonials" className='container mx-auto my-4 p-2'>
        <h1 className="text-2xl text-center font-bold my-2">Read, What Our Customers Says?</h1>

        <div className="grid md:grid-cols-3 gap-3 grid-cols-2">

          <Testimonials name={"Suyesh"} description={"I am a traveller, onces my friend is recommended me to check out this place, when I used this I realized that, What oppurturnity I always missed during my travelling, it's giving me the best choices to fit my purpose and fashion"} />
          <Testimonials name={"Suyesh"} description={"I am a traveller, onces my friend is recommended me to check out this place, when I used this I realized that, What oppurturnity I always missed during my travelling, it's giving me the best choices to fit my purpose and fashion"} />
          <Testimonials name={"Neha"} description={"I am doing my business trips, and during the trips, I want to enjoy the whole place, but I can't do. But after using this platform, got more time to spent with me 😇"} />

        </div>
      </section>


      {/* FAQs section to show the mostly asked questions  */}
      <section id="FAQs">
        <FAQs />
      </section>

      {/* Showing the whatsapp app link to can directly connect with us  */}
      <WhatsappApi />

    </>
  )
}

export default Home

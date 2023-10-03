import React from 'react'

import { Link } from 'react-router-dom'

//------------- Styling Stuff 
import '../styles/about.module.css';

import about from '../assets/about.jpg'
import ServiceCard from '../components/pages/Home/ServiceCard'

//-------- Images stuff
import sponser1 from '../assets/Sponser/sponser-1.png'
import sponser2 from '../assets/Sponser/sponser-2.png'
import sponser3 from '../assets/Sponser/sponser-3.png'
import sponser4 from '../assets/Sponser/sponser-4.png'
import sponser5 from '../assets/Sponser/sponser-5.png'



const About = () => {
    return (
        <>
            <section id="About">

                {/* about us header, where we tell about our products is actually provide */}
                <div className='flex' style={{ "clipPath": "polygon(0 0, 100% 0%, 87% 100%, 0% 100%)" }}>
                    <div className="mx-2 my-3 p-2">

                        <h2 className='text-2xl font-sans font-bold '><span className='text-red-400'>officelelo</span>, Book Your Space</h2>
                        <p className="mt-2">We are providing a service, help of this, users can book a place where they conduct a meet, vocation or other things, basically during booking, they provide some details about their booking, then our sponsers are processed for further steps. After that users can get the confirmation from sponser side for payment if request is processed successfully</p>
                    </div>

                    {/* Image stuff to show something about the booking */}
                    <div>
                        <img src={about} alt="about us" className='md:block hidden' style={{width:"80%"}} />
                    </div>
                </div>
            </section>

            {/* Our services section to show case our services  */}
            <section id="Services">
                <div className="container mx-auto my-2 p-2">
                    <h1 className="text-3xl font-bold text-center my-2">About Our Services</h1>
                    <p className="text-center">Want to become a sponser, can contact with us <Link to="/contact" className="text-blue-500">Here</Link> or can directly connect with social media</p>

                    {/* Card section of our services  */}
                    <div className="container my-2 mx-auto">
                        <div className="grid md:grid-cols-3 gap-4 grid-cols-2 ">
                            <ServiceCard img={"🌎"} title={"Lot Of Choices"} description={"total 400+ destination work with us"} />
                            <ServiceCard img={"🎒"} title={"Best Tour Guides"} description={"Our tour guid have 5+ expereince"} />
                            <ServiceCard img={"💳"} title={"Easy Booking"} description={"With an easy and fast ticket purchase process"} />
                        </div>
                    </div>

                </div>
            </section>

            {/* Sponser Section to show case our sponser  */}
            <section id="Sponser" style={{minHeight:"20vh"}}>
                <div className="container my-auto mx-auto" style={{overflow:'hidden'}}>
                    <div className='flex items-center my-10'>
                        <img src={sponser1} alt="sponser" className='animate-bounce' style={{opacity:"0.4",maxWidth:"100px",margin:"2px 28px"}} />
                        <img src={sponser3} alt="sponser" className='animate-bounce' style={{opacity:"0.4",maxWidth:"100px",margin:"2px 28px"}} />
                        <img src={sponser2} alt="sponser" className='animate-bounce' style={{opacity:"0.4",maxWidth:"100px",margin:"2px 28px"}} />
                        <img src={sponser4} alt="sponser" className='animate-bounce' style={{opacity:"0.4",maxWidth:"100px",margin:"2px 28px"}} />
                        <img src={sponser5} alt="sponser" className='animate-bounce' style={{opacity:"0.4",maxWidth:"100px",margin:"2px 28px"}} />
                    </div>
                </div>
            </section>


        </>
    )
}

export default About

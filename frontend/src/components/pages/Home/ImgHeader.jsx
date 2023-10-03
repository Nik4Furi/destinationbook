import React from 'react'

import { Link } from 'react-router-dom'

//Images Stuff
import demo from '../../../assets/Home/demo.jpg'
import demo1 from '../../../assets/Home/demo1.jpg'
import demo2 from '../../../assets/Home/demo3.jpg'
import Button from '../../Layout/Form/Button'

const ImgHeader = () => {
  return (
    <>
      <section className='relative md:min-h-[289px]'>

        {/* Two sides  */}
        <div className="flex items-center justify-between w-full my-6 p-2">

          <div className="container">
            {/* Left side to show the intro about our app  */}
            <div id="left" className="p-3 md:w-1/2 w-full">

              <h1 className="text-2xl mb-5 capitalize">Make your mark, with a virtual office <span className="text-highlight">embark</span>.</h1>
              <ul style={{ listStyleType: 'square' }}>
                <li>Show the spaces what we prefer <span className="text-highlight cursor-pointer">Here</span>, can choose prefer data</li>
                <li>Watch all the steps how can your booking process is done <a href='#HowBookPlace' className="text-highlight cursor-pointer">Here</a></li>
                <li>We are answering your all questions <a href='#FAQs' className="text-highlight cursor-pointer">Here</a></li>
              </ul>
              <div className="flex items-center my-3">

                <Link to={'/spaces'}> <Button title={'Explore More'} btntype='secondary' mx='4' /> </Link>
                <Link to={'/contact'}>  <Button title={'Contact US'} btntype='secondary' /></Link>
              </div>
              {/* <p className="text-md my-2"><span className="text-secondary text-purple-700">officelelo</span> is platform where you can book a place, for <span className="text-highlight">Virtual Office</span> , <span className="text-highlight">Tour</span>, <span className="text-highlight">Meeting</span>, and <span className="text-highlight">Conference</span> See the procedure, how work <a href="#HowBookPlace" className='text-slate-500'>👉 HERE</a></p>
                <p className="text-sm my-2">We are provide a better place reserving facility help to make your thing/work is done as early as possible, with better services</p>
                <p className="text-sm my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ullam cum, temporibus tempora voluptatem maiores sunt iste delectus sint optio voluptas earum mollitia magni enim quidem veritatis architecto, est voluptatum.</p>
                <a href="#Explore"><button className="btn-primary my-2">Book Now</button></a> */}
            </div>

            {/* Right Side: To show images one upon one  */}
            <div id="right" className="md:w-2/3 w-0 ">
              <div className="">
                <img src={demo} data-aos="fade-up" data-aos-duration="500" alt="demo" style={{ width: "20%", top: "-5%", right: "5%" }} className='absolute hidden md:block   rounded-md my-3' />
                <img src={demo1} data-aos="fade-up" data-aos-duration="3000" alt="demo" style={{ width: "30%", top: "22%", zIndex: 1, right: "19%" }} className='absolute border hidden md:block  border-red-300 rounded-md' />
                <img src={demo2} data-aos="fade-up" data-aos-duration="1500" alt="demo" style={{ width: "20%", top: "55%", right: "5%" }} className='absolute  hidden md:block  rounded-md' />
              </div>
            </div>


          </div>
        </div>
      </section>
    </>
  )
}

export default ImgHeader

import React from 'react'


//Images Stuff
import demo from '../../assets/Home/demo.jpg'

const WhyNeedUs = () => {
  return (
    <>
      <section>
        <div className="container mx-auto my-3 bg-ternary">

          <div className="flex items-center">

            {/* Left container to show the reason why you need to choose us  */}
            <div id='left'>
              <p className="text-sm my-2">We have better services</p>
              <h1 className="text-3xl text-highlight my-2">Why You Need To Choose US?</h1>
              <p className="text-md">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum fuga asperiores nisi doloribus rem distinctio molestias voluptatum cumque sunt magni tempore recusandae illo animi quod maxime, quam itaque vero repellat.</p>
            </div>

            {/* Right container to showing images */}
            <div id='right'>
              {/* <div className={styles.img_container}> */}
              <div className={'img_container'}>
                <img src={demo} alt="Image 1" className={'image'} />
                <img src={demo} alt="Image 1" className={'image'} />
                <img src={demo} alt="Image 1" className={'image'} />
                {/* <img src={demo} alt="Image 1" className={styles.image} />
                <img src={demo} alt="Image 1" className={styles.image} /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default WhyNeedUs

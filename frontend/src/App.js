import React, { useEffect } from 'react'


// AOS Animations Stuff
import AOS from 'aos';
import 'aos/dist/aos.css';

//Routers
import Routers from './routes/Routers';


function App() {
  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <>
      {/* Routers of the pages  */}
      <Routers />



    </>
  );
}

export default App;

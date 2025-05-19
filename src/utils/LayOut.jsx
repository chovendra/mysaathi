import React from 'react'
import NavBar from '../components/NavBar'
import Home from '../Pages/Home'
import Support_Info from '../Pages/Support_Info'
// import TextMarquee from "../components/TextMarquee";
import Cause from '../Pages/Cause';
import About from '../Pages/About';
import WallOfLove from '../Pages/WallOfLove';
import Blog from '../Pages/Blog';
import GetInTouch from '../Pages/GetInTouch';
import Footer from '../components/Footer';
import DonateFillter from '../components/DonateFillter';
import Cards from '../components/Cards';


const LayOut = () => {
  return (
    <div className='w-full bg-white'>
        {/* <NavBar /> */}

        <Home />
        
      {/* <TextMarquee /> */}
        <Support_Info />
        <DonateFillter />

        {/* <Cause /> */}
        <div className='w-full px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-[#FDF5F3]'>

        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        
        </div>
        <div className="max-w-screen-2xl mx-auto px-5 lg:px-0">
        <About />
        </div>
        <WallOfLove />
        {/* <Blog /> */}
        <GetInTouch />
        
    </div>
  )
}

export default LayOut
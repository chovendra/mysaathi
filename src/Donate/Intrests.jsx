import React from 'react'
import NavBar from '../components/NavBar'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import DonateFillter from '../components/DonateFillter'

const Donate = () => {
  return (
    <>
    <NavBar />
    <div className=''>
        <div className=" h-[60vh] relative ">
            <div
            className={`w-full h-full bg-cover bg-center`}
            style={{
                backgroundImage: `url('/images/hand.jpg')`,
                width: "100%",
                height: "100%",
                objectPosition: "center",
                objectFit: "cover",
            }}
            ></div>
            {/* <div className="absolute w-full h-full bg-black top-0 opacity-30 "></div> */}
    
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h1 className="">Home <span className="text-white"> / Find Matches</span></h1>
            <h1 className="text-6xl font-bold">Find Matches</h1>
            </div>
        </div>
        <div className=''>
  


        </div>
        <div className="w-full lg:w-[100%] h-auto lg:h-full overflow-y-auto">
        <div className="w-full h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 place-items-center">

        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        </div>
        {/* <Footer /> */}
    </div>
    </div>
    </>
  )
}

export default Donate
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
        <div className="w-full h-[55vh] relative ">
            <div
            className={`w-full h-full bg-cover bg-center`}
            style={{
                backgroundImage: `url('/HeaderImages/9.jpg')`,
                width: "100%",
                height: "100%",
                objectPosition: "center",
                objectFit: "cover",
            }}
            ></div>
            {/* <div className="absolute w-full h-full bg-black top-0 opacity-30 "></div> */}
    
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
            <h1 className="text-red-700">Home <span className="text-white"> / Donate</span></h1>
            <h1 className="text-6xl font-bold">Donate</h1>
            </div>
        </div>
        <div className=''>
        <DonateFillter />


        </div>
        <div className='lg:p-10 p-3'>

        <Cards />
        </div>
        {/* <Footer /> */}
    </div>
    </>
  )
}

export default Donate
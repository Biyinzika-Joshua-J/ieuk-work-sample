import React from 'react'
import RiverImage from '../../public/assets/river.jpg'
import Image from 'next/image'
import './discover.css'

const Discover = () => {
  return (
    <div className='w-[80%] mx-auto py-10 mt-[100px] discover'>


        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8">
        <div className="lg:grid-cols-1/2 md:grid-cols-2/2 sm:grid-cols-2/2">
            <div className=" w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
              <Image src={RiverImage} className="rounded-xl" alt="/" />
            </div>
          </div>
          <div className="col-span-1">
            <p className="text-green-500 font-bold">About Us</p>
            <h1 className="text-2xl">
                 Your Partner in Crafting Your Dream Sustainable UK Vacation
            </h1>
            <p className="py-2 text-gray-500">
            At Ecotravel, we are dedicated to curating your dream sustainable UK vacation. With our expert team and extensive network of eco-friendly accommodations, transportation options, and activities, we ensure that every aspect of your trip aligns with our commitment to environmental conservation.
            </p>
            <p className="py-2 text-gray-500">
            From carbon-neutral transportation to eco-lodges and immersive nature experiences, we offer you a seamless and unforgettable journey while minimizing your ecological footprint. Let us be your partner in creating a truly sustainable and enriching UK travel experience.
            </p>


          </div>
         
        </div>
    </div>
  )
}

export default Discover
"use client"

import React from "react";
import NavigationIcon from '@mui/icons-material/Navigation';
import Wales from '../../public/assets/wales.jpg'
import Scotloand from '../../public/assets/scotland.jpg'
import Midlands from '../../public/assets/the-midlands.jpg'

import Image from "next/image";
import Button from "../ui/Button";

const Destiny = () => {
  return (
    <div className="py-[50px]">
      <div className="text-center">
        <h1 className="text-2xl  py-6">Popular Destinations</h1>
      </div>

      <div className="w-[80%] mx-auto ">
        <div class="w-[90%] grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-8 mx-auto">
          <div class="lg:grid-cols-1/3 md:grid-cols-3/3 sm:grid-cols-3/3 bg-white shadow-md border border-gray-200 rounded-lg max-w-[20rem] dark:bg-white dark:border-gray-700">
            <a href="#">
              <Image
                class="rounded-t-lg"
                src={Wales}
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="font-bold text-1xl tracking-tight mb-2 text-black">
                  Wales
                </h5>
              </a>

              <div className="width-[90%] mx-auto flex flex-row items-center justify-between">
                    <div className="text-green-500 py-4">$459</div>
                    <div className="py-2 text-gray-400" ><NavigationIcon/> <span>1 day Journey</span></div>
              </div>
           
                
            </div>
          </div>

          <div class="lg:grid-cols-1/3 md:grid-cols-3/3 sm:grid-cols-3/3 bg-white shadow-md border border-gray-200 rounded-lg max-w-[20rem] dark:bg-white dark:border-gray-700">
            <a href="#">
              <Image
                class="rounded-t-lg"
                src={Scotloand}
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="font-bold text-1xl tracking-tight mb-2 text-black">
                  Scotland
                </h5>
              </a>

              <div className="width-[90%] mx-auto flex flex-row items-center justify-between">
                    <div className="text-green-500 py-4">$459</div>
                    <div className="py-2 text-gray-400" ><NavigationIcon/> <span>1 day Journey</span></div>
              </div>
           
                
            </div>
          </div>


          <div class="lg:grid-cols-1/3 md:grid-cols-3/3 sm:grid-cols-3/3 bg-white shadow-md border border-gray-200 rounded-lg max-w-[20rem] dark:bg-white dark:border-gray-700">
            <a href="#">
              <Image
                class="rounded-t-lg"
                src={Midlands}
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="font-bold text-1xl tracking-tight mb-2 text-black">
                  The midlands
                </h5>
              </a>

              <div className="width-[90%] mx-auto flex flex-row items-center justify-between">
                    <div className="text-green-500 py-4">$459</div>
                    <div className="py-2 text-gray-400" ><NavigationIcon/> <span>1 day Journey</span></div>
              </div>
           
                
            </div>
          </div>

        
        </div>
      </div>


      <div className="text-center mt-16">
        <Button text={'Book your ride'}/>
      </div>
    </div>
  );
};

export default Destiny;

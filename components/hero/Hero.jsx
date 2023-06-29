"use client";

import React from "react";
import "./hero.css";
import Button from "../ui/Button";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CarRentalIcon from "@mui/icons-material/CarRental";
import DiscountIcon from "@mui/icons-material/Discount";

const Hero = () => {
  return (
    <div className="w-full h-[85vh] hero mb-[100px]">
      <div className="hero-layer">
        <div className="hero-text">
          <h1 className="text-3xl font-bold text-center">
            Embark on an Eco-Friendly Adventure
          </h1>
          <p className="text-center my-2">
            Explore the UK's Hidden Gems with Electric Transport
          </p>
          <div className="my-4">
            <Button text={"Book your ride"} />
          </div>
        </div>
        <div className="w-[50%]  h-[auto] py-10 shadow-2xl rounded-lg flex flex-row items-center justify-between bg-white text-black px-4  hero-profile ">
          <div className="">
            <div className="flex flex-col items-center justify-center py-5">
              <div className="icon">
                <LocationOnIcon sx={{ color: "green" }} />
              </div>
              <div className="icon-text">Travel anywhere</div>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col items-center justify-center py-5">
              <div className="icon">
                <CarRentalIcon sx={{ color: "green" }} />
              </div>
              <div className="icon-text">Travel Sustainabily</div>
            </div>
          </div>
          <div className="">
            <div className="flex flex-col items-center justify-center py-5">
              <div className="icon">
                <DiscountIcon sx={{ color: "green" }} />
              </div>
              <div className="icon-text">Big discounts</div>
            </div>
          </div>
          <div className="">
            <Button text={'Book Your Ride'}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

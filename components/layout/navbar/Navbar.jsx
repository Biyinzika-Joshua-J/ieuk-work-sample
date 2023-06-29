"use client"

import React from 'react'
import {
    AppBar,
    Toolbar,
    Stack,
    IconButton,
    MenuItem,
    Typography,
    Box,
    Menu,
    useMediaQuery,
    useTheme,
  } from "@mui/material";
import Button from '../../ui/Button'
import DrawerComp from './Drawer';

const Navbar = () => {
    const theme = useTheme();
    const isMobileSize = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <AppBar position='static' sx={{backgroundColor:'#fff'}}>
        <Toolbar>
            <div className="w-[80%] mx-auto flex items-center justify-between">
                <div className="logo">
                    <span className="text-green-500">Eco</span>
                    <span className="text-black">Travel</span>
                </div>
                {
                    isMobileSize? <DrawerComp/>: (<><div className="w-[40%]">
                    <ul className="flex flex-row items-center justify-between text-black">
                        <li className=''>
                            <a href="#" className="">About Us</a>
                        </li>
                        <li className=''>
                            <a href="#" className="">Testimonials</a>
                        </li>
                        <li className=''>
                            <a href="#" className="">Destinations</a>
                        </li>
                        <li className=''>
                            <a href="#" className="">FAQs</a>
                        </li>
                    </ul>
                </div>

                <div className="buttons">
                    <Button text={'Book your ride'}/>
                </div></>)
                }
            </div>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar
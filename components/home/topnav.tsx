'use client'
import { useRef, useState }from 'react';
import {BinanceCoin } from 'iconsax-react'

const Topnav=()=>{

    const hamburger = useRef<HTMLDivElement>(null);
    const mobileNavBody = useRef<HTMLDivElement>(null);


    function handleHamburgerMenu(){
        hamburger.current?.classList.toggle("open");
        mobileNavBody.current?.classList.toggle("flex");
        mobileNavBody.current?.classList.toggle("hidden");  
    }



    return(
        <nav className="  px-7 md:bg-white fixed tab:static   top-0 left-0 w-full  text-black z-40">
            <div className='  shadow  md:mx-auto md:container rounded-3xl bg-bgreen'>
           
            <div className="font-semibold relative md:container px-5 md:mx-auto xl:px-10 py-4">
                {/* Flex Container */}
                <div className="flex flex-row items-center gap-30">
                    
                    {/* Hamburger Icon */}
                    <div ref={hamburger} className="flex hamburger md:hidden" onClick={handleHamburgerMenu}>
                      <span className="hamburger-top"></span>
                      <span className="hamburger-middle"></span>
                      <span className="hamburger-bottom"></span>
                   </div>

                    {/* Logo */}
                    <div className='text-white flex justify-around '>
                       <img alt="devy" src='./img/Chuks Kitchen.png' className='  '></img> <h1 className='py-5 hidden tablet:flex'></h1>
                    </div>

                    {/* Menu Item */}
                    <div className="hidden justify-between gap-36 md:flex text-center md:items-center text-black text-base">
                        <a href="/" className="hover:text-white text-[16px]  ">Home</a>
                        <a href="/" className="hover:text-white text-[16px]   ">Explore </a>
                        <a href="" className="hover:text-white min-w-20 text-[16px]   ">My Orders </a>
                        <a href="/" className="hover:text-white  text-[16px] ">Account</a>
                    </div>

                    <div>
                        <button className="border hidden md:inline bg-[#FF7A18] border text-white px-8 py-3 w-36 rounded-md">
                         <a href="signinn">Login</a>
                       </button>
                    </div>





                </div>
            </div>

 
            <div className="mobile:inline tablet:hidden">
                <div  ref={mobileNavBody} className="mx-10 relative flex-col items-start hidden py-10  font-semibold text-lg h-auto bg-bhgreen text-white z-50">
                    <div className="textReveal flex flex-col text-left items-left content-center space-y-6 text-sm justify-left font-bold">
                        <a href="/" className="text-xs">Home</a>
                        <a href="/aboutus" className="text-xs ">About  </a>
                        <a href="/" className="text-xs">FAQ</a>
                            <a href="/" className="text-xs">learns</a>
                        <a href="/contactus" className="text-xs">Contact Us</a>

                      
                    </div>                    
                </div>
            </div>

            </div>
        </nav>
    )
}

export default Topnav;
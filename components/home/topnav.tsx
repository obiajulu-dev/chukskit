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
        <nav className="  px-7 bg-white fixed tab:static   top-0 left-0 w-full  text-black z-40">
           
            <div className="font-semibold relative md:container md:px-5 md:mx-auto  py-4">
                {/* Flex Container */}
                <div className="flex flex-row items-center lg:justify-between justify-between lg:gap-30">
                    


                    {/* Logo */}
                    <div className='text-white flex justify-around '>
                       <img alt="devy" src='./img/Chuks Kitchen.png' className='  '></img> <h1 className='py-5 hidden tablet:flex'></h1>
                    </div>



                    {/* Menu Item */}
                    <div className="hidden justify-between gap-10 xl:gap-36 lg:flex text-center lg:items-center text-black text-base">
                        <a href="/" className="text-[#FF7A18] text-[16px]  ">Home</a>
                        <a href="explore" className="hover:text-white text-[16px]   ">Explore </a>
                        <a href="" className="hover:text-white min-w-20 text-[16px]   ">My Orders </a>
                        <a href="/" className="hover:text-white  text-[16px] ">Account</a>
                    </div>

                    <div>
                        <button className="border hidden lg:flex bg-[#FF7A18] text-center items-center text-white px-10 py-3 w-32 rounded-md">
                         <a href="signinn">Login</a>
                       </button>
                    </div>
                    {/* Hamburger Icon */}
                    <div ref={hamburger} className=" hamburger lg:hidden" onClick={handleHamburgerMenu}>
                      <span className="hamburger-top"></span>
                      <span className="hamburger-middle"></span>
                      <span className="hamburger-bottom"></span>
                   </div>




                </div>
            </div>

 
            <div className="inline lg:hidden">
                <div  ref={mobileNavBody} className="mx-10 relative flex-col items-start hidden py-10  font-semibold text-lg h-auto bg-bhgreen text-black z-50">
                    <div className="textReveal flex flex-col text-left items-left content-center space-y-6 text-sm justify-left font-bold">
                        <a href="/home" className="hover:text-white text-[16px]  ">Home</a>
                        <a href="/explore" className="hover:text-white text-[16px]   ">Explore </a>
                        <a href="" className="hover:text-white min-w-20 text-[16px]   ">My Orders </a>
                        <a href="/" className="hover:text-white  text-[16px] ">Account</a>

                      
                    </div>                    
                </div>
            </div>


        </nav>
    )
}

export default Topnav;
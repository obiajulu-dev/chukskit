import { Instagram, Facebook, Xrp, DocumentText, Whatsapp } from "iconsax-react";
 const Footer=()=>{
     return(
        <footer className='bg-[#5E3E26] relative z-20 '>
         <div className="md:container bg-Dark rounded-t-[100px] md:mx-auto ">
            <div className="flex justify-left flex-col text-white text-left items-left gap-6  w-full  md:gap-5">
               <div className="w-full flex-col space-y-9 md:grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-[101px] lg:justify-between p-8 text-base">
                     {/* Logo */}


                      <div className="text-left space-y-2">
                         <img alt="devy" src='./img/Chuks Kitchen.png' className='  '></img> 
                        <span className="space-y-3">
                           <p className="text-[20px]"> Bringing the authentic <br/>  flavors of Nigerian <br/>  home cooking to your <br/> table, with passion and care.</p>
                         </span>
                    </div> 

                    <div className="text-left text-[20px] space-y-2">
                        <h2 className="font-bold">Quick Links</h2>
                        <ul className="space-y-3">
                            <li className="text-[12px]">Home</li>
                            <li className="text-[12px]">Explore</li>
                            <li className="text-[12px]">My Order</li>
                            <li className="text-[12px]">Account</li>
                            <li className="text-[12px]">Contact</li>
                         </ul>
                    </div> 

                    <div className="text-left text-[20px] space-y-2">
                        <h2 className="font-bold text-[20px]">Contact Us</h2>
                        <ul className="space-y-3 flex-col flex w-full">
                            <a href="/aboutus" className="text-[12px]">+234 801 234 5678</a>
                            <a className="text-[12px]">hello@chukskitchen.com</a>
                            <a className="text-[12px]">123 Taste Blvd, Lagos, Nigeria</a>

                        </ul>
                    </div>  



                    <div className="text-left space-y-2 ">
                        <ul className="space-y-3">
                            <li >
                                <a className="flex gap-2 "> <span className="text-[12px]">Twitter</span></a>
                            </li>
            
                             <li >
                                <a className="flex gap-2 "> <span className="text-[12px]">Instagram</span></a>
                            </li>
                            
                            <li >
                                <a className="flex gap-2 "> <span className="text-[12px]">Facebook</span></a>
                            </li>

                            <li >
                                <a className="flex gap-2 "> <span className="text-[12px]">Whatsapp</span></a>
                            </li>

                        </ul>
                    </div>
                    
               </div>

                                 <div className=" px-8 pb-8 text-left">
                          <a className="text-xs md:text-xs e text-white" href=""> © 2020 Lift Media. All rights reserved.</a>
                    </div>

                 
                
            </div>

        </div>
     </footer>

         
        
     )
 }
 
 export default Footer;
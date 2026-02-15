import Link from "next/link";

const Popular=()=>{

  return(
      <section id='hero' className="  bg-[#F3F4F6] w-full h-full text-black  flex flex-col md:flex">
            
            <div className="md:mx-auto md:container space-x-5 flex justify-between ">
               <div className="relative w-full  md:block py-16">
                <h1 className="text-[32px] font-bold  text-center justify-center">Popular Categories</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 flex-wrap px-6 md:px-10 py-3">
                    <Link href='foodde'><div className="flex-col bg-white rounded-xl">
                       <div>
                           <img alt="mainimg"src="./img/rice.png" className="w-full"/>
                       </div>
                       <p className="py-10 text-center font-semibold text-[16px] lg:text-[24px] ">Jollof Delights</p>
                   </div></Link>


                    <div className="flex-col bg-white rounded-xl">
                       <div>
                           <img alt="mainimg"src="./img/swallo.png" className="w-full"/>
                       </div>
                       <p className="py-10 text-center font-semibold text-[16px] lg:text-[24px] ">Swallow & Soups</p>
                   </div>

                    <div className="flex-col bg-white rounded-xl">
                       <div>
                           <img alt="mainimg"src="./img/meat.png" className="w-full"/>
                       </div>
                       <p className="py-10 text-center font-semibold text-[16px] lg:text-[24px] ">Grills & BBQ</p>
                   </div>

                    <div className="hidden md:flex md:flex-col bg-white rounded-xl">
                       <div>
                           <img alt="mainimg"src="./img/chi.png" className="w-full"/>
                       </div>
                       <p className="py-10 text-center font-semibold text-[16px] lg:text-[24px] ">Sweet Treats</p>
                   </div>

                    <div className="hidden md:flex md:flex-col bg-white rounded-xl">
                       <div>
                           <img alt="mainimg"src="./img/egusi.png" className="w-full"/>
                       </div>
                       <p className="py-10 text-center font-semibold text-[16px] lg:text-[24px] ">Swallow & Soups</p>
                   </div>

                    <div className="hidden md:flex md:flex-col bg-white rounded-xl">
                       <div>
                           <img alt="mainimg"src="./img/rice.png" className="w-full"/>
                       </div>
                       <p className="py-10 text-center font-semibold text-[16px] lg:text-[24px] ">Jollof Delights</p>
                   </div>



                </div>


                </div>
            
               

        </div>
     </section>
  )
}

export default Popular;
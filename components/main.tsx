import { Reserve, TruckFast } from "iconsax-react";

const Main = () => {
  return (
    <section id="hero" className="min-h-screen w-full text-black ">
      
      <div className="flex-col flex md:flex-row   w-full min-h-screen    ">

        {/* LEFT IMAGE */}
        <div className="relative w-1/2 hidden md:block">
          <img
            alt="mainimg"
            src="./img/main.png"
            className="object-cover w-full h-screen"
          />
        </div>

         <div className="relative w-full inline md:hidden  ">
          <img
            alt="mainimg"
            src="./img/main mo.png"
            className=" w-full "
          />
        </div>
            <div  className="flex justify-end p-3">
            <button className="border md:hidden w-32 inline border-[#1E88E5] text-[#1E88E5] px-8 py-3 rounded-xl">
               <a href="signinn">Sign in</a>
            </button>
            </div>

        {/* RIGHT CONTENT */}
        <div className="w-full md:w-1/2 flex flex-col justify-between px-3 mb:px-0 py-6">

          {/* Constrained content wrapper */}
          <div className="w-full md:container md:mx-auto md:px-28 flex flex-col h-full justify-between">

            {/* Top Nav */}
            <div className="flex justify-center md:justify-between items-center">
              <img
                alt="logo"
                src="./img/Chuks Kitchen.png"
                className="h-10 w-auto"
              />

              <button className="border hidden md:inline border-[#1E88E5] text-[#1E88E5] px-8 py-3 rounded-md">
                <a href="signinn">Sign in</a>
              </button>
            </div>

            {/* Middle Content */}
            <div className="flex flex-col gap-5 my-10 mx-1">
              <h1 className="text-[35px] font-bold">
                Your Authentic Taste of Nigeria
              </h1>

              <p>
                Experience homemade flavors delivered fresh to your desk or home.
                We bring the rich culinary heritage of Nigeria right to your doorstep.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-wrap">
                 <div className="flex items-start gap-1 p-1 bg-[#F3F4F6] md:bg-white rounded-md">
                    <div className="bg-orange-100 p-3 items-center  rounded-xl">
                        <Reserve size="20" color="#FF8A65" className=""/>
                    </div>
                    <div className="p-3 text-base font-semibold ">
                          <p>Freshly Prepared</p>
                    </div>
                 </div>

                 <div className="flex items-start gap-1 p-1 bg-[#F3F4F6] md:bg-white min-w-70 rounded-md">
                    <div className="bg-orange-100 p-3 items-center  rounded-xl">
                        <Reserve size="20" color="#FF8A65" className=""/>
                    </div>
                    <div className="p-3 font-semibold">
                          <p>Support Local Business</p>
                    </div>
                 </div>

                 <div className="flex items-start gap-1 p-1 bg-[#F3F4F6] md:bg-white min-w-70 rounded-md">
                    <div className="bg-orange-100 p-3 items-center rounded-xl">
                        <TruckFast size="20" color="#FF8A65" className=""/>
                    </div>
                    <div className="p-3 font-semibold">
                          <p>Fast & Reliable Delivery</p>
                    </div>
                 </div>
                   
              </div>

              <div className="flex flex-col gap-4">
                <button className="bg-[#FF7A18] py-3 rounded-2xl text-white font-semibold">
                <a href="Signinn">  Start Your Order</a>
                </button>

                <button className="border border-[#1E88E5] py-3 rounded-2xl text-[#1E88E5] font-semibold">
                  Learn More About Us
                </button>
              </div>
            </div>

            {/* Footer */}
            <div className="text-sm gap-5 hidden md:flex justify-center text-center text-gray-500">
              <p>2024 Chucks Kitchen</p> 
              <a className="text-[#1E88E5]">Privacy Policy</a>
              <a className="text-[#1E88E5]">Terms of Services</a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Main;

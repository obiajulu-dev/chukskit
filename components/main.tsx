import { Reserve, TruckFast } from "iconsax-react";

const Main = () => {
  return (
    <section id="hero" className="min-h-screen w-full text-black ">
      
      <div className="flex w-full min-h-screen    ">

        {/* LEFT IMAGE */}
        <div className="relative w-1/2 hidden md:block">
          <img
            alt="mainimg"
            src="./img/main.png"
            className="object-cover w-full h-screen"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full md:w-1/2 flex flex-col justify-between py-6">

          {/* Constrained content wrapper */}
          <div className="w-full md:container md:mx-auto md:px-28 flex flex-col h-full justify-between">

            {/* Top Nav */}
            <div className="flex justify-between items-center">
              <img
                alt="logo"
                src="./img/Chuks Kitchen.png"
                className="h-10 w-auto"
              />

              <button className="border border-[#1E88E5] text-[#1E88E5] px-6 py-2 rounded-md">
                Sign in
              </button>
            </div>

            {/* Middle Content */}
            <div className="flex flex-col gap-5 my-10">
              <h1 className="text-4xl font-bold">
                Your Authentic Taste of Nigeria
              </h1>

              <p>
                Experience homemade flavors delivered fresh to your desk or home.<br/>
                We bring the rich culinary heritage of Nigeria right to your doorstep.
              </p>

              <div className="flex gap-4 flex-wrap">
                 <div className="flex gap-1">
                    <div className="bg-orange-100 p-3  rounded-xl">
                        <Reserve size="20" color="#FF8A65" className=""/>
                    </div>
                    <div className="p-3 text-">
                          <p>Freshly Prepared</p>
                    </div>
                 </div>

                 <div className="flex gap-1">
                    <div className="bg-orange-100 p-3  rounded-xl">
                        <Reserve size="20" color="#FF8A65" className=""/>
                    </div>
                    <div className="p-3">
                          <p>Freshly Prepared</p>
                    </div>
                 </div>

                 <div className="flex gap-1">
                    <div className="bg-orange-100 p-3  rounded-xl">
                        <TruckFast size="20" color="#FF8A65" className=""/>
                    </div>
                    <div className="p-3">
                          <p>Freshly Prepared</p>
                    </div>
                 </div>
                   
              </div>

              <div className="flex flex-col gap-4">
                <button className="bg-[#FF7A18] py-3 rounded-2xl text-white font-semibold">
                  Start Your Order
                </button>

                <button className="border border-[#1E88E5] py-3 rounded-2xl text-[#1E88E5] font-semibold">
                  Learn More About Us
                </button>
              </div>
            </div>

            {/* Footer */}
            <div className="text-sm gap-5 flex justify-center text-center text-gray-500">
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

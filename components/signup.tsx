import { Reserve, TruckFast } from "iconsax-react";

const Signup = () => {
  return (
    <section id="signup" className="min-h-screen w-full text-black ">
      
      <div className="flex-col flex md:flex-row   w-full min-h-screen    ">

        {/* LEFT IMAGE */}
        <div className="relative w-1/2 hidden md:block">
          <img
            alt="mainimg"
            src="./img/main.png"
            className="absolute inset-0 object-cover w-full h-fit"
          />

          <div className="absolute inset-0 bg-[#FF7A18B2] opacity-70"></div>

          <div className="relative z-10 flex flex-col items-center justify-center gap-5 my-10 mx-1 h-full">
            <div className="max-w-md px-12 text-white text-center">
                <h1 className="text-3xl font-bold text-white">Chuks Kitchen</h1>
                <p className="text-[19px] font-semibold leading-relax text-white">Your journey to delicious, authentic Nigerian meals starts here. Sign up or log in to order your favorites today!</p>
            </div>
          </div>
        </div>



        {/* RIGHT CONTENT */}
        <div className="w-full md:w-1/2 flex flex-col  md:container justify-between px-3 bg-[#F3F4F6] mb:px-0 py-10">

          {/* Constrained content wrapper */}
             <div className="w-full md:mx-auto md:px-28 flex flex-col gap-5 h-screen justify-center">

            {/* Top Nav */}
            <div className="flex-col flex justify-center md:justify-center items-center">
              <img
                alt="logo"
                src="./img/Chuks Kitchen.png"
                className="h-10 w-auto"
              />
              <p className="text-[24px] text-center font-semibold">Create your Account </p>

            </div>

             <div className='flex-col flex gap-5'>
                    <div className="w-full  flex flex-col mb-1">
                        <h1 className='text-[14px] font-semibold mb-2'>Email</h1>
                        <div className='border  rounded-md px-6 py-3 tablet:px-2 tablet:py-2'>
                            <input
                            type="email"
                            placeholder="Enter your email" 
                            required                                                                                                                                              
                            className="w-full text-black text-sm outline-none" />
                        </div>
                    </div>

                    <div className="w-full  flex flex-col mb-1">
                        <h1 className='text-[14px] font-semibold mb-2'> Phone number</h1>
                        <div className='border  rounded-md px-6 py-3 tablet:px-2 tablet:py-2'>
                            <input
                            type="tel"
                            placeholder="Enter your phone number" 
                            required                                                                                                                                              
                            className="w-full text-black text-sm outline-none" />
                        </div>
                    </div>

                     <div className="w-full flex flex-col mb-1">
                        <h1 className='text-[14px] font-semibold mb-2'>Password</h1>
                       <div className='border rounded-md px-6 py-3 tablet:px-2 tablet:py-2 '>    
                       <input
                        type="password"
                        placeholder="Enter your password" 
                        required
                        className="w-full text-black text-sm outline-none" />
                       </div>
                    </div>

                     <div className="w-full flex flex-col mb-1">
                        <h1 className='text-[14px] font-semibold mb-2'>Confirm Password</h1>
                       <div className='border rounded-md px-6 py-3 tablet:px-2 tablet:py-2 '>    
                       <input
                        type="password"
                        placeholder="Confirm your password" 
                        required
                        className="w-full text-black text-sm outline-none" />
                       </div>
                    </div>

                    <div className="items-center text-[12px] flex space-x-2">
                      <input type="checkbox" id="terms" className="w-4 h-4 border-gray-300 rounded-sm blue outline-none "/>
                        <label htmlFor="terms" className="sm flex gap-1 text-gray-500">I agree to the <p className="text-[#1C7FF9]"> terms & conditions </p> and <p className="text-[#1C7FF9]">Privacy Policy</p></label>
                        
                    </div>
            </div>

            <div>
                    <div className="w-full flex flex-col pb-2 ">
                        <button  className="w-full bg-[#FF7A18] rounded-md p-3 text-center flex items-center justify-center text-white">
                           <a href='/signinn' className='text-[16px]'>Continue </a>
                        </button>
                        <p className="text-[12px] text-center mt-2">or continue with</p>
                    </div>

            </div>

            <div>
                    <div className="w-full flex flex-col gap-3 ">
                        <button  className="w-full bg-[white]  rounded-md p-1 text-center flex items-center justify-center text-black">
                           <a href='' className='text-sm'> Continue with Google </a>
                        </button>
                        <button  className="w-full bg-[white]  rounded-md p-1 text-center flex items-center justify-center text-black">
                           <a href='' className='text-sm'> Continue with Facebook </a>
                        </button>
                    </div>
            </div>

            
                 <div className="w-full flex pb-4 items-center justify-center">
                    <p className="text-[12px] text-black font-normal ">Aleady have an account? </p>
                    <a href="signinn"className=" text-[12px] font-semibold text-[#1C7FF9]">Sign in </a>
                </div>
            
 


        
          
         </div>
                   
        </div>

      </div>
    </section>
  );
};

export default Signup;

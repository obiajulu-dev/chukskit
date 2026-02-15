import { Reserve, TruckFast } from "iconsax-react";

const Foodde = () => {
  return (
    <section id="hero" className="min-h-screen w-full text-black">
      <div className="flex-col flex md:flex-row w-full min-h-screen">
        {/* LEFT IMAGE */}
        <div className="relative md:w-1/2 w-full h-[300px] md:h-auto flex md:block">
          <img
            alt="mainimg"
            src="./img/foodde.png"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full md:w-1/2 flex flex-col justify-between px-3 md:bg-[#F3F4F6] bg-white xl:px-28 md:py-8 py-6">
          {/* Constrained content wrapper */}
          <div className="w-full md:container md:mx-auto lg:px-10 px-5 flex flex-col bg-white gap-5 h-full py-10 xl:py-16 xl:justify-center max-w-md max-h-[90vh] xl:max-h-full overflow-y-auto xl:overflow-y-hidden ">
            <div>
              <h1 className="lg:text-[32px] text-[20px] font-bold">Jollof Rice with Fried Chicken</h1>
              <p className="lg:text-[24px] text-[17px] text-[#FF7A18]">₦2,800</p>
              <p className="lg:text-[16px] text-[12px]">
                Our signature Jollof rice, cooked to perfection with aromatic spices, served with juicy, golden-fried chicken. A classic Nigerian comfort food, rich in flavor and satisfying. Perfect for a quick lunch or a hearty dinner.
              </p>
            </div>

            <div className="flex-col flex gap-3">
              <h1 className="lg:text-[24px] text-[20px] font-medium">Choose Your Protein</h1>
              <div className="items-center text-[12px] flex space-x-2 border p-2 rounded-md">
                <input
                  type="checkbox"
                  id="protein1"
                  className="lg:w-8 lg:h-8 h-4 w-4 border-[#FF7A18] rounded-full outline-none"
                />
                <label htmlFor="protein1" className="text-[16px] flex gap-1 text-black">
                  Fried Chicken
                </label>
              </div>

              <div className="items-center text-[12px] flex space-x-2 border p-2 rounded-md">
                <input
                  type="checkbox"
                  id="protein2"
                  className="lg:w-8 lg:h-8 w-4 h-4 border-[#FF7A18] rounded-full outline-none"
                />
                <label htmlFor="protein2" className="text-[16px] flex gap-1 text-black">
                  Grilled Fish
                </label>
              </div>

              <div className="items-center text-[12px] flex space-x-2 border p-2 rounded-md">
                <input
                  type="checkbox"
                  id="protein3"
                  className="lg:w-8 lg:h-8 h-4 w-4 border-[#FF7A18] rounded-full outline-none"
                />
                <label htmlFor="protein3" className="text-[16px] flex gap-1 text-black">
                  Beef
                </label>
              </div>
            </div>

            <div className="flex-col flex gap-3">
              <h1 className="lg:text-[24px] text-[20px] font-medium">Extra Side (Optional)</h1>
              <div className="items-center text-[12px] flex space-x-2 border p-2 rounded-md">
                <input
                  type="checkbox"
                  id="side1"
                  className="lg:w-8 lg:h-8 h-4 w-4 border-gray-300 rounded-3xl outline-none"
                />
                <label htmlFor="side1" className="text-[16px] flex gap-1 text-black">
                  Extra Pepper Sauce
                </label>
              </div>

              <div className="items-center text-[12px] flex space-x-2 border p-2 rounded-md">
                <input
                  type="checkbox"
                  id="side2"
                  className=" lg:w-8 lg:h-8 w-4 h-4 border-gray-300 rounded-3xl outline-none"
                />
                <label htmlFor="side2" className="text-[16px] flex gap-1 text-black">
                  Extra Pepper Sauce
                </label>
              </div>

              <div className="items-center text-[12px] flex space-x-2 border p-2 rounded-md">
                <input
                  type="checkbox"
                  id="side3"
                  className="lg:w-8 lg:h-8 h-4 w-4 border-gray-300 rounded-3xl outline-none"
                />
                <label htmlFor="side3" className="text-[16px] flex gap-1 text-black">
                  Extra Pepper Sauce
                </label>
              </div>
            </div>

            <div className='flex flex-col gap-3'>
              <h1 className="lg:text-[24px] text-[20px] font-medium">Special Instructions</h1>
              <textarea
                name="message"
                placeholder="E.g no onion, food is too spicy, food is too hot, food is tasty"
                required
                rows={5}
                className="w-full text-black bg-white tablet:text-base outline-none focus:ring-2 focus:ring-primary transition-all resize-none border-primary border p-2 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Foodde;
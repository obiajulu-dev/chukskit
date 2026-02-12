const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full h-screen text-white mobile:hidden tablet:flex"
    >
      {/* Background Image */}
      <img
        src="./img/hero.png"
        alt="mainimg"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 container mx-auto h-full flex items-center px-12">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-4xl font-bold">
            The Heart of Nigerian Home <br /> Cooking
          </h1>

          <p className="text-xl font-semibold">
            Handcrafted with passion, delivered with care.
          </p>

          <button className="bg-[#FF7A18] px-8 py-3 rounded-md text-sm font-semibold">
            Discover What's New
          </button>
        </div>
      </div>

      {/*  FLOATING SEARCH  */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-full max-w-2xl px-4 z-20">
        <div className="bg-white border-2 border-emerald-500 rounded-md shadow-2xl flex items-center px-4 py-4">
          
          <svg
            className="w-5 h-5 text-gray-400 mr-3"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m1.6-5.4a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>

          <input
            type="text"
            placeholder="What are you craving for today?"
            className="w-full outline-none text-gray-700 placeholder-gray-400"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

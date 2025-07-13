const Hero = () => {
  return (
    <section className="w-full bg-gradient-to-r from-gray-100 to-[#f4f4fc] py-24 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">Toma Ilčić</h1>
        <p className="text-xl text-gray-600 mb-8">
          Aspiring Developer & Problem Solver
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="#about"
            className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-blue-600 hover:text-white transition"
          >
            Learn More About Me
          </a>

          <a
            href="#connect"
            className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-blue-600 hover:text-white transition"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

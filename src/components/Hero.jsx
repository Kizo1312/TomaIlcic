const Hero = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#f7f8fc] to-[#f4f5fb] py-24">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          Toma Ilčić
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Aspiring Developer & Problem Solver
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="#about"
            className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Learn More About Me
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-md font-semibold hover:bg-blue-600 hover:text-white transition"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

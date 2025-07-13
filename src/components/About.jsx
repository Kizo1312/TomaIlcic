const About = () => {
  return (
    <section
      id="about"
      className="bg-[#f7f9fc] py-24 px-4 flex flex-col items-center"
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-2">About Me</h2>
      <div className="h-1 w-16 bg-blue-600 rounded-full mb-8"></div>

      <div className="bg-white shadow-md rounded-lg p-8 max-w-2xl text-center text-gray-700 leading-relaxed">
        <p>
          Hi, I'm{" "}
          <span className="text-blue-600 font-semibold">Toma Ilčić</span> — an
          aspiring developer with a passion for clean code, problem-solving, and
          continuous learning. I enjoy building web applications and working
          across both frontend and backend technologies. My goal is to create
          meaningful solutions that make a positive impact while constantly
          expanding my technical expertise.
        </p>
      </div>
    </section>
  );
};

export default About;

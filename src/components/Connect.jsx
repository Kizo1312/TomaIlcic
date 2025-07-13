import { FaGithub, FaEnvelope } from "react-icons/fa";

const Connect = () => {
  return (
    <section
      id="connect"
      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-4 text-center"
    >
      <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
      <div className="w-20 h-1 mx-auto bg-white mb-6"></div>
      <p className="text-lg mb-8 max-w-xl mx-auto">
        I'm always interested in new opportunities and collaborations. Feel free
        to reach out if you'd like to work together!
      </p>

      <div className="flex justify-center gap-4 flex-wrap">
        <a
          href="mailto:toma.ilcic@gmail.com"
          className="flex items-center gap-2 border border-white px-6 py-3 rounded-md hover:bg-white hover:text-blue-600 transition"
        >
          <FaEnvelope />
          toma.ilcic@gmail.com
        </a>

        <a
          href="https://github.com/Kizo1312"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border border-white px-6 py-3 rounded-md hover:bg-white hover:text-blue-600 transition"
        >
          <FaGithub />
          GitHub Profile
        </a>
      </div>
    </section>
  );
};

export default Connect;

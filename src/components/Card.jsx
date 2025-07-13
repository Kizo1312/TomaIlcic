import { ExternalLink, Github } from "lucide-react";

const Card = ({ name, description, techs, demoLink, codeLink }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-sm flex flex-col justify-between hover:shadow-lg transition">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{name}</h3>
        <p className="text-sm text-gray-600 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {techs.map((tech, i) => (
            <span
              key={i}
              className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="flex gap-4 mt-auto">
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition"
        >
          <ExternalLink size={16} />
          Live Demo
        </a>
        <a
          href={codeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition"
        >
          <Github size={16} />
          Code
        </a>
      </div>
    </div>
  );
};

export default Card;

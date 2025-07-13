import { Code2, Database, GitFork, Globe } from "lucide-react"; // uses lucide-react for icons

const techs = [
  {
    label: "JavaScript (React)",
    icon: <Code2 className="text-blue-500 w-8 h-8" />,
    badge: "bg-yellow-100 text-yellow-800",
  },
  {
    label: "TypeScript",
    icon: <Code2 className="text-blue-500 w-8 h-8" />,
    badge: "bg-blue-100 text-blue-700",
  },
  {
    label: "Python (Flask)",
    icon: <Code2 className="text-blue-500 w-8 h-8" />,
    badge: "bg-green-100 text-green-700",
  },
  {
    label: "SQL (PostgreSQL)",
    icon: <Database className="text-blue-500 w-8 h-8" />,
    badge: "bg-purple-100 text-purple-700",
  },
  {
    label: "Git & GitHub",
    icon: <GitFork className="text-blue-500 w-8 h-8" />,
    badge: "bg-gray-100 text-gray-700",
  },
  {
    label: "HTML & CSS",
    icon: <Globe className="text-blue-500 w-8 h-8" />,
    badge: "bg-orange-100 text-orange-700",
  },
];

const Technologies = () => {
  return (
    <section className="py-24 px-4 bg-white text-center" id="technologies">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">
        Technologies I Work With
      </h2>
      <div className="h-1 w-24 bg-blue-600 mx-auto mb-12 rounded-full"></div>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {techs.map((tech, i) => (
          <div
            key={i}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center space-y-4 hover:shadow-lg transition"
          >
            {tech.icon}
            <span
              className={`text-sm font-semibold px-3 py-1 rounded-full ${tech.badge}`}
            >
              {tech.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;

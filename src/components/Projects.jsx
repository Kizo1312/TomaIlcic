import { useState } from "react";
import Card from "./Card";

const Projects = () => {
  const [projectList] = useState([
    {
      name: "Golf Reservation Site",
      description:
        "A web app for making golf course reservations and managing services via an admin panel.",
      techs: ["React", "Tailwind", "Flask", "PostgreSQL"],
      demoLink: "https://demo1.com",
      codeLink: "https://github.com/Kizo1312/GolfResort",
    },
    {
      name: "Varaždin Chamber Orchestra Website",
      description:
        "A public-facing website for a classical music orchestra, featuring concert announcements and admin content editing.",
      techs: ["React", "Flask", "Marshmallow", "JWT"],
      demoLink: "https://demo2.com",
      codeLink: "https://github.com/your-repo2",
    },
    {
      name: "Personal Portfolio",
      description:
        "A clean and elegant personal website showcasing projects, skills, and a downloadable CV.",
      techs: ["React", "Tailwind", "Vite"],
      demoLink: "https://demo3.com",
      codeLink: "https://github.com/Kizo1312/TomaIlcic",
    },
  ]);

  return (
    <section id="projects" className="bg-[#f6f9fe] py-24 px-4">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
        Projects
      </h2>
      <div className="h-1 w-24 bg-blue-600 mx-auto mb-12 rounded-full"></div>

      <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projectList.map((project, index) => (
          <Card
            key={index}
            name={project.name}
            description={project.description}
            techs={project.techs}
            demoLink={project.demoLink}
            codeLink={project.codeLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;

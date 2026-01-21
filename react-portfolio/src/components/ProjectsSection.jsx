import { Github, Sparkles } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Personal Portfolio",
    description:
      "My personal portfolio website built using React and Tailwind CSS.",
    image: "/projects/portfolio.png",
    tags: ["React", "Tailwind"],
    githubUrl: "https://github.com/sohelkhan006",
  },
  {
    id: 2,
    title: "Todo App",
    description:
      "A simple todo application with add, delete and complete features.",
    image: "/projects/todo.png",
    tags: ["React", "JavaScript"],
    githubUrl: "https://github.com/sohelkhan006",
  },
  {
    id: 3,
    title: "Weather App",
    description:
      "Weather app that fetches real-time data using a public API.",
    image: "/projects/weather.png",
    tags: ["JavaScript", "API"],
    githubUrl: "https://github.com/sohelkhan006",
  },
  {
    id: 4,
    title: "Landing Page",
    description:
      "Responsive landing page built using modern HTML and CSS.",
    image: "/projects/landing.png",
    tags: ["HTML", "CSS"],
    githubUrl: "https://github.com/sohelkhan006",
  },
];

export const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section
      id="projects"
      className="py-12 px-4 bg-linear-to-br from-background to-primary/5"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary mb-2 text-sm">
            <Sparkles size={14} />
            Projects
          </div>
          <h2 className="text-3xl font-bold mb-1">My Work</h2>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            Some projects I’ve built while learning frontend development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visibleProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-36 w-full object-cover"
              />

              <div className="p-4">
                <h3 className="text-base font-semibold mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Code Button */}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2 rounded-md border text-sm hover:bg-primary hover:text-primary-foreground transition"
                >
                  <Github size={14} />
                  View Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More */}
        {projects.length > 3 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 rounded-lg bg-primary text-primary-foreground text-sm"
            >
              {showAll ? "Show Less" : "View More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

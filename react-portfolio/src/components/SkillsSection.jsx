import { useState } from "react";
import { motion } from "framer-motion";

import htmlIcon from "../assets/icons/html.png";
import cssIcon from "../assets/icons/css.png";
import jsIcon from "../assets/icons/javascript.png";
import reactIcon from "../assets/icons/react.png";
import tailwindIcon from "../assets/icons/css.png";

import nodeIcon from "../assets/icons/nodejs.png";
import expressIcon from "../assets/icons/express.png";
import MongoDb from "../assets/icons/mongodb.png";
import SQL from "../assets/icons/sql.png";

import gitIcon from "../assets/icons/git.png";
import githubIcon from "../assets/icons/github.png";
import vscodeIcon from "../assets/icons/vscode.png";
import postmanIcon from "../assets/icons/postman.png";
import netlifyIcon from "../assets/icons/netlify.png";
import vercelIcon from "../assets/icons/vercel.png";

const skills = [
  { name: "HTML5", category: "frontend", icon: htmlIcon },
  { name: "CSS3", category: "frontend", icon: cssIcon },
  { name: "JavaScript", category: "frontend", icon: jsIcon },
  { name: "React", category: "frontend", icon: reactIcon },
  { name: "Tailwind CSS", category: "frontend", icon: tailwindIcon },

  { name: "Node.js", category: "backend", icon: nodeIcon },
  { name: "Express.js", category: "backend", icon: expressIcon },
  { name: "MongoDB", category: "backend", icon: MongoDb },
  { name: "SQL", category: "backend", icon: SQL },

  { name: "Git", category: "tools", icon: gitIcon },
  { name: "GitHub", category: "tools", icon: githubIcon },
  { name: "VS Code", category: "tools", icon: vscodeIcon },
  { name: "Postman", category: "tools", icon: postmanIcon },
  { name: "Netlify", category: "tools", icon: netlifyIcon },
  { name: "Vercel", category: "tools", icon: vercelIcon },
];

const categories = [
  { id: "all", label: "All" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "tools", label: "Tools" },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section
      id="skills"
      className="py-12 md:py-14 px-4 bg-linear-to-br from-background to-primary/5"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Skills</h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
            Technologies I use to build modern and scalable web applications.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-background border-border text-muted-foreground hover:border-primary"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills Grid (VISIBLE IMMEDIATELY) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.name}
              whileHover={{ y: -4, scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="bg-card border border-border rounded-lg p-4 text-center hover:border-primary transition"
            >
              <div className="flex justify-center mb-2">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-9 h-9 object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xs font-semibold">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

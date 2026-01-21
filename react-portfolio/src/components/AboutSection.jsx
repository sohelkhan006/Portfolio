import React, { useState } from "react";
import {
  User,
  Briefcase,
  Calendar,
  Code,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("personal");

  /* ===== Achievements (CGPA REMOVED) ===== */
  const achievements = [
    {
      number: "3+",
      label: "Projects",
      icon: <Briefcase className="w-5 h-5" />,
    },
    {
      number: "1",
      label: "Internship",
      icon: <Calendar className="w-5 h-5" />,
    },
    {
      number: "100%",
      label: "Learning",
      icon: <User className="w-5 h-5" />,
    },
  ];

  /* ===== Tech Stack ===== */
  const techStack = [
    {
      category: "Frontend",
      items: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Bootstrap"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "Java"],
    },
    {
      category: "Database & Tools",
      items: ["MongoDB", "SQL", "Git", "GitHub", "Vite", "Postman"],
    },
  ];

  /* ===== About Content ===== */
  const tabContent = {
    personal:
      "I am a creative and detail-oriented Frontend Developer with a strong foundation in HTML, CSS, JavaScript, and React. I enjoy building responsive, user-friendly web interfaces and continuously improving my skills.",
    professional:
      "I completed a Java Programming Internship at CODTECH IT Solutions, where I worked with core Java concepts, APIs, and problem-solving tasks. I regularly build frontend projects to strengthen my practical knowledge.",
    approach:
      "I believe in writing clean, maintainable code and focusing on user experience. I enjoy learning new technologies, following best practices, and improving step by step as a developer.",
  };

  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* ===== Header ===== */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary mb-4">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Sohel Mehmood Khan
          </h2>
          <p className="text-lg text-muted-foreground">
            Frontend Developer | Aspiring Full Stack Developer
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* ===== Left Content ===== */}
          <div className="lg:col-span-2 space-y-10">
            {/* Profile Card */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Profile Image */}
                <div className="w-32 h-32 rounded-xl overflow-hidden border">
                  <img
                    src="/profile-logo.png"
                    alt="Sohel Khan"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold">Sohel Mehmood Khan</h3>
                  <p className="text-primary font-semibold mb-4">
                    Frontend Developer
                  </p>

                  <div className="grid grid-cols-3 gap-4">
                    {achievements.map((item, index) => (
                      <div
                        key={index}
                        className="p-4 rounded-xl border bg-background text-center"
                      >
                        <div className="flex justify-center mb-2 text-primary">
                          {item.icon}
                        </div>
                        <div className="font-bold">{item.number}</div>
                        <div className="text-sm text-muted-foreground">
                          {item.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex border-b mt-10">
                {["personal", "professional", "approach"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex-1 py-3 font-medium capitalize ${
                      activeTab === tab
                        ? "text-primary border-b-2 border-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="mt-6 min-h-30">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="text-muted-foreground leading-relaxed"
                  >
                    {tabContent[activeTab]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Code className="text-primary" />
                Tech Stack
              </h3>

              <div className="grid md:grid-cols-3 gap-6">
                {techStack.map((stack, index) => (
                  <div
                    key={index}
                    className="border rounded-xl p-6 bg-background"
                  >
                    <h4 className="font-semibold mb-3">{stack.category}</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {stack.items.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ===== Right Sidebar ===== */}
          <div className="space-y-8">
            <div className="bg-card border border-border rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold mb-4">Let’s Connect</h3>

              <div className="flex justify-center gap-4">
                <a
                  href="https://github.com/sohelkhan006"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github className="w-6 h-6 hover:text-primary" />
                </a>
                <a
                  href="https://www.linkedin.com/in/khansohel0604"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin className="w-6 h-6 hover:text-primary" />
                </a>
                <a href="mailto:sohelkhan060404@gmail.com">
                  <Mail className="w-6 h-6 hover:text-primary" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

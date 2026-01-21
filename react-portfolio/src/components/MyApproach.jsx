import { Code, Lightbulb, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const MyApproach = () => {
  const approaches = [
    {
      icon: <Lightbulb className="h-6 w-6 text-primary" />,
      title: "Understand the Problem",
      description:
        "I start by clearly understanding the project requirements and user needs before writing any code.",
    },
    {
      icon: <Code className="h-6 w-6 text-primary" />,
      title: "Build Clean & Responsive UI",
      description:
        "I focus on writing clean, readable code and building responsive user interfaces using modern frontend tools.",
    },
    {
      icon: <Rocket className="h-6 w-6 text-primary" />,
      title: "Improve & Learn Continuously",
      description:
        "I test, refine, and improve my projects while continuously learning new technologies and best practices.",
    },
  ];

  return (
    <section id="approach" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary mb-4">
            My Approach
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            How I Work
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A simple and practical approach I follow while building frontend
            projects.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {approaches.map((item, index) => (
            <motion.div
              key={index}
              className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/40 transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyApproach;

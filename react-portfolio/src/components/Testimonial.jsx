"use client";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

export const TestimonialSection = () => {
  const testimonials = [
    {
      name: "College Teammate",
      role: "Project Collaborator",
      content:
        "Sohel is very dedicated and always focuses on writing clean and maintainable code. He actively participates in discussions and contributes meaningful ideas to the project.",
      rating: 5,
    },
    {
      name: "Internship Mentor",
      role: "Java Intern",
      content:
        "Sohel showed strong fundamentals in Java during his internship. He was quick to learn, open to feedback, and consistently improved his code quality.",
      rating: 3.9,
    },
    {
      name: "teaammate Developer",
      role: "Frontend Learner",
      content:
        "Working with Sohel was a great experience. He communicates clearly, shares knowledge, and is always willing to help debug and improve features together.",
      rating: 4,
    },
    {
      name: "Project Reviewer",
      role: "Senior Student",
      content:
        "His projects are well-structured and visually clean. You can clearly see his growth as a frontend developer through consistent practice.",
      rating: 4,
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-20 px-4 bg-linear-to-b from-background to-primary/5"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary mb-4">
            Feedback
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            What People Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Feedback from people I’ve worked and learned with.
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-all duration-300"
            >
              <Quote className="h-8 w-8 text-primary/30 mb-4" />

              <p className="text-muted-foreground mb-6">
                "{item.content}"
              </p>

              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < item.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>

              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-muted-foreground">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

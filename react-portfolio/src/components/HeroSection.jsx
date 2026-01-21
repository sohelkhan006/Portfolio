import {
  ArrowDown,
  MousePointerClick,
  Code,
  Award,
  Download,
  Shield,
  Zap,
  TrendingUp,
  Briefcase,
  Mail,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [currentCodeLine, setCurrentCodeLine] = useState(0);
  const [displayedCode, setDisplayedCode] = useState("");

  /* ===== Code Snippet (UPDATED) ===== */
  const codeSnippets = [
    "import { FrontendDeveloper } from 'sohel.dev';",
    "",
    "const developer = new FrontendDeveloper({",
    "  name: 'Sohel Khan',",
    "  skills: ['HTML', 'CSS', 'JavaScript', 'React'],",
    "  focus: 'Building responsive web interfaces',",
    "  status: 'Open to opportunities'",
    "});",
    "",
    "developer.buildPortfolio();",
    "// Projects: Portfolio, UI Components, Web Apps",
    "",
    "developer.connect();",
    "console.log('🚀 Let’s build something together!');",
  ];

  /* ===== Achievements (REALISTIC) ===== */
  const achievements = [
    {
      number: "3+",
      label: "Projects Built",
      icon: <TrendingUp className="h-3 w-3" />,
    },
    {
      number: "1",
      label: "Internship",
      icon: <Shield className="h-3 w-3" />,
    },
    {
      number: "100%",
      label: "Learning Mindset",
      icon: <Award className="h-3 w-3" />,
    },
   
  ];

  /* ===== Typing Effect ===== */
  useEffect(() => {
    const currentLine = codeSnippets[currentCodeLine];
    if (displayedCode.length < currentLine.length) {
      setTimeout(() => {
        setDisplayedCode(
          currentLine.slice(0, displayedCode.length + 1)
        );
      }, 30);
    } else {
      setTimeout(() => {
        if (currentCodeLine < codeSnippets.length - 1) {
          setCurrentCodeLine((prev) => prev + 1);
          setDisplayedCode("");
        } else {
          setTimeout(() => {
            setCurrentCodeLine(0);
            setDisplayedCode("");
          }, 4000);
        }
      }, 800);
    }
  }, [displayedCode, currentCodeLine]);

  /* ===== Resume ===== */
  const handleViewResume = () => {
    window.open(
      "/Sohel-Khan-Resume.pdf",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const newLocal = "relative min-h-screen flex items-center justify-center px-4 overflow-hidden bg-linear-to-br from-background via-background/95 to-primary/10";
  return (
    <section
      id="hero"
      ref={ref}
      className={newLocal}
    >
      <div className="container max-w-7xl mx-auto mt-20">
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
        >
          {/* ===== LEFT CONTENT ===== */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <motion.div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm mb-8">
              <Briefcase className="h-4 w-4" />
              Open to Frontend Opportunities
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
              <span className="block">Hi, I’m Sohel</span>
              <span className="block bg-linear-to-r from-primary to-purple-600 bg-clip-text text-transparent mt-2">
                Frontend Developer
              </span>
            </h1>

            <p className="text-lg text-muted-foreground mt-6">
              I build clean and responsive{" "}
              <span className="text-primary font-semibold">
                frontend web applications
              </span>{" "}
              using modern technologies like React and Tailwind CSS.
            </p>

            {/* ===== Achievements ===== */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-8">
              {achievements.map((item, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-background/60 border border-border/50 text-center"
                >
                  <div className="flex justify-center gap-2 mb-2">
                    {item.icon}
                    <span className="font-bold">{item.number}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* ===== Buttons ===== */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold flex items-center gap-2 justify-center"
              >
                <Code className="h-5 w-5" />
                View Projects
              </a>

              <a
                href="#contact"
                className="px-8 py-4 rounded-xl border border-primary/50 font-semibold flex items-center gap-2 justify-center"
              >
                <Mail className="h-4 w-4" />
                Contact Me
              </a>

              <button
                onClick={handleViewResume}
                className="px-6 py-4 rounded-xl border font-semibold flex items-center gap-2 justify-center"
              >
                <Download className="h-4 w-4" />
                View Resume
              </button>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              🚀 Available for Frontend & Entry-Level Roles
            </p>
          </div>

          {/* ===== RIGHT CODE CARD ===== */}
          <div className="flex-1 max-w-md">
            <div className="bg-background/90 border rounded-2xl p-6 shadow-2xl font-mono text-sm">
              {codeSnippets.map((line, index) => (
                <div key={index} className="min-h-5">
                  {index < currentCodeLine && line}
                  {index === currentCodeLine && (
                    <>
                      {displayedCode}
                      <span className="text-primary">▊</span>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
        <MousePointerClick className="h-4 w-4 text-primary mx-auto mb-2" />
        <ArrowDown className="h-5 w-5 text-primary animate-bounce mx-auto" />
      </div>
    </section>
  );
};

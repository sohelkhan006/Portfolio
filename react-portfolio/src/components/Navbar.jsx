import { useEffect, useState, useRef } from "react";
import {
  Home,
  User,
  Code,
  Briefcase,
  Mail,
  Sun,
  Moon,
  Github,
  Linkedin,
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

/* ===== Navigation Items ===== */
const navItems = [
  { name: "Home", href: "#hero", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Skills", href: "#skills", icon: Code },
  { name: "Projects", href: "#projects", icon: Briefcase },
  { name: "Contact", href: "#contact", icon: Mail },
];

/* ===== Theme Toggle Button ===== */
const ThemeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    const newTheme = dark ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    setDark(!dark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
      aria-label="Toggle Theme"
    >
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
};

/* ===== Navbar Component ===== */
export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("#hero");
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  /* ===== Handle Scroll ===== */
  useEffect(() => {
    const onScroll = () => {
      const currentScroll = window.scrollY;

      // Hide navbar when scrolling down
      if (currentScroll > lastScrollY.current && currentScroll > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY.current = currentScroll;

      // Detect active section
      navItems.forEach((item) => {
        const section = document.querySelector(item.href);
        if (
          section &&
          currentScroll + 120 >= section.offsetTop &&
          currentScroll + 120 < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(item.href);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ===== Top Right Social Icons ===== */}
      <div className="fixed top-4 right-4 z-50 flex gap-2">
        <a
          href="https://github.com/sohelkhan006"
          target="_blank"
          className="p-2 rounded-full bg-white/80 dark:bg-black/80 border shadow"
        >
          <Github size={18} />
        </a>

        <a
          href="https://www.linkedin.com/in/khansohel0604"
          target="_blank"
          className="p-2 rounded-full bg-white/80 dark:bg-black/80 border shadow text-blue-600"
        >
          <Linkedin size={18} />
        </a>
      </div>

      {/* ===== Bottom Floating Navbar ===== */}
      <motion.div
        className={cn(
          "fixed bottom-4 left-1/2 -translate-x-1/2 z-50",
          showNavbar ? "translate-y-0" : "translate-y-full",
          "transition-transform duration-300"
        )}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="flex items-center gap-1 bg-white/80 dark:bg-black/80 backdrop-blur-md rounded-full p-2 border shadow">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "p-2 rounded-full flex flex-col items-center text-xs transition",
                activeSection === item.href
                  ? "bg-primary text-white"
                  : "text-gray-600 dark:text-gray-300 hover:text-primary"
              )}
            >
              <item.icon size={18} />
              <span className="hidden md:block">{item.name}</span>
            </a>
          ))}

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </motion.div>
    </>
  );
};

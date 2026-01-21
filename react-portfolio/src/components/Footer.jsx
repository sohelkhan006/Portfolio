import { ArrowUp, Linkedin, Github, Mail, Phone } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-6 py-12 mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="backdrop-blur-lg bg-white/70 dark:bg-gray-900/70 rounded-xl p-8 border border-white/20 dark:border-gray-700/50 shadow-lg">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Branding */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Sohel Khan
              </h3>

              <p className="text-sm text-gray-600 dark:text-gray-300">
                Frontend Developer focused on building clean, responsive,
                and user-friendly web applications.
              </p>

              {/* Social Icons */}
              <div className="flex items-center gap-4 pt-2">
                <a
                  href="https://www.linkedin.com/in/khansohel0604"
                  target="_blank"
                  className="p-2 rounded-full border border-gray-300 dark:border-gray-600
                             text-gray-600 dark:text-gray-400
                             hover:bg-gray-900 hover:text-white
                             dark:hover:bg-white dark:hover:text-gray-900
                             transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>

                <a
                  href="https://github.com/sohelkhan006"
                  target="_blank"
                  className="p-2 rounded-full border border-gray-300 dark:border-gray-600
                             text-gray-600 dark:text-gray-400
                             hover:bg-gray-900 hover:text-white
                             dark:hover:bg-white dark:hover:text-gray-900
                             transition-all"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-medium mb-4 text-sm uppercase tracking-wider text-gray-900 dark:text-white">
                Navigation
              </h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#hero" className="hover:text-gray-900 dark:hover:text-white">Home</a></li>
                <li><a href="#about" className="hover:text-gray-900 dark:hover:text-white">About</a></li>
                <li><a href="#projects" className="hover:text-gray-900 dark:hover:text-white">Projects</a></li>
                <li><a href="#contact" className="hover:text-gray-900 dark:hover:text-white">Contact</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-medium mb-4 text-sm uppercase tracking-wider text-gray-900 dark:text-white">
                Contact
              </h4>

              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3">
                  <Mail size={16} />
                  <a href="mailto:sohelkhan060404@gmail.com">
                    sohelkhan060404@gmail.com
                  </a>
                </li>

                <li className="flex items-center gap-3">
                  <Phone size={16} />
                  <a href="tel:+919850386595">
                    +91 98503 86595
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom */}
          <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700/50
                          flex items-center justify-between text-xs text-gray-600 dark:text-gray-400">
            <p>© {currentYear} Sohel Khan. All rights reserved.</p>

            <a
              href="#hero"
              className="p-2 rounded-full bg-gray-900 dark:bg-white
                         text-white dark:text-gray-900
                         hover:bg-gray-800 dark:hover:bg-gray-200 transition"
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

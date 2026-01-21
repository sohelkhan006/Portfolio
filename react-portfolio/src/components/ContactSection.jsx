import {
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Github,
} from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm rounded-full bg-primary/10 text-primary mb-4">
            Let’s Connect
          </span>
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I’m open to internships, projects, and learning opportunities.
            Feel free to reach out anytime.
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 p-8 rounded-2xl bg-gradient-to-br from-secondary/20 to-background border border-border">
            <h3 className="text-2xl font-bold">Contact Details</h3>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="text-primary" />
                <a
                  href="mailto:sohelkhan060404@gmail.com"
                  className="font-medium hover:text-primary transition"
                >
                  sohelkhan060404@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-primary" />
                <a
                  href="tel:+919850386595"
                  className="font-medium hover:text-primary transition"
                >
                  +91 98503 86595
                </a>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-primary" />
                <span className="font-medium">
                  Pune, Maharashtra, India
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 pt-6">
              <a
                href="https://www.linkedin.com/in/khansohel0604"
                target="_blank"
                className="hover:text-primary transition"
              >
                <Linkedin />
              </a>

              <a
                href="https://github.com/sohelkhan006"
                target="_blank"
                className="hover:text-primary transition"
              >
                <Github />
              </a>

              <a
                href="mailto:sohelkhan060404@gmail.com"
                className="hover:text-primary transition"
              >
                <Mail />
              </a>
            </div>
          </div>

          {/* Simple CTA */}
          <div className="p-8 rounded-2xl bg-card border border-border flex flex-col justify-center text-center">
            <h3 className="text-2xl font-bold mb-4">
              Want to work together?
            </h3>

            <p className="text-muted-foreground mb-8">
              The easiest way to reach me is via email.  
              I usually reply within a day.
            </p>

            <a
              href="mailto:sohelkhan060404@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-purple-600 text-white font-medium hover:opacity-90 transition"
            >
              Send Email <Mail size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

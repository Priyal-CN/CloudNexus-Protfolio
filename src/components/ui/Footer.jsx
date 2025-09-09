import React from "react";
import Icon from "../AppIcon"; // adjust path if AppIcon is elsewhere

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-10">
      {/* Max width for balance + padding */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 justify-between">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-30 h-10 flex items-center justify-center">
                <img
                  src="src/assets/logocn.png"
                  alt="CloudNexus Logo"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-4 leading-relaxed">
              Transforming businesses through innovative technology solutions.
              We partner with forward-thinking companies to deliver measurable
              results and sustainable growth.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/cloudnexusorg/about/"
                className="text-primary-foreground/60 hover:text-accent transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <Icon name="Linkedin" size={24} />
              </a>

              <a
                href="https://www.instagram.com/cloudnexus.in?igsh=dHZzczFiMjByMXU3"
                className="text-primary-foreground/60 hover:text-accent transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <Icon name="Instagram" size={24} />
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              {[
                "Cloud Architecture",
                "AI & Machine Learning",
                "Web Development",
                "Mobile Solutions",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="/services-overview"
                    className="hover:text-accent transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>+91 8793830447</li>
              <li>
                <a
                  href="https://cloudnexus.in/"
                  className="hover:text-accent transition-colors"
                >
                  CloudNexus.in
                </a>
              </li>
              <li>2nd Stage BTM Layout Bengaluru, Karnataka 560076</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-10 pt-6 text-center text-primary-foreground/60">
          <p>
            &copy; {new Date().getFullYear()} CloudNexus Technologies. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

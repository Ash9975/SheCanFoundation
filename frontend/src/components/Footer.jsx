import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import logo from "../assets/logo.avif";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10">

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 py-16">

        <div className="grid md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="She Can Foundation"
                className="h-12 w-auto rounded-md"
              />

              <div>
                <h3 className="text-white text-xl font-bold">
                  She Can
                </h3>

                <p className="text-gray-400 text-sm">
                  Foundation
                </p>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Empowering women through education,
              opportunity, advocacy, and community
              support.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li>
                <a
                  href="#home"
                  className="hover:text-red-500 transition"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="hover:text-red-500 transition"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#team"
                  className="hover:text-red-500 transition"
                >
                  Team
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="hover:text-red-500 transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-5">
              Contact
            </h3>

            <div className="space-y-4 text-gray-400">

              <div className="flex items-center gap-3">
                <Mail size={18} />
                <span>
                  president@shecanfoundation.org
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} />
                <span>
                  +91 8283841830
                </span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} />
                <span>
                  India
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
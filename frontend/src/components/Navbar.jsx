import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.avif"

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
        ? "bg-black/90 backdrop-blur-md border-b border-white/10"
        : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-16">
        <div className="flex justify-between items-center h-18 md:h-20">

          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer">
            <img
              src={logo}
              alt="She Can Foundation"
              className="h-10 md:h-12 w-auto rounded-md"
            />

            <div>
              <h1 className="text-white font-bold text-xl">
                She Can
              </h1>

              <p className="text-gray-400 text-sm">
                Foundation
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-10 text-white font-medium">
            {["Home", "About", "Contact"].map(
              (item) => (
                <li key={item} className="relative cursor-pointer group text-white transition-all duration-300 hover:text-red-500" >
                  {item}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                </li>
              )
            )}
          </ul>

          {/* CTA */}
          <button
            className=" hidden md:block px-7 py-3 rounded-full bg-red-600 text-white font-semibold transition-all duration-300 hover:bg-red-500 hover:scale-105 hover:shadow-[0_0_25px_rgba(239,68,68,0.6)] "
          >
            Join Mission
          </button>

          {/* Mobile Menu */}
          <button
            onClick={() =>
              setMobileOpen(!mobileOpen)
            }
            className="md:hidden text-white"
          >
            {mobileOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden bg-black overflow-hidden transition-all duration-500 ${mobileOpen
          ? "max-h-[400px]"
          : "max-h-0"
          }`}
      >
        <div className="flex flex-col px-6 py-5 gap-5 text-white">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Impact</a>
          <a href="#">Contact</a>

          <button className="bg-red-600 py-3 rounded-full">
            Join Mission
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
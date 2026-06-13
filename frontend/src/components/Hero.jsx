import { motion } from "framer-motion";
import heroImage from "../assets/heroImage.webp";

const Hero = () => {
  return (
    <section className="relative pt-10 min-h-screen flex items-center overflow-hidden">

      {/* Background Image */}
      <img
        src={heroImage}
        alt="She Can Foundation"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/50"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-12 lg:px-12 w-full">
          <div className="max-w-4xl">

            <p className="text-red-500 uppercase tracking-[4px] font-semibold mb-4">
              Empowering Women
            </p>

            <h1 className="font-black leading-[0.95] mb-8">
              <span className="block text-white text-5xl md:text-7xl lg:text-8xl">
                Together We Can Change
              </span>

              <span className="block text-red-500 text-5xl md:text-7xl lg:text-8xl">
                THE WORLD
              </span>
            </h1>

            <p className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed max-w-2xl mb-10">
              Join our mission to empower women through education,
              opportunity, and community support. Every contribution
              creates lasting change.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 md-12">

              <button
                className="bg-red-600 hover:bg-red-500 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 "
              >
                Join Mission
              </button>

              <button
                className="  border  border-white  text-white px-8 py-4  rounded-lg  hover:bg-white  hover:text-black transition-all duration-300 "
              >
                Learn More
              </button>

            </div>
          </div>
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;
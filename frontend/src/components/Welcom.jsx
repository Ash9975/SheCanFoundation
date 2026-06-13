import { motion } from "framer-motion";
import welcomeImage from "../assets/welcome.avif";

const WelcomeSection = () => {
  return (
    <section className="relative h-[40vh] md:h-[60vh] overflow-hidden my-30  ">

      {/* Background Image */}
      <img
        src={welcomeImage}
        alt="She Can Foundation"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="
          relative
          z-10
          h-full
          flex
          flex-col
          justify-center
          items-center
          text-center
          px-6
        "
      >
        <h2
          className="
          text-white
          font-black
          text-4xl
          md:text-6xl
          lg:text-7xl
          leading-tight
          "
        >
          Welcome to
        </h2>

        <h3
          className="
          text-red-500
          font-black
          text-4xl
          md:text-6xl
          lg:text-7xl
          mt-2
          "
        >
          She Can Foundation
        </h3>
        <div className="w-34 h-1 bg-red-500 mt-6 rounded-full"></div>

        <p
          className="
          mt-8
          text-white/90
          text-sm
          md:text-lg
          uppercase
          tracking-[6px]
          md:tracking-[10px]
          "
        >
          NGO Registered Under The Indian Society Act, 1860
        </p>
      </motion.div>

    </section>
  );
};

export default WelcomeSection;
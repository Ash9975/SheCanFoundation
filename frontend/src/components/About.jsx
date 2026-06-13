import { motion } from "framer-motion";
import aboutImage from "../assets/about.avif";

const About = () => {
  return (<section
    id="about"
    className="bg-[#080808] text-white py-24 px-6 md:px-10 lg:px-20"
  > <div className="max-w-7xl mx-auto">

      <div className="grid lg:grid-cols-2 gap-14 items-center">

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <img
            src={aboutImage}
            alt="She Can Foundation"
            className=" rounded-2xl shadow-2xl object-cover w-full hover:scale-[1.02] transition-all duration-500 "
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <p className="text-red-500 uppercase tracking-[4px] mb-4">
              About Us
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Global Vision,
              <span className="block text-red-500">
                Local Action
              </span>
            </h2>

            <p className="text-gray-400 leading-relaxed mb-5">
              We are She Can Foundation, a non-governmental
              organization registered under the Indian Society Act,
              1860, dedicated to empowering women and creating a
              more equitable society.
            </p>

            <p className="text-gray-400 leading-relaxed mb-5">
              Through education, training, advocacy, and
              community-driven initiatives, we provide women with
              the resources and opportunities they need to thrive.
              We work closely with local organizations,
              governments, and communities to create sustainable
              and meaningful impact.
            </p>

            <p className="text-gray-400 leading-relaxed mb-8">
              Together, we believe we can revolutionize society
              and build a better future for all.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                className=" bg-red-600 hover:bg-red-500 px-7 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 "
              >
                Learn More
              </button>

              <button
                className=" border border-white/20 px-7 py-3 rounded-lg font-semibold hover:border-red-500 hover:text-red-500 transition-all duration-300 "
              >
                Our Certificates
              </button>
            </div>
          </div>
        </motion.div>

      </div>

    </div>
  </section>

  );
};

export default About;

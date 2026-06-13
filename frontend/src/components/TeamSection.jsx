import { motion } from "framer-motion";
import teamImage from "../assets/team.avif";

const TeamSection = () => {
    return (
        <section className="bg-black py-20 px-6 md:px-10 lg:px-20">
            <div className="max-w-7xl mx-auto">

                <div className="grid lg:grid-cols-[45%_55%] overflow-hidden rounded-2xl bg-[#0d0d0d]">

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="overflow-hidden"
                    >
                        <img
                            src={teamImage}
                            alt="Join Our Team"
                            className=" w-full h-[700px] object-fill hover:scale-105 transition-all duration-700
          "
                        />
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="
          flex
          flex-col
          justify-center
          p-8
          md:p-12
          lg:p-16
        "
                    >
                        <p className="text-white tracking-[8px] uppercase mb-6">
                            Join Our
                        </p>

                        <h2 className="text-red-500 text-5xl md:text-7xl font-black mb-8">
                            TEAM
                        </h2>

                        <p className="text-gray-300 leading-relaxed mb-8">
                            Join our team and make a difference in the lives of women
                            in need. At She Can Foundation, we are committed to
                            creating positive change and empowering women in
                            communities across the globe.
                        </p>

                        <p className="text-gray-400 leading-relaxed mb-10">
                            By joining our team, you will have the opportunity to
                            contribute your time, skills, and ideas to help make a
                            real impact in society.
                        </p>

                        <button
                            className="
            bg-red-600
            hover:bg-red-500
            px-8
            py-4
            rounded-lg
            font-semibold
            transition-all
            duration-300
            hover:scale-105
            w-fit
          "
                        >
                            JOIN US
                        </button>
                    </motion.div>

                </div>
            </div>
        </section>

    );
};

export default TeamSection;

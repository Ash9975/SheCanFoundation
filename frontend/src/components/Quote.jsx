import { motion } from "framer-motion";

const QuoteSection = () => {
    return (
        <section className="relative bg-[#000000] py-30 overflow-hidden">

            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-red-500/5 blur-[120px]" />

            <div className="relative max-w-6xl mx-auto px-6 text-center">

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >

                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut",
                        }}
                        className="
          text-white/90
    font-bold
    leading-[1.3]
    max-w-5xl
    mx-auto
    text-1xl
    md:text-2xl
    lg:text-3xl
        "
                    >
                        “Together, we can break down barriers and empower
                        women. At She Can Foundation, we believe that if we
                        all do our part, there is no challenge too great to
                        overcome.”
                    </motion.h2>
                    <div className="w-32 h-[2px] bg-red-500 mx-auto my-12 rounded-full" />

                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: 0.2,
                            duration: 0.8,
                            ease: "easeOut",
                        }}
                        className="
          text-white/90
          font-bold
          leading-tight
          mt-6
          text-1xl
          md:text-2xl
          lg:text-3xl
        "
                    >
                        Join us in our mission to create a world where every
                        woman has the opportunity to thrive and succeed.
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: 0.5,
                            duration: 0.8,
                        }}
                        className="mt-10"
                    >
                        <h3
                            className=" text-red-500 uppercase tracking-[6px] text-sm md:text-base font-semibold "
                        >
                            Reeta Mishra
                        </h3>

                        <p className="text-gray-400 text-lg">
                            Founder & President, She Can Foundation
                        </p>
                    </motion.div>

                </motion.div>

            </div>
        </section>

    );
};

export default QuoteSection;

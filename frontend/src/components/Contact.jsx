import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await axios.post(
        "http://localhost:5000/api/contact",
        formData
      );

      setSubmitted(true);
      toast.success("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setSubmitted(false);
      }, 3000);

    } catch (error) {
      console.error(error);

      toast.error(
        error?.response?.data?.message ||
        "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (<section
    id="contact"
    className="bg-black text-white py-24 px-6 md:px-10 lg:px-20"
  > <div className="max-w-7xl mx-auto">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="grid lg:grid-cols-2 gap-12 items-center"
      >

        {/* Left Side */}
        <div>
          <p className="text-red-500 uppercase tracking-[4px] mb-4">
            Get In Touch
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            We'd Love To
            <span className="block text-red-500">
              Hear From You!
            </span>
          </h2>

          <p className="text-gray-400 leading-relaxed mb-8">
            Want to volunteer, collaborate, or support our mission?
            Send us a message and our team will get back to you.
          </p>

          <div className="space-y-4 text-gray-300">
            <p>✓ Volunteer Opportunities</p>
            <p>✓ Partnerships & Collaborations</p>
            <p>✓ Support Our Mission</p>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-[#111111] border border-white/10 rounded-2xl p-8">

          {submitted ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-12"
            >
              <h3 className="text-2xl font-bold text-green-500">
                ✓ Form Submitted Successfully
              </h3>

              <p className="text-gray-400 mt-4">
                Thank you for reaching out to She Can Foundation.
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <div>
                <label className="block mb-2 text-sm text-gray-300">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-red-500" />
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-300">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                  className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-red-500" />

              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-300">
                  Message
                </label>

                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Write your message..."
                  className=" w-full bg-black border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-red-500 resize-none "
                />

              </div>

              <button
                type="submit"
                disabled={loading}
                className=" w-full bg-red-600 hover:bg-red-500 disabled:bg-red-400 disabled:cursor-not-allowed text-white py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-[1.02] "
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}

        </div>
      </motion.div>

    </div>
  </section>

  );
};

export default Contact;





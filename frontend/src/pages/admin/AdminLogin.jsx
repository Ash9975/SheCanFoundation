import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Eye, EyeOff } from "lucide-react";

import logo from "../../assets/logo.avif";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] =
    useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      formData.email === "admin@shecan.com" &&
      formData.password === "123456"
    ) {
      localStorage.setItem(
        "adminLoggedIn",
        "true"
      );

      toast.success("Welcome Admin!");

      setTimeout(() => {
        navigate("/admin/dashboard");
      }, 1000);
    } else {
      toast.error("Invalid Credentials");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">

      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-red-500/10 blur-[120px] rounded-full" />

      <div
        className="
        relative
        w-full
        max-w-md
        bg-[#111]
        border
        border-white/10
        rounded-3xl
        p-8
        shadow-2xl
      "
      >
        {/* Logo */}

        <div className="flex flex-col items-center mb-8">
          <img
            src={logo}
            alt="She Can Foundation"
            className="w-24 h-24 rounded-xl mb-4"
          />

          <h1 className="text-white text-3xl font-bold">
            Admin Login
          </h1>

          <p className="text-gray-400 mt-2">
            Access Dashboard
          </p>
        </div>

        {/* Form */}

        <form
          onSubmit={handleLogin}
          className="space-y-5"
        >
          <div>
            <label className="text-sm text-gray-400 block mb-2">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="admin@shecan.com"
              className="
                w-full
                bg-black
                border
                border-white/10
                rounded-xl
                px-4
                py-3
                text-white
                outline-none
                focus:border-red-500
              "
            />
          </div>

          <div>
            <label className="text-sm text-gray-400 block mb-2">
              Password
            </label>

            <div className="relative">
              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="
                  w-full
                  bg-black
                  border
                  border-white/10
                  rounded-xl
                  px-4
                  py-3
                  text-white
                  outline-none
                  focus:border-red-500
                "
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
                className="
                  absolute
                  right-4
                  top-1/2
                  -translate-y-1/2
                  text-gray-400
                "
              >
                {showPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="
              w-full
              bg-red-600
              hover:bg-red-500
              text-white
              py-3
              rounded-xl
              font-semibold
              transition-all
              duration-300
            "
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-500 text-sm mt-8">
          © 2026 She Can Foundation
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
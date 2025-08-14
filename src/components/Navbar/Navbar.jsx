import React, { useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsMobileMenuOpen(!isMobileMenuOpen);
  // };

  // const [isOpen, setIsOpen] = useState(false);
  // // const [isLogin, setIsLogin] = useState(true);
  // // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  //   confirmPassword: "",
  // });

  // const toggleModal = () => {
  //   setIsOpen(!isOpen);
  //   if (!isOpen) {
  //     resetForm();
  //   }
  // };

  // const toggleMode = () => {
  //   setIsLogin(!isLogin);
  //   setFormData({ ...formData, confirmPassword: "" });
  // };

  // const handleChange = (e) => {
  //   setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  // };

  // const resetForm = () => {
  //   setIsLogin(true);
  //   setFormData({
  //     email: "",
  //     password: "",
  //     confirmPassword: "",
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (
  //     !formData.email ||
  //     !formData.password ||
  //     (!isLogin && !formData.confirmPassword)
  //   ) {
  //     alert("Please fill all required fields.");
  //     return;
  //   }
  //   if (!isLogin && formData.password !== formData.confirmPassword) {
  //     alert("Passwords do not match.");
  //     return;
  //   }
  //   alert(`${isLogin ? "Login" : "Register"} successful!`);
  //   toggleModal();
  // };

  return (
    <nav className="Navbar w-full p-4 bg-white-600 text-black flex items-center justify-between relative shadow-[0_2px_6px_rgba(0,0,0,0.3)]">
      <div>
        <img
          src={logo}
          alt=""
          className="homelogo"
          onClick={() => navigate("/")}
        />
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-20 desktop-list">
        <li
          className="hover:text-blue-500 cursor-pointer"
          onClick={() => navigate("/")}
        >
          Home
        </li>
        <li
          className="hover:text-blue-500 cursor-pointer"
          onClick={() => navigate("/about")}
        >
          About
        </li>
        <li
          className="hover:text-blue-500 cursor-pointer"
          onClick={() => navigate("/blog")}
        >
          Blog
        </li>
        <li
          className="hover:text-blue-500 cursor-pointer"
          onClick={() => navigate("/contact")}
        >
          Contact
        </li>
      </ul>
      <div className="hidden md:block">
        <button className="login-btn" onClick={() => navigate("/login")}>
          Login/ Register
        </button>
      </div>
      {/* Mobile Menu Toggle Button */}
      <button className="md:hidden z-20" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Sliding Panel */}
      <div
        className={`fixed top-1 right-0 h-full w-3/4 bg-white-700 text-white transform transition-transform duration-300 ease-in-out z-10 menu-small
          ${menuOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}
      >
        <ul className="flex flex-col gap-6 p-6 mt-16 items-center">
          <li
            className="mobile-list-element"
            onClick={() => {
              setMenuOpen(false);
              navigate("/");
            }}
          >
            Home
          </li>
          <li
            className="mobile-list-element"
            onClick={() => {
              setMenuOpen(false);
              navigate("/about");
            }}
          >
            About
          </li>
          <li
            className="mobile-list-element"
            onClick={() => {
              setMenuOpen(false);
              navigate("/blog");
            }}
          >
            Blog
          </li>
          <li
            className="mobile-list-element"
            onClick={() => {
              setMenuOpen(false);
              navigate("/contact");
            }}
          >
            Contact
          </li>
          <li
            onClick={() => {
              setMenuOpen(false);
              navigate("/login");
            }}
            className="login-btn"
          >
            Login/ Register
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

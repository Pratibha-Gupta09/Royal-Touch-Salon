import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/img/logo.png";

const navItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Gallery",
    path: "/gallery",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  const isHomePage = location.pathname === "/";

  /* ================= SCROLL EFFECT ================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* ================= CLOSE MENU ON RESIZE ================= */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* ================= BOOK APPOINTMENT ================= */

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled || !isHomePage
          ? "border-b border-white/10 bg-[#121212]/90 shadow-[0_8px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      {/* ================= NAVBAR CONTAINER ================= */}

      <div className="mx-auto flex h-[78px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        {/* ================= LOGO ================= */}

        <a
          href="#home"
          className="group relative flex items-center"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src={logo}
            alt="Royal Touch Salon"
            className="h-14 w-auto object-contain transition-all duration-500 group-hover:scale-105 sm:h-16"
          />

          {/* Small Glow */}

          <span className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-[#B76E79]/20 opacity-0 blur-xl transition duration-500 group-hover:opacity-100" />
        </a>

        {/* ================= DESKTOP MENU ================= */}

        <ul className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <li key={item.name} className="group relative">
              <Link
                to={item.path}
                className="relative py-2 text-sm font-medium text-white/90 transition-colors duration-300 hover:text-[#D4AF37]"
              >
                {item.name}

                <span className="absolute -bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        {/* ================= DESKTOP BUTTON ================= */}
        <motion.div whileTap={{ scale: 0.96 }} className="hidden lg:block">
          <Link
            to="/appointment"
            onClick={() => setMenuOpen(false)}
            className="rounded-full bg-[#B76E79] px-7 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#D4AF37]"
          >
            Book Appointment
          </Link>
        </motion.div>
        {/* ================= MOBILE MENU BUTTON ================= */}

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-xl text-white backdrop-blur-md transition-all duration-300 hover:border-[#D4AF37] hover:text-[#D4AF37] lg:hidden"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.35,
            }}
            className="overflow-hidden border-t border-white/10 bg-[#121212]/95 backdrop-blur-xl lg:hidden"
          >
            <motion.div
              initial={{
                y: -15,
              }}
              animate={{
                y: 0,
              }}
              exit={{
                y: -15,
              }}
              className="flex flex-col items-center px-6 py-7"
            >
              {/* Mobile Links */}

              <div className="flex w-full flex-col items-center">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{
                      opacity: 0,
                      y: -10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: index * 0.06,
                    }}
                    className="w-full"
                  >
                    <Link
                      to={item.path}
                      onClick={() => setMenuOpen(false)}
                      className="block w-full border-b border-white/5 py-3 text-center text-base font-medium text-white transition-colors duration-300 hover:text-[#D4AF37]"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Appointment */}

              <motion.div
                whileTap={{ scale: 0.96 }}
                className="mt-6 w-full max-w-xs"
              >
                <Link
                  to="/appointment"
                  onClick={() => setMenuOpen(false)}
                  className="block w-full rounded-full bg-[#B76E79] px-7 py-3.5 text-center font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#D4AF37]"
                >
                  Book Appointment
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

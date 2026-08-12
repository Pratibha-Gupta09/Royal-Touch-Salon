import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowUp,
} from "react-icons/fa";

import logo from "../../assets/img/logo.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-[#121212] text-white">
      {/* Decorative Glow */}

      <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-[#B76E79]/10 blur-[100px]" />

      <div className="absolute -bottom-40 right-0 h-80 w-80 rounded-full bg-[#D4AF37]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* ================= MAIN FOOTER ================= */}

        <div className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-4">
          {/* ================= BRAND ================= */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={logo}
              alt="Royal Touch Salon"
              className="h-20 w-auto object-contain"
            />

            <p className="mt-5 max-w-xs text-sm leading-6 text-gray-400">
              Where beauty meets elegance. Experience premium beauty treatments
              designed to make you feel confident and beautiful.
            </p>

            {/* Social Icons */}

            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition duration-300 hover:border-[#B76E79] hover:bg-[#B76E79] hover:text-white"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition duration-300 hover:border-[#B76E79] hover:bg-[#B76E79] hover:text-white"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition duration-300 hover:border-[#B76E79] hover:bg-[#B76E79] hover:text-white"
              >
                <FaWhatsapp />
              </a>
            </div>
          </motion.div>

          {/* ================= QUICK LINKS ================= */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-serif text-xl font-semibold text-white">
              Quick Links
            </h3>

            <div className="mt-5 h-[2px] w-10 bg-[#D4AF37]" />

            <ul className="mt-5 space-y-3 text-sm text-gray-400">
              <li>
                <a
                  href="#home"
                  className="transition hover:pl-1 hover:text-[#D4AF37]"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="transition hover:pl-1 hover:text-[#D4AF37]"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="#gallery"
                  className="transition hover:pl-1 hover:text-[#D4AF37]"
                >
                  Gallery
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="transition hover:pl-1 hover:text-[#D4AF37]"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="transition hover:pl-1 hover:text-[#D4AF37]"
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* ================= SERVICES ================= */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-serif text-xl font-semibold text-white">
              Our Services
            </h3>

            <div className="mt-5 h-[2px] w-10 bg-[#D4AF37]" />

            <ul className="mt-5 space-y-3 text-sm text-gray-400">
              <li>Hair Styling</li>

              <li>Hair Color</li>

              <li>Bridal Makeup</li>

              <li>Facial & Spa</li>

              <li>Nail Art</li>

              <li>Skin Care</li>
            </ul>
          </motion.div>

          {/* ================= CONTACT ================= */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-serif text-xl font-semibold text-white">
              Get In Touch
            </h3>

            <div className="mt-5 h-[2px] w-10 bg-[#D4AF37]" />

            <div className="mt-5 space-y-4">
              {/* Phone */}

              <a
                href="tel:+919876543210"
                className="group flex items-start gap-3 text-sm text-gray-400 transition hover:text-white"
              >
                <FaPhoneAlt className="mt-1 shrink-0 text-[#B76E79]" />

                <span>+91 98765 43210</span>
              </a>

              {/* Email */}

              <a
                href="mailto:royaltouchsalon@gmail.com"
                className="group flex items-start gap-3 text-sm text-gray-400 transition hover:text-white"
              >
                <FaEnvelope className="mt-1 shrink-0 text-[#B76E79]" />

                <span className="break-all">royaltouchsalon@gmail.com</span>
              </a>

              {/* Address */}

              <div className="flex items-start gap-3 text-sm leading-6 text-gray-400">
                <FaMapMarkerAlt className="mt-1 shrink-0 text-[#B76E79]" />

                <span>
                  Your Salon Address,
                  <br />
                  Your City, India
                </span>
              </div>
            </div>

            {/* Appointment Button */}

            <a
              href="#appointment"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-[#B76E79] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-[#D4AF37]"
            >
              Book Appointment
            </a>
          </motion.div>
        </div>

        {/* ================= DIVIDER ================= */}

        <div className="h-px bg-white/10" />

        {/* ================= BOTTOM FOOTER ================= */}

        <div className="flex flex-col items-center justify-between gap-4 py-5 text-center text-xs text-gray-500 md:flex-row md:text-left">
          <p>
            © {new Date().getFullYear()} Royal Touch Salon. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a href="#" className="transition hover:text-[#D4AF37]">
              Privacy Policy
            </a>

            <a href="#" className="transition hover:text-[#D4AF37]">
              Terms & Conditions
            </a>
          </div>

          {/* Back To Top */}

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-gray-400 transition duration-300 hover:border-[#D4AF37] hover:text-[#D4AF37]"
          >
            <FaArrowUp className="text-xs" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

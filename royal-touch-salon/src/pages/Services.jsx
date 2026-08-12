import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaCut,
  FaPaintBrush,
  FaMagic,
  FaSpa,
  FaHandSparkles,
  FaGem,
  FaArrowRight,
} from "react-icons/fa";

import hairStyle from "../assets/img/services_img/hairStyle1.jpeg";
import hairColor from "../assets/img/services_img/haircolor.jpeg";
import makeup from "../assets/img/services_img/makeup1.jpeg";
import facial from "../assets/img/services_img/facial.jpeg";
import skinCare from "../assets/img/services_img/skinCare.jpeg";
import nails from "../assets/img/services_img/nails.jpeg";

const MotionLink = motion(Link);

const services = [
  {
    image: hairStyle,
    icon: <FaCut />,
    category: "Hair",
    title: "Hair Styling",
    desc: "Professional haircut & styling by expert stylists.",
    price: "Starting ₹299",
  },
  {
    image: hairColor,
    icon: <FaPaintBrush />,
    category: "Hair",
    title: "Hair Color",
    desc: "Premium hair coloring with top-quality products.",
    price: "Starting ₹999",
  },
  {
    image: makeup,
    icon: <FaMagic />,
    category: "Makeup",
    title: "Bridal Makeup",
    desc: "Luxury bridal makeover for your special day.",
    price: "Starting ₹7999",
  },
  {
    image: facial,
    icon: <FaSpa />,
    category: "Spa",
    title: "Facial & Spa",
    desc: "Glow with relaxing facial and spa treatments.",
    price: "Starting ₹699",
  },
  {
    image: nails,
    icon: <FaHandSparkles />,
    category: "Nails",
    title: "Nail Art",
    desc: "Creative nail art with premium finishes.",
    price: "Starting ₹499",
  },
  {
    image: skinCare,
    icon: <FaGem />,
    category: "Skin Care",
    title: "Skin Care",
    desc: "Healthy and radiant skin care treatments.",
    price: "Starting ₹899",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

const Services = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gradient-to-b from-[#FFF9F7] via-[#FFF5F6] to-[#FFF9F7] py-20 md:py-24"
    >
      {/* ================= DECORATIVE GLOW ================= */}

      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#B76E79]/10 blur-[120px]" />

      <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        {/* ================= HEADING ================= */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <motion.p
            variants={item}
            className="text-sm font-semibold uppercase tracking-[5px] text-[#B76E79]"
          >
            Our Services
          </motion.p>

          <motion.h2
            variants={item}
            className="mt-3 font-serif text-4xl font-bold leading-tight text-[#241719] md:text-5xl"
          >
            Premium Beauty Services
          </motion.h2>

          {/* Gold Divider */}

          <motion.div
            variants={item}
            className="mx-auto mt-5 flex items-center justify-center gap-3"
          >
            <span className="h-px w-10 bg-[#D4AF37]/50" />

            <span className="h-2 w-2 rotate-45 bg-[#D4AF37]" />

            <span className="h-px w-10 bg-[#D4AF37]/50" />
          </motion.div>

          <motion.p
            variants={item}
            className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 md:text-base"
          >
            Discover luxury beauty treatments designed to enhance your natural
            beauty and make you feel truly confident.
          </motion.p>
        </motion.div>

        {/* ================= SERVICE CARDS ================= */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-7 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.article
              key={index}
              variants={item}
              whileHover={{
                y: -10,
              }}
              transition={{
                duration: 0.35,
              }}
              className="group overflow-hidden rounded-[28px] border border-[#EEDFE1] bg-white shadow-[0_10px_35px_rgba(183,110,121,0.08)] transition-shadow duration-500 hover:shadow-[0_25px_60px_rgba(183,110,121,0.18)]"
            >
              {/* ================= IMAGE ================= */}

              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  whileHover={{
                    scale: 1.1,
                  }}
                  transition={{
                    duration: 0.7,
                    ease: "easeOut",
                  }}
                  className="h-full w-full object-cover"
                />

                {/* Image Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

                {/* Category */}

                <div className="absolute left-4 top-4 rounded-full border border-white/40 bg-white/90 px-4 py-1.5 text-xs font-semibold tracking-wide text-[#B76E79] shadow-md backdrop-blur-md">
                  {service.category}
                </div>

                {/* Icon */}

                <motion.div
                  whileHover={{
                    rotate: 8,
                    scale: 1.08,
                  }}
                  className="absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-[#B76E79] text-lg text-white shadow-lg"
                >
                  {service.icon}
                </motion.div>

                {/* Image Title */}

                <div className="absolute bottom-4 left-5">
                  <p className="text-xs uppercase tracking-[2px] text-white/80">
                    Royal Touch
                  </p>
                </div>
              </div>

              {/* ================= CONTENT ================= */}

              <div className="p-6">
                <h3 className="font-serif text-2xl font-bold text-[#241719] transition-colors duration-300 group-hover:text-[#B76E79]">
                  {service.title}
                </h3>

                <p className="mt-3 min-h-[48px] text-sm leading-6 text-gray-500">
                  {service.desc}
                </p>

                {/* Divider */}

                <div className="my-5 h-px bg-[#F0E2E4]" />

                {/* Price + Button */}

                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[2px] text-gray-400">
                      Price
                    </p>

                    <p className="mt-1 text-base font-bold text-[#D4AF37]">
                      {service.price}
                    </p>
                  </div>

                  <MotionLink
                    to="/appointment"
                    whileHover={{
                      scale: 1.04,
                    }}
                    whileTap={{
                      scale: 0.96,
                    }}
                    className="group/button flex items-center gap-2 rounded-full bg-[#B76E79] px-5 py-3 text-xs font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[#D4AF37] hover:shadow-md"
                  >
                    Book Now
                    <FaArrowRight className="text-[10px] transition-transform duration-300 group-hover/button:translate-x-1" />
                  </MotionLink>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* ================= VIEW ALL ================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <button className="rounded-full border border-[#B76E79] px-7 py-3 text-sm font-semibold text-[#B76E79] transition duration-300 hover:bg-[#B76E79] hover:text-white">
            View All Services
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

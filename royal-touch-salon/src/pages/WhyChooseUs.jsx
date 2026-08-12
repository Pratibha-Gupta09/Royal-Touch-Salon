import { motion } from "framer-motion";
import { FaAward, FaUsers, FaSpa, FaHeart, FaCheck } from "react-icons/fa";

const features = [
  {
    icon: <FaAward />,
    title: "Certified Experts",
    desc: "Our experienced beauticians provide professional beauty services with attention to every detail.",
  },
  {
    icon: <FaUsers />,
    title: "1000+ Happy Clients",
    desc: "Trusted by hundreds of satisfied clients who love our quality and personalized service.",
  },
  {
    icon: <FaSpa />,
    title: "Premium Products",
    desc: "We carefully select high-quality beauty and skincare products for the best results.",
  },
  {
    icon: <FaHeart />,
    title: "Personalized Care",
    desc: "Every client receives customized beauty solutions designed around their unique needs.",
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
    y: 35,
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

const WhyChooseUs = () => {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-[#FFF9F7] py-16 md:py-20"
    >
      {/* ================= DECORATIVE BLUR ================= */}

      <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-[#B76E79]/10 blur-[120px]" />

      <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-[140px]" />

      {/* Small Decorative Circle */}

      <div className="pointer-events-none absolute right-[10%] top-20 hidden h-20 w-20 rounded-full border border-[#D4AF37]/20 md:block" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        {/* ================= HEADING ================= */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <motion.p
            variants={item}
            className="text-sm font-semibold uppercase tracking-[5px] text-[#B76E79]"
          >
            Why Choose Us
          </motion.p>

          <motion.h2
            variants={item}
            className="mt-3 font-serif text-4xl font-bold leading-tight text-[#241719] md:text-5xl"
          >
            Experience Beauty
            <br className="hidden md:block" />
            <span className="text-[#B76E79]"> Like Never Before</span>
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
            We combine luxury, professionalism and personalized care to deliver
            an unforgettable salon experience.
          </motion.p>
        </motion.div>

        {/* ================= FEATURE CARDS ================= */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                y: -8,
              }}
              transition={{
                duration: 0.3,
              }}
              className="group relative overflow-hidden rounded-[26px] border border-[#EEDFE1] bg-white p-6 text-center shadow-[0_10px_35px_rgba(183,110,121,0.07)] transition-all duration-500 hover:border-[#B76E79]/30 hover:shadow-[0_20px_50px_rgba(183,110,121,0.16)]"
            >
              {/* Top Decorative Line */}

              <div className="absolute left-1/2 top-0 h-[3px] w-0 -translate-x-1/2 bg-[#D4AF37] transition-all duration-500 group-hover:w-20" />

              {/* Background Number */}

              <span className="pointer-events-none absolute -right-2 -top-5 font-serif text-7xl font-bold text-[#B76E79]/5">
                0{index + 1}
              </span>

              {/* Icon */}

              <motion.div
                whileHover={{
                  scale: 1.08,
                  rotate: 5,
                }}
                transition={{ duration: 0.3 }}
                className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#B76E79]/10 text-2xl text-[#B76E79] transition-all duration-300 group-hover:bg-[#B76E79] group-hover:text-white"
              >
                {feature.icon}
              </motion.div>

              {/* Title */}

              <h3 className="mt-5 font-serif text-xl font-bold text-[#241719] transition-colors duration-300 group-hover:text-[#B76E79]">
                {feature.title}
              </h3>

              {/* Description */}

              <p className="mt-3 text-sm leading-6 text-gray-500">
                {feature.desc}
              </p>

              {/* Bottom Check */}

              <div className="mt-5 flex items-center justify-center gap-2 text-xs font-medium text-[#B76E79]">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#B76E79]/10">
                  <FaCheck className="text-[9px]" />
                </span>

                <span>Royal Touch Quality</span>
              </div>

              {/* Bottom Gold Line */}

              <div className="mx-auto mt-5 h-[2px] w-7 bg-[#D4AF37] transition-all duration-500 group-hover:w-12" />
            </motion.div>
          ))}
        </motion.div>

        {/* ================= BOTTOM STATEMENT ================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 text-center"
        >
          <p className="font-serif text-lg italic text-[#241719] md:text-xl">
            "Because you deserve nothing less than a
            <span className="text-[#B76E79]"> Royal Touch.</span>"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

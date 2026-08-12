import { motion } from "framer-motion";
import { FaCheck, FaAward, FaHeart, FaGem } from "react-icons/fa";

import aboutImg from "../assets/img/salon/salon1.jpeg";

const item = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const About = () => {
  return (
    <section className="bg-[#FFF9F7] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* ================= SECTION HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[4px] text-[#B76E79]">
            About Royal Touch
          </p>

          <h2 className="mt-3 font-serif text-4xl font-bold text-[#241719] md:text-5xl">
            Where Beauty Meets Elegance
          </h2>

          <motion.div
            variants={item}
            className="mx-auto mt-5 flex items-center justify-center gap-3"
          >
            <span className="h-px w-10 bg-[#D4AF37]/50" />

            <span className="h-2 w-2 rotate-45 bg-[#D4AF37]" />

            <span className="h-px w-10 bg-[#D4AF37]/50" />
          </motion.div>
        </motion.div>

        {/* ================= MAIN CONTENT ================= */}

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* ================= IMAGE ================= */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto w-full max-w-lg"
          >
            {/* Decorative Border */}

            <div className="absolute -bottom-4 -left-4 h-full w-full rounded-[30px] border-2 border-[#D4AF37]/40" />

            <div className="relative overflow-hidden rounded-[30px] shadow-[0_20px_50px_rgba(183,110,121,0.15)]">
              <img
                src={aboutImg}
                alt="Royal Touch Salon"
                className="h-[430px] w-full object-cover transition duration-700 hover:scale-105 md:h-[480px]"
              />

              {/* Image Overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

              {/* Experience Badge */}

              <div className="absolute bottom-5 left-5 rounded-2xl border border-white/30 bg-white/90 px-5 py-4 shadow-lg backdrop-blur-md">
                <p className="text-2xl font-bold text-[#B76E79]">10+</p>

                <p className="text-xs font-medium text-gray-600">
                  Years of Excellence
                </p>
              </div>
            </div>
          </motion.div>

          {/* ================= CONTENT ================= */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[3px] text-[#B76E79]">
              Our Story
            </p>

            <h3 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#241719] md:text-4xl">
              Beauty, Confidence &
              <span className="text-[#B76E79]"> Royal Care</span>
            </h3>

            <p className="mt-5 text-sm leading-7 text-gray-600 md:text-base">
              At Royal Touch Salon, we believe beauty is more than just a look.
              It is about feeling confident, comfortable and truly yourself.
            </p>

            <p className="mt-4 text-sm leading-7 text-gray-600 md:text-base">
              Our professional beauty experts combine modern techniques, premium
              products and personalized care to create a relaxing experience for
              every client.
            </p>

            {/* ================= FEATURES ================= */}

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {/* Feature 1 */}

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#B76E79]/10 text-sm text-[#B76E79]">
                  <FaAward />
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-[#241719]">
                    Expert Beauticians
                  </h4>

                  <p className="text-xs text-gray-500">Skilled professionals</p>
                </div>
              </div>

              {/* Feature 2 */}

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#B76E79]/10 text-sm text-[#B76E79]">
                  <FaGem />
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-[#241719]">
                    Premium Products
                  </h4>

                  <p className="text-xs text-gray-500">Quality you can trust</p>
                </div>
              </div>

              {/* Feature 3 */}

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#B76E79]/10 text-sm text-[#B76E79]">
                  <FaHeart />
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-[#241719]">
                    Personalized Care
                  </h4>

                  <p className="text-xs text-gray-500">Made for you</p>
                </div>
              </div>

              {/* Feature 4 */}

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#B76E79]/10 text-sm text-[#B76E79]">
                  <FaCheck />
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-[#241719]">
                    Hygienic Environment
                  </h4>

                  <p className="text-xs text-gray-500">Clean & comfortable</p>
                </div>
              </div>
            </div>

            {/* ================= STATS ================= */}

            <div className="mt-8 flex flex-wrap gap-8 border-t border-[#EBDDE0] pt-6">
              <div>
                <h4 className="text-3xl font-bold text-[#D4AF37]">1000+</h4>

                <p className="mt-1 text-xs text-gray-500">Happy Clients</p>
              </div>

              <div>
                <h4 className="text-3xl font-bold text-[#D4AF37]">10+</h4>

                <p className="mt-1 text-xs text-gray-500">Years Experience</p>
              </div>

              <div>
                <h4 className="text-3xl font-bold text-[#D4AF37]">4.9</h4>

                <p className="mt-1 text-xs text-gray-500">Client Rating</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

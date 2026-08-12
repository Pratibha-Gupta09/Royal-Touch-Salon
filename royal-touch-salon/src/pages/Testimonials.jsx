import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Regular Client",
    review:
      "Absolutely loved my experience at Royal Touch Salon. The staff was so professional and the service was amazing. I left feeling confident and beautiful!",
    rating: 5,
  },
  {
    name: "Neha Verma",
    role: "Bridal Client",
    review:
      "My bridal makeup was exactly how I imagined it. The team understood my requirements perfectly and made my special day even more memorable.",
    rating: 5,
  },
  {
    name: "Ananya Singh",
    role: "Regular Client",
    review:
      "The salon has such a beautiful and relaxing atmosphere. Their hair and skincare services are excellent. Definitely my favourite salon!",
    rating: 5,
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
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
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#FFF9F7] py-20 md:py-24"
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
            Client Love
          </motion.p>

          <motion.h2
            variants={item}
            className="mt-3 font-serif text-4xl font-bold text-[#241719] md:text-5xl"
          >
            What Our Clients Say
          </motion.h2>

          {/* Divider */}

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
            Every smile tells a story. Here is what our beautiful clients have
            to say about their Royal Touch experience.
          </motion.p>
        </motion.div>

        {/* ================= TESTIMONIAL CARDS ================= */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-7 md:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="group relative rounded-[28px] border border-[#EEDFE1] bg-white p-7 shadow-[0_10px_35px_rgba(183,110,121,0.07)] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(183,110,121,0.15)]"
            >
              {/* Quote Icon */}

              <div className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-[#B76E79]/10 text-[#B76E79] transition duration-300 group-hover:bg-[#B76E79] group-hover:text-white">
                <FaQuoteLeft className="text-sm" />
              </div>

              {/* Stars */}

              <div className="flex gap-1 text-[#D4AF37]">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-sm" />
                ))}
              </div>

              {/* Review */}

              <p className="mt-6 min-h-[120px] text-sm leading-7 text-gray-600">
                "{testimonial.review}"
              </p>

              {/* Divider */}

              <div className="my-5 h-px bg-[#F0E2E4]" />

              {/* Client */}

              <div className="flex items-center gap-4">
                {/* Initial */}

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#B76E79] font-serif text-lg font-bold text-white">
                  {testimonial.name.charAt(0)}
                </div>

                <div>
                  <h3 className="font-serif text-lg font-bold text-[#241719]">
                    {testimonial.name}
                  </h3>

                  <p className="mt-1 text-xs text-gray-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Gold Line */}

              <div className="mt-5 h-[2px] w-8 bg-[#D4AF37] transition-all duration-300 group-hover:w-14" />
            </motion.div>
          ))}
        </motion.div>

        {/* ================= BOTTOM RATING ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-[#EEDFE1] bg-white px-6 py-3 shadow-sm">
            <div className="flex gap-1 text-[#D4AF37]">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <span className="h-5 w-px bg-gray-200" />

            <span className="text-sm font-semibold text-[#241719]">
              4.9/5 Client Rating
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

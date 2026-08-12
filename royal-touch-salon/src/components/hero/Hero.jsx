import heroImg from "../../assets/img/hero/herobg.jpeg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const container = {
  hidden: {
    opacity: 0,
  },

  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 25,
  },

  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const Hero = () => {
  return (
    <section
      id="home"
      className="
        relative
        min-h-[650px]
        overflow-hidden
        bg-[#171214]
        bg-cover
        bg-[60%_center]
        bg-no-repeat

        sm:min-h-[700px]
        sm:bg-[center]

        lg:min-h-[760px]
        lg:bg-center
      "
      style={{
        backgroundImage: `url(${heroImg})`,
      }}
    >
      {/* =====================================================
          DARK GRADIENT OVERLAY
      ===================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-black/80
          via-black/55
          to-black/20
        "
      />

      {/* Bottom Overlay */}

      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-32
          bg-gradient-to-t
          from-black/45
          to-transparent
        "
      />

      {/* =====================================================
          ROSE GOLD GLOW
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-20
          h-72
          w-72
          rounded-full
          bg-[#B76E79]/15
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-40
          right-0
          h-96
          w-96
          rounded-full
          bg-[#D4AF37]/10
          blur-[140px]
        "
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[650px]
          max-w-7xl
          items-center
          px-5
          py-24

          sm:min-h-[700px]
          sm:px-8

          lg:min-h-[760px]
          lg:px-12
        "
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="w-full max-w-2xl"
        >
          {/* =================================================
              BADGE
          ================================================= */}

          <motion.div
            variants={item}
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-[#D4AF37]/30
              bg-black/20
              px-5
              py-2
              backdrop-blur-md
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />

            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[4px]
                text-[#E8B2BE]

                sm:text-xs
              "
            >
              Royal Touch Salon
            </span>
          </motion.div>

          {/* =================================================
              HEADING
          ================================================= */}

          <motion.h1
            variants={item}
            className="
              mt-6
              font-serif
              text-5xl
              font-bold
              leading-[1.05]

              sm:text-6xl

              lg:text-7xl
            "
          >
            <span className="block text-white">Enhance</span>

            <span className="mt-2 block text-[#D58A9A]">Your Beauty</span>
          </motion.h1>

          {/* =================================================
              DECORATIVE LINE
          ================================================= */}

          <motion.div variants={item} className="mt-6 flex items-center gap-3">
            <span className="h-[1px] w-12 bg-[#D4AF37]" />

            <span className="h-2 w-2 rotate-45 bg-[#D4AF37]" />

            <span className="h-[1px] w-12 bg-[#D4AF37]" />
          </motion.div>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <motion.p
            variants={item}
            className="
              mt-6
              max-w-xl
              text-sm
              leading-7
              text-gray-200

              sm:text-base
              sm:leading-8

              lg:text-lg
            "
          >
            Experience premium beauty treatments crafted to enhance your
            confidence, natural glow and elegance.
          </motion.p>

          {/* =================================================
              BUTTONS
          ================================================= */}

          <motion.div
            variants={item}
            className="
              mt-8
              flex
              flex-col
              gap-3

              sm:flex-row
              sm:gap-4
            "
          >
            {/* Book Appointment */}

            <motion.button
              whileHover={{
                y: -3,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.97,
              }}
              onClick={() => {
                document.getElementById("appointment")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
              className="
    w-full
    rounded-full
    bg-[#B76E79]
    px-7
    py-3.5
    text-sm
    font-semibold
    text-white
    shadow-[0_15px_40px_rgba(183,110,121,0.30)]
    transition-all
    duration-300
    hover:bg-[#D4AF37]
    sm:w-auto
  "
            >
              Book Appointment
            </motion.button>

            {/* View Services */}

            <MotionLink
              to="/services"
              whileHover={{
                y: -3,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="
    block
    w-full
    rounded-full
    border
    border-white/30
    bg-white/5
    px-7
    py-3.5
    text-center
    text-sm
    font-semibold
    text-white
    backdrop-blur-md

    transition-all
    duration-300

    hover:border-white
    hover:bg-white
    hover:text-[#121212]

    sm:w-auto
  "
            >
              View Services
            </MotionLink>
          </motion.div>

          {/* =================================================
              STATS
              Desktop / Tablet only
          ================================================= */}

          <motion.div
            variants={item}
            className="
              mt-10
              hidden
              max-w-xl
              grid-cols-3
              border-t
              border-white/15
              pt-6

              sm:grid
              sm:mt-12
              sm:pt-7
            "
          >
            {/* Happy Clients */}

            <div className="border-r border-white/15 pr-4 sm:pr-6">
              <h3 className="font-serif text-2xl font-bold text-white sm:text-3xl">
                5K+
              </h3>

              <p className="mt-1 text-[10px] uppercase tracking-wider text-gray-300 sm:text-xs">
                Happy Clients
              </p>
            </div>

            {/* Experience */}

            <div className="border-r border-white/15 px-4 sm:px-6">
              <h3 className="font-serif text-2xl font-bold text-white sm:text-3xl">
                10+
              </h3>

              <p className="mt-1 text-[10px] uppercase tracking-wider text-gray-300 sm:text-xs">
                Years Experience
              </p>
            </div>

            {/* Services */}

            <div className="pl-4 sm:pl-6">
              <h3 className="font-serif text-2xl font-bold text-white sm:text-3xl">
                20+
              </h3>

              <p className="mt-1 text-[10px] uppercase tracking-wider text-gray-300 sm:text-xs">
                Beauty Services
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* =====================================================
          SCROLL INDICATOR
          Desktop only
      ===================================================== */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="
          absolute
          bottom-6
          left-1/2
          hidden
          -translate-x-1/2
          flex-col
          items-center
          gap-2

          lg:flex
        "
      >
        <span className="text-[9px] uppercase tracking-[4px] text-white/50">
          Scroll
        </span>

        <motion.div
          animate={{
            y: [0, 7, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="h-8 w-[1px] bg-[#D4AF37]"
        />
      </motion.div>
    </section>
  );
};

export default Hero;

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import hair1 from "../assets/img/gallery/hairstyle.jpeg";
import hair2 from "../assets/img/gallery/hair2.jpeg";
import hair3 from "../assets/img/gallery/hairSpa.jpeg";
import bridal1 from "../assets/img/gallery/bridal1.jpeg";
import bridal2 from "../assets/img/gallery/partyMakeup.jpeg";
import bridal3 from "../assets/img/gallery/bridal2.jpeg";

const galleryImages = [
  {
    image: hair1,
    title: "Hair Styling",
  },
  {
    image: hair2,
    title: "Hair Color",
  },
  {
    image: hair3,
    title: "Hair Spa",
  },
  {
    image: bridal1,
    title: "Bridal Makeup",
  },
  {
    image: bridal2,
    title: "Party Makeup",
  },
  {
    image: bridal3,
    title: "Luxury Look",
  },
];

const Gallery = () => {
  const sliderRef = useRef(null);

  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  /* =========================
     ARROW SCROLL
  ========================= */

  const scroll = (direction) => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;

    // Mobile = one card
    // Desktop = approximately three cards
    const card = slider.querySelector(".gallery-card");

    if (!card) return;

    const cardWidth = card.offsetWidth;
    const gap = 20;

    const amount = direction === "left" ? -(cardWidth + gap) : cardWidth + gap;

    slider.scrollBy({
      left: amount,
      behavior: "smooth",
    });
  };

  /* =========================
     MOUSE DRAG
  ========================= */

  const handleMouseDown = (e) => {
    if (!sliderRef.current) return;

    setIsDown(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isDown || !sliderRef.current) return;

    e.preventDefault();

    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;

    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-white py-20 md:py-24"
    >
      {/* ================= DECORATIVE GLOW ================= */}

      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#B76E79]/10 blur-[120px]" />

      <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-[#D4AF37]/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        {/* ================= HEADING ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          viewport={{
            once: true,
          }}
          className="mb-12 text-center md:mb-14"
        >
          <p className="text-sm font-semibold uppercase tracking-[5px] text-[#B76E79]">
            Gallery
          </p>

          <h2 className="mt-3 font-serif text-4xl font-bold text-[#241719] md:text-5xl">
            Our Beautiful Work
          </h2>

          {/* Divider */}

          <div className="mx-auto mt-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#D4AF37]/50" />

            <span className="h-2 w-2 rotate-45 bg-[#D4AF37]" />

            <span className="h-px w-10 bg-[#D4AF37]/50" />
          </div>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 md:text-base">
            Explore our premium beauty transformations and discover the Royal
            Touch experience.
          </p>
        </motion.div>

        {/* ================= SLIDER ================= */}

        <div className="flex items-center gap-2 md:gap-5">
          {/* ================= LEFT BUTTON ================= */}

          <button
            type="button"
            onClick={() => scroll("left")}
            aria-label="Previous gallery image"
            className="group flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-[#EEDFE1] bg-white text-[#B76E79] shadow-md transition-all duration-300 hover:bg-[#B76E79] hover:text-white hover:shadow-lg md:h-12 md:w-12"
          >
            <ChevronLeft
              size={22}
              strokeWidth={1.8}
              className="transition-transform duration-300 group-hover:-translate-x-0.5"
            />
          </button>

          {/* ================= IMAGE CONTAINER ================= */}

          <div
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className="gallery-scroll flex min-w-0 flex-1 gap-5 overflow-x-auto scroll-smooth"
          >
            {galleryImages.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                whileHover={{
                  y: -5,
                }}
                className="
                  gallery-card
                  group
                  relative
                  h-[390px]
                  w-full
                  flex-shrink-0
                  overflow-hidden
                  rounded-[26px]
                  shadow-[0_15px_40px_rgba(0,0,0,0.12)]
                  sm:h-[430px]
                  sm:w-[80%]
                  md:h-[400px]
                  md:w-[calc((100%-40px)/3)]
                  lg:h-[440px]
                "
              >
                {/* Image */}

                <img
                  src={item.image}
                  alt={item.title}
                  draggable="false"
                  className="h-full w-full select-none object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                {/* Dark Gradient */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                {/* Gold Border */}

                <div className="pointer-events-none absolute inset-3 rounded-[21px] border border-white/20 transition duration-500 group-hover:border-[#D4AF37]/70" />

                {/* Content */}

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[3px] text-[#D4AF37]">
                    Royal Touch
                  </p>

                  <h3 className="font-serif text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                  {/* Small line */}

                  <div className="mt-3 h-[2px] w-8 bg-[#D4AF37] transition-all duration-500 group-hover:w-14" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* ================= RIGHT BUTTON ================= */}

          <button
            type="button"
            onClick={() => scroll("right")}
            aria-label="Next gallery image"
            className="group flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-[#EEDFE1] bg-white text-[#B76E79] shadow-md transition-all duration-300 hover:bg-[#B76E79] hover:text-white hover:shadow-lg md:h-12 md:w-12"
          >
            <ChevronRight
              size={22}
              strokeWidth={1.8}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </button>
        </div>

        {/* ================= MOBILE SWIPE HINT ================= */}

        <p className="mt-5 text-center text-xs text-gray-400 md:hidden">
          Swipe to explore more
        </p>
      </div>

      {/* ================= HIDE SCROLLBAR ================= */}

      <style>
        {`
          .gallery-scroll {
            scrollbar-width: none;
            -ms-overflow-style: none;
            cursor: grab;
          }

          .gallery-scroll::-webkit-scrollbar {
            display: none;
          }

          .gallery-scroll:active {
            cursor: grabbing;
          }
        `}
      </style>
    </section>
  );
};

export default Gallery;

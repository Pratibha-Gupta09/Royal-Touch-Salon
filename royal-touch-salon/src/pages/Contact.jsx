import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";

const Contact = () => {
  const phoneNumber = "919876543210";

  const whatsappMessage = encodeURIComponent(
    "Hello Royal Touch Salon, I would like to know more about your services.",
  );

  return (
    <section className="bg-gradient-to-b from-[#FFF9F7] to-[#FFF1F4] py-16 md:py-25">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-10 max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[4px] text-[#B76E79]">
            Get In Touch
          </p>

          <h2 className="mt-3 font-serif text-4xl font-bold text-[#241719] md:text-5xl">
            Visit Royal Touch
          </h2>

          <div className="mx-auto mt-5 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-[#D4AF37]/50" />

            <span className="h-2 w-2 rotate-45 bg-[#D4AF37]" />

            <span className="h-px w-10 bg-[#D4AF37]/50" />
          </div>

          <p className="mt-4 text-sm leading-6 text-gray-600 md:text-base">
            We'd love to welcome you for a relaxing and luxurious beauty
            experience.
          </p>
        </motion.div>

        {/* ================= CONTENT ================= */}

        <div className="grid gap-8 lg:grid-cols-2">
          {/* ================= CONTACT DETAILS ================= */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[30px] border border-[#EFDDE0] bg-white p-6 shadow-[0_15px_45px_rgba(183,110,121,0.10)] md:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[3px] text-[#B76E79]">
              Contact Details
            </p>

            <h3 className="mt-2 font-serif text-2xl font-bold text-[#241719] md:text-3xl">
              We'd Love To Hear From You
            </h3>

            {/* Details Grid */}

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {/* Address */}

              <ContactItem
                icon={<FaMapMarkerAlt />}
                title="Visit Us"
                text={
                  <>
                    Your Salon Address Here,
                    <br />
                    Your City, India
                  </>
                }
              />

              {/* Phone */}

              <ContactItem
                icon={<FaPhoneAlt />}
                title="Call Us"
                text={
                  <a
                    href="tel:+919876543210"
                    className="transition hover:text-[#B76E79]"
                  >
                    +91 98765 43210
                  </a>
                }
              />

              {/* Email */}

              <ContactItem
                icon={<FaEnvelope />}
                title="Email Us"
                text={
                  <a
                    href="mailto:royaltouchsalon@gmail.com"
                    className="break-all transition hover:text-[#B76E79]"
                  >
                    royaltouchsalon@gmail.com
                  </a>
                }
              />

              {/* Hours */}

              <ContactItem
                icon={<FaClock />}
                title="Opening Hours"
                text={
                  <>
                    Monday – Sunday
                    <br />
                    10:00 AM – 8:00 PM
                  </>
                }
              />
            </div>

            {/* WhatsApp */}

            <a
              href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 flex w-full items-center justify-center gap-3 rounded-full bg-[#B76E79] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-[#D4AF37] hover:shadow-lg"
            >
              <FaWhatsapp className="text-lg" />
              Chat With Us On WhatsApp
              <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* ================= MAP ================= */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative min-h-[350px] overflow-hidden rounded-[30px] border border-[#EFDDE0] bg-white shadow-[0_15px_45px_rgba(183,110,121,0.10)] md:min-h-[420px]"
          >
            <iframe
              title="Royal Touch Salon Location"
              src="https://www.google.com/maps?q=India&output=embed"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Map Card */}

            <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/40 bg-white/90 p-4 shadow-lg backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-[2px] text-[#B76E79]">
                Royal Touch Salon
              </p>

              <h3 className="mt-1 font-serif text-lg font-bold text-[#241719]">
                Your Beauty Destination
              </h3>

              <p className="mt-1 text-xs text-gray-500">
                Visit us for a luxurious beauty experience.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ================= CONTACT ITEM ================= */

const ContactItem = ({ icon, title, text }) => {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-[#F2E4E6] bg-[#FFF9F8] p-4 transition duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#B76E79]/10 text-sm text-[#B76E79]">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-sm font-semibold text-[#241719]">{title}</p>

        <div className="mt-1 text-xs leading-5 text-gray-500">{text}</div>
      </div>
    </div>
  );
};

export default Contact;

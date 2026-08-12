import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaClock,
  FaPhone,
  FaUser,
  FaWhatsapp,
} from "react-icons/fa";

import { services, timeSlots } from "./appointmentData";

const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 30,
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

const inputClass = (error) =>
  `w-full rounded-xl border bg-[#FFF9FA] py-3.5 outline-none transition-all duration-300
   focus:border-[#B76E79] focus:ring-2 focus:ring-[#B76E79]/10
   ${
     error
       ? "border-red-400 focus:border-red-400 focus:ring-red-100"
       : "border-gray-200"
   }`;

const AppointmentForm = ({
  register,
  errors,
  isSubmitting,
  today,
  submitted,
  handleWhatsApp,
}) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      className="w-full"
    >
      {/* Fields */}
      <div className="grid cols-1 gap-2.5">
        <div className="grid gap-5 md:grid-cols-2">
          {/* Name */}
          <motion.div variants={item}>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-semibold text-[#121212]"
            >
              Your Name
            </label>

            <div className="relative">
              <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#B76E79]" />

              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                {...register("name")}
                className={`${inputClass(errors.name)} pl-11 pr-4`}
              />
            </div>

            {errors.name && (
              <p className="mt-1.5 text-xs text-red-500">
                {errors.name.message}
              </p>
            )}
          </motion.div>

          {/* Phone */}
          <motion.div variants={item}>
            <label
              htmlFor="phone"
              className="mb-2 block text-sm font-semibold text-[#121212]"
            >
              Phone Number
            </label>

            <div className="relative">
              <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-[#B76E79]" />

              <input
                id="phone"
                type="tel"
                maxLength={10}
                placeholder="10-digit phone number"
                {...register("phone")}
                className={`${inputClass(errors.phone)} pl-11 pr-4`}
              />
            </div>

            {errors.phone && (
              <p className="mt-1.5 text-xs text-red-500">
                {errors.phone.message}
              </p>
            )}
          </motion.div>
        </div>
        <div>
          {/* Service */}

          <motion.div variants={item}>
            <label
              htmlFor="service"
              className="mb-2 block text-sm font-semibold text-[#121212]"
            >
              Select Service
            </label>

            <select
              id="service"
              {...register("service")}
              className={`${inputClass(errors.service)} px-4`}
            >
              <option value="">Choose a service</option>

              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>

            {errors.service && (
              <p className="mt-1.5 text-xs text-red-500">
                {errors.service.message}
              </p>
            )}
          </motion.div>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {/* Time */}
          <motion.div variants={item}>
            <label
              htmlFor="time"
              className="mb-2 block text-sm font-semibold text-[#121212]"
            >
              Preferred Time
            </label>

            <div className="relative">
              <FaClock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#B76E79]" />

              <select
                id="time"
                {...register("time")}
                className={`${inputClass(errors.time)} pl-11 pr-4`}
              >
                <option value="">Choose a time</option>

                {timeSlots.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>

            {errors.time && (
              <p className="mt-1.5 text-xs text-red-500">
                {errors.time.message}
              </p>
            )}
          </motion.div>

          {/* Date */}
          <motion.div variants={item}>
            <label
              htmlFor="date"
              className="mb-2 block text-sm font-semibold text-[#121212]"
            >
              Preferred Date
            </label>

            <div className="relative">
              <FaCalendarAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-[#B76E79]" />

              <input
                id="date"
                type="date"
                min={today}
                {...register("date")}
                className={`${inputClass(errors.date)} pl-11 pr-4`}
              />
            </div>

            {errors.date && (
              <p className="mt-1.5 text-xs text-red-500">
                {errors.date.message}
              </p>
            )}
          </motion.div>
        </div>
        <div>
          {/* Message */}
          <motion.div variants={item} className="md:col-span-2">
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-semibold text-[#121212]"
            >
              Message{" "}
              <span className="font-normal text-gray-400">(Optional)</span>
            </label>

            <textarea
              id="message"
              rows={3}
              placeholder="Anything you'd like us to know?"
              {...register("message")}
              className={`w-full resize-none rounded-xl border bg-[#FFF9FA] px-4 py-3.5 outline-none transition-all duration-300 focus:border-[#B76E79] focus:ring-2 focus:ring-[#B76E79]/10 ${
                errors.message ? "border-red-400" : "border-gray-200"
              }`}
            />

            {errors.message && (
              <p className="mt-1.5 text-xs text-red-500">
                {errors.message.message}
              </p>
            )}
          </motion.div>
        </div>
      </div>

      {/* Buttons */}
      <motion.div
        variants={item}
        className="mt-7 flex justify-around flex-col gap-3 sm:flex-row"
      >
        {/* Confirm */}
        <motion.button
          type="submit"
          whileHover={{
            y: -2,
            boxShadow: "0 12px 30px rgba(183,110,121,0.25)",
          }}
          whileTap={{
            scale: 0.97,
          }}
          disabled={isSubmitting}
          className="w-full rounded-full bg-[#B76E79] px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-[#D4AF37] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {isSubmitting ? "Booking..." : "Confirm Appointment"}
        </motion.button>

        {/* WhatsApp */}
        <motion.button
          type="button"
          whileHover={{
            y: -2,
          }}
          whileTap={{
            scale: 0.97,
          }}
          onClick={handleWhatsApp}
          className="flex w-full items-center justify-center gap-2 rounded-full border border-[#B76E79] px-7 py-3.5 font-semibold text-[#B76E79] transition-all duration-300 hover:bg-[#B76E79] hover:text-white sm:w-auto"
        >
          <FaWhatsapp className="text-lg" />
          Book via WhatsApp
        </motion.button>
      </motion.div>

      {/* Success Message */}
      {submitted && (
        <motion.div
          initial={{
            opacity: 0,
            y: 15,
            scale: 0.98,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          className="mt-5 rounded-xl border border-green-200 bg-green-50 p-4 text-center text-sm font-medium text-green-700"
        >
          ✓ Your appointment request has been submitted successfully!
        </motion.div>
      )}
    </motion.div>
  );
};

export default AppointmentForm;

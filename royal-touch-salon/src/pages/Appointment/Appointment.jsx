import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import AppointmentForm from "./AppointmentForm";
import { appointmentSchema } from "./appointmentData";
import { createAppointment } from "../../api/appointmentApi";

import appointmentImg from "../../assets/img/salon/salon1.jpeg";

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

const Appointment = () => {
  const [submitted, setSubmitted] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      name: "",
      phone: "",
      service: "",
      date: "",
      time: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    setSubmitted(false);

    try {
      await createAppointment(data);

      setSubmitted(true);
      reset();
    } catch (error) {
      console.error("Appointment booking failed:", error);

      alert("Failed to book appointment. Please try again.");
    }
  };

  const handleWhatsApp = () => {
    const data = getValues();

    const result = appointmentSchema.safeParse(data);

    if (!result.success) {
      alert("Please fill all required fields correctly before using WhatsApp.");
      return;
    }

    const message = `
Hello Royal Touch Salon 👋

I would like to book an appointment.

Name: ${data.name}
Phone: ${data.phone}
Service: ${data.service}
Date: ${data.date}
Time: ${data.time}
${data.message ? `Message: ${data.message}` : ""}
`;

    const whatsappNumber = "917398661842";

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message,
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="bg-[#FFF9FA] px-4 py-25 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-8 text-center"
        >
          <motion.p
            variants={item}
            className="font-semibold uppercase tracking-[5px] text-[#B76E79]"
          >
            Book Your Visit
          </motion.p>

          <motion.h2
            variants={item}
            className="mt-3 text-4xl font-bold text-[#121212] md:text-5xl"
          >
            Reserve Your Appointment
          </motion.h2>
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
            className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600"
          >
            Give yourself the beauty experience you deserve. Choose your
            preferred service, date and time.
          </motion.p>
        </motion.div>

        {/* Main Appointment Card */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto grid max-w-6xl overflow-hidden rounded-[2rem] border border-[#B76E79]/10 bg-white shadow-[0_20px_70px_rgba(183,110,121,0.12)] lg:grid-cols-[0.8fr_1.2fr]"
        >
          {/* Image */}
          <div className="relative min-h-[420px] overflow-hidden lg:min-h-full">
            <img
              src={appointmentImg}
              alt="Royal Touch Beauty Salon"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* Image Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[4px] text-[#D4AF37]">
                Royal Touch Salon
              </p>

              <h3 className="mt-3 font-serif text-3xl font-bold md:text-4xl">
                Your Beauty,
                <br />
                Your Moment.
              </h3>

              <p className="mt-4 max-w-sm text-sm leading-6 text-white/80">
                Relax, refresh and let our beauty experts create a look that
                makes you feel confident and beautiful.
              </p>
              <div className="mt-6 flex gap-8">
                <div>
                  <p className="text-2xl font-bold text-[#D4AF37]">1000+</p>

                  <p className="text-xs text-white/70">Happy Clients</p>
                </div>

                <div>
                  <p className="text-2xl font-bold text-[#D4AF37]">10+</p>

                  <p className="text-xs text-white/70">Years Experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="p-6 sm:p-10"
          >
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <AppointmentForm
                register={register}
                errors={errors}
                isSubmitting={isSubmitting}
                today={today}
                submitted={submitted}
                handleWhatsApp={handleWhatsApp}
              />
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Appointment;

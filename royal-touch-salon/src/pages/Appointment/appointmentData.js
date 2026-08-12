import { z } from "zod";

// Services
export const services = [
  "Hair Styling",
  "Hair Color",
  "Bridal Makeup",
  "Facial & Spa",
  "Nail Art",
  "Skin Care",
];

// Time Slots
export const timeSlots = [
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
  "07:00 PM",
];

// Validation
export const appointmentSchema = z.object({
  name: z.string().trim().min(3, "Name must be at least 3 characters."),

  phone: z
    .string()
    .trim()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit phone number."),

  service: z.string().min(1, "Please select a service."),

  date: z.string().min(1, "Please select a date."),

  time: z.string().min(1, "Please select a time."),

  message: z
    .string()
    .max(500, "Message cannot exceed 500 characters.")
    .optional(),
});

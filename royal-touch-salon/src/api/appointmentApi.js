import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const createAppointment = async (data) => {
  const response = await axios.post(`${API_URL}/appointments`, data);

  return response.data;
};

import { useEffect, useState } from "react";
import {
  CalendarDays,
  Clock3,
  CheckCircle2,
  CircleCheck,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import axiosInstance from "../api/axiosInstance";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axiosInstance.get("/appointments");

        setAppointments(response.data.appointments || []);
      } catch (error) {
        console.error("Failed to fetch appointments:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  const totalAppointments = appointments.length;

  const pendingAppointments = appointments.filter(
    (appointment) => appointment.status === "pending",
  ).length;

  const confirmedAppointments = appointments.filter(
    (appointment) => appointment.status === "confirmed",
  ).length;

  const completedAppointments = appointments.filter(
    (appointment) => appointment.status === "completed",
  ).length;

  const stats = [
    {
      title: "Total Appointments",
      value: totalAppointments,
      icon: CalendarDays,
      iconBg: "bg-[#B76E79]/10",
      iconColor: "text-[#B76E79]",
    },
    {
      title: "Pending",
      value: pendingAppointments,
      icon: Clock3,
      iconBg: "bg-amber-50",
      iconColor: "text-amber-600",
    },
    {
      title: "Confirmed",
      value: confirmedAppointments,
      icon: CheckCircle2,
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600",
    },
    {
      title: "Completed",
      value: completedAppointments,
      icon: CircleCheck,
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
    },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "confirmed":
        return "bg-emerald-50 text-emerald-700";

      case "completed":
        return "bg-blue-50 text-blue-700";

      case "cancelled":
        return "bg-red-50 text-red-700";

      default:
        return "bg-amber-50 text-amber-700";
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="text-center">
          <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-gray-200 border-t-[#B76E79]" />

          <p className="mt-3 text-sm text-gray-500">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[1600px]">
      {/* Header */}
      <div className="mb-8">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[2px] text-[#B76E79]">
          Overview
        </p>

        <h1 className="text-2xl font-semibold tracking-tight text-[#121212] sm:text-3xl">
          Dashboard
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Overview of your salon appointments
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    {stat.title}
                  </p>

                  <h2 className="mt-3 text-3xl font-semibold text-[#121212]">
                    {stat.value}
                  </h2>
                </div>

                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${stat.iconBg}`}
                >
                  <Icon size={22} className={stat.iconColor} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Appointments */}
      <div className="mt-8 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
        {/* Header */}
        <div className="flex flex-col gap-4 border-b border-gray-100 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-[#121212]">
              Recent Appointments
            </h2>

            <p className="mt-1 text-sm text-gray-500">Latest salon bookings</p>
          </div>

          <button
            onClick={() => navigate("/admin/appointments")}
            className="flex w-fit items-center gap-2 text-sm font-semibold text-[#B76E79] transition hover:text-[#965865]"
          >
            View All
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Empty */}
        {appointments.length === 0 ? (
          <div className="px-6 py-16 text-center">
            <CalendarDays size={38} className="mx-auto text-gray-300" />

            <p className="mt-3 text-sm font-medium text-gray-500">
              No appointments yet
            </p>

            <p className="mt-1 text-xs text-gray-400">
              New bookings will appear here.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="bg-gray-50/70 text-left text-xs uppercase tracking-wide text-gray-500">
                  <th className="px-6 py-4 font-semibold">Customer</th>

                  <th className="px-6 py-4 font-semibold">Service</th>

                  <th className="px-6 py-4 font-semibold">Date</th>

                  <th className="px-6 py-4 font-semibold">Time</th>

                  <th className="px-6 py-4 font-semibold">Status</th>
                </tr>
              </thead>

              <tbody>
                {appointments
                  .slice(-5)
                  .reverse()
                  .map((appointment) => (
                    <tr
                      key={appointment._id}
                      className="border-t border-gray-100 transition hover:bg-[#B76E79]/[0.02]"
                    >
                      <td className="px-6 py-5">
                        <p className="font-medium text-[#121212]">
                          {appointment.name}
                        </p>
                      </td>

                      <td className="px-6 py-5 text-sm text-gray-600">
                        {appointment.service}
                      </td>

                      <td className="px-6 py-5 text-sm text-gray-600">
                        {appointment.date}
                      </td>

                      <td className="px-6 py-5 text-sm text-gray-600">
                        {appointment.time}
                      </td>

                      <td className="px-6 py-5">
                        <span
                          className={`inline-flex rounded-full px-3 py-1.5 text-xs font-semibold capitalize ${getStatusStyle(
                            appointment.status,
                          )}`}
                        >
                          {appointment.status}
                        </span>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;

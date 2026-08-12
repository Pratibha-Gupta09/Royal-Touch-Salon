import { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";
import toast from "react-hot-toast";

const AdminAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const fetchAppointments = async () => {
    try {
      const response = await axiosInstance.get("/appointments");

      setAppointments(response.data.appointments || []);
    } catch (error) {
      console.error(error);

      setError(error.response?.data?.message || "Failed to fetch appointments");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const filteredAppointments = appointments.filter((appointment) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      appointment.name?.toLowerCase().includes(searchText) ||
      appointment.phone?.toLowerCase().includes(searchText) ||
      appointment.service?.toLowerCase().includes(searchText);

    const matchesStatus =
      statusFilter === "all" || appointment.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // Update appointment status
  const updateStatus = async (id, status) => {
    try {
      await axiosInstance.put(`/appointments/${id}`, {
        status,
      });

      setAppointments((prevAppointments) =>
        prevAppointments.map((appointment) =>
          appointment._id === id ? { ...appointment, status } : appointment,
        ),
      );

      toast.success(`Appointment ${status} successfully`);
    } catch (error) {
      console.error(error);

      toast.error(
        error.response?.data?.message || "Failed to update appointment",
      );
    }
  };

  // Delete appointment
  const deleteAppointment = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this appointment?",
    );

    if (!confirmed) return;

    try {
      await axiosInstance.delete(`/appointments/${id}`);

      setAppointments((prevAppointments) =>
        prevAppointments.filter((appointment) => appointment._id !== id),
      );

      toast.success("Appointment deleted successfully");
    } catch (error) {
      console.error(error);

      toast.error(
        error.response?.data?.message || "Failed to delete appointment",
      );
    }
  };

  if (loading) {
    return (
      <div>
        <h2 className="text-2xl font-bold text-[#121212]">Appointments</h2>

        <p className="mt-4 text-gray-500">Loading appointments...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h2 className="text-2xl font-bold text-[#121212]">Appointments</h2>

        <p className="mt-4 text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-[#121212]">Appointments</h2>

        <p className="mt-1 text-sm text-gray-500">Manage salon appointments</p>
      </div>

      <div className="mb-6 flex flex-col gap-3 sm:flex-row">
        {/* Search */}
        <input
          type="text"
          placeholder="Search by name, phone or service..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#B76E79] sm:flex-1"
        />

        {/* Status Filter */}
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#B76E79]"
        >
          <option value="all">All Status</option>
          <option value="pending">Pending</option>
          <option value="confirmed">Confirmed</option>
          <option value="completed">Completed</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-2xl bg-white shadow-sm">
        <table className="w-full min-w-[1100px]">
          <thead>
            <tr className="border-b text-left text-sm text-gray-500">
              <th className="px-6 py-4">Customer</th>
              <th className="px-6 py-4">Phone</th>
              <th className="px-6 py-4">Service</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Time</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {appointments.length === 0 ? (
              <tr>
                <td
                  colSpan="7"
                  className="px-6 py-10 text-center text-gray-500"
                >
                  No appointments found.
                </td>
              </tr>
            ) : (
              filteredAppointments.map((appointment) => (
                <tr key={appointment._id} className="border-b last:border-none">
                  <td className="px-6 py-4 font-medium text-[#121212]">
                    {appointment.name}
                  </td>

                  <td className="px-6 py-4 text-gray-600">
                    {appointment.phone}
                  </td>

                  <td className="px-6 py-4 text-gray-600">
                    {appointment.service}
                  </td>

                  <td className="px-6 py-4 text-gray-600">
                    {appointment.date}
                  </td>

                  <td className="px-6 py-4 text-gray-600">
                    {appointment.time}
                  </td>

                  {/* Status */}
                  <td className="px-6 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold capitalize ${
                        appointment.status === "confirmed"
                          ? "bg-green-100 text-green-700"
                          : appointment.status === "completed"
                            ? "bg-blue-100 text-blue-700"
                            : appointment.status === "cancelled"
                              ? "bg-red-100 text-red-700"
                              : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {appointment.status}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-2">
                      {appointment.status === "pending" && (
                        <>
                          <button
                            onClick={() =>
                              updateStatus(appointment._id, "confirmed")
                            }
                            className="rounded-lg bg-green-600 px-3 py-2 text-xs font-semibold text-white hover:bg-green-700"
                          >
                            Confirm
                          </button>

                          <button
                            onClick={() =>
                              updateStatus(appointment._id, "cancelled")
                            }
                            className="rounded-lg bg-red-500 px-3 py-2 text-xs font-semibold text-white hover:bg-red-600"
                          >
                            Cancel
                          </button>
                        </>
                      )}

                      {appointment.status === "confirmed" && (
                        <>
                          <button
                            onClick={() =>
                              updateStatus(appointment._id, "completed")
                            }
                            className="rounded-lg bg-blue-600 px-3 py-2 text-xs font-semibold text-white hover:bg-blue-700"
                          >
                            Complete
                          </button>

                          <button
                            onClick={() =>
                              updateStatus(appointment._id, "cancelled")
                            }
                            className="rounded-lg bg-red-500 px-3 py-2 text-xs font-semibold text-white hover:bg-red-600"
                          >
                            Cancel
                          </button>
                        </>
                      )}

                      <button
                        onClick={() => deleteAppointment(appointment._id)}
                        className="rounded-lg border border-gray-200 px-3 py-2 text-xs font-semibold text-gray-600 hover:bg-gray-100"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminAppointments;

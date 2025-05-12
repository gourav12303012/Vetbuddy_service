import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../Navbar";

export default function UserDashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userAppointment, setUserAppointment] = useState([]);
  const [doctor, setDoctor] = useState([]);
  const [client, setClient] = useState([]);
  const [drClientList, setDrClientList] = useState([]);
  const [alert, setAlert] = useState({ show: false, message: "", type: "" });
  const { id } = useParams();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/user/dashboard/${id}`);
        setUser(response.data.user);
        setLoading(false);
        console.log(response.data.user)
      } catch (error) {
        console.error("Error fetching user:", error);
        setLoading(false);
      }
    };
    fetchUserData();
  }, [id]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await axios.get("http://localhost:5000/user/userAllAppointment");
        const appointmentList = res.data.list.filter((appi) => appi.userId === id);
        setUserAppointment(appointmentList);

        const doctorAppointments = res.data.list.filter((appi) => appi.DoctorName === id);
        setDrClientList(doctorAppointments);
      } catch (error) {
        console.log("Server did not respond:", error);
      }
    };
    fetchAppointments();
  }, [id]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/user/allUser");
        const doctorList = response.data.user.filter((user) => user.role === "Doctor");
        setDoctor(doctorList);

        const clientList = response.data.user.filter((user) => user.role === "Client");
        setClient(clientList);
      } catch (error) {
        console.error("Login error:", error);
      }
    };
    fetchUsers();
  }, []);

  const handleStatusUpdate = async (appointmentId, newStatus) => {
    try {
      const response = await axios.put(`http://localhost:5000/user/updateAppointmentStatus/${appointmentId}`, {
        status: newStatus
      });

      if (response.data.success) {
        // Update local state
        const updatedAppointments = userAppointment.map(appointment => 
          appointment._id === appointmentId 
            ? { ...appointment, status: newStatus }
            : appointment
        );
        setUserAppointment(updatedAppointments);

        // Show success alert
        setAlert({
          show: true,
          message: "Appointment status updated successfully!",
          type: "success"
        });
      }
    } catch (error) {
      console.error("Error updating status:", error);
      setAlert({
        show: true,
        message: "Failed to update appointment status. Please try again.",
        type: "error"
      });
    }

    // Hide alert after 3 seconds
    setTimeout(() => {
      setAlert({ show: false, message: "", type: "" });
    }, 3000);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-200 to-blue-300">
        <div className="text-xl font-semibold text-gray-700 animate-pulse">Loading...</div>
      </div>
    );
  }

  const appointmentsToShow = user?.role === "Client" ? userAppointment : drClientList;

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 via-blue-100 to-purple-200">
      <Navbar />
      {/* Alert Message */}
      {alert.show && (
        <div className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 ${
          alert.type === "success" ? "bg-green-500" : "bg-red-500"
        } text-white`}>
          {alert.message}
        </div>
      )}
      <div className="container mx-auto px-4 py-8">
        {/* Profile Section */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-green-700 mb-2 drop-shadow-md">
            🌿 Welcome, {user?.name || "User"}!
          </h1>
          <p className="text-lg text-blue-600">
            View your profile details, check appointments, and manage your dashboard with ease.
          </p>
        </div>

        <div className="grid gap-8">
          <div className="bg-white rounded-xl shadow-xl p-6 border border-green-200">
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">🌳 Profile Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="text-green-700"><span className="font-medium">Name:</span> {user.name}</p>
                <p className="text-green-700"><span className="font-medium">Email:</span> {user.email}</p>
                <p className="text-green-700"><span className="font-medium">Phone:</span> {user.phone}</p>
              </div>
              <div className="space-y-2">
                <p className="text-green-700"><span className="font-medium">Role:</span> {user.role}</p>
                {user.education && (
                  <p className="text-green-700"><span className="font-medium">Education:</span> {user.education}</p>
                )}
                {user.specialization && (
                  <p className="text-green-700"><span className="font-medium">Specialization:</span> {user.specialization}</p>
                )}
                {user.experience && (
                  <p className="text-green-700"><span className="font-medium">Experience:</span> {user.experience}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Appointment Table */}
        <div className="bg-white rounded-xl shadow-xl p-6 border border-emerald-200 mt-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-emerald-800">📗 Appointment History</h2>
            <Link
              to={`/appointementbook/${id}`}
              className="bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white px-4 py-2 rounded-full shadow-md transition-transform transform hover:scale-105"
            >
              🍀 New Appointment
            </Link>
          </div>

          {appointmentsToShow.length > 0 ? (
            <div className="overflow-x-auto rounded-xl border border-emerald-50">
              <table className="min-w-full divide-y divide-emerald-100">
                <thead className="bg-gradient-to-r from-emerald-100 to-cyan-100">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-emerald-800 uppercase tracking-wider">Animal</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-emerald-800 uppercase tracking-wider">Reason</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-emerald-800 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-emerald-800 uppercase tracking-wider">
                      {user?.role === "Client" ? "Doctor" : "Client"}
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-emerald-800 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-emerald-50">
                  {appointmentsToShow.map((data, index) => {
                    const matchedPerson = user.role === "Client"
                      ? doctor.find((d) => d._id === data.DoctorName)
                      : client.find((d) => d._id === data.userId);

                    return (
                      <tr key={index} className="hover:bg-emerald-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-emerald-900">{data.animalName}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-emerald-700">{data.reason}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-emerald-700">
                          {new Date(data.dateTime).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-emerald-700">
                          {matchedPerson ? (
                            <div className="space-y-1">
                              <div className="font-medium text-emerald-900">{matchedPerson.name}</div>
                              {matchedPerson.specialization && (
                                <div className="text-xs text-emerald-500">{matchedPerson.specialization}</div>
                              )}
                              <div className="text-xs text-emerald-400">{matchedPerson.phone}</div>
                            </div>
                          ) : ("N/A")}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {user?.role === "Client" ? (
                            <span className={`px-2.5 py-1.5 inline-flex text-xs leading-4 font-medium rounded-full ${
                              data.status === "accept" ? "bg-green-100 text-green-800" :
                              data.status === "reject" ? "bg-red-100 text-red-800" :
                              data.status === "book again" ? "bg-yellow-100 text-yellow-800" :
                              "bg-cyan-100 text-cyan-800"
                            }`}>
                              {data.status.charAt(0).toUpperCase() + data.status.slice(1)}
                            </span>
                          ) : (
                            <span className="px-2.5 py-1.5 inline-flex text-xs leading-4 font-medium rounded-full bg-cyan-100 text-cyan-800">
                              <select 
                                value={data.status}
                                onChange={(e) => handleStatusUpdate(data._id, e.target.value)}
                                className="bg-transparent border-none focus:outline-none"
                              >
                                <option value="pending">Pending</option>
                                <option value="accept">Approved</option>
                                <option value="reject">Rejected</option>
                                <option value="book again">Book again</option>
                              </select>
                            </span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-emerald-500 italic">No appointments booked yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

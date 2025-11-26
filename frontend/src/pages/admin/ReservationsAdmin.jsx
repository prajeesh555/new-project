import React from "react";
import { useRestaurant } from "../../context/RestaurantContext";
import { Calendar, Users, Clock } from "lucide-react";
import { toast } from "../../hooks/use-toast";

const ReservationsAdmin = () => {
  const { allReservations, updateReservationStatus } = useRestaurant();

  const handleStatusUpdate = (id, status) => {
    updateReservationStatus(id, status);
    toast({ title: `Reservation ${status}` });
  };

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "Confirmed":
        return "bg-success-subtle text-success";
      case "Cancelled":
        return "bg-danger-subtle text-danger";
      default:
        return "bg-warning-subtle text-warning";
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-4">
        <h1 className="fw-bold fs-3">Reservations</h1>
        <p className="text-muted">Manage table bookings and reservations</p>
      </div>

      {allReservations.length === 0 ? (
        <p className="text-center text-muted">No reservations available.</p>
      ) : (
        <div className="row g-4">
          {allReservations.map((reservation) => (
            <div key={reservation.id} className="col-md-6">
              <div
                className="card shadow-sm border-start border-4"
                style={{ borderColor: "#D4724B" }}
              >
                <div className="card-body">

                  {/* Top Section */}
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div>
                      <h4 className="fw-semibold mb-1">{reservation.customerName}</h4>
                      <span className={`badge px-3 py-2 rounded-pill ${getStatusBadgeClass(reservation.status)}`}>
                        {reservation.status}
                      </span>
                    </div>
                    <span className="text-muted small">#{reservation.id}</span>
                  </div>

                  {/* Details */}
                  <div className="d-flex align-items-center gap-2 text-muted mb-2">
                    <Calendar size={18} className="text-warning" />
                    <span>{reservation.date}</span>
                  </div>
                  <div className="d-flex align-items-center gap-2 text-muted mb-2">
                    <Clock size={18} className="text-warning" />
                    <span>{reservation.time}</span>
                  </div>
                  <div className="d-flex align-items-center gap-2 text-muted mb-3">
                    <Users size={18} className="text-warning" />
                    <span>{reservation.guests} Guests</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="d-flex gap-2 mt-3">
                    {reservation.status === "Pending" && (
                      <>
                        <button
                          className="btn text-white flex-fill"
                          style={{ background: "#D4724B" }}
                          onClick={() => handleStatusUpdate(reservation.id, "Confirmed")}
                        >
                          Confirm
                        </button>
                        <button
                          className="btn btn-outline-secondary flex-fill"
                          onClick={() => handleStatusUpdate(reservation.id, "Cancelled")}
                        >
                          Cancel
                        </button>
                      </>
                    )}

                    {reservation.status === "Confirmed" && (
                      <button className="btn btn-outline-secondary w-100">
                        View Details
                      </button>
                    )}

                    {reservation.status === "Cancelled" && (
                      <button className="btn btn-outline-secondary w-100" disabled>
                        Cancelled
                      </button>
                    )}
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReservationsAdmin;

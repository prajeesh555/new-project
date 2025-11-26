import React from "react";
import { stats } from "../../data/mockData";
import { TrendingUp } from "lucide-react";

const Dashboard = () => {
  const recentOrders = [
    { id: "ORD001", customer: "John Doe", amount: 65, status: "Pending" },
    { id: "ORD002", customer: "Jane Smith", amount: 48, status: "Completed" },
    { id: "ORD003", customer: "Mike Johnson", amount: 120, status: "Processing" },
  ];

  const statusBadgeClass = (status) => {
    switch (status) {
      case "Completed":
        return "badge bg-success";
      case "Processing":
        return "badge bg-primary";
      default:
        return "badge bg-warning text-dark";
    }
  };

  return (
    <div className="container-fluid">
      {/* Header */}
      <div className="mb-4">
        <h1 className="fw-bold text-dark">Dashboard</h1>
        <p className="text-muted">Welcome back! Here's your restaurant overview.</p>
      </div>

      {/* Stats Cards */}
      <div className="row g-4 mb-4">
        {stats.map((stat, index) => (
          <div className="col-12 col-md-6 col-lg-3" key={index}>
            <div className="card shadow-sm border-0 h-100">
              <div
                className="card-body border-start"
                style={{ borderLeft: "4px solid #D4724B" }}
              >
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div style={{ fontSize: "32px" }}>{stat.icon}</div>
                  <TrendingUp size={20} color="green" />
                </div>
                <h3 className="fw-bold m-0">{stat.value}</h3>
                <p className="text-muted mb-0">{stat.label}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Orders Table */}
      <div className="card shadow-sm">
        <div className="card-body">
          <h2 className="fw-bold mb-4">Recent Orders</h2>
          <div className="table-responsive">
            <table className="table align-middle">
              <thead className="table-light">
                <tr>
                  <th scope="col">Order ID</th>
                  <th scope="col">Customer</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id}>
                    <td className="fw-semibold">{order.id}</td>
                    <td>{order.customer}</td>
                    <td className="fw-bold">${order.amount}</td>
                    <td>
                      <span className={statusBadgeClass(order.status)}>
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import React from 'react';
import { useRestaurant } from '../../context/RestaurantContext';
import { Eye } from 'lucide-react';
import { toast } from '../../hooks/use-toast';

const Orders = () => {
  const { allOrders, updateOrderStatus } = useRestaurant();

  const handleStatusChange = (orderId, newStatus) => {
    updateOrderStatus(orderId, newStatus);
    toast({ title: `Order status updated to ${newStatus}` });
  };

  const getStatusClasses = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-success-subtle text-success fw-semibold';
      case 'Processing':
        return 'bg-primary-subtle text-primary fw-semibold';
      default:
        return 'bg-warning-subtle text-warning fw-semibold';
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="mb-4">
        <h1 className="fw-bold fs-3">Orders Management</h1>
        <p className="text-muted">Track and manage customer orders</p>
      </div>

      {/* Orders Table */}
      <div className="card shadow-sm">
        <div className="table-responsive">
          <table className="table align-middle">
            <thead className="table-light">
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Items</th>
                <th>Total</th>
                <th>Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {allOrders.length === 0 ? (
                <tr>
                  <td colSpan="7" className="text-center py-4 text-muted">
                    No orders available
                  </td>
                </tr>
              ) : (
                allOrders.map((order) => (
                  <tr key={order.id}>
                    <td className="fw-semibold">{order.id}</td>
                    <td>{order.customerName}</td>
                    <td>
                      {Array.isArray(order.items)
                        ? order.items.join(', ')
                        : order.items}
                    </td>
                    <td className="fw-bold">${order.total}</td>
                    <td className="text-muted small">{order.date}</td>

                    {/* Status Select */}
                    <td>
                      <select
                        value={order.status}
                        onChange={(e) =>
                          handleStatusChange(order.id, e.target.value)
                        }
                        className={`form-select form-select-sm ${getStatusClasses(
                          order.status
                        )}`}
                        style={{ width: '130px' }}
                      >
                        <option value="Pending">Pending</option>
                        <option value="Processing">Processing</option>
                        <option value="Completed">Completed</option>
                      </select>
                    </td>

                    {/* View Button */}
                    <td>
                      <button className="btn btn-light btn-sm">
                        <Eye size={16} />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;

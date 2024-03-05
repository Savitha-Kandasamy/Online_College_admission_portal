
import '../assets/css/AdminSidebar.css';

const AdminSidebar = () => {
  return (
    <div className="admin-sidebar">
      <h2>Admin Panel</h2>
      <ul>
        <li>Dashboard</li>
        <li>Users</li>
        <li>Products</li>
        <li>Orders</li>
        <li>Settings</li>
      </ul>
    </div>
  );
};

export default AdminSidebar;

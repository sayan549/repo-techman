import { useEffect, useState } from 'react';
import AdminNavbar from '../components/AdminNavbar';
import Sidebar from '../components/Sidebar';

const Contacts = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/contacts`)
      .then(async (res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setUsers(data);
        } else if (Array.isArray(data.users)) {
          setUsers(data.users);
        } else {
          setUsers([]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Failed to fetch contacts:', error);
        setUsers([]);
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <AdminNavbar />
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">User Contacts</h2>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ul>
              {users.map((user) => (
                <li key={user._id} className="mb-4 p-4 border rounded">
                  <p><strong>Full Name:</strong> {user.fullName}</p>
                  <p><strong>Organisation:</strong> {user.organisationName}</p>
                  <p><strong>Phone:</strong> {user.phoneNumber}</p>
                  <p><strong>Email:</strong> {user.email}</p>
                  <p><strong>Service:</strong> {user.services}</p>
                  <p><strong>Description:</strong> {user.briefDescription}</p>
                  <p><strong>Submitted At:</strong> {new Date(user.createdAt).toLocaleString()}</p>
                </li>
              ))}
            </ul>

          )}
        </div>
      </div>
    </div>
  );
};

export default Contacts;

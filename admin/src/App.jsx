import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Admin pages
import AdminDashboard from './pages/index';
import Projects from './pages/projects';

import Contacts from './pages/contacts';
import Login from './pages/login';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/projects" element={<Projects />} />

        <Route path="/admin/contacts" element={<Contacts />} />
        <Route path="/admin/login" element={<Login />} />

        {/* Redirect unknown routes to admin login */}
        <Route path="*" element={<Navigate to="/admin/login" />} />
      </Routes>
    </Router>
  );
};

export default App;

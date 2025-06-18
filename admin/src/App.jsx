import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Admin pages
import AdminDashboard from './pages/index';
import Projects from './pages/projects';

import Contacts from './pages/contacts';
import Login from './pages/login';

const App = () => {
  return (
    <Router>
      <Routes basename="/">
        {/* Admin Routes */}
        <Route path="/" element={<AdminDashboard />} />
        <Route path="projects" element={<Projects />} />

        <Route path="contacts" element={<Contacts />} />
        <Route path="/login" element={<Login />} />

        {/* Redirect unknown routes to admin login */}
        <Route path="*" element={<Navigate to="/admin/login" />} />
      </Routes>
    </Router>
  );
};

export default App;

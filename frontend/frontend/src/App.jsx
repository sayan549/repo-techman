import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

import IndexPage from './pages/index.jsx';
import ServicesPage from './pages/services.jsx';
import PortfolioPage from './pages/portfolio.jsx';
import AboutPage from './pages/about.jsx';
import ContactPage from './pages/contact.jsx';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <Router>
      <Navbar />
      <main className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* Optional: a catch-all for 404 */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

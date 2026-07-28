import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Work from './pages/Work';
import Foundation from './pages/Foundation';
import About from './pages/About';
import Experience from './pages/Experience';
import Writing from './pages/Writing';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <div key={location.pathname} className="route-transition">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/foundation" element={<Foundation />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/about" element={<About />} />
        {/* The projects page was renamed; keep old links alive. */}
        <Route path="/projects" element={<Navigate to="/work" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <Layout>
      <AnimatedRoutes />
    </Layout>
  );
}

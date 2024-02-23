import './styles/main.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from 'components/navbar/Navbar';
import Footer from 'components/footer/Footer';
import Project from 'pages/Project';
import Home from 'pages/Home';
import Projects from 'pages/Prodjects';
import Contacts from 'pages/Contacts';
import ScrollToTop from 'utils/ScrollToTop';

export const App = () => {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

import './styles/main.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from 'components/navbar/Navbar';
import Footer from 'components/footer/Footer';
import Project from 'pages/Project';
import Home from 'pages/Home';
import Projects from 'pages/Prodjects';
import Contacts from 'pages/Contacts';

export const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

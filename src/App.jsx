import './styles/main.css';

import Navbar from 'components/navbar/Navbar';
import Footer from 'components/footer/Footer';
// import Home from 'pages/Home';
import Projects from 'pages/Prodjects';
// import Contacts from 'pages/Contacts';

export const App = () => {
  return (
    <div className="App">
      <Navbar />
      {/* <Home /> */}
      <Projects/>
      {/* <Contacts/> */}
      <Footer />
    </div>
  );
};

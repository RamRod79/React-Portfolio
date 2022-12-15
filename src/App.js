import { useState } from 'react';

import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Portfolio from './pages/Portfolio/Index';
import Resume from './pages/Resume/Resume';



function App() {
  const [currentPage, setCurrentPage] = useState("about");
  // about, portfolio, contact
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Contact />;
        case 'resume':
          return <Resume />;
      default:
        return <About />;
    }
  }

  return (
    <>
      <Header 
      setCurrentPage={setCurrentPage}
      />
      {renderCurrentPage()}
      <Footer />
    </>
  );
}

export default App;

import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // Import the new Footer
import Home from './pages/Home';
import About from './pages/About';
import Market from './pages/Market';
import Developer from './pages/Developer';
import Contact from './pages/Contact';
import favicon from './assets/coin.png'; // Your favicon

const App: React.FC = () => {
  useEffect(() => {
    const link = document.querySelector(
      "link[rel*='icon']"
    ) as HTMLLinkElement | null;
    if (link) {
      link.href = favicon;
    } else {
      const newLink = document.createElement('link');
      newLink.rel = 'icon';
      newLink.href = favicon;
      document.head.appendChild(newLink);
    }
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/market" element={<Market />} />
            <Route path="/developer" element={<Developer />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer /> {/* Add Footer here */}
      </div>
    </Router>
  );
};

export default App;

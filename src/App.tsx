import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Market from './pages/Market';
import Developer from './pages/Developer';
import Contact from './pages/Contact';
import favicon from './assets/coin.png'; // Adjust the path and extension

const App: React.FC = () => {
  useEffect(() => {
    // Dynamically set the favicon
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
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/market" element={<Market />} />
            <Route path="/developer" element={<Developer />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

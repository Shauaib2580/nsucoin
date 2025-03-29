import { NavLink } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white p-10 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Copyright */}
        <p className="text-center md:text-left mb-4 md:mb-0 text-lg">
          © 2025 All rights reserved by
          <a
            href="https://www.linkedin.com/in/shauaib-siddique-shawon/"
            className="text-yellow-400 ml-3"
          >
            Shauaib Siddique Shawon
          </a>
        </p>

        {/* Useful Links */}
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
          <a
            href="https://www.linkedin.com/in/shauaib-siddique-shawon/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-900 text-white px-4 py-2 rounded-full hover:bg-blue-700 font-semibold"
          >
            LinkedIn
          </a>
          <a
            href="https://www.facebook.com/shauaibsiddique/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-900 text-white px-4 py-2 rounded-full hover:bg-blue-700 font-semibold"
          >
            Facebook
          </a>
          <a
            href="https://github.com/Shauaib2580"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-900 text-white px-4 py-2 rounded-full hover:bg-blue-700 font-semibold"
          >
            GitHub
          </a>
          <NavLink
            to="/developer"
            className={({ isActive }) =>
              isActive
                ? 'bg-blue-900 text-white px-4 py-2 rounded-full font-semibold'
                : 'bg-blue-900 text-white px-4 py-2 rounded-full hover:bg-blue-700 font-semibold'
            }
          >
            About Developer
          </NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

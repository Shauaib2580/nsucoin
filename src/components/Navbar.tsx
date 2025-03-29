import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white p-4 shadow-lg fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-amber-400">
          NSU COIN (নসু কয়েন)
        </h1>

        {/* Hamburger Button (Visible on Small Screens) */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            ></path>
          </svg>
        </button>

        {/* Navigation Links (Desktop: Inline, Mobile: Hidden by Default) */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-yellow-300' : 'hover:text-yellow-300'
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? 'text-yellow-300' : 'hover:text-yellow-300'
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/market"
              className={({ isActive }) =>
                isActive ? 'text-yellow-300' : 'hover:text-yellow-300'
              }
            >
              Market
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/developer"
              className={({ isActive }) =>
                isActive ? 'text-yellow-300' : 'hover:text-yellow-300'
              }
            >
              Developer
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? 'text-yellow-300' : 'hover:text-yellow-300'
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Mobile Menu (Side Panel, Visible When Open) */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-indigo-900 transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out md:hidden z-20`}
        >
          <button
            className="text-white p-4 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <ul className="flex flex-col space-y-6 p-4">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'text-yellow-300' : 'hover:text-yellow-300'
                }
                onClick={toggleMenu}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? 'text-yellow-300' : 'hover:text-yellow-300'
                }
                onClick={toggleMenu}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/market"
                className={({ isActive }) =>
                  isActive ? 'text-yellow-300' : 'hover:text-yellow-300'
                }
                onClick={toggleMenu}
              >
                Market
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/developer"
                className={({ isActive }) =>
                  isActive ? 'text-yellow-300' : 'hover:text-yellow-300'
                }
                onClick={toggleMenu}
              >
                Developer
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? 'text-yellow-300' : 'hover:text-yellow-300'
                }
                onClick={toggleMenu}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

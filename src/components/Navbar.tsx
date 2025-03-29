import { NavLink } from 'react-router-dom';
import coin from '../assets/coin.png'; // Adjust the path to your image
const Navbar: React.FC = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white p-4 shadow-lg fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold flex text-amber-400 items-center">
          {' '}
          <img src={coin} className="h-[50px] w-[50px] mr-4" alt="" />
          NSU COIN
        </h1>
        <ul className="flex space-x-6">
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
      </div>
    </nav>
  );
};

export default Navbar;

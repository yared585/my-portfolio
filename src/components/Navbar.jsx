import { NavLink, Link } from "react-router-dom";

const linkClasses = ({ isActive }) =>
  [
    "px-3 py-2 rounded-md text-sm font-medium",
    isActive
      ? "bg-blue-600 text-white"
      : "text-gray-700 hover:bg-gray-100 hover:text-gray-900",
  ].join(" ");

export default function Navbar() {
  return (
<header className="sticky top-0 z-50 bg-blue-900 text-white shadow-md">
  <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
    <Link to="/" className="text-lg font-bold tracking-tight">
      Yared Fesshaye
    </Link>
    <ul className="flex items-center space-x-4">
      <li><NavLink to="/" end className={({ isActive }) => isActive ? "text-yellow-300 font-semibold" : "hover:text-yellow-200"}>Home</NavLink></li>
      <li><NavLink to="/about" className={({ isActive }) => isActive ? "text-yellow-300 font-semibold" : "hover:text-yellow-200"}>About</NavLink></li>
      <li><NavLink to="/projects" className={({ isActive }) => isActive ? "text-yellow-300 font-semibold" : "hover:text-yellow-200"}>Projects</NavLink></li>
      <li><NavLink to="/resume" className={({ isActive }) => isActive ? "text-yellow-300 font-semibold" : "hover:text-yellow-200"}>Resume</NavLink></li>
      <li><NavLink to="/contact" className={({ isActive }) => isActive ? "text-yellow-300 font-semibold" : "hover:text-yellow-200"}>Contact</NavLink></li>
    </ul>
  </nav>
</header>


  );
}

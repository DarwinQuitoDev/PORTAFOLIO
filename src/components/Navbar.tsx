import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: 1, text: 'Inicio' },
    { id: 2, text: 'Sobre mí' },
    { id: 3, text: 'Proyectos' },
    { id: 4, text: 'Habilidades' },
    { id: 5, text: 'Experiencia' },
    { id: 6, text: 'Contacto' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="text-2xl font-extrabold tracking-wide hover:text-indigo-400 transition">
          Darwin Quito
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map(({ id, text }) => (
            <li key={id}>
              <a
                href={`#${text.toLowerCase().replace(/\s+/g, '')}`}
                className="text-sm font-medium hover:text-indigo-400 transition-colors duration-200"
              >
                {text}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-md hover:bg-gray-700 focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-4 py-4 space-y-2">
          {navLinks.map(({ id, text }) => (
            <a
              key={id}
              href={`#${text.toLowerCase().replace(/\s+/g, '')}`}
              className="block text-base font-medium py-2 px-4 rounded-md hover:bg-gray-700 transition"
              onClick={toggleMenu}
            >
              {text}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

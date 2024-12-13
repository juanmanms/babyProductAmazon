import { useState, useEffect } from 'react';
import { Menu, X, Laptop } from 'lucide-react';

const Navts = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log('Header mounted');
    const handleResize = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  const toggleMenu = () => {
    console.log('isOpen before toggle:', isOpen);
    setIsOpen(!isOpen);
    console.log('isOpen after toggle:', isOpen);
  };

  const links = [
    { href: "/", label: "Inicio" },
    { href: "/#productos-destacados", label: "Destacados" },
    { href: "/#categorias", label: "Categorias" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <div>
      <nav className="max-w-6xl mx-auto p-4 flex justify-between items-center">
        <ul className="hidden md:flex gap-8 list-none">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-current no-underline font-medium transition-colors duration-300 hover:text-primary">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-2 text-gray-600 hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </div>


  );
};

export default Navts;
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
        <>
          <div
            className={`fixed inset-0 bg-black bg-opacity-50 z-50 ${isOpen ? 'block' : 'hidden'
              }`}
            onClick={() => setIsOpen(false)}
          />
          <div
            className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
              } transition-transform duration-300`}
          >
            <button className="absolute top-4 right-4" onClick={toggleMenu}>
              <X size={24} />
            </button>
            <nav className="mt-16">
              <div className="flex flex-col space-y-2">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="py-2 px-4 text-gray-600 hover:text-blue-600"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              {/* Add a focusable element to close the menu with keyboard */}
              <a href="#" className="text-xs text-gray-600 absolute top-4 right-12" onClick={() => setIsOpen(false)}>
              </a>
            </nav>
          </div>
        </>
      )}
    </div>


  );
};

export default Navts;
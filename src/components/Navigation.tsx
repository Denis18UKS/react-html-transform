
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "ГЛАВНАЯ" },
    { path: "/profile", label: "ПРОФИЛЬ" },
    { path: "/messages", label: "СООБЩЕНИЯ" },
    { path: "/users", label: "ПОЛЬЗОВАТЕЛИ" },
    { path: "/games", label: "ИГРЫ" },
    { path: "/forums", label: "ФОРУМЫ" },
    { path: "/admin", label: "АДМИН" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-glass-bg backdrop-blur-lg border-b border-accent-main/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-accent-main font-orbitron tracking-wider relative pr-7 text-lg sm:text-xl font-semibold"
          >
            FORGAME
            <span className="absolute right-0 top-1/2 transform -translate-y-1/2 text-accent-secondary text-xs animate-pulse">
              ▶
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-text-light px-3 py-2 text-sm font-medium transition-all duration-300 relative hover:text-accent-main hover:-translate-y-0.5 ${
                    isActive ? 'text-accent-main' : ''
                  }`}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-main transition-all duration-400 ease-out hover:w-full" />
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            className={`lg:hidden border border-accent-main/30 p-2 transition-all duration-300 focus:shadow-[0_0_0_3px_rgba(0,255,136,0.25)] rounded ${
              isMenuOpen ? 'expanded' : ''
            }`}
            type="button"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            <span className="relative w-6 h-5 block">
              <span
                className={`absolute w-full h-0.5 bg-accent-main left-0 top-0 transition-all duration-300 origin-left ${
                  isMenuOpen ? 'rotate-45 translate-x-1 -translate-y-0.5 w-[110%]' : ''
                }`}
              />
              <span
                className={`absolute w-full h-0.5 bg-accent-main left-0 top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0 translate-x-2.5' : ''
                }`}
              />
              <span
                className={`absolute w-full h-0.5 bg-accent-main left-0 bottom-0 transition-all duration-300 origin-left ${
                  isMenuOpen ? '-rotate-45 translate-x-1 translate-y-0.5 w-[110%]' : ''
                }`}
              />
            </span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="space-y-2 pt-4 border-t border-accent-main/20">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 text-base font-medium transition-all duration-300 relative hover:text-accent-main hover:bg-accent-main/10 rounded ${
                    isActive ? 'text-accent-main bg-accent-main/10' : 'text-text-light'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;


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
    <nav className="navbar navbar-expand-lg navbar-dark bg-glass-bg backdrop-blur-lg border-b border-accent-main/20 sticky top-0 z-50">
      <div className="container-fluid">
        <Link
          to="/"
          className="navbar-brand text-accent-main font-orbitron tracking-wider relative pr-7 text-xl"
        >
          FORGAME
          <span className="absolute right-0 top-1/2 transform -translate-y-1/2 text-accent-secondary text-xs animate-pulse">
            ▶
          </span>
        </Link>

        <button
          className={`navbar-toggler custom-toggler border border-accent-main/30 p-3 transition-all duration-300 focus:shadow-[0_0_0_3px_rgba(0,255,136,0.25)] ${
            isMenuOpen ? 'expanded' : ''
          }`}
          type="button"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon relative w-[30px] h-5 block">
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

        <div className={`navbar-collapse ${isMenuOpen ? 'show' : 'collapse'}`}>
          <ul className="navbar-nav mx-auto flex-row justify-center flex-wrap lg:flex-nowrap">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              
              return (
                <li key={item.path} className="nav-item mx-5">
                  <Link
                    to={item.path}
                    className={`nav-link text-text-light px-6 py-2 transition-all duration-300 relative text-center hover:text-accent-main hover:-translate-y-0.5 ${
                      isActive ? 'text-accent-main' : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-main transition-all duration-400 ease-out hover:w-full" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

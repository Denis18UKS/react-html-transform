
import { Link, useLocation } from "react-router-dom";
import { Home, User, Shield, AlertTriangle } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Главная", icon: Home },
    { path: "/profile", label: "Профиль", icon: User },
    { path: "/privacy", label: "Конфиденциальность", icon: Shield },
    { path: "/error", label: "Ошибка", icon: AlertTriangle },
  ];

  return (
    <nav className="bg-glass-bg backdrop-blur-lg border-b border-accent-main/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            to="/"
            className="text-2xl font-bold font-orbitron text-accent-main hover:text-white transition-colors duration-300 text-glow"
          >
            Gaming Portal
          </Link>

          <div className="flex space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 hover-glow ${
                    isActive
                      ? "text-accent-main bg-accent-main/10 border border-accent-main/30"
                      : "text-text-light hover:text-accent-main"
                  }`}
                >
                  <Icon size={18} />
                  <span className="font-exo font-medium">{item.label}</span>
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

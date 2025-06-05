
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Search, Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="bg-glass-bg backdrop-blur-lg rounded-2xl p-12 border border-accent-main/20 animate-fade-in">
          {/* 404 Icon */}
          <div className="text-8xl md:text-9xl font-bold font-orbitron text-accent-main mb-6 animate-glow">
            404
          </div>
          
          {/* Error Title */}
          <h1 className="text-3xl md:text-4xl font-bold font-orbitron text-text-light mb-4">
            Страница не найдена
          </h1>
          
          {/* Error Message */}
          <p className="text-lg text-text-light/70 font-exo mb-8 leading-relaxed">
            К сожалению, страница по адресу 
            <code className="mx-2 px-2 py-1 bg-primary-medium rounded text-accent-main">
              {location.pathname}
            </code>
            не существует или была перемещена.
          </p>

          {/* Search Icon */}
          <Search className="mx-auto text-accent-main/50 mb-8" size={64} />

          {/* Suggestions */}
          <div className="bg-primary-medium/50 rounded-xl p-6 mb-8 border border-accent-main/20 text-left">
            <h3 className="text-lg font-orbitron text-accent-main mb-4 font-bold text-center">
              Что можно сделать?
            </h3>
            <ul className="text-text-light/80 font-exo space-y-2 list-disc list-inside">
              <li>Проверьте правильность URL-адреса</li>
              <li>Вернитесь на главную страницу</li>
              <li>Воспользуйтесь навигационным меню</li>
              <li>Попробуйте позже, если страница временно недоступна</li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="flex items-center justify-center gap-2 px-8 py-3 bg-accent-gradient border-none rounded-lg text-primary-dark font-bold font-exo hover-glow transition-all duration-300"
            >
              <Home size={18} />
              На главную
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="flex items-center justify-center gap-2 px-8 py-3 bg-transparent border-2 border-accent-main text-accent-main rounded-lg font-bold font-exo hover:bg-accent-main hover:text-primary-dark transition-all duration-300"
            >
              <ArrowLeft size={18} />
              Назад
            </button>
          </div>

          {/* Fun Fact */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-text-light/50 font-exo text-sm italic">
              💡 Интересный факт: Ошибка 404 названа в честь комнаты в CERN, где находился первый веб-сервер
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

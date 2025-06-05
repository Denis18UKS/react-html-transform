
import { AlertTriangle, RefreshCw, Home, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Error = () => {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="bg-glass-bg backdrop-blur-lg rounded-2xl p-12 border border-danger/30 animate-fade-in">
          {/* Error Icon */}
          <AlertTriangle className="mx-auto text-danger mb-8 animate-glow" size={120} />
          
          {/* Error Title */}
          <h1 className="text-4xl md:text-5xl font-bold font-orbitron text-danger mb-6">
            Ошибка
          </h1>
          
          {/* Error Message */}
          <h2 className="text-xl md:text-2xl font-exo text-text-light mb-8">
            Произошла ошибка при обработке вашего запроса
          </h2>

          {/* Development Info */}
          <div className="bg-primary-medium/50 rounded-xl p-6 mb-8 border border-danger/20 text-left">
            <h3 className="text-lg font-orbitron text-accent-main mb-4 font-bold">
              Режим разработки
            </h3>
            <div className="text-text-light/80 font-exo space-y-3">
              <p>
                Переключение в <strong className="text-accent-main">режим разработки</strong> отображает 
                подробную информацию об ошибке, которая произошла.
              </p>
              <p>
                <strong className="text-danger">Режим разработки не должен быть включен 
                для развернутых приложений.</strong> Это может привести к отображению 
                конфиденциальной информации об исключениях конечным пользователям.
              </p>
              <p>
                Для локальной отладки включите <strong className="text-accent-main">режим разработки</strong>, 
                установив переменную окружения <code className="bg-primary-dark px-2 py-1 rounded text-accent-main">
                ASPNETCORE_ENVIRONMENT</code> в <code className="bg-primary-dark px-2 py-1 rounded text-accent-main">
                Development</code> и перезапустив приложение.
              </p>
            </div>
          </div>

          {/* Request ID */}
          <div className="bg-primary-medium/50 rounded-xl p-4 mb-8 border border-accent-main/20">
            <p className="text-text-light font-exo">
              <strong className="text-accent-main">ID запроса:</strong> 
              <code className="ml-2 bg-primary-dark px-2 py-1 rounded text-accent-main">
                {Math.random().toString(36).substr(2, 9).toUpperCase()}
              </code>
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleRefresh}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-accent-gradient border-none rounded-lg text-primary-dark font-bold font-exo hover-glow transition-all duration-300"
            >
              <RefreshCw size={18} />
              Обновить страницу
            </button>
            
            <Link
              to="/"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-transparent border-2 border-accent-main text-accent-main rounded-lg font-bold font-exo hover:bg-accent-main hover:text-primary-dark transition-all duration-300"
            >
              <Home size={18} />
              На главную
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-transparent border-2 border-text-light/30 text-text-light rounded-lg font-bold font-exo hover:bg-text-light/10 transition-all duration-300"
            >
              <ArrowLeft size={18} />
              Назад
            </button>
          </div>

          {/* Additional Help */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-text-light/60 font-exo text-sm">
              Если проблема повторяется, обратитесь к администратору сайта
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;

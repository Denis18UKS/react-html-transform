
import { useState, useEffect } from "react";
import { User, Star, Calendar, Edit, LogOut, UserX } from "lucide-react";
import AuthModal from "../components/AuthModal";
import ErrorModal from "../components/ErrorModal";

interface Review {
  id: number;
  gameTitle: string;
  rating: number;
  date: string;
  content: string;
}

interface FavoriteGame {
  id: number;
  title: string;
  image: string;
}

const Profile = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [authModalMode, setAuthModalMode] = useState<"login" | "register">("login");
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [reviews] = useState<Review[]>([
    {
      id: 1,
      gameTitle: "Cyberpunk 2077",
      rating: 4,
      date: "20.05.2025",
      content: "Потрясающая игра с невероятным миром и детализацией. Сюжет затягивает с первых минут, а персонажи запоминаются надолго. Графика на высшем уровне, особенно с новыми патчами."
    },
    {
      id: 2,
      gameTitle: "The Witcher 3",
      rating: 5,
      date: "15.04.2025",
      content: "Шедевр игровой индустрии! Глубокий сюжет, прекрасно прописанные персонажи, огромный открытый мир, полный интересных заданий и секретов. Музыка и атмосфера просто волшебные."
    },
    {
      id: 3,
      gameTitle: "Half-Life: Alyx",
      rating: 4,
      date: "10.03.2025",
      content: "Это не просто игра, это революция в VR! Полное погружение в мир Half-Life с инновационными механиками. Графика, физика и взаимодействие с окружением установили новый стандарт для VR-игр."
    }
  ]);

  const [favoriteGames] = useState<FavoriteGame[]>([
    { id: 1, title: "Cyberpunk 2077", image: "" },
    { id: 2, title: "The Witcher 3", image: "" },
    { id: 3, title: "Half-Life: Alyx", image: "" },
    { id: 4, title: "Deus Ex", image: "" },
    { id: 5, title: "Mirror's Edge", image: "" }
  ]);

  useEffect(() => {
    const savedUser = sessionStorage.getItem("userLogin");
    if (savedUser) {
      setIsAuthenticated(true);
      setUsername(savedUser);
    }
  }, []);

  const handleAuthSuccess = (user: string) => {
    sessionStorage.setItem("userLogin", user);
    setIsAuthenticated(true);
    setUsername(user);
    setShowAuthModal(false);
  };

  const handleAuthError = (message: string) => {
    setErrorMessage(message);
    setShowErrorModal(true);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("userLogin");
    setIsAuthenticated(false);
    setUsername("");
  };

  const openAuthModal = (mode: "login" | "register") => {
    setAuthModalMode(mode);
    setShowAuthModal(true);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={index < rating ? "fill-accent-main text-accent-main" : "text-gray-500"}
      />
    ));
  };

  if (!isAuthenticated) {
    return (
      <>
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="max-w-2xl w-full text-center">
            <div className="bg-glass-bg backdrop-blur-lg rounded-2xl p-12 border border-accent-main/20 hover-glow">
              <div className="mb-8">
                <UserX className="mx-auto text-accent-main mb-6 animate-glow" size={80} />
                <h3 className="text-2xl font-orbitron text-accent-main font-bold mb-4">
                  Доступ ограничен
                </h3>
                <h5 className="text-lg text-text-light/80 font-exo">
                  Для просмотра профиля требуется авторизация
                </h5>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => openAuthModal("login")}
                  className="px-8 py-3 bg-accent-gradient border-none rounded-lg text-primary-dark font-bold font-exo hover-glow transition-all duration-300"
                >
                  Войти
                </button>
                <button
                  onClick={() => openAuthModal("register")}
                  className="px-8 py-3 bg-transparent border-2 border-accent-main text-accent-main rounded-lg font-bold font-exo hover:bg-accent-main hover:text-primary-dark transition-all duration-300"
                >
                  Регистрация
                </button>
              </div>
            </div>
          </div>
        </div>

        <AuthModal
          isOpen={showAuthModal}
          mode={authModalMode}
          onClose={() => setShowAuthModal(false)}
          onSuccess={handleAuthSuccess}
          onError={handleAuthError}
        />

        <ErrorModal
          isOpen={showErrorModal}
          message={errorMessage}
          onClose={() => setShowErrorModal(false)}
          onRetry={() => openAuthModal(authModalMode)}
        />
      </>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* User Info Section */}
        <div className="bg-glass-bg backdrop-blur-lg rounded-2xl p-8 mb-8 border border-accent-main/20 animate-fade-in">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
            <div className="relative">
              <img
                src="/placeholder.svg"
                alt="Profile"
                className="w-32 h-32 lg:w-40 lg:h-40 rounded-full border-4 border-accent-main animate-glow object-cover"
              />
            </div>
            
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl lg:text-4xl font-orbitron text-accent-main font-bold mb-6 text-glow">
                {username}
              </h2>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8">
                <div className="bg-primary-medium/60 px-6 py-3 rounded-xl border border-accent-main/20 text-center">
                  <div className="text-2xl font-bold text-accent-main">0</div>
                  <div className="text-sm text-text-light/70 font-exo">Друзей</div>
                </div>
                <div className="bg-primary-medium/60 px-6 py-3 rounded-xl border border-accent-main/20 text-center">
                  <div className="text-2xl font-bold text-accent-main">{reviews.length}</div>
                  <div className="text-sm text-text-light/70 font-exo">Отзывов</div>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <button className="flex items-center gap-2 px-6 py-3 bg-accent-gradient border-none rounded-lg text-primary-dark font-bold font-exo hover-glow transition-all duration-300">
                  <Edit size={18} />
                  Редактировать профиль
                </button>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-danger text-danger rounded-lg font-bold font-exo hover:bg-danger hover:text-white transition-all duration-300"
                >
                  <LogOut size={18} />
                  Выйти
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Favorite Games Section */}
        <div className="bg-glass-bg backdrop-blur-lg rounded-2xl p-8 mb-8 border border-accent-main/20 animate-fade-in">
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/10">
            <h3 className="text-2xl font-orbitron text-accent-main font-bold">
              Избранные игры
            </h3>
            <div className="bg-primary-medium/60 px-4 py-2 rounded-full border border-accent-main/20 text-text-light/70 font-exo">
              {favoriteGames.length} игр
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {favoriteGames.map((game) => (
              <div
                key={game.id}
                className="bg-card-bg rounded-xl overflow-hidden border border-accent-main/10 hover-glow transition-all duration-300"
              >
                <div className="aspect-square bg-primary-medium/50 flex items-center justify-center">
                  <span className="text-4xl">🎮</span>
                </div>
                <div className="p-4">
                  <h4 className="text-text-light font-exo font-medium text-center text-sm">
                    {game.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews Section */}
        <div className="bg-glass-bg backdrop-blur-lg rounded-2xl p-8 border border-accent-main/20 animate-fade-in">
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/10">
            <h3 className="text-2xl font-orbitron text-accent-main font-bold">
              Ваши отзывы
            </h3>
            <div className="bg-primary-medium/60 px-4 py-2 rounded-full border border-accent-main/20 text-text-light/70 font-exo">
              {reviews.length} отзывов
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-card-bg rounded-xl p-6 border border-accent-main/10 hover-glow transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4 pb-4 border-b border-white/10">
                  <h4 className="text-accent-main font-orbitron font-bold text-lg">
                    {review.gameTitle}
                  </h4>
                  <div className="flex items-center gap-1 bg-accent-main/20 px-3 py-1 rounded-full">
                    <div className="flex">{renderStars(review.rating)}</div>
                    <span className="text-accent-main font-bold ml-1">{review.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-text-light/60 text-sm mb-4 font-exo">
                  <Calendar size={14} />
                  <span>Дата: {review.date}</span>
                </div>
                
                <p className="text-text-light/80 font-exo leading-relaxed">
                  {review.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

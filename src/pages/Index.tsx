
import { useState, useEffect } from "react";

interface NewsItem {
  id: number;
  gameTitle: string;
  title: string;
  content: string;
}

const Index = () => {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    // Simulate loading news data
    const newsData: NewsItem[] = [
      {
        id: 1,
        gameTitle: "Cyberpunk 2077",
        title: "Обновление",
        content: "В обновлении 2.1 добавлена полноценная система метро, новые гонки, улучшена боевая система и исправлены сотни багов. Также добавлены новые романтические взаимодействия с персонажами."
      },
      {
        id: 2,
        gameTitle: "Cyberpunk 2077",
        title: "Новое дополнение",
        content: "CD Projekt Red анонсировала первое крупное дополнение для Cyberpunk 2077 под названием \"Phantom Liberty\". Действие развернётся в новом районе Найт-Сити с участием звезды Голливуда Киану Ривза."
      },
      {
        id: 3,
        gameTitle: "The Witcher 3",
        title: "Юбилейное издание",
        content: "В честь 10-летия игры выйдет специальное издание с улучшенной графикой, новыми квестами и дополнительным контентом. Все владельцы оригинальной игры получат обновление бесплатно."
      },
      {
        id: 4,
        gameTitle: "Half-Life: Alyx",
        title: "Новые достижения VR",
        content: "Valve продолжает совершенствовать технологии виртуальной реальности. Новое обновление добавляет поддержку ещё большего количества VR-гарнитур и улучшает производительность."
      }
    ];
    
    setNews(newsData);
  }, []);

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold font-orbitron text-accent-main mb-4 text-glow">
            Игровой Портал
          </h1>
          <p className="text-xl text-text-light/80 font-exo">
            Последние новости из мира киберпанк игр
          </p>
        </div>

        {/* News Section */}
        <div className="content-section">
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/10">
            <h2 className="text-3xl font-orbitron text-accent-main font-bold">
              Новости
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {news.map((item, index) => (
              <div
                key={item.id}
                className="bg-card-bg backdrop-blur-sm rounded-2xl p-6 border border-accent-main/10 hover-glow transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-accent-main font-orbitron text-lg font-semibold mb-3 uppercase tracking-wider">
                  {item.gameTitle}
                </div>
                
                <h3 className="text-accent-main font-orbitron text-xl font-bold mb-4 pb-3 border-b border-white/10">
                  {item.title}
                </h3>
                
                <p className="text-white/80 font-exo leading-relaxed">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
          <div className="text-center p-8 bg-glass-bg backdrop-blur-sm rounded-2xl border border-accent-main/20 hover-glow">
            <div className="text-4xl mb-4">🎮</div>
            <h3 className="text-xl font-orbitron text-accent-main mb-3">Игровые Новости</h3>
            <p className="text-text-light/70 font-exo">Актуальные новости из мира киберпанк игр</p>
          </div>
          
          <div className="text-center p-8 bg-glass-bg backdrop-blur-sm rounded-2xl border border-accent-main/20 hover-glow">
            <div className="text-4xl mb-4">⭐</div>
            <h3 className="text-xl font-orbitron text-accent-main mb-3">Рейтинги</h3>
            <p className="text-text-light/70 font-exo">Оценки и отзывы игроков</p>
          </div>
          
          <div className="text-center p-8 bg-glass-bg backdrop-blur-sm rounded-2xl border border-accent-main/20 hover-glow">
            <div className="text-4xl mb-4">👥</div>
            <h3 className="text-xl font-orbitron text-accent-main mb-3">Сообщество</h3>
            <p className="text-text-light/70 font-exo">Общение с единомышленниками</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

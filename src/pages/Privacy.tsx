
import { Shield, Lock, Eye, Database, Globe, Mail } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <Shield className="mx-auto text-accent-main mb-6 animate-glow" size={80} />
          <h1 className="text-4xl md:text-5xl font-bold font-orbitron text-accent-main mb-4 text-glow">
            Политика конфиденциальности
          </h1>
          <p className="text-lg text-text-light/80 font-exo max-w-2xl mx-auto">
            Мы серьезно относимся к защите ваших персональных данных и соблюдаем все требования законодательства
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {/* Data Collection */}
          <div className="bg-glass-bg backdrop-blur-lg rounded-2xl p-8 border border-accent-main/20 hover-glow animate-fade-in">
            <div className="flex items-center gap-4 mb-6">
              <Database className="text-accent-main animate-glow" size={32} />
              <h2 className="text-2xl font-orbitron text-accent-main font-bold">
                Сбор данных
              </h2>
            </div>
            <div className="text-text-light/80 font-exo space-y-4">
              <p>
                Мы собираем только необходимую информацию для предоставления наших услуг:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Логин и никнейм для идентификации пользователя</li>
                <li>Email адрес для связи и восстановления доступа</li>
                <li>Информацию о ваших отзывах и рейтингах игр</li>
                <li>Список избранных игр для персонализации</li>
              </ul>
            </div>
          </div>

          {/* Data Usage */}
          <div className="bg-glass-bg backdrop-blur-lg rounded-2xl p-8 border border-accent-main/20 hover-glow animate-fade-in">
            <div className="flex items-center gap-4 mb-6">
              <Eye className="text-accent-main animate-glow" size={32} />
              <h2 className="text-2xl font-orbitron text-accent-main font-bold">
                Использование данных
              </h2>
            </div>
            <div className="text-text-light/80 font-exo space-y-4">
              <p>
                Ваши данные используются исключительно для:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Предоставления доступа к функциям портала</li>
                <li>Отображения ваших отзывов и рейтингов</li>
                <li>Персонализации рекомендаций игр</li>
                <li>Связи с вами по важным вопросам</li>
                <li>Улучшения качества наших услуг</li>
              </ul>
            </div>
          </div>

          {/* Data Protection */}
          <div className="bg-glass-bg backdrop-blur-lg rounded-2xl p-8 border border-accent-main/20 hover-glow animate-fade-in">
            <div className="flex items-center gap-4 mb-6">
              <Lock className="text-accent-main animate-glow" size={32} />
              <h2 className="text-2xl font-orbitron text-accent-main font-bold">
                Защита данных
              </h2>
            </div>
            <div className="text-text-light/80 font-exo space-y-4">
              <p>
                Мы применяем современные методы защиты:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Шифрование всех передаваемых данных</li>
                <li>Безопасное хранение паролей с использованием хеширования</li>
                <li>Регулярные аудиты безопасности системы</li>
                <li>Ограниченный доступ к персональным данным</li>
                <li>Резервное копирование с шифрованием</li>
              </ul>
            </div>
          </div>

          {/* Data Sharing */}
          <div className="bg-glass-bg backdrop-blur-lg rounded-2xl p-8 border border-accent-main/20 hover-glow animate-fade-in">
            <div className="flex items-center gap-4 mb-6">
              <Globe className="text-accent-main animate-glow" size={32} />
              <h2 className="text-2xl font-orbitron text-accent-main font-bold">
                Передача данных третьим лицам
              </h2>
            </div>
            <div className="text-text-light/80 font-exo space-y-4">
              <p>
                Мы <strong className="text-accent-main">НЕ передаем</strong> ваши персональные данные третьим лицам, за исключением случаев:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Требований законодательства</li>
                <li>Получения вашего явного согласия</li>
                <li>Защиты наших законных интересов</li>
              </ul>
            </div>
          </div>

          {/* User Rights */}
          <div className="bg-glass-bg backdrop-blur-lg rounded-2xl p-8 border border-accent-main/20 hover-glow animate-fade-in">
            <div className="flex items-center gap-4 mb-6">
              <Shield className="text-accent-main animate-glow" size={32} />
              <h2 className="text-2xl font-orbitron text-accent-main font-bold">
                Ваши права
              </h2>
            </div>
            <div className="text-text-light/80 font-exo space-y-4">
              <p>
                Вы имеете право:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Запрашивать информацию о ваших данных</li>
                <li>Исправлять неточные данные</li>
                <li>Удалять ваши данные</li>
                <li>Ограничивать обработку данных</li>
                <li>Переносить данные в другие сервисы</li>
                <li>Отзывать согласие на обработку</li>
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-glass-bg backdrop-blur-lg rounded-2xl p-8 border border-accent-main/20 hover-glow animate-fade-in">
            <div className="flex items-center gap-4 mb-6">
              <Mail className="text-accent-main animate-glow" size={32} />
              <h2 className="text-2xl font-orbitron text-accent-main font-bold">
                Связь с нами
              </h2>
            </div>
            <div className="text-text-light/80 font-exo space-y-4">
              <p>
                По всем вопросам, касающимся обработки персональных данных, вы можете обращаться:
              </p>
              <div className="bg-primary-medium/50 rounded-lg p-4 border border-accent-main/20">
                <p><strong className="text-accent-main">Email:</strong> privacy@gamingportal.com</p>
                <p><strong className="text-accent-main">Ответственный за обработку данных:</strong> Администрация Gaming Portal</p>
              </div>
            </div>
          </div>

          {/* Last Updated */}
          <div className="text-center text-text-light/60 font-exo animate-fade-in">
            <p>Последнее обновление: 05 июня 2025 года</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;

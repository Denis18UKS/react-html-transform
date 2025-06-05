
import { useState, useEffect } from "react";
import { X, Lock, User, Mail, Eye, EyeOff } from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  mode: "login" | "register";
  onClose: () => void;
  onSuccess: (username: string) => void;
  onError: (message: string) => void;
}

const AuthModal = ({ isOpen, mode, onClose, onSuccess, onError }: AuthModalProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    login: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  // Load saved data from sessionStorage
  useEffect(() => {
    if (mode === "login") {
      setFormData({
        ...formData,
        login: sessionStorage.getItem("authLogin") || "",
        password: sessionStorage.getItem("authPassword") || ""
      });
    } else {
      setFormData({
        login: sessionStorage.getItem("regLogin") || "",
        username: sessionStorage.getItem("regUsername") || "",
        email: sessionStorage.getItem("regEmail") || "",
        password: sessionStorage.getItem("regPassword") || "",
        confirmPassword: sessionStorage.getItem("regConfirmPassword") || ""
      });
    }
  }, [mode]);

  const saveData = () => {
    if (mode === "login") {
      sessionStorage.setItem("authLogin", formData.login);
      sessionStorage.setItem("authPassword", formData.password);
    } else {
      sessionStorage.setItem("regLogin", formData.login);
      sessionStorage.setItem("regUsername", formData.username);
      sessionStorage.setItem("regEmail", formData.email);
      sessionStorage.setItem("regPassword", formData.password);
      sessionStorage.setItem("regConfirmPassword", formData.confirmPassword);
    }
  };

  const validateField = (name: string, value: string) => {
    let error = "";

    switch (name) {
      case "login":
        if (!value) error = "Обязательное поле";
        else if (value.length < 3) error = "Минимум 3 символа";
        else if (!/^[a-zA-ZА-Яа-я0-9_]+$/.test(value)) error = "Только буквы, цифры и подчеркивания";
        break;
      case "username":
        if (!value) error = "Обязательное поле";
        else if (value.length < 2) error = "Минимум 2 символа";
        break;
      case "email":
        if (!value) error = "Обязательное поле";
        else if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(value)) error = "Неверный формат email";
        break;
      case "password":
        if (!value) error = "Обязательное поле";
        else if (value.length < 8) error = "Минимум 8 символов";
        else if (!/^(?=.*[A-Za-zА-Яа-я])(?=.*\d).{8,}$/.test(value)) error = "Должен содержать буквы и цифры";
        break;
      case "confirmPassword":
        if (value !== formData.password) error = "Пароли не совпадают";
        break;
    }

    setErrors(prev => ({ ...prev, [name]: error }));
    return !error;
  };

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    validateField(name, value);
    saveData();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const fieldsToValidate = mode === "login" 
      ? ["login", "password"]
      : ["login", "username", "email", "password", "confirmPassword"];

    let isValid = true;
    fieldsToValidate.forEach(field => {
      if (!validateField(field, formData[field as keyof typeof formData])) {
        isValid = false;
      }
    });

    if (!isValid) return;

    // Simple authentication simulation
    if (mode === "login") {
      if (formData.login === "test" && formData.password === "test12345") {
        onSuccess(formData.login);
        // Clear saved auth data
        sessionStorage.removeItem("authLogin");
        sessionStorage.removeItem("authPassword");
      } else {
        onError("Неверные учетные данные. Проверьте логин и пароль.");
      }
    } else {
      if (formData.login === "test" && formData.password === "test12345") {
        onSuccess(formData.username);
        // Clear saved registration data
        Object.keys(formData).forEach(key => {
          sessionStorage.removeItem(`reg${key.charAt(0).toUpperCase() + key.slice(1)}`);
        });
      } else {
        onError("Пользователь с таким логином, никнеймом или почтой уже существует.");
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative bg-glass-bg backdrop-blur-lg border border-accent-main/30 rounded-2xl p-8 w-full max-w-md mx-4 animate-fade-in">
        <div className="flex justify-between items-center mb-6">
          <h4 className="text-xl font-orbitron text-accent-main font-bold">
            {mode === "login" ? "Вход в аккаунт" : "Создать аккаунт"}
          </h4>
          <button
            onClick={onClose}
            className="text-text-light hover:text-accent-main transition-colors text-2xl"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-white/80 text-sm mb-2 font-exo">Логин</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-accent-main" size={18} />
              <input
                type="text"
                value={formData.login}
                onChange={(e) => handleInputChange("login", e.target.value)}
                className={`w-full pl-10 pr-4 py-3 bg-primary-medium/80 border rounded-lg text-text-light font-exo transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-main/50 ${
                  errors.login ? "border-danger" : "border-white/10 focus:border-accent-main"
                }`}
                placeholder={mode === "login" ? "Введите ваш логин" : "Придумайте логин"}
              />
            </div>
            {errors.login && <span className="text-danger text-sm mt-1 block">{errors.login}</span>}
          </div>

          {mode === "register" && (
            <>
              <div>
                <label className="block text-white/80 text-sm mb-2 font-exo">Никнейм</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-accent-main" size={18} />
                  <input
                    type="text"
                    value={formData.username}
                    onChange={(e) => handleInputChange("username", e.target.value)}
                    className={`w-full pl-10 pr-4 py-3 bg-primary-medium/80 border rounded-lg text-text-light font-exo transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-main/50 ${
                      errors.username ? "border-danger" : "border-white/10 focus:border-accent-main"
                    }`}
                    placeholder="Ваш ник"
                  />
                </div>
                {errors.username && <span className="text-danger text-sm mt-1 block">{errors.username}</span>}
              </div>

              <div>
                <label className="block text-white/80 text-sm mb-2 font-exo">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-accent-main" size={18} />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className={`w-full pl-10 pr-4 py-3 bg-primary-medium/80 border rounded-lg text-text-light font-exo transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-main/50 ${
                      errors.email ? "border-danger" : "border-white/10 focus:border-accent-main"
                    }`}
                    placeholder="example@mail.com"
                  />
                </div>
                {errors.email && <span className="text-danger text-sm mt-1 block">{errors.email}</span>}
              </div>
            </>
          )}

          <div>
            <label className="block text-white/80 text-sm mb-2 font-exo">Пароль</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-accent-main" size={18} />
              <input
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                className={`w-full pl-10 pr-12 py-3 bg-primary-medium/80 border rounded-lg text-text-light font-exo transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-main/50 ${
                  errors.password ? "border-danger" : "border-white/10 focus:border-accent-main"
                }`}
                placeholder={mode === "login" ? "Введите пароль" : "Не менее 8 символов"}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-accent-main hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.password && <span className="text-danger text-sm mt-1 block">{errors.password}</span>}
          </div>

          {mode === "register" && (
            <div>
              <label className="block text-white/80 text-sm mb-2 font-exo">Повторите пароль</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-accent-main" size={18} />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                  className={`w-full pl-10 pr-12 py-3 bg-primary-medium/80 border rounded-lg text-text-light font-exo transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-main/50 ${
                    errors.confirmPassword ? "border-danger" : "border-white/10 focus:border-accent-main"
                  }`}
                  placeholder="Повторите пароль"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-accent-main hover:text-white transition-colors"
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.confirmPassword && <span className="text-danger text-sm mt-1 block">{errors.confirmPassword}</span>}
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 mt-6 bg-accent-gradient border-none rounded-lg text-primary-dark font-bold font-exo text-lg hover-glow transition-all duration-300"
          >
            {mode === "login" ? "Войти" : "Зарегистрироваться"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthModal;

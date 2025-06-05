
import { X, AlertTriangle } from "lucide-react";

interface ErrorModalProps {
  isOpen: boolean;
  message: string;
  onClose: () => void;
  onRetry?: () => void;
}

const ErrorModal = ({ isOpen, message, onClose, onRetry }: ErrorModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative bg-glass-bg backdrop-blur-lg border border-danger/30 rounded-2xl p-8 w-full max-w-md mx-4 animate-fade-in">
        <div className="flex justify-between items-center mb-6">
          <h4 className="text-xl font-orbitron text-danger font-bold">
            Ошибка
          </h4>
          <button
            onClick={onClose}
            className="text-text-light hover:text-danger transition-colors text-2xl"
          >
            <X size={24} />
          </button>
        </div>

        <div className="text-center py-6">
          <AlertTriangle className="mx-auto text-danger mb-4 animate-glow" size={64} />
          <p className="text-text-light text-lg leading-relaxed font-exo mb-6">
            {message}
          </p>
        </div>

        <div className="flex gap-4">
          {onRetry && (
            <button
              onClick={() => {
                onClose();
                onRetry();
              }}
              className="flex-1 py-3 bg-accent-gradient border-none rounded-lg text-primary-dark font-bold font-exo hover-glow transition-all duration-300"
            >
              Попробовать снова
            </button>
          )}
          <button
            onClick={onClose}
            className="flex-1 py-3 bg-transparent border-2 border-accent-main text-accent-main rounded-lg font-bold font-exo hover:bg-accent-main hover:text-primary-dark transition-all duration-300"
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;

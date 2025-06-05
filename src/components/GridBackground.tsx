
import { useEffect } from 'react';

const GridBackground = () => {
  useEffect(() => {
    const createGrid = () => {
      const gridOverlay = document.getElementById('gridOverlay');
      if (!gridOverlay) return;
      
      const cellSize = 70;
      const animationDuration = 8;

      gridOverlay.innerHTML = '';

      // Создаем горизонтальные линии
      for (let y = 0; y < window.innerHeight; y += cellSize) {
        const line = document.createElement('div');
        line.className = 'grid-line';
        line.style.cssText = `
          top: ${y}px;
          left: 0;
          width: 100%;
          height: 1px;
          animation-delay: ${-animationDuration * (y / window.innerHeight)}s;
        `;
        gridOverlay.appendChild(line);
      }

      // Создаем вертикальные линии
      for (let x = 0; x < window.innerWidth; x += cellSize) {
        const line = document.createElement('div');
        line.className = 'grid-line';
        line.style.cssText = `
          left: ${x}px;
          top: 0;
          height: 100%;
          width: 1px;
          animation-delay: ${-animationDuration * (x / window.innerWidth)}s;
        `;
        gridOverlay.appendChild(line);
      }
    };

    // Создаем сетку при загрузке
    createGrid();

    // Пересоздаем при изменении размера окна
    const handleResize = () => {
      requestAnimationFrame(createGrid);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div 
      id="gridOverlay" 
      className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden"
    />
  );
};

export default GridBackground;

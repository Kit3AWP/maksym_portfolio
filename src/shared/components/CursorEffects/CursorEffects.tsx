import { useEffect, useRef } from 'react';
import './CursorEffects.scss';

export const CursorEffects = () => {
  const dotsRef = useRef<(HTMLDivElement | null)[]>([]);
  const timeoutRef = useRef<number | null>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth <= 1099) return;

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      mouse.current = { x: e.clientX, y: e.clientY };
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);

      dotsRef.current.forEach((dot) => {
        if (dot) {
          dot.style.opacity = "1";
        }
      });

      timeoutRef.current = setTimeout(() => {
        dotsRef.current.forEach((dot) => {
          if (dot) {
            dot.style.opacity = "0";
          }
        });
      }, 50);
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      let targetX = mouse.current.x;
      let targetY = mouse.current.y;

      dotsRef.current.forEach((dot) => {
        if (!dot) return;

        const currentX = parseFloat(dot.style.left || targetX.toString());
        const currentY = parseFloat(dot.style.top || targetY.toString());

        const nextX = currentX + (targetX - currentX) * 0.35;
        const nextY = currentY + (targetY - currentY) * 0.35;

        dot.style.left = `${nextX}px`;
        dot.style.top = `${nextY}px`;

        targetX = nextX;
        targetY = nextY;
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            dotsRef.current[i] = el;
          }}
          className="cursor-dot"
          style={{
            transform: `scale(${1 - i * 0.08}) translate(-50%, -50%)`,
            opacity: 1 - i * 0.08,
          }}
        />
      ))}
    </>
  );
};

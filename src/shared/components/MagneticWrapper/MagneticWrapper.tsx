import { useEffect, useRef, type ReactNode } from 'react';
import { useSound } from '../../../context/SoundContext';

export const MagneticWrapper = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { isSoundEnabled } = useSound();
  
  const magnetAudioRef = useRef<HTMLAudioElement | null>(null);
  const magnetLeaveAudioRef = useRef<HTMLAudioElement | null>(null);

  const onMouseEnter = () => {
    if (window.matchMedia('(hover: none)').matches || 'ontouchstart' in window) return;

    if (isSoundEnabled) {
      if (!magnetAudioRef.current) {
        magnetAudioRef.current = new Audio('/sounds/Magnet.mp3');
        magnetAudioRef.current.loop = true;
        magnetAudioRef.current.volume = 0.5;
      }
      magnetAudioRef.current.play().catch(console.error);
    }
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (window.innerWidth <= 1024 || window.matchMedia('(hover: none)').matches) return;
    if (!ref.current) return;

    const element = ref.current.getBoundingClientRect();
    const centerX = element.left + element.width / 2;
    const centerY = element.top + element.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    ref.current.style.transform = `translate(${distanceX * 0.2}px, ${distanceY * 0.2}px)`;
  };

  const onMouseLeave = () => {
    if (window.innerWidth <= 1024 || window.matchMedia('(hover: none)').matches) return;
    if (ref.current) ref.current.style.transform = '';

    if (magnetAudioRef.current) {
      magnetAudioRef.current.pause();
      magnetAudioRef.current.currentTime = 0;
    }

    if (isSoundEnabled) {
      if (!magnetLeaveAudioRef.current) {
        magnetLeaveAudioRef.current = new Audio('/sounds/MagnetismEnding.mp3');
        magnetLeaveAudioRef.current.volume = 0.5;
      }
      magnetLeaveAudioRef.current.currentTime = 0;
      magnetLeaveAudioRef.current.play().catch(console.error);
    }
  };

  useEffect(() => {
    return () => {
      if (magnetAudioRef.current) magnetAudioRef.current.pause();
      if (magnetLeaveAudioRef.current) magnetLeaveAudioRef.current.pause();
    };
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
      style={{
        display: 'inline-block',
        padding: '30px',
        margin: '-30px',
        transition: 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      }}
    >
      {children}
    </div>
  );
};
import { useRef, type ReactNode } from 'react';

export const MagneticWrapper = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;

    const element = ref.current.getBoundingClientRect();
    const centerX = element.left + element.width / 2;
    const centerY = element.top + element.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    ref.current.style.transform = `translate(${distanceX * 0.2}px,${distanceY * 0.2}px)`;
  };

  const onMouseLeave = () => {
    if (ref.current) ref.current.style.transform = '';
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
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

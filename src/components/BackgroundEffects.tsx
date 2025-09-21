import { useEffect, useRef } from 'react';

const BackgroundEffects = () => {
  const mouseGlowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (mouseGlowRef.current) {
        mouseGlowRef.current.style.left = `${e.clientX - 100}px`;
        mouseGlowRef.current.style.top = `${e.clientY - 100}px`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Animated particles */}
      <div className="bg-particles">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="particle particle-5"></div>
      </div>

      {/* Mouse glow effect */}
      <div ref={mouseGlowRef} className="mouse-glow"></div>
    </>
  );
};

export default BackgroundEffects;
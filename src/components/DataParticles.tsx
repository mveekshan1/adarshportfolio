import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  opacity: number;
  char: string;
}

const dataChars = ["0", "1", "{", "}", "[", "]", "<", ">", "/", "*", "+", "=", "&", "|"];

export const DataParticles = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const particles: Particle[] = [];
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 12 + 8,
        speedY: Math.random() * 0.3 + 0.1,
        opacity: Math.random() * 0.3 + 0.1,
        char: dataChars[Math.floor(Math.random() * dataChars.length)],
      });
    }

    const elements = particles.map((p, i) => {
      const el = document.createElement("span");
      el.className = "absolute font-mono text-primary pointer-events-none select-none";
      el.style.left = `${p.x}%`;
      el.style.top = `${p.y}%`;
      el.style.fontSize = `${p.size}px`;
      el.style.opacity = `${p.opacity}`;
      el.textContent = p.char;
      el.dataset.index = String(i);
      container.appendChild(el);
      return el;
    });

    let animationId: number;
    const animate = () => {
      particles.forEach((p, i) => {
        p.y -= p.speedY;
        if (p.y < -5) {
          p.y = 105;
          p.x = Math.random() * 100;
          p.char = dataChars[Math.floor(Math.random() * dataChars.length)];
        }
        elements[i].style.top = `${p.y}%`;
        elements[i].style.left = `${p.x}%`;
        elements[i].textContent = p.char;
      });
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      elements.forEach((el) => el.remove());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    />
  );
};

export const GridBackground = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="absolute inset-0 data-grid pointer-events-none"
    >
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      
      {/* Glow spots */}
      <motion.div
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
      />
    </motion.div>
  );
};

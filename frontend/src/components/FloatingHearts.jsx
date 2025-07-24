import React, { useEffect, useState } from "react";
import { Heart } from "lucide-react";

const FloatingHearts = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const createHeart = () => {
      const heart = {
        id: Math.random(),
        left: Math.random() * 100,
        animationDuration: 3 + Math.random() * 4,
        size: 0.8 + Math.random() * 0.4,
        opacity: 0.3 + Math.random() * 0.4,
        delay: Math.random() * 2,
      };
      return heart;
    };

    // Initial hearts
    const initialHearts = Array.from({ length: 8 }, createHeart);
    setHearts(initialHearts);

    // Add new hearts periodically
    const interval = setInterval(() => {
      setHearts(prevHearts => {
        const newHeart = createHeart();
        const updatedHearts = [...prevHearts, newHeart];
        
        // Remove old hearts to prevent memory leak
        if (updatedHearts.length > 15) {
          updatedHearts.shift();
        }
        
        return updatedHearts;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute bottom-0 animate-float-up"
          style={{
            left: `${heart.left}%`,
            animationDuration: `${heart.animationDuration}s`,
            animationDelay: `${heart.delay}s`,
            opacity: heart.opacity,
            transform: `scale(${heart.size})`,
          }}
        >
          <Heart 
            className="w-6 h-6 text-rose-300 fill-current" 
            style={{
              filter: 'drop-shadow(0 0 10px rgba(244, 114, 182, 0.3))',
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
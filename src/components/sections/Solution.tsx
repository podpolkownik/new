import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Leaf, Award } from 'lucide-react';

export const Solution = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Безопасность",
      description: "Клинически проверенная формула",
    },
    {
      icon: Leaf,
      title: "Натуральность",
      description: "100% натуральные компоненты",
    },
    {
      icon: Award,
      title: "Эффективность",
      description: "Доказанные результаты",
    },
  ];

  return (
    <div className="solution-container">
      <h1>Решение: Vitacaps</h1>
      <p>Инновационный препарат, который помог мне вернуться к полноценной жизни</p>
      
      <div className="benefits">
        {benefits.map((benefit, index) => (
          <div key={index} className="benefit">
            <benefit.icon />
            <h2>{benefit.title}</h2>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>

      <h2>Как работает Vitacaps?</h2>
      <ul>
        {[
          "Снижает воспаление и устраняет боль",
          "Укрепляет стенки сосудов",
          "Способствует быстрому заживлению",
          "Предотвращает рецидивы",
        ].map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <div className="image-container">
        <img
          src="https://sun9-14.userapi.com/impg/vqkaNF3r-FqLcHYui0LwM0vWAh9goTo6EipQUw/9B_0bo7m7EQ.jpg?size=1280x720&quality=96&sign=898451bcf40f6b3f6cbc5234abba1139&type=album"
          alt="Vitacaps"
          className="desktop-image"
        />
        <img
          src="https://sun9-14.userapi.com/impg/vqkaNF3r-FqLcHYui0LwM0vWAh9goTo6EipQUw/9B_0bo7m7EQ.jpg?size=1280x720&quality=96&sign=898451bcf40f6b3f6cbc5234abba1139&type=album"
          alt="Vitacaps"
          className="mobile-image"
        />
      </div>
    </div>
  );
};

// CSS
const styles = `
  .image-container {
    position: relative;
  }
  .desktop-image {
    display: block;
  }
  .mobile-image {
    display: none;
  }
  @media (max-width: 768px) {
    .desktop-image {
      display: none;
    }
    .mobile-image {
      display: block;
      width: 100%; /* Adjust the size as needed */
    }
  }
`;

// Inject styles into the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

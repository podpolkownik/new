import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Leaf, Award, CheckCircle2 } from 'lucide-react';

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
    <div className="w-full px-4 py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Решение: Vitacaps
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Инновационный препарат, который помог мне вернуться к полноценной жизни
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6">
              <benefit.icon className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            Как работает Vitacaps?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Снижает воспаление и устраняет боль",
              "Укрепляет стенки сосудов",
              "Способствует быстрому заживлению",
              "Предотвращает рецидивы",
            ].map((item, index) => (
              <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                <p className="text-sm md:text-base">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            Vitacaps в действии
          </h3>
          <div className="relative w-full">
            <img
              src="/path-to-mobile-image.jpg"
              alt="Vitacaps mobile"
              className="w-full block md:hidden rounded-lg"
            />
            <img
              src="/path-to-desktop-image.jpg"
              alt="Vitacaps desktop"
              className="w-full hidden md:block rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

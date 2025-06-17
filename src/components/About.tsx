import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, Briefcase, User } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const aboutData = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Parcours Scolaire",
      content: "Baccalauréat technologique STI2D (Science et Technologie de l'Industrie et du Développement Durable) avec spécialité SIN (Système d'Information et Numérique) obtenu avec mention assez bien. Formation solide en mathématiques et sciences du numérique."
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Projets Personnels",
      content: "Développement d'applications web pour ma famille et mes proches, création de sites vitrines, automatisation de tâches quotidiennes avec Python."
    },
    {
      icon: <User className="w-8 h-8" />,
      title: "Profil",
      content: "Étudiante rigoureuse et créative, j'aime résoudre des problèmes complexes et apprendre de nouvelles technologies. Recherche de stages et opportunités professionnelles."
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            À Propos de Moi
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {aboutData.map((item, index) => (
              <div
                key={index}
                className={`bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="text-blue-400 mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center text-white">
                  {item.title}
                </h3>
                <p className="text-slate-300 leading-relaxed text-center">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

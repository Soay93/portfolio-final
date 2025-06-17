import React, { useEffect, useRef, useState } from 'react';
import { Code, Database, Globe, Settings, Users, Zap } from 'lucide-react';

const Skills = () => {
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

  const competences = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Réaliser un développement d'application",
      level: "En cours d'acquisition",
      percentage: 60,
      description: "Développement d'applications web et logicielles",
      details: ["HTML/CSS/JavaScript", "Python", "Frameworks web", "Tests unitaires"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Optimiser des applications informatiques",
      level: "Partiellement acquise",
      percentage: 55,
      description: "Optimisation des performances et algorithmes",
      details: ["Analyse de complexité", "Optimisation code", "Profiling", "Structures de données"]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Administrer des systèmes informatiques communicants",
      level: "Partiellement acquise",
      percentage: 80,
      description: "Administration système et réseaux",
      details: ["Linux/Windows", "Configuration serveurs", "Sécurité", "Virtualisation"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Gérer des données de l'information",
      level: "En cours d'acquisition",
      percentage: 45,
      description: "Gestion et analyse de bases de données",
      details: ["SQL avancé", "Modélisation BDD", "MySql"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Conduire un projet",
      level: "Acquis",
      percentage: 85,
      description: "Gestion de projet informatique",
      details: ["Méthodologies agiles", "Planification", "Communication", "Documentation"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Travailler dans une équipe informatique",
      level: "Partiellement acquise",
      percentage: 80,
      description: "Collaboration et travail d'équipe",
      details: ["Git/GitHub", "Code review", "Communication", "Résolution conflits"]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Acquise': return 'text-green-400';
      case 'Développée': return 'text-blue-400';
      case 'Acquise partiellement': return 'text-yellow-400';
      case 'Partiellement acquise': return 'text-yellow-400';
      case 'En cours d\'acquisition': return 'text-orange-400';
      default: return 'text-slate-400';
    }
  };

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Référentiel des Compétences
          </h2>
          <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
            BUT Informatique - Développement des 6 compétences du référentiel national
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {competences.map((competence, index) => (
              <div
                key={index}
                className={`bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 transform hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-blue-400 flex-shrink-0">
                    {competence.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {competence.title}
                    </h3>
                    <p className="text-slate-300 text-sm mb-3">
                      {competence.description}
                    </p>
                    <div className={`text-sm font-medium mb-3 ${getLevelColor(competence.level)}`}>
                      {competence.level}
                    </div>
                  </div>
                </div>

                {/* Barre de progression */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-slate-400 mb-2">
                    <span>Progression</span>
                    <span>{competence.percentage}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: isVisible ? `${competence.percentage}%` : '0%',
                        transitionDelay: `${index * 150 + 500}ms`
                      }}
                    />
                  </div>
                </div>

                {/* Détails techniques */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-slate-300">Détails techniques:</h4>
                  <div className="flex flex-wrap gap-2">
                    {competence.details.map((detail, detailIndex) => (
                      <span
                        key={detailIndex}
                        className="px-2 py-1 bg-slate-700/50 text-slate-300 rounded text-xs"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

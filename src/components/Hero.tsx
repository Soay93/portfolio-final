import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-6 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Photo Profile */}
          <div className="mb-8 relative inline-block">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-400 to-cyan-400 p-1 bg-gradient-to-r from-blue-400 to-cyan-400">
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-800 flex items-center justify-center">
                <img 
                  src="noir.jpg"
                  alt="" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          
          </div>

          {/* Nom et Titre */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
            Floriane MESLIN
          </h1>
          
          <div className="text-lg md:text-xl text-slate-300 mb-8 space-y-2">
            <p className="font-medium">BUT Informatique - Première Année</p>
            <p className="text-slate-400">IUT de Villetaneuse</p>
          </div>

          {/* Présentation */}
          <div className="max-w-2xl mx-auto mb-12">
            <p className="text-lg text-slate-300 leading-relaxed">
              Étudiante passionnée en informatique, je développe mes compétences en programmation, 
              développement web et gestion de bases de données. Toujours curieuse d'apprendre de nouvelles 
              technologies et de relever des défis techniques innovants.
            </p>
          </div>

          {/* Bouton CTA */}
          <button
            onClick={scrollToProjects}
            className="group bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Découvrir mes projets
            <ChevronDown className="inline-block ml-2 group-hover:translate-y-1 transition-transform duration-300" size={20} />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-slate-400" size={32} />
      </div>
    </section>
  );
};

export default Hero;
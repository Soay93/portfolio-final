import React, { useEffect, useRef, useState } from 'react';
import { Download, Eye, Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const CV = () => {
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

  const handleDownloadCV = () => {
    // Ici vous pouvez ajouter la logique pour télécharger le CV
    alert('Téléchargement du CV...');
  };

  return (
    <section id="cv" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Curriculum Vitae
          </h2>

          <div className="max-w-4xl mx-auto">
            {/* Actions */}
            <div className="flex justify-center gap-4 mb-8">
              <button
                onClick={handleDownloadCV}
                className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                <Download size={20} />
                Télécharger CV
              </button>
              <button className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300">
                <Eye size={20} />
                Aperçu
              </button>
            </div>

            {/* CV Preview */}
            <div className="bg-white text-slate-900 rounded-xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-8">
                <div className="flex items-center gap-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white/20">
                    <img 
                      src="noir.jpg" 
                      alt="" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h1 className="text-3xl font-bold mb-2">Floriane MESLIN</h1>
                    <p className="text-xl text-blue-100 mb-4">Étudiante BUT Informatique</p>
                    <div className="grid md:grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center gap-2">
                        <Mail size={16} />
                        meslinfloriane@gmail.com
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone size={16} />
                        06 48 10 23 18
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        Paris
                      </div>
                      <div className="flex items-center gap-2">
                        <Linkedin size={16} />
                        linkedin.com/in/floriane-meslin
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-6">
                {/* Profil */}
                <div>
                  <h2 className="text-2xl font-bold text-slate-800 mb-3 border-b-2 border-blue-500 pb-1">
                    Profil
                  </h2>
                  <p className="text-slate-700 leading-relaxed">
                    Étudiante en BUT Informatique, passionnée par le développement web et la programmation. 
                    Recherche activement un stage pour mettre en pratique mes compétences techniques et 
                    contribuer à des projets innovants.
                  </p>
                </div>

                {/* Formation */}
                <div>
                  <h2 className="text-2xl font-bold text-slate-800 mb-3 border-b-2 border-blue-500 pb-1">
                    Formation
                  </h2>
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold text-lg">BUT Informatique - 1ère année</h3>
                      <p className="text-slate-600">IUT de Villetaneuse • 2024-2025</p>
                      <p className="text-sm text-slate-600">
                        Développement d'applications, bases de données, algorithmique, gestion de projet
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Baccalauréat Technologique STI2D</h3>
                      <p className="text-slate-600">Lycée PO Guy Moquet - Etienne Lennoir • 2023- 2024</p>
                      <p className="text-sm text-slate-600">
                        Spécialités: SIN • Mention assez bien
                      </p>
                    </div>
                  </div>
                </div>

                {/* Compétences techniques */}
                <div>
                  <h2 className="text-2xl font-bold text-slate-800 mb-3 border-b-2 border-blue-500 pb-1">
                    Compétences Techniques
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Langages</h4>
                      <div className="flex flex-wrap gap-2">
                        {['Python', 'JavaScript', 'HTML/CSS', 'SQL', 'Java', 'C++', 'Assembler'].map((skill) => (
                          <span key={skill} className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Outils</h4>
                      <div className="flex flex-wrap gap-2">
                        {['Git', 'Linux', 'MySQL', 'VS Code'].map((tool) => (
                          <span key={tool} className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Projets */}
                <div>
                  <h2 className="text-2xl font-bold text-slate-800 mb-3 border-b-2 border-blue-500 pb-1">
                    Projets Principaux
                  </h2>
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold">Site web personnel et familial</h3>
                      <p className="text-sm text-slate-600">HTML, CSS, JavaScript • Création d'un site vitrine responsive</p>
                    </div>
                    <div>
                      <h3 className="font-semibold">Application de gestion SAÉ</h3>
                      <p className="text-sm text-slate-600">Python, MySQL • Développement d'une application de gestion client</p>
                    </div>
                  </div>
                </div>

                {/* Qualités */}
                <div>
                  <h2 className="text-2xl font-bold text-slate-800 mb-3 border-b-2 border-blue-500 pb-1">
                    Qualités Personnelles
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {['Rigoureuse', 'Créative', 'Curieuse', 'Collaborative', 'Organisée'].map((quality) => (
                      <span key={quality} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                        {quality}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CV;
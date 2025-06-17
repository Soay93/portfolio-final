import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Calendar, Target, CheckCircle } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
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

  const projects = [
    {
      title: "SAÉ 1.01 - Implémentation d'un besoin client",
      description: "Analyse et développement d'une solution informatique répondant aux besoins spécifiques d'un client.",
      tasks: "Recueil des besoins, analyse fonctionnelle, conception et développement d'une application de gestion.",
      timeline: [
        "Semaine 1-2: Analyse des besoins et spécifications",
        "Semaine 3-4: Conception de l'architecture",
        "Semaine 5-8: Développement et tests",
        "Semaine 9: Présentation client"
      ],
      competences: ["Réaliser un développement d'application", "Optimiser des applications informatiques"],
      niveau: "Acquise partiellement",
      preuves: "#",
      technologies: ["HTML", "CSS", "JavaScript", "Python"]
    },
    {
      title: "SAÉ 1.02 - Comparaison d'approches algorithmiques",
      description: "Étude comparative de différents algorithmes de tri et optimisation des performances.",
      tasks: "Implémentation et analyse de complexité de différents algorithmes de tri.",
      timeline: [
        "Semaine 1: Recherche théorique",
        "Semaine 2-3: Implémentation des algorithmes",
        "Semaine 4: Tests de performance",
        "Semaine 5: Analyse et rapport"
      ],
      competences: ["Optimiser des applications informatiques"],
      niveau: "En cours d'acquisition",
      preuves: "#",
      technologies: ["Python", "Matplotlib", "Pandas"]
    },
    {
      title: "SAÉ 1.03 - Installation de poste pour le développement",
      description: "Configuration d'un environnement de développement complet et sécurisé.",
      tasks: "Installation et configuration d'outils de développement, systèmes de contrôle de version.",
      timeline: [
        "Jour 1-2: Installation OS et outils de base",
        "Jour 3-4: Configuration IDE et extensions",
        "Jour 5: Configuration Git et déploiement",
        "Jour 6: Tests et documentation"
      ],
      competences: ["Administrer des systèmes informatiques communicants complexes"],
      niveau: "Acquise totalement",
      preuves: "#",
      technologies: ["Linux", "Git", "Docker", "VS Code"]
    },
    {
      title: "SAÉ 1.04 - Création d'une base de données",
      description: "Conception et implémentation d'une base de données relationnelle pour une application métier.",
      tasks: "Modélisation conceptuelle, création des tables, requêtes SQL complexes.",
      timeline: [
        "Semaine 1: Analyse des besoins données",
        "Semaine 2: Modélisation MCD/MLD",
        "Semaine 3-4: Création tables et contraintes",
        "Semaine 5: Requêtes et optimisation"
      ],
      competences: ["Gérer des données de l'information"],
      niveau: "Développée",
      preuves: "#",
      technologies: ["MySQL", "SQL", "PHPMyAdmin"]
    },
    {
      title: "SAÉ 1.05 - Recueil de besoins",
      description: "Méthodologie de recueil et analyse des besoins utilisateurs pour un projet informatique.",
      tasks: "Entretiens utilisateurs, analyse fonctionnelle, rédaction de spécifications.",
      timeline: [
        "Semaine 1-2: Préparation entretiens",
        "Semaine 3-4: Conduite d'entretiens",
        "Semaine 5-6: Analyse et synthèse",
        "Semaine 7: Présentation résultats"
      ],
      competences: ["Conduire un projet"],
      niveau: "En cours d'acquisition",
      preuves: "#",
      technologies: ["UML", "Figma", "Trello"]
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Projets Universitaires SAÉ
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Liste des projets */}
            <div className="space-y-4">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`cursor-pointer transition-all duration-300 ${
                    activeProject === index 
                      ? 'bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border-blue-500' 
                      : 'bg-slate-900/50 border-slate-700/50'
                  } border rounded-lg p-4 hover:border-blue-500/50`}
                  onClick={() => setActiveProject(index)}
                >
                  <h3 className="font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-slate-400 text-sm mb-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-blue-600/20 text-blue-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Détails du projet actif */}
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {projects[activeProject].title}
                </h3>
                <p className="text-slate-300 mb-4">
                  {projects[activeProject].description}
                </p>
                
                <div className="flex items-center gap-2 mb-4">
                  <Target className="w-4 h-4 text-blue-400" />
                  <span className="text-sm text-slate-400">Tâches:</span>
                </div>
                <p className="text-slate-300 mb-6">
                  {projects[activeProject].tasks}
                </p>
              </div>

              {/* Timeline */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-medium text-white">Chronologie</span>
                </div>
                <div className="space-y-2">
                  {projects[activeProject].timeline.map((step, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-slate-300 text-sm">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Compétences */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-sm font-medium text-white">Compétences</span>
                </div>
                <div className="space-y-2">
                  {projects[activeProject].competences.map((comp, index) => (
                    <div key={index} className="text-slate-300 text-sm">
                      • {comp}
                    </div>
                  ))}
                </div>
                <div className="mt-2">
                  <span className="text-xs text-slate-400">Niveau: </span>
                  <span className="text-sm font-medium text-cyan-400">
                    {projects[activeProject].niveau}
                  </span>
                </div>
              </div>

              {/* Liens */}
              <div className="flex gap-3">
                <a
                  href={projects[activeProject].preuves}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600/20 text-blue-300 rounded-lg hover:bg-blue-600/30 transition-colors"
                >
                  <ExternalLink size={16} />
                  Voir les preuves
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 px-4 py-2 bg-slate-700/50 text-slate-300 rounded-lg hover:bg-slate-700 transition-colors"
                >
                  <Github size={16} />
                  Code source
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
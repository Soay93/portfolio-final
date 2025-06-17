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
      title: "SAÉ 1 - Implémentation",
      description: "Développement en Python d’un programme permettant de modéliser un réseau social et d’analyser les relations entre ses membres. Cette SAE m’a permis de manipuler des structures de données, de lire des fichiers, et de concevoir un programme structuré avec des fonctions claires et testées.",
      tasks: "Ce projet vise à analyser un réseau social modélisé par des structures de données Python. Il s’agit d’un travail réalisé en binôme dans le cadre du BUT Informatique à l’IUT de Villetaneuse.",
      timeline: [
        "Modéliser les relations entre membres d’un réseau social",
        "Élaborer un dictionnaire d’amitiés à partir d’un tableau",
        "Lire et filtrer des données à partir de fichiers CSV",
        "Déterminer les personnes les plus populaires"
      ],
      competences: ["Python (structures conditionnelles, boucles, listes, dictionnaires, fichiers)", "Logique algorithmique, tests unitaires."],
      niveau: "Acquis partiellement",
      technologies: ["Python"]
    },
    {
      title: "SAÉ 2 - Installation d'un poste",
      description: "Installation complète d’un système Linux sur un ordinateur, avec mise en place d’un environnement de développement comprenant Apache, PHP, PostgreSQL, et des outils de programmation. Ce projet m’a permis de mieux comprendre l’administration système et la configuration d’un poste de travail de développeur.",
      tasks: "Dans le cadre de cette SAÉ, nous avons reçu un ordinateur à réinitialiser totalement. Le but était d’installer un système Linux léger (Xubuntu), configurer le réseau, et mettre en place un environnement complet de développement web et logiciel.",
      timeline: [
        "Création d’un support d’installation bootable (clé/disque USB)",
        "Installation de Xubuntu en mode UEFI",
        "Configuration réseau (Wi-Fi / Eduroam)",
        "Installation d’un serveur web (Apache), PHP, et PostgreSQL",
        "Configuration des pages perso utilisateurs et tests PHP",
        "Installation de Java, Python, VS Code et création de scripts"
      ],
      competences: ["gérer des systèmes Linux","manipuler le terminal","installer et configurer des services essentiels pour le développement"],
      niveau: "Acquis partiellement.",
      technologies: ["Linux", "PostgreSQL", "PHP"]
    },
    {
      title: "SAÉ 3 - Création d'une base de données",
      description: "Création d’une base de données à partir de données CSV sur les catastrophes climatiques. Ce projet m’a permis de modéliser un schéma relationnel, d’utiliser un AGL (MySQL Workbench), d’écrire des scripts SQL, et d'importer des données dans PostgreSQL.",
      tasks: "Cette SAÉ avait pour objectif de concevoir une base de données complète sur les catastrophes climatiques mondiales, à partir de données CSV. Le projet a été mené avec les outils PostgreSQL pour l’exécution des requêtes, et MySQL Workbench pour la modélisation graphique.",
      timeline: [
        "Modélisation conceptuelle (entités-associations)",
        "Création des tables SQL manuellement et via AGL",
        "Comparaison des scripts manuels et générés automatiquement",
        "Peuplement de la base à partir d’un fichier CSV",
        "Utilisation de clés primaires/étrangères et types appropriés"
      ],
      competences: ["modéliser une base de données","compréhension des différences entre outils comme PostgreSQL et MySQL Workbench"],
      niveau: "En cours d'acquisition",
      technologies: ["SQL", "MySQL Workbench", "PostgreSQL"]
    },
    {
      title: "SAÉ 4 - Installation de services réseau",
      description: "Cette SAÉ consistait à transformer un ordinateur personnel sous Linux en véritable serveur de développement. Cela comprenait la mise en place d’un environnement LAMP (Linux, Apache, MariaDB, PHP), ainsi que d’autres services tels que FTP, SSH et la configuration de pages web personnelles accessibles en local.",
      tasks: "Installation et configuration de services réseau sur un poste Linux, incluant un serveur web Apache, une base de données MariaDB, PHP, un serveur FTP, un accès SSH sécurisé, et la configuration d’un environnement de développement complet pour simuler un serveur personnel.",
      timeline: [
        "Serveur Apache2 (web)",
        "Base de données MariaDB (équivalent libre de MySQL)",
        "Support PHP avec PDO pour accéder à la base",
        "Création d’un utilisateur système + base de données dédiée",
        "FTP : configuration pour utilisateur local et anonyme",
        "SSH avec port personnalisé et restrictions de sécurité",
        "test de connexion via navigateur et en ligne de commande"
      ],
      competences: ["configurer système Linux","gestion de services réseau","meilleure compréhension de la structure client/serveur sur le web."],
      niveau: "Acquis partiellement",
      technologies: ["PHP", "MariaDB", "Linux"]
    },
    {
      title: "SAÉ 5 - Exploitation d'une base de données",
      description: "Dans cette SAÉ, nous avons exploité une base de données contenant des données issues d’un réseau social, afin de répondre à plusieurs problématiques liées à l’activité des utilisateurs. L’objectif était de croiser les données, détecter des corrélations et en tirer des conclusions utiles pour la stratégie de la plateforme.",
      tasks: "Analyse statistique de données d’un réseau social à partir d’une base SQL. Réalisation de requêtes complexes, traitement de résultats, et production de graphiques (corrélations, comparaisons régionales, comportements utilisateurs) pour répondre à des problématiques concrètes d'engagement et de ciblage.",
      timeline: [
        "Comparaison des commentaires selon le genre et la région",
        "Corrélation entre nombre de commentaires et niveau d’engagement",
        "Impact des clics publicitaires sur les téléchargements"
      ],
      competences: ["Manipuler des données réelles","Appliquer des requêtes SQL complexes","interpréter des résultats sous forme graphique"],
      niveau: "En cours d'acquisition",
      technologies: ["SQL", "PostreSQL", "MySQL Workbench"]
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
                  <span className="text-sm font-medium text-white">Objectif</span>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from 'lucide-react';

const Contact = () => {
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

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "meslinfloriane@gmail.com",
      link: "mailto:meslinfloriane@gmail.com",
      description: "N'hésitez pas à me contacter"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Téléphone",
      value: "06 48 10 23 18",
      link: "tel:+330648102318",
      description: "Disponible tout le temps"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Localisation",
      value: "[Paris, France]",
      link: "#",
      description: "Mobile pour stages/alternance"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "/floriane-meslin",
      link: "https://linkedin.com/in/floriane-meslin",
      description: "Profil professionnel"
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Contact
          </h2>
          <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
            Intéressé par mon profil ? N'hésitez pas à me contacter pour discuter d'opportunités de stage ou d'emploi.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.link}
                  className={`group bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="text-blue-400 group-hover:text-blue-300 transition-colors">
                      {contact.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-blue-300 transition-colors">
                        {contact.label}
                      </h3>
                      <p className="text-slate-300 font-medium mb-2">
                        {contact.value}
                      </p>
                      <p className="text-slate-400 text-sm">
                        {contact.description}
                      </p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors" />
                  </div>
                </a>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12">
              <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-xl p-8 border border-blue-500/30">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Recherche active de stage
                </h3>
                <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                  Je recherche un stage en développement informatique pour l'année universitaire 2025-2026. Motivée et désireuse d'apprendre, je suis prête à contribuer 
                  à vos projets avec enthousiasme.
                </p>
                <a
                  href="mailto:floriane.meslin@email.com"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
                >
                  <Mail size={20} />
                  Me contacter
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-700/50 mt-16 pt-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-400 text-sm">
            © 2024 Floriane MESLIN - Portfolio BUT Informatique
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
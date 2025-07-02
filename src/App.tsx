import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, MapPin, Calendar, GraduationCap, Phone, Mail, Linkedin, Github, ExternalLink, Code, Database, Palette, Server } from 'lucide-react';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const skills = [
    { name: 'HTML/CSS', level: 90, icon: Code },
    { name: 'JavaScript', level: 75, icon: Code },
    { name: 'PHP', level: 70, icon: Server },
    { name: 'Java', level: 70, icon: Code },
    { name: 'VB.NET', level: 80, icon: Code },
    { name: 'SQL', level: 85, icon: Database },
    { name: 'Bootstrap', level: 85, icon: Palette },
    { name: 'jQuery', level: 75, icon: Code }
  ];

  const projects = [
    {
      title: "Système de Gestion Scolaire",
      description: "Application web complète pour la gestion des étudiants, notes et emplois du temps développée en PHP/MySQL.",
      tech: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
      image: "https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Application Desktop Java",
      description: "Logiciel de gestion d'inventaire avec interface graphique Swing et base de données intégrée.",
      tech: ["Java", "Swing", "SQLite"],
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      title: "Site Web Responsive",
      description: "Site vitrine moderne avec design responsive et animations CSS avancées.",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Johan
                </span>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item)}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        activeSection === item
                          ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                          : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                      }`}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </button>

                {/* Mobile menu button */}
                <div className="md:hidden">
                  <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="p-2 rounded-md text-gray-700 dark:text-gray-300"
                  >
                    {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
                {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 w-full text-left"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section id="home" className="pt-16 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    Salut, je suis{' '}
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Johan
                    </span>
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
                    Développeur Junior passionné
                  </p>
                  <p className="text-lg text-gray-500 dark:text-gray-400 max-w-lg">
                    Étudiant en Génie Logiciel à l'IUC, spécialisé dans le développement web et desktop. 
                    Toujours prêt à relever de nouveaux défis technologiques.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => scrollToSection('projects')}
                    className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                  >
                    Voir mes projets
                  </button>
                  <a
                    href="/CV Johan.pdf"
                    download
                    className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg font-medium hover:bg-blue-600 hover:text-white dark:hover:text-white transition-all duration-200 inline-block"
                  >
                    Mon CV
                  </a>
                </div>

                <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>Dschang, Cameroun</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>20 ans</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="w-90 h-95 rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl">
                    <img
                      src="/PXL_20240211_100605586.PORTRAIT-removebg-preview.png"
                      alt="Johan Djongo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                    <Code className="h-12 w-12 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">À propos de moi</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Découvrez mon parcours et ma passion pour le développement logiciel
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-4 mb-4">
                    <GraduationCap className="h-8 w-8 text-blue-600" />
                    <h3 className="text-xl font-semibold">Formation</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Actuellement étudiant en <strong>Génie Logiciel</strong> à l'Institut Universitaire de la Côte (IUC), 
                    je développe mes compétences en programmation et en conception de systèmes informatiques.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-4 mb-4">
                    <Code className="h-8 w-8 text-purple-600" />
                    <h3 className="text-xl font-semibold">Passion</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Passionné par le développement logiciel, j'aime créer des solutions innovantes 
                    qui résolvent des problèmes réels. Mon objectif est de devenir un développeur full-stack accompli.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-4 mb-4">
                    <Server className="h-8 w-8 text-green-600" />
                    <h3 className="text-xl font-semibold">Expertise</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Spécialisé dans le développement web (HTML, CSS, JavaScript, PHP) et desktop (Java, VB.NET), 
                    avec une solide expérience en modélisation et bases de données.
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-96 h-90 rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src="/WhatsApp Image 2025-05-03 à 07.39.12_0761781a.jpg"
                      alt="Johan Djongo - Photo professionnelle"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Mes Compétences</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Technologies et outils que je maîtrise pour créer des solutions efficaces
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center space-x-3 mb-4">
                      <Icon className="h-8 w-8 text-blue-600" />
                      <h3 className="text-lg font-semibold">{skill.name}</h3>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Niveau</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Développement Web</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  HTML, CSS, JavaScript, PHP avec frameworks modernes comme Bootstrap et jQuery
                </p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 dark:bg-purple-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Server className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Développement Desktop</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Applications Java et VB.NET avec interfaces utilisateur intuitives
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Bases de Données</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Conception, modélisation MERISE/UML et requêtes SQL avancées
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Mes Projets</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Découvrez quelques-uns de mes projets récents qui démontrent mes compétences
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium">
                      <span>Voir le projet</span>
                      <ExternalLink className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Contactez-moi</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Prêt à collaborer ? N'hésitez pas à me contacter pour discuter de vos projets
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                  <h3 className="text-xl font-semibold mb-6">Informations de contact</h3>
                  <div className="space-y-4">
                    <a
                      href="https://wa.me/237653368311"
                      className="flex items-center space-x-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors"
                    >
                      <Phone className="h-6 w-6 text-green-600" />
                      <div>
                        <p className="font-medium">WhatsApp</p>
                        <p className="text-gray-600 dark:text-gray-300">+237 653 368 311</p>
                      </div>
                    </a>

                    <a
                      href="mailto:johandjongo5@gmail.com"
                      className="flex items-center space-x-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors mb-4"
                    >
                      <Mail className="h-6 w-6 text-blue-600" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-gray-600 dark:text-gray-300">johandjongo5@gmail.com</p>
                      </div>
                    </a>

                    <a
                      href="https://www.linkedin.com/in/johan-djongo-18040b322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors"
                    >
                      <Linkedin className="h-6 w-6 text-blue-600" />
                      <div>
                        <p className="font-medium">LinkedIn</p>
                        <p className="text-gray-600 dark:text-gray-300">Johan Djongo</p>
                      </div>
                    </a>

                    <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <MapPin className="h-6 w-6 text-gray-600" />
                      <div>
                        <p className="font-medium">Localisation</p>
                        <p className="text-gray-600 dark:text-gray-300">Dschang, Cameroun</p>
                      </div>
                    </div>
                  </div>
                </div>
               </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-6">Envoyez-moi un message</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nom complet</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700"
                      placeholder="votre@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Sujet</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700"
                      placeholder="Sujet de votre message"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700"
                      placeholder="Votre message..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                  >
                    Envoyer le message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Johan Djongo</h3>
                <p className="text-gray-300 mb-4">
                  Développeur Junior passionné, toujours prêt à apprendre et à créer des solutions innovantes.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://wa.me/237653368311"
                    className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/johan-djongo-18040b322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Navigation</h4>
                <ul className="space-y-2">
                  {['Accueil', 'À propos', 'Compétences', 'Projets', 'Contact'].map((item, index) => (
                    <li key={index}>
                      <button
                        onClick={() => scrollToSection(['home', 'about', 'skills', 'projects', 'contact'][index])}
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Contact</h4>
                <div className="space-y-2 text-gray-300">
                  <p>📍 Dschang, Cameroun</p>
                  <p>📱 +237 653 368 311</p>
                  <p>🎓 Étudiant en Génie Logiciel - IUC</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
              <p className="text-gray-400">
                © 2024 Johan Djongo. Tous droits réservés. Développé avec ❤️ et React.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

import Dev_1 from '../assets/projects/1.webp';
import Dev_2 from '../assets/projects/2.webp';
import Dev_3 from '../assets/projects/3.webp';
import Dev_4 from '../assets/projects/4.webp';
import Dev_5 from '../assets/projects/5.webp';
import Dev_6 from '../assets/projects/6.webp';


interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
}

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects: Project[] = [
    {
      id: 1,
      title: "FACTURA_BACK",
      description: "API RESTful para facturación electrónica con autenticación, gestión de clientes, productos y conexión a base de datos.",
      image: Dev_2,
      technologies: ["Node.js", "Express", "Sequelize", "MySQL", "JWT"],
      githubUrl: "https://github.com/DarwinQuitoDev/FACTURA_BACK",
      demoUrl: ""
    },
    {
      id: 2,
      title: "FACTURA_FRONT",
      description: "Interfaz web para emisión de facturas electrónicas y administración de datos del sistema.",
      image: Dev_1,
      technologies: ["React", "Vite", "Tailwind CSS", "Axios"],
      githubUrl: "https://github.com/DarwinQuitoDev/FACTURA_FRONT",
      demoUrl: ""
    },
    {
      id: 3,
      title: "GYM-CENTER-DEMO",
      description: "App para gestión de socios, membresías y rutinas de un gimnasio.",
      image: Dev_4,
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      githubUrl: "https://github.com/DarwinQuitoDev/GYM-CENTER-DEMO",
      demoUrl: ""
    },
    {
      id: 4,
      title: "Landing Page - CompuStore",
      description: "Landing page profesional para tienda de computadoras con diseño responsivo y enfoque comercial.",
      image: Dev_6,
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      githubUrl: "https://github.com/DarwinQuitoDev/LANDING-PAGE",
      demoUrl: ""
    },
    {
      id: 5,
      title: "PORTAFOLIO",
      description: "Sitio web personal que muestra tus proyectos, experiencia y enlaces a redes sociales.",
      image: Dev_3,
      technologies: ["React", "Vite", "Tailwind CSS"],
      githubUrl: "https://github.com/DarwinQuitoDev/PORTAFOLIO",
      demoUrl: ""
    },
    {
      id: 6,
      title: "TEST_PLUS",
      description: "Entorno de pruebas para desarrollo de APIs RESTful con autenticación y consumo de datos.",
      image: Dev_5,
      technologies: ["Node.js", "Express", "React", "Vite", "JWT"],
      githubUrl: "https://github.com/DarwinQuitoDev/TEST_PLUS",
      demoUrl: ""
    }
    // Añade más proyectos según necesites
  ];

  const imgElement = document.createElement('img');

  return (
    <section id="proyectos" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Proyectos</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: project.id * 0.1 }}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative h-48">
                <img
                  src={imgElement.src = project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-700 text-sm text-gray-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <FaGithub className="mr-2" />
                    Código
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

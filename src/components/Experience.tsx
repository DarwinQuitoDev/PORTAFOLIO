import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase } from 'react-icons/fa';

interface Experience {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string;
}

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences: Experience[] = [
    {
      id: 1,
      company: "CompuStore Reina Flores",
      position: "Encargado Informático",
      period: "2023 - Presente",
      description: "Mantenimiento de infraestructura, desarrollo de CRM con WhatsApp, soporte técnico."
    },
    {
      id: 2,
      company: "NexGen",
      position: "Analista desarrollador",
      period: "2022 - 2023",
      description: "Desarrollo de APIs en Node.js y diseño de landing pages."
    },
    {
      id: 3,
      company: "Universidad Técnica del Norte",
      position: "Analista Informático",
      period: "2021 - 2022",
      description: "Automatización de procesos de investigación y desarrollo de herramientas empresariales."
    },
    {
      id: 4,
      company: "EPAA-AA",
      position: "Auxiliar Informático",
      period: "2020 - 2021",
      description: "Desarrollo de apps móviles/web, configuración de CCTV y redes locales."
    },
    {
      id: 5,
      company: "MOVISA y Baytex",
      position: "Atención al cliente y Marketing digital",
      period: "2019 - 2020",
      description: "Gestión de redes sociales, edición visual y atención directa al cliente."
    }
  ];

  return (
    <section id="experiencia" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Experiencia Laboral</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500"></div>
          
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.5, delay: exp.id * 0.1 }}
              className={`flex items-center mb-8 ${
                index % 2 === 0 ? 'flex-row-reverse' : ''
              }`}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8'} text-${
                index % 2 === 0 ? 'left' : 'right'
              }`}>
                <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                  <div className="flex items-center mb-2">
                    <FaBriefcase className="text-blue-400 text-xl mr-2" />
                    <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                  </div>
                  <h4 className="text-lg font-semibold text-blue-400 mb-2">{exp.position}</h4>
                  <p className="text-gray-400 text-sm mb-2">{exp.period}</p>
                  <p className="text-gray-300">{exp.description}</p>
                </div>
              </div>
              <div className="w-3 h-3 bg-blue-500 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

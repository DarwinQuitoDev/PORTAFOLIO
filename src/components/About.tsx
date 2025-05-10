import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="sobremí" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Sobre Mí</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-lg text-gray-300 mb-6">
            Soy Darwin Quito, desarrollador freelance apasionado por crear soluciones digitales útiles,
            intuitivas y de alto rendimiento. Me dedico a construir aplicaciones web y móviles robustas,
            combinando diseño, lógica y tecnología para ayudar a empresas a optimizar procesos e impulsar su crecimiento.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            Disfruto trabajar con tecnologías como React, Angular, Node.js y .NET, además de involucrarme
            en el diseño visual y marketing digital cuando el proyecto lo requiere.
          </p>
          <div className="mt-8">
            <p className="text-xl font-semibold text-blue-400">
              🎯 Siempre estoy en busca de nuevos desafíos que me permitan crecer profesional y personalmente.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

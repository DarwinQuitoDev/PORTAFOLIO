import { motion } from 'framer-motion';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa';
import MeDev from '../assets/web/ME-DEV.webp';

const Hero = () => {
  const socialLinks = [
    { id: 1, icon: FaFacebook, url: 'https://www.facebook.com/profile.php?id=100057595729705' },
    { id: 2, icon: FaInstagram, url: 'https://www.instagram.com/darwin.quito/' },
    { id: 3, icon: FaLinkedin, url: 'https://www.linkedin.com/in/darwin-quito-8b1a48340/' },
    { id: 4, icon: FaTiktok, url: 'https://www.tiktok.com/@darwin.quito' },
    { id: 5, icon: FaGithub, url: 'https://github.com/DarwinQuitoDev' }
  ];

  return (
    <section
      id="inicio"
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center bg-black text-white px-6 md:px-16 lg:px-32 py-10 gap-10"
    >
      {/* Text Block */}
      <motion.div
        className="max-w-xl text-center md:text-left space-y-6"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-2">Darwin Quito</h1>
          <div className="w-20 h-1 bg-blue-500 mb-4"></div>
          <p className="text-lg text-gray-400">Ingeniero de Software & Desarrollador Freelance</p>
        </div>

        <p className="text-md text-gray-300 leading-relaxed">
          Creo soluciones digitales modernas que combinan eficiencia y diseño.
          Me especializo en desarrollo web y móvil usando React, Angular, Node.js y .NET.
        </p>

        <p className="text-sm text-gray-500 italic">
          Siempre en busca de proyectos que impulsen la innovación y el crecimiento.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start space-x-5 pt-4">
          {socialLinks.map(({ id, icon: Icon, url }) => (
            <motion.a
              key={id}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon size={22} />
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Image Block */}
      <motion.div
        className="w-11/12 h-11/12 overflow-hidden shadow-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <img src={MeDev} alt="Darwin Quito" className="w-full h-full object-cover" />
      </motion.div>
    </section>
  );
};

export default Hero;

import { motion } from 'framer-motion';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa';

const Hero = () => {
  const socialLinks = [
    { id: 1, icon: FaFacebook, url: 'https://www.facebook.com/profile.php?id=100057595729705' },
    { id: 2, icon: FaInstagram, url: 'https://www.instagram.com/darwin.quito/' },
    { id: 3, icon: FaLinkedin, url: 'https://www.linkedin.com/in/darwin-quito-8b1a48340/' },
    { id: 4, icon: FaTiktok, url: 'https://www.tiktok.com/@darwin.quito' },
    { id: 5, icon: FaGithub, url: 'https://github.com/DarwinQuitoDev'}
  ];

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Darwin Quito
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8">
            Ingeniero de Software
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Especializado en desarrollo web y móvil, con enfoque en arquitecturas frontend/backend modernas
            y automatización de procesos.
          </p>
          <div className="flex justify-center space-x-6">
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
                <Icon size={28} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

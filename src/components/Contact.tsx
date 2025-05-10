import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import { FaWhatsapp, FaEnvelope, FaFacebook, FaInstagram, FaTiktok, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: false });

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      setStatus({ submitting: false, submitted: true, error: false });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({ submitting: false, submitted: false, error: true });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    { id: 1, icon: FaFacebook, url: 'https://facebook.com', label: 'Facebook' },
    { id: 2, icon: FaInstagram, url: 'https://instagram.com', label: 'Instagram' },
    { id: 3, icon: FaTiktok, url: 'https://tiktok.com', label: 'TikTok' },
    { id: 4, icon: FaLinkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
  ];

  return (
    <section id="contacto" className="py-5 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Contáctame</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Información de contacto</h3>
            <div className="space-y-5">
              <a
                href="mailto:dfquitoc_per@outlook.com"
                className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-all"
              >
                <FaEnvelope className="text-xl" />
                dfquitoc_per@outlook.com
              </a>
              <a
                href="https://wa.me/593963791150"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-all"
              >
                <FaWhatsapp className="text-xl" />
                +593 96 379 1150
              </a>
            </div>

            <div className="mt-10">
              <h4 className="text-xl font-semibold mb-4">Sígueme en:</h4>
              <div className="flex gap-4 mt-4">
                {socialLinks.map(({ id, icon: Icon, url, label }) => (
                  <a
                    key={id}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                    aria-label={label}
                  >
                    <Icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded-xl bg-gray-800 border border-gray-700 p-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded-xl bg-gray-800 border border-gray-700 p-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="mt-1 w-full rounded-xl bg-gray-800 border border-gray-700 p-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                disabled={status.submitting}
                className="w-full py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white font-medium disabled:opacity-50 shadow-lg"
              >
                {status.submitting ? 'Enviando...' : 'Enviar Mensaje'}
              </button>
              {status.submitted && (
                <p className="text-sm text-green-400 mt-2">¡Mensaje enviado con éxito!</p>
              )}
              {status.error && (
                <p className="text-sm text-red-400 mt-2">Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

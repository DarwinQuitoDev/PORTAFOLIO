import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaCode,
  FaReact,
  FaDatabase,
  FaCloud,
  FaPaintBrush
} from 'react-icons/fa';

interface SkillCategory {
  id: number;
  title: string;
  icon: React.ElementType;
  skills: string[];
}

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories: SkillCategory[] = [
    {
      id: 1,
      title: "Lenguajes",
      icon: FaCode,
      skills: ["C#", "JavaScript", "TypeScript", "Python", "Java", "HTML5", "CSS3"]
    },
    {
      id: 2,
      title: "Frameworks y Librerías",
      icon: FaReact,
      skills: ["React", "Angular", ".NET", "Node.js", "Tailwind", "Bootstrap", "JWT", "Xamarin"]
    },
    {
      id: 3,
      title: "Bases de Datos",
      icon: FaDatabase,
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Oracle", "SQLite", "MariaDB"]
    },
    {
      id: 4,
      title: "Cloud y DevOps",
      icon: FaCloud,
      skills: ["Firebase", "AWS", "Azure", "Docker", "GitHub"]
    },
    {
      id: 5,
      title: "Diseño y Marketing Digital",
      icon: FaPaintBrush,
      skills: ["Adobe Photoshop", "Canva", "Filmora", "Facebook Ads"]
    }
  ];

  return (
    <section id="habilidades" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Habilidades Técnicas</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: category.id * 0.1 }}
              className="bg-gray-900 hover:bg-gray-800 p-6 rounded-lg"
            >
              <div className="flex items-center mb-4">
                <category.icon className="text-blue-400 text-2xl mr-2" />
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-700 hover:bg-gray-300 text-sm text-gray-300 hover:text-gray-700 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

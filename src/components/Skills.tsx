
import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "AI-Assisted Frontend Development",
      skills: ["React", "HTML5", "CSS3", "JavaScript (ES6+)", "Tailwind CSS", "Responsive Design"],
      color: "blue"
    },
    {
      title: "AI-Assisted Backend Development",
      skills: ["Node.js", "Express.js", "MongoDB", "RESTful APIs", "MERN Stack", "Database Design"],
      color: "green"
    },
    {
      title: "AI Development Tools",
      skills: ["ChatGPT", "GitHub Copilot", "Claude AI", "AI-Assisted Coding", "Prompt Engineering", "Code Generation"],
      color: "purple"
    },
    {
      title: "Embedded Systems & IoT",
      skills: ["ESP32", "Raspberry Pi Pico", "MicroPython", "IoT Solutions", "PCB Design", "Hardware Integration"],
      color: "orange"
    },
    {
      title: "Development & Hardware",
      skills: ["Git & GitHub", "VS Code", "PC Building", "Hardware Diagnostics", "SOHO Networking", "System Configuration"],
      color: "pink"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "border-blue-500 bg-blue-500/10 text-blue-400",
      green: "border-green-500 bg-green-500/10 text-green-400",
      purple: "border-purple-500 bg-purple-500/10 text-purple-400",
      orange: "border-orange-500 bg-orange-500/10 text-orange-400",
      pink: "border-pink-500 bg-pink-500/10 text-pink-400"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="skills" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">AI-Enhanced Skills & Technologies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Leveraging artificial intelligence tools to accelerate development and create innovative solutions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: (categoryIndex * 0.1) + (index * 0.05) }}
                    className={`px-3 py-1 rounded-full text-sm border ${getColorClasses(category.color)} hover:scale-105 transition-transform duration-200`}
                  >
                    {skill}
                  </motion.span>
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


import { motion } from "framer-motion";
import { Code, Cpu, Wrench } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-gray-300 leading-relaxed"
          >
            <p className="mb-6">
              I'm a tech enthusiast who leverages AI tools to create innovative full-stack web applications and embedded systems solutions. 
              Using AI assistants like ChatGPT and GitHub Copilot, I develop efficient MERN stack applications, accelerating my development 
              process while maintaining high code quality.
            </p>
            <p className="mb-6">
              My AI-powered approach extends to both frontend and backend development, where I build React applications, Node.js APIs, 
              and MongoDB databases with intelligent assistance. I also work with embedded systems using ESP32 and Raspberry Pi Pico, 
              creating IoT solutions and hardware integrations.
            </p>
            <p>
              I believe in the power of AI-assisted development to solve complex problems faster and more efficiently, combining 
              human creativity with artificial intelligence to build practical solutions that bridge hardware and software.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 gap-6"
          >
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-blue-500 transition-colors duration-300">
              <Code className="text-blue-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-white mb-2">AI-Powered Full-Stack Development</h3>
              <p className="text-gray-400">MERN stack applications built with AI assistance for faster, more efficient development</p>
            </div>
            
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-purple-500 transition-colors duration-300">
              <Cpu className="text-purple-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-white mb-2">Smart Embedded Systems</h3>
              <p className="text-gray-400">ESP32, Raspberry Pi Pico, IoT solutions with AI-enhanced development workflow</p>
            </div>
            
            <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-green-500 transition-colors duration-300">
              <Wrench className="text-green-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-white mb-2">Hardware & AI Integration</h3>
              <p className="text-gray-400">PC building, networking, and system solutions enhanced by intelligent development tools</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

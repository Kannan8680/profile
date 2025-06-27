
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Profile Photo */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0, rotateY: 180 }}
            animate={{ scale: 1, opacity: 1, rotateY: 0 }}
            transition={{ 
              duration: 1.2, 
              delay: 0.2,
              type: "spring",
              stiffness: 100,
              damping: 10
            }}
            className="flex justify-center mb-8"
          >
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotateZ: [0, 1, -1, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{ 
                scale: 1.1,
                rotateZ: 5,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer"
            >
              <Avatar className="w-32 h-32 md:w-40 md:h-40 border-4 border-blue-400/50 shadow-2xl hover:border-purple-400/70 transition-all duration-300 hover:shadow-blue-500/25 hover:shadow-3xl">
                <AvatarImage 
                  src="/src/WhatsApp Image 2025-06-18 at 16.19.08_62c0bf03.jpg" 
                  alt="Kannan R Profile Photo"
                  className="object-cover hover:brightness-110 transition-all duration-300"
                />
                <AvatarFallback className="text-2xl md:text-3xl font-bold bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                  KR
                </AvatarFallback>
              </Avatar>
            </motion.div>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Kannan R
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">
            AI-Powered Full-Stack Developer
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Building Modern Web Applications with AI Assistance | React, Node.js, MERN Stack | Embedded Systems | ESP32 | Computer Hardware | CSE Student
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <motion.a
              href="mailto:iamkannan35@gmail.com"
              className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white transition-colors duration-200 hover:scale-110 transform"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={24} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/kannan2006"
              target="_blank"
              className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white transition-colors duration-200 hover:scale-110 transform"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="tel:7305762612"
              className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white transition-colors duration-200 hover:scale-110 transform"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone size={24} />
            </motion.a>
          </div>

          <motion.a
            href="#about"
            className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span>Scroll to explore</span>
            <ArrowDown size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

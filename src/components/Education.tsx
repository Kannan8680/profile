
import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const education = [
    {
      institution: "Rajalakshmi Engineering College",
      degree: "Bachelor of Engineering - BE",
      field: "Computer Science",
      duration: "September 2024 - September 2027",
      location: "Chennai, Tamil Nadu, India",
      type: "Bachelor's Degree",
      color: "blue"
    },
    {
      institution: "Central Polytechnic College",
      degree: "Diploma of Education",
      field: "Electrical, Electronics and Communications Engineering",
      duration: "2021 - 2024",
      location: "Chennai, Tamil Nadu, India",
      type: "Diploma",
      color: "green"
    }
  ];

  const certifications = [
    {
      name: "Digital Skills for ITIs and Polytechnics",
      issuer: "Naan Mudhalvan Program",
      description: "Comprehensive certification covering PCB design, MicroPython programming, and digital skills development.",
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "border-blue-500 bg-blue-500/10 text-blue-400",
      green: "border-green-500 bg-green-500/10 text-green-400",
      purple: "border-purple-500 bg-purple-500/10 text-purple-400"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="education" className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Education & Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center space-x-2">
              <GraduationCap className="text-blue-400" size={24} />
              <span>Education</span>
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors duration-300"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
                    <span className={`px-2 py-1 rounded text-sm border ${getColorClasses(edu.color)}`}>
                      {edu.type}
                    </span>
                  </div>
                  <p className="text-blue-400 font-medium mb-2">{edu.field}</p>
                  <p className="text-gray-300 mb-3">{edu.institution}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-gray-400 text-sm">
                    <div className="flex items-center space-x-1 mb-1 sm:mb-0">
                      <Calendar size={14} />
                      <span>{edu.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin size={14} />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center space-x-2">
              <Award className="text-purple-400" size={24} />
              <span>Certifications</span>
            </h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors duration-300"
                >
                  <h4 className="text-lg font-semibold text-white mb-2">{cert.name}</h4>
                  <p className="text-purple-400 font-medium mb-3">{cert.issuer}</p>
                  <p className="text-gray-300 text-sm">{cert.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

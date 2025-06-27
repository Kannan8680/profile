
import { motion } from "framer-motion";
import { Building, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "CODENTRIX",
      position: "Web Development Intern",
      duration: "June 2025 - Present (1 month)",
      location: "Chennai, Tamil Nadu, India",
      type: "Internship",
      description: "Currently working on web development projects using modern frameworks and technologies.",
      color: "blue"
    },
    {
      company: "Independent/Freelance",
      position: "Independent IT Technician – PC Building & Networking Services",
      duration: "2023 - Present (2 years)",
      location: "Chennai, Tamil Nadu, India",
      type: "Freelance",
      description: [
        "Assembled custom-built PCs for gaming, office, and educational use",
        "Built and configured entry-level file servers and mini NAS systems",
        "Installed and configured operating systems (Windows, Linux)",
        "Diagnosed and repaired hardware issues in desktops and laptops",
        "Performed BIOS configuration, thermal management, and driver installation",
        "Set up SOHO networking (modems, routers, LAN cabling)"
      ],
      color: "green"
    },
    {
      company: "KritiLabs Technologies",
      position: "Production Intern",
      duration: "December 2023 - February 2024 (3 months)",
      location: "Chennai, Tamil Nadu, India",
      type: "Internship",
      description: "Completed three-month in-plant training specializing in advanced IoT-based secure logistics, tracking systems, and electronic locking solutions. Gained hands-on experience in PCB-level soldering, testing, and repair of smart locking systems used in fleet management and e-commerce logistics.",
      color: "purple"
    },
    {
      company: "Bharat Sanchar Nigam Limited",
      position: "Student Intern",
      duration: "May 2023 - June 2023 (2 months)",
      location: "Chennai, Tamil Nadu, India",
      type: "Internship",
      description: "Completed focused internship program on Implementation of Mobile Network Models at BSNL's Regional Telecom Training Centre (RGMTTC). Gained deep understanding of telecommunication systems from legacy analog networks to cutting-edge 5G infrastructure through theoretical and practical sessions.",
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "border-blue-500 bg-blue-500/10 text-blue-400",
      green: "border-green-500 bg-green-500/10 text-green-400",
      purple: "border-purple-500 bg-purple-500/10 text-purple-400",
      orange: "border-orange-500 bg-orange-500/10 text-orange-400"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-slate-600 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">{exp.position}</h3>
                  <div className="flex items-center space-x-4 text-gray-400 mb-2">
                    <div className="flex items-center space-x-1">
                      <Building size={16} />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-400 mb-4">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm border ${getColorClasses(exp.color)} self-start md:self-auto`}>
                  {exp.type}
                </span>
              </div>
              
              <div className="text-gray-300">
                {Array.isArray(exp.description) ? (
                  <ul className="space-y-2">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>{exp.description}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

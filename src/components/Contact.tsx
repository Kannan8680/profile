
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "iamkannan35@gmail.com",
      href: "mailto:iamkannan35@gmail.com",
      color: "blue"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7305762612",
      href: "tel:+917305762612",
      color: "green"
    },
    {
      icon: MapPin,
      label: "Address",
      value: "No 11 Sindunadi Street, Samundeeswari Nagar, Anakaputhur, Chennai 600070, Tamil Nadu, India",
      href: "#",
      color: "purple"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/kannan2006",
      href: "https://www.linkedin.com/in/kannan2006",
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "text-blue-400",
      green: "text-green-400",
      purple: "text-purple-400",
      orange: "text-orange-400"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Let's discuss how we can work together on your next project. I'm always open to new opportunities and collaborations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-8">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith('http') ? '_blank' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors duration-300 group"
                >
                  <div className={`p-3 rounded-lg bg-slate-700 group-hover:bg-slate-600 transition-colors duration-300`}>
                    <info.icon className={`${getColorClasses(info.color)}`} size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">{info.label}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

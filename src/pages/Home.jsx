import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ServiceCard from '../components/ServiceCard';
import TestimonialSection from '../components/TestimonialSection';
import { motion } from 'framer-motion';
import { FiPenTool, FiMonitor, FiVideo, FiServer } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Home = () => {
  const services = [
    {
      icon: <FiPenTool size={32} />,
      title: "Graphic & Print Design",
      items: [
        "Logo and Brand Identity",
        "Business Cards and Flyers",
        "Posters and Large-format Printing",
        "Social Media Graphics"
      ]
    },
    {
      icon: <FiMonitor size={32} />,
      title: "Web Design & Development",
      items: [
        "Responsive Website Design",
        "User Interface (UI) & User Experience (UX)",
        "WordPress, Wix, Squarespace Customization",
        "Website Maintenance & Security"
      ]
    },
    {
      icon: <FiVideo size={32} />,
      title: "Video Production & Editing",
      items: [
        "Promotional & Commercial Videos",
        "Video Editing & Color Grading",
        "Animations and Motion Graphics",
        "Multimedia Presentations"
      ]
    },
    {
      icon: <FiServer size={32} />,
      title: "IT Consulting",
      items: [
        "Technical Support and Troubleshooting",
        "Systems Optimization & Security",
        "Network Setup and Management",
        "Custom IT Solutions"
      ]
    }
  ];

  return (
    <div>
      <Hero />
      <AboutSection />
      <section className="py-20 bg-neutral" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-primary text-center mb-12"
          >
            Services
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </motion.div>
        </div>
      </section>
      <TestimonialSection />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-20 bg-neutral text-center"
      >
        <Link to="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-secondary text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all"
          >
            Contact Me Today
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;
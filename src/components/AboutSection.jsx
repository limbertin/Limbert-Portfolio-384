import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-primary mb-6">About Me</h2>
          <p className="text-lg text-gray-600 mb-8">
            Hello! I'm Limbert, a multidisciplinary designer and IT consultant passionate about delivering exceptional creative solutions. My diverse background integrates graphic and web design, video production, and IT consulting to provide comprehensive services that enhance brand identity, user experience, and technical efficiency.
          </p>
          <p className="text-lg text-gray-600">
            From startups to established businesses, I partner with my clients to transform ideas into impactful realities.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

const TestimonialSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-primary mb-12">Testimonials</h2>
          
          <div className="bg-neutral rounded-2xl p-8 shadow-lg">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <FiStar key={i} className="text-secondary w-6 h-6 fill-current" />
              ))}
            </div>
            <blockquote className="text-xl text-gray-600 italic mb-6">
              "Limbert's creativity and technical expertise transformed our web presence and streamlined our IT infrastructure. Highly recommended!"
            </blockquote>
            <div className="text-primary font-semibold">
              — Lucy Harasawa, Essential Energy
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;
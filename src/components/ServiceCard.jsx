import { motion } from 'framer-motion';

const ServiceCard = ({ icon, title, items }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="p-6 bg-neutral rounded-lg shadow-lg"
    >
      <div className="text-secondary mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="text-gray-600">• {item}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ServiceCard;
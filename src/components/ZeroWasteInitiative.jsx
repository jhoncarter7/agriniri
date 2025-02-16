import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import PropTypes from 'prop-types';

const InitiativeCard = ({ initiative }) => {
InitiativeCard.propTypes = {
  initiative: PropTypes.shape({
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
  }).isRequired
};
  const [cardRef, cardInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
    rootMargin: "-50px 0px"
  });

  return (
    <motion.div
      ref={cardRef}
      initial={{ y: 50, opacity: 0 }}
      animate={cardInView ? { y: 0, opacity: 1 } : {}}
      transition={{ type: "spring", stiffness: 100 }}
      whileHover={{ scale: 1.05, rotate: -2 }}
      className="group relative h-96 flex items-center justify-center font-family-gilroy"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${initiative.color} 
        rounded-t-3xl shadow-xl transform group-hover:shadow-2xl transition-all`}>
        
        <motion.div 
          initial={{ scale: 0 }}
          animate={cardInView ? { scale: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 bg-white 
            rounded-2xl flex items-center justify-center text-3xl shadow-lg"
        >
          {initiative.icon}
        </motion.div>

        <div className="p-8 h-full flex flex-col justify-center text-center">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={cardInView ? { opacity: 1 } : {}}
            className="text-2xl font-bold text-white mb-4"
          >
            {initiative.title}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            animate={cardInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="text-lg text-green-50"
          >
            {initiative.description}
          </motion.p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-2 bg-white/30 
          overflow-hidden ">
          <motion.div
            initial={{ width: 0 }}
            animate={cardInView ? { width: "100%" } : {}}
            transition={{ duration: 1.5 }}
            className="h-full bg-white"
          />
        </div>
      </div>
    </motion.div>
  );
};

const ZeroWasteInitiative = () => {
  const initiatives = [
    {
      title: "Waste Management",
      icon: "♻️",
      description: "Collecting and repurposing vegetable waste",
      color: "from-green-400 to-emerald-600"
    },
    {
      title: "Organic Manure Production",
      icon: "🌱",
      description: "Creating high-quality organic manure",
      color: "from-lime-400 to-green-600"
    },
    {
      title: "Zero Waste Model",
      icon: "🌍",
      description: "Promoting sustainability and reducing landfill contributions",
      color: "from-teal-400 to-cyan-600"
    },
    {
      title: "Consolidated Impact",
      icon: "📊",
      description: "Integrated sustainable ecosystem management",
      color: "from-amber-400 to-orange-600"
    }
  ];

  const [titleRef, titleInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: "-50px"
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          ref={titleRef}
          initial={{ opacity: 0, y: 50 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-center mb-16 text-green-800"
        >
          Zero Waste Initiative
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {initiatives.map((initiative, index) => (
            <InitiativeCard key={index} initiative={initiative} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ZeroWasteInitiative;
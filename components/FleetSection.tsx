'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const fleet = [
  {
    name: 'Stardust Cruiser',
    description: 'Heavy-lift launch vehicle for deep space missions.',
    image: '/fleet-starship.jpg',
  },
  {
    name: 'Odyssey Explorer',
    description: 'Interplanetary vessel for long-duration crewed flights.',
    image: '/fleet-explorer.jpg',
  },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const FleetCard = ({ name, description, image }: { name: string; description: string; image: string }) => (
  <motion.div
    className="bg-gray-900/50 rounded-lg overflow-hidden backdrop-blur-sm border border-gray-700/50 text-center"
    variants={cardVariants}
  >
    <div className="relative h-80 w-full">
      <Image src={image} alt={name} layout="fill" objectFit="cover" />
    </div>
    <div className="p-6">
      <h3 className="text-3xl font-bold">{name}</h3>
      <p className="mt-2 text-gray-400">{description}</p>
    </div>
  </motion.div>
);

const FleetSection = () => {
  return (
    <section className="py-20">
      <h2 className="text-5xl font-bold text-center mb-12">Our Fleet</h2>
      <motion.div
        className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.4 }}
      >
        {fleet.map((vehicle) => (
          <FleetCard key={vehicle.name} {...vehicle} />
        ))}
      </motion.div>
    </section>
  );
};

export default FleetSection;

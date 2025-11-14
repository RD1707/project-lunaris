'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const missions = [
  {
    name: 'Project Artemis',
    description: 'Returning humanity to the Moon, sustainably.',
    image: '/mission-artemis.jpg',
  },
  {
    name: 'Mars Endeavour',
    description: 'The first crewed mission to the surface of Mars.',
    image: '/mission-mars.jpg',
  },
  {
    name: 'Europa Clipper',
    description: 'Exploring the potential for life on Jupiter\'s moon.',
    image: '/mission-europa.jpg',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const MissionCard = ({ name, description, image }: { name: string; description: string; image: string }) => (
  <motion.div
    className="bg-gray-900/50 rounded-lg overflow-hidden backdrop-blur-sm border border-gray-700/50"
    variants={cardVariants}
  >
    <div className="relative h-60 w-full">
      <Image src={image} alt={name} layout="fill" objectFit="cover" />
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-bold">{name}</h3>
      <p className="mt-2 text-gray-400">{description}</p>
    </div>
  </motion.div>
);

const MissionSection = () => {
  return (
    <section className="py-20">
      <h2 className="text-5xl font-bold text-center mb-12">Our Missions</h2>
      <motion.div
        className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.3 }}
      >
        {missions.map((mission) => (
          <MissionCard key={mission.name} {...mission} />
        ))}
      </motion.div>
    </section>
  );
};

export default MissionSection;

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const missions = [
  {
    name: 'Project Artemis',
    description: 'Estabelecer uma presença humana sustentável na Lua, abrindo caminho para futuras missões a Marte.',
    image: '/mission-artemis.jpg',
  },
  {
    name: 'Mars Endeavour',
    description: 'Uma jornada audaciosa para levar os primeiros exploradores humanos ao Planeta Vermelho e buscar sinais de vida.',
    image: '/mission-mars.jpg',
  },
  {
    name: 'Europa Clipper',
    description: 'Investigar a lua gelada de Júpiter, Europa, que pode abrigar um oceano subterrâneo e as condições para a vida.',
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
    className="bg-gray-900/50 rounded-lg overflow-hidden backdrop-blur-sm border border-gray-700/50 flex flex-col"
    variants={cardVariants}
  >
    <div className="relative h-60 w-full">
      <Image src={image} alt={name} layout="fill" objectFit="cover" />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-2xl font-bold">{name}</h3>
      <p className="mt-2 text-gray-400 flex-grow">{description}</p>
      <div className="mt-4">
        <Link href="/missions" className="text-white font-semibold hover:text-blue-400 transition-colors">
          Saiba Mais &rarr;
        </Link>
      </div>
    </div>
  </motion.div>
);

const MissionSection = () => {
  return (
    <section id="missions" className="py-20">
      <h2 className="text-5xl font-bold text-center mb-12">Nossas Missões</h2>
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

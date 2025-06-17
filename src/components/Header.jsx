import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full bg-[#FFD93D] border-b-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-50"
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-black text-black"
          >
            FAISOL DWIKI AMRIZAL
          </motion.div>
          <div className="hidden md:flex space-x-8">
            {['About', 'Experience', 'Education', 'Skills'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ scale: 1.1 }}
                className="text-black hover:text-gray-800 font-black text-sm"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header; 
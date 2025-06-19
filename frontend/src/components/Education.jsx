import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-[#FFD93D]">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-black text-black mb-12 text-center"
        >
          EDUCATION
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-black text-black mb-2">
            Bachelor's in Informatics Engineering
          </h3>
          <h4 className="text-xl font-bold text-black mb-2">
            PGRI Madiun University
          </h4>
          <p className="text-lg text-gray-700 mb-4">
            August 2016 - November 2020
          </p>
          <p className="text-gray-800 font-medium">
            Studied network security, programming languages (Java, C++, C#, PHP, Javascript), 
            and web development fundamentals.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Education; 
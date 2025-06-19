import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Technical",
      skills: ["JavaScript", "Node.js", "SQL", "Git", "HTML", "CSS", "Laravel", "Golang"]
    },
    {
      title: "API Integration",
      skills: ["Shopee", "Tokopedia", "PayPal", "Stripe", "Tiktok", "RazorPay"]
    },
    {
      title: "Soft Skills",
      skills: ["Team Collaboration", "Problem Solving", "Project Management"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-[#FF6B6B]">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-black text-black mb-12 text-center"
        >
          SKILLS
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            >
              <h3 className="text-2xl font-black text-black mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-[#FFD93D] px-4 py-2 border-2 border-black text-black font-bold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 
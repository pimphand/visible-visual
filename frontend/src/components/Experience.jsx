import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: "Backend Developer",
      company: "PT. Naisha Inspirasi Muslimah",
      period: "April 2021 - October 2024",
      responsibilities: [
        "Developed backend systems for e-commerce, integrating APIs from Shopee and Tokopedia",
        "Implemented database management for transactions, products, and user data with encryption for security",
        "Enhanced system efficiency with optimized queries and caching"
      ]
    },
    {
      title: "Website Developer",
      company: "DV9 International PTE LTD (Singapore)",
      period: "April 2021 - April 2023",
      responsibilities: [
        "Led redevelopment of applications and resolved bugs",
        "Created e-commerce applications with PayPal, RazorPay and Stripe payment integration"
      ]
    },
    {
      title: "Freelance Web Developer",
      company: "Self-employed",
      period: "September 2019 - Present",
      responsibilities: [
        "Developed custom websites and UI/UX designs for clients",
        "Created online invitations and profile sites"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-[#4ECDC4]">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-black text-black mb-12 text-center"
        >
          WORK EXPERIENCE
        </motion.h2>
        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            >
              <h3 className="text-2xl font-black text-black mb-2">{exp.title}</h3>
              <h4 className="text-xl font-bold text-black mb-2">{exp.company}</h4>
              <p className="text-lg text-gray-700 mb-4">{exp.period}</p>
              <ul className="list-disc list-inside space-y-2">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-gray-800 font-medium">{resp}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 
import React from 'react';
import { motion } from 'framer-motion';

export const projects = [
  {
    judul: "Naisha Hijrah",
    kategori: "E-commerce Website",
    teknologi: ["React JS", "Laravel", "Node.js"],
    url: "https://app.naisha.id",
    gambar: "/images/app_naisha.webp"
  },
  {
    judul: "Kims Florist",
    kategori: "E-commerce Website",
    teknologi: ["Laravel", "Boostrap", "Payment Gateway [Paypal, Stripe, RazorPay]"],
    url: "https://kimsflorist.com.my/",
    gambar: "/images/kimflorist.webp"
  },
  {
    judul: "Awetonet.io",
    kategori: "Company Profile",
    teknologi: ["Laravel"],
    url: "https://app.naisha.id",
    gambar: "/images/awetonet.webp"
  },
  {
    judul: "Axiom X Change",
    kategori: "Company Profile",
    teknologi: ["Vue.js", "Tailwind CSS"],
    url: "https://staging.axiomxchange.com/",
    gambar: "/images/axiom.webp"
  },
  {
    judul: "Hummings",
    kategori: "E-commerce Website",
    teknologi: ["Laravel", "Boostrap", "Payment Gateway [Paypal, Stripe]"],
    url: "https://www.hummings.com/",
    gambar: "/images/humming.webp"
  },
  {
    judul: "Noelgifts",
    kategori: "E-commerce Website",
    teknologi: ["Laravel", "Boostrap", "Payment Gateway [Paypal, Stripe]"],
    url: "https://www.Noelgifts.com/",
    gambar: "/images/noel.webp"
  },
  {
    judul: "Posmoo",
    kategori: "Point Of Sale",
    teknologi: ["Laravel", "React Js"],
    url: "http://posmoo.dmpt.my.id/",
    gambar: "/images/posmoo.webp"
  },
  {
    judul: "Singhealth",
    kategori: "E-commerce Website",
    teknologi: ["Laravel", "Boostrap", "Payment Gateway [Paypal, Stripe]"],
    url: "https://corporate.noelgifts.com/",
    gambar: "/images/singhealth.webp"
  },
  {
    judul: "Webstore Jesusministries",
    kategori: "E-commerce Website",
    teknologi: ["Laravel", "Boostrap", "Payment Gateway [Paypal, Stripe, RazorPay]"],
    url: "https://webstore.jesusministries.org/",
    gambar: "/images/webstore.webp"
  },
  {
    judul: "MCU Klinik",
    kategori: "Managemen System",
    teknologi: ["Laravel", "Boostrap"],
    url: "https://webstore.jesusministries.org/",
    gambar: "/images/mcu.webp"
  },
  {
    judul: "Desa Digital",
    kategori: "Managemen System Surat",
    teknologi: ["Laravel", "Boostrap"],
    url: "https://desa.dmpt.my.id/",
    gambar: "/images/desa.webp"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-[#FF6B6B]">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-black text-black mb-12 text-center"
        >
          PROJECTS
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            >
              <div className="relative h-48 border-b-4 border-black">
                <img
                  src={project.gambar}
                  alt={project.judul}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black text-black mb-4">{project.judul}</h3>
                <p className="text-[#FF6B6B] font-bold mb-6">{project.kategori}</p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.teknologi.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-[#FFD93D] px-4 py-2 border-2 border-black text-black font-bold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#FFD93D] text-black px-6 py-3 font-bold border-2 border-black hover:bg-[#FFE566] transition-colors duration-300"
                >
                  Visit Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 
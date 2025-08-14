import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const projects = [
  {
    judul: "Naisha Hijrah",
    kategori: "E-commerce Website",
    teknologi: ["React JS", "Laravel", "Node.js"],
    url: "https://app.naisha.id",
    gambar: ["/images/app_naisha.webp"]
  },
  {
    judul: "Kims Florist",
    kategori: "E-commerce Website",
    teknologi: ["Laravel", "Boostrap", "Payment Gateway [Paypal, Stripe, RazorPay]"],
    url: "https://kimsflorist.com.my/",
    gambar: ["/images/kimflorist.webp"]
  },
  {
    judul: "Awetonet.io",
    kategori: "Company Profile",
    teknologi: ["Laravel"],
    url: "https://app.naisha.id",
    gambar: ["/images/awetonet.webp"]
  },
  {
    judul: "Axiom X Change",
    kategori: "Company Profile",
    teknologi: ["Vue.js", "Tailwind CSS"],
    url: "https://staging.axiomxchange.com/",
    gambar: ["/images/axiom.webp"]
  },
  {
    judul: "Hummings",
    kategori: "E-commerce Website",
    teknologi: ["Laravel", "Boostrap", "Payment Gateway [Paypal, Stripe]"],
    url: "https://www.hummings.com/",
    gambar: ["/images/humming.webp"]
  },
  {
    judul: "Noelgifts",
    kategori: "E-commerce Website",
    teknologi: ["Laravel", "Boostrap", "Payment Gateway [Paypal, Stripe]"],
    url: "https://www.Noelgifts.com/",
    gambar: ["/images/noel.webp"]
  },
  {
    judul: "Posmoo",
    kategori: "Point Of Sale",
    teknologi: ["Laravel", "React Js"],
    url: "http://posmoo.dmpt.my.id/",
    gambar: ["/images/posmoo.webp"]
  },
  {
    judul: "Singhealth",
    kategori: "E-commerce Website",
    teknologi: ["Laravel", "Boostrap", "Payment Gateway [Paypal, Stripe]"],
    url: "https://corporate.noelgifts.com/",
    gambar: ["/images/singhealth.webp"]
  },
  {
    judul: "Webstore Jesusministries",
    kategori: "E-commerce Website",
    teknologi: ["Laravel", "Boostrap", "Payment Gateway [Paypal, Stripe, RazorPay]"],
    url: "https://webstore.jesusministries.org/",
    gambar: ["/images/webstore.webp"]
  },
  {
    judul: "MCU Klinik",
    kategori: "Managemen System",
    teknologi: ["Laravel", "Boostrap"],
    url: "https://klinik.dmpt.my.id/",
    gambar: ["/images/mcu.webp"]
  },
  {
    judul: "Desa Digital",
    kategori: "Layanan Desa",
    teknologi: ["Laravel", "Boostrap"],
    url: "https://desa.dmpt.my.id/",
    gambar: ["/images/desa.webp"]
  },
  {
    judul: "Managemen System Desa",
    kategori: "Managemen System Desa",
    teknologi: ["Laravel", "Boostrap"],
    url: "https://surat.dmpt.my.id/",
    gambar: ["/images/manajemen_desa.png"]
  },
  {
    judul: "Go Gili",
    kategori: "Travel Agency",
    teknologi: ["Laravel", "Boostrap", "Flutter"],
    url: "https://gogili.id/",
    gambar: ["/images/go_gili.png"]
  }
];

// Slideshow Component
const ProjectSlideshow: React.FC<{ images: string[]; title: string }> = ({ images, title }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  if (images.length === 1) {
    return (
      <div className="relative h-48 border-b-4 border-black">
        <img
          src={images[0]}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  return (
    <div className="relative h-48 border-b-4 border-black overflow-hidden">
      {/* Images */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${title} - Image ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-200 z-10"
            aria-label="Previous image"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-200 z-10"
            aria-label="Next image"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === currentImageIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Image Counter */}
      {images.length > 1 && (
        <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded z-10">
          {currentImageIndex + 1} / {images.length}
        </div>
      )}
    </div>
  );
};

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
              <ProjectSlideshow images={project.gambar} title={project.judul} />
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
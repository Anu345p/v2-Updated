"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight } from "lucide-react";

export default function Products() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-green-accent to-cyan-accent">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-white mb-4">Our Products</h1>
            <p className="text-white/90 max-w-2xl mx-auto text-lg">
              Smart tech, secure spaces, and seamless solutions from PCs to printers, CCTV to medical gear, we’ve got it all.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">
              Product <span className="gradient-text">Services</span>
            </h2>
            <p className="max-w-2xl mx-auto">
              From setup to support office, IT, or hygiene we power your space with reliable, ready-to-go services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "All in One PC",
                description: "Intel Core i3/i5/i7 • 1 TB HDD + 256 GB SSD • 23.8″ FHD non-touch display (per client spec) • 5 year onsite warranty",
                image: "/images/AIO.png",
              },  
              {
                title: "Office Stationary",
                description: "Highlighters & markers; spiral diaries & notepads; ink & ball-point pens & pencils; registers (all quires); calculators & staplers; cello tape.",
                image: "/images/Office Stationary.png",
              },
              {
                title: "AMC for IT & Systems",
                description: "Manufacturer-backed repair & maintenance for systems, printers & electrical equipment—keeping your tech humming.",
                image: "/images/AMC.png",
              },
              {
                title: "Multi Function Printers and Scanners",
                description: "Top brands (Brother, Canon, HP, Konica) • MFT / ADF / Dot-Matrix • 20+ PPM • 64MB+ memory",
                image: "/images/MFPS.png",
              },
              {
                title: "Office Furniture & Cabin Designing",
                description: "Executive chairs, cabins, visitor seating, curtains, sofas, lockers, almirahs & complete office décor solutions.",
                image: "/images/OFCD.png",
              },
              {
                title: " Paste Control Service",
                description: "Pest control for insects, rats, termites, mosquitoes, bed bugs, rodents & more.",
                image: "/images/PCS.png",
              },
              {
                title: "Toner & Cartridge",
                description: "OEM (HP/Canon/Brother) & Compatible (Prodot/Daksha) for HP, Canon, Brother, Samsung & Konica.",
                image: "/images/T&C.png",
              }, 
              {
                title: "Security Solutions",
                description: "CP+ CCTV, IP & analog cameras, NVR/DVR, dashcams, 4G routers, speed domes, locks, SD cards, switches & storage.",
                image: "/images/SS.png",
              },
              {
                title: "Biotechnology, Analytical Instrumentation",
                description: "Plasma Freezer, Blood Storage Cabinet, Seed Germinator Chamber, Incubator, Biosafety Cabinet, Ultrasonic Cleaner.",
                image: "/images/BAI.png",
              },
              {
                title: "Home Applinces",
                description: "Air Conditioners (Split & Window), Refrigerators, Washing Machines & Microwaves, LED / LCD Televisions, Electric Kettles",
                image: "/images/HA.png",
              },
              {
                title: "Medical Surgical Equipment",
                description: " Knife Handle, Blade, Cobb Elevator, Forceps, Periosteotome, Retractor, Clamp, Scissor, Suction Tube",
                image: "/images/MSE.jpg",
              },
              {
                title: "Interactive Flat Panel",
                description: " A flat-panel display (FPD) is an electronic display used to display visual content such as text or images.1.Consumer 2.Medical & Education 3.Transportation & Business",
                image: "/images/IFP.png",
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-orange">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h2 className="mb-6 text-white">Have questions or need more details?</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Our team is ready to assist you with product inquiries, pricing, or custom solutions.
            </p>
            <Link
              href="/contact"
              className="bg-white text-primary-orange px-8 py-3 rounded-md font-medium transition-all hover:bg-opacity-90 hover:scale-105"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

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
              Discover our comprehensive range of high-quality color solutions for various industries.
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
              At ColourShade Enterprises, we offer a wide range of premium products.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "An Product",
                description: "High-performance paints for industrial applications.",
                image: "/images/product.jpg",
                link: "#industrial-paints",
              },
              {
                title: "An Services",
                description:
                  "Vibrant and long-lasting dyes for the textile industry with excellent color fastness and consistency.",
                image: "/images/services.jpg",
                link: "#textile-dyes",
              },
              {
                title: "An Promoter",
                description: "Premium quality coatings for interior and exterior architectural uses.",
                image: "/images/promoter.jpg",
                link: "#architectural-coatings",
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
                  <Link
                    href={category.link}
                    className="inline-flex items-center text-primary-orange font-medium hover:underline"
                  >
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
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
            <h2 className="mb-6 text-white">Contact Us</h2>
            <p className="max-w-2xl mx-auto mb-8">
              ..........
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

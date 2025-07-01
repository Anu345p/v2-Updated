"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronRight, CheckCircle, ArrowRight } from "lucide-react"
import ImageMarquee from "@/components/Scroolingimages"

export default function Home() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  return (
    <>
      {/* Hero Section */}
      <motion.section
        ref={ref}
        style={{ opacity, scale }}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white opacity-90"></div>
          <Image
            src="/images/coverpage.png"
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        <div className="container mx-auto px-4 z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}>
            <h1 className="mb-6">
              <span className="gradient-text">Retail, Services &amp; Amc for Industries</span>
              <br />
              
            </h1>
            <p className="max-w-2xl mx-auto mb-8  text-white" >
              Partnering with governments to craft bespoke tech solutions that streamline services, boost accountability, and put citizens first.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/products" className="btn-primary">
                Explore Products
              </Link>
              <Link href="/contact" className="btn-outline">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}>
            <ChevronRight size={30} className="text-primary-orange transform rotate-90" />
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="mb-6">
                About <span className="gradient-text">Color Shades Bharat</span>
              </h2>
              <p className="mb-4">
                Founded to empower Indian institutions with smart solutions, Colour Shades Bharat has rapidly grown into a trusted name across diverse sectors.
              </p>
              <ul className="space-y-3">
                {[
                  "Technology Excellence",
                  "Office & Workspace Solutions",
                  "Medical & Scientific Equipment",
                  "Surveillance & Security",
                  "Nationwide Reach & Service",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center"
                  >
                    <CheckCircle className="text-primary-orange mr-2 h-5 w-5 flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
              <Link
                href="/about"
                className="inline-flex items-center mt-6 text-primary-orange font-medium hover:underline"
              >
                Learn more about us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
            >
              <Image
                src="/images/product.jpg"
                alt="About Color Shades Bharat"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-4"
            >
              <span className="gradient-text">Product & Services</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-2xl mx-auto"
            >
              At ColourShade Enterprises, we provide high-quality products and expert services tailored services designed to meet your needs. 
              Ensuring reliability, innovation, and lasting support. Let us help you achieve seamless, impactful results.
            </motion.p>
          </div>

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
                title: " AMC for IT & Systems",
                description: "Manufacturer-backed repair & maintenance for systems, printers & electrical equipment—keeping your tech humming.",
                image: "/images/AMC.png",
              },
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-48">
                  <Image src={product.image || "/placeholder.svg"} alt={product.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <Link
                    href="/products"
                    className="inline-flex items-center text-primary-orange font-medium hover:underline"
                  >
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/products" className="btn-primary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        className="section-padding"
        style={{
          background: "linear-gradient(to right, rgb(27, 54, 93), rgb(43, 191, 207))",
          color: "white",
        }}
      >
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="mb-4" style={{ color: "white" }}>
              Why Choose <span className="text-yellow-accent">Color Shades Bharat</span>
            </h2>
            <p className="max-w-2xl mx-auto" style={{ color: "rgba(255, 255, 255, 0.9)" }}>
              Your reliable partner in modernizing government operations through smart technology. We craft tailored solutions that boost efficiency, transparency, and public service impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Quality",
                description: "We maintain the highest standards by delivering certified, reliable products backed by preventive maintenance and long-term AMC services.",
                icon: "🏆",
              },
              {
                title: "Servies",
                description: "From IT & pest control AMCs to office setups and security systems, we offer complete solutions tailored to government and enterprise needs.",
                icon: "💡",
              },
              {
                title: "Sustainability",
                description: "We promote longevity and environmental responsibility through durable products, smart servicing, and healthcare-grade instrumentation.",
                icon: "🦾",
              },
              {
                title: "Customer Support",
                description: "Our expert support team ensures fast, reliable service with real-time assistance, on-site repairs, and proactive system monitoring.",
                icon: "👥",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-100">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              <span className="gradient-text">Our Clients</span>
            </h2>
            <p className="max-w-2xl mx-auto">
              Customers are the heartbeat of our business your trust drives everything we do.
            </p>
          </motion.div>

          <ImageMarquee/>
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
            <h2 className="mb-6 text-white">Empowering Every Workspace, One Solution at a Time</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Contact us today to explore complete office, tech, and medical solutions. Colour Shades Bharat is here to power your progress.
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
  )
}

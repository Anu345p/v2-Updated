"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { CheckCircle, Award, Users, TrendingUp } from "lucide-react"

export default function About() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-primary-orange to-yellow-accent">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-white mb-4">About Us</h1>
            <p className="text-white/90 max-w-2xl mx-auto text-lg">
              Learn more about Color Shades Bharat, our journey, mission, and the values that drive us.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
              <p className="mb-4">
                Empowering Governance Through Technology
                We specialize in delivering cutting-edge IT solutions tailored for government departments, driving efficiency, 
                transparency, and citizen engagement. From digital transformation to cybersecurity, our robust technology
                platforms are built to meet the complex demands of modern governance ensuring security, scalability, 
                and operational reliability.
              </p>
              <p className="mb-4">
                Expertise That Understands Government
                With decades of combined experience, our team deeply understands public sector workflows, regulatory needs, 
                and the challenges government agencies face. We create smart, compliant solutions that integrate seamlessly 
                with existing systems, reduce disruption, and empower departments to serve citizens better—within budget and 
                without compromise.
              </p>
              <p>
                Driving Impact and Future Readiness
                Our solutions produce measurable results—faster processing, reduced costs, and enhanced access to services. 
                By harnessing emerging tech like AI, cloud computing, and data analytics, we help public institutions not only 
                meet today’s goals but also future-proof their operations for the evolving landscape of digital governance.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
            >
              <Image
                src="/images/product.jpg"
                alt="Color Shades Bharat Story"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">
              Our <span className="gradient-text">Mission & Vision</span>
            </h2>
            <p className="max-w-2xl mx-auto">
              Guided by our core values, we strive to make a positive impact.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4 text-primary-orange">Our Mission</h3>
              <p className="mb-4">
                To provide innovative, sustainable, and high-quality products that empower our customers to
                achieve excellence in their respective industries.
              </p>
              <ul className="space-y-3">
                {[
                  "Customer-centric approach",
                  "Continuous innovation",
                  "Sustainable practices",
                  "Technical excellence",
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="text-primary-orange mr-2 h-5 w-5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4 text-cyan-accent">Our Vision</h3>
              <p className="mb-4">
                To be the best service provider in India and beyond, recognized for our innovation, quality,
                and commitment to sustainability.
              </p>
              <ul className="space-y-3">
                {[
                  "Global recognition",
                  "Industry leadership",
                  "Environmental stewardship",
                  "Technological advancement",
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="text-cyan-accent mr-2 h-5 w-5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
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
              Our <span className="gradient-text">Core Values</span>
            </h2>
            <p className="max-w-2xl mx-auto">
              These principles guide our actions, decisions, and interactions with customers, partners, and the
              community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Excellence",
                description: "We strive for excellence in everything we do, from product quality to customer service.",
                icon: <Award className="h-10 w-10" />,
                color: "text-primary-orange",
              },
              {
                title: "Innovation",
                description: "We continuously innovate to create better solutions and stay ahead of industry trends.",
                icon: <TrendingUp className="h-10 w-10" />,
                color: "text-yellow-accent",
              },
              {
                title: "Integrity",
                description: "We conduct our business with honesty, transparency, and ethical practices.",
                icon: <CheckCircle className="h-10 w-10" />,
                color: "text-green-accent",
              },
              {
                title: "Collaboration",
                description: "We believe in the power of teamwork and partnerships to achieve common goals.",
                icon: <Users className="h-10 w-10" />,
                color: "text-cyan-accent",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <div className={`${value.color} mx-auto mb-4`}>{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">
              Our <span className="gradient-text">Leadership Team</span>
            </h2>
            <p className="max-w-2xl mx-auto">
              Owners
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "xyz",
                position: "Owner",
                bio: "With over 25 years of experience leads Color Shades Bharat with vision.",
                image: "/placeholder.svg?height=400&width=400",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative h-64">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary-orange mb-3">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-dark-blue to-cyan-accent">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h2 className="mb-6 text-white">Join Our Journey</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Partner with Color Shades Bharat. 
            </p>
            <Link
              href="/contact"
              className="bg-white text-dark-blue px-8 py-3 rounded-md font-medium transition-all hover:bg-opacity-90 hover:scale-105"
            >
              Contact Us Today
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}

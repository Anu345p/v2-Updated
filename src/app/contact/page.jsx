"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-r from-dark-blue to-cyan-accent">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-white mb-4">Contact Us</h1>
            <p className="text-white/90 max-w-2xl mx-auto text-lg">
              Get in touch with us for inquiries, support.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <div className="bg-primary-orange/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-primary-orange h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-gray-600 mb-2">
                Call us for general inquiries
              </p>
              <div className="text-primary-orange font-medium">
                <a href="tel:+919069654111" className="hover:underline block">
                  +91 9069654111
                </a>
                <a href="tel:+918103077164" className="hover:underline block">
                  +91 8103077164
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <div className="bg-green-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-green-accent h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-600 mb-2">Send us an email anytime</p>
              <div className="text-green-accent font-medium">
                <a
                  href="mailto:info@colourshadesbharat.com"
                  className="hover:underline block"
                >
                  info@colourshadesbharat.com
                </a>
                <a
                  href="mailto:colourshadesdlh@gmail.com"
                  className="hover:underline block"
                >
                  colourshadesdlh@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <div className="bg-cyan-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-cyan-accent h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Location</h3>
              <p className="text-gray-600 mb-4">Visit our offices</p>

              <div className="flex flex-col md:flex-row gap-6 text-cyan-accent font-medium justify-center text-left">
                <div className="md:w-1/2">
                  <p>
                    <strong>Head Office:</strong>
                    <br />
                    542, Shahbad, Daulatpur,
                    <br />
                    Near Khatu Shyam Mandir,
                    <br />
                    Delhi – 110042
                  </p>
                </div>
                <div className="md:w-1/2">
                  <p>
                    <strong>Regional Office:</strong>
                    <br />
                    141, Reeta Fatak Road,
                    <br />
                    Near Atul Gas Depot,
                    <br />
                    Vidisha (M.P.) – 464001
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      /*

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
              Frequently Asked{" "}
              <span className="gradient-text">Questions Section</span>
            </h2>
            <p className="max-w-2xl mx-auto">
              Find answers to common questions about our products, services, and
              processes.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "Do you provide on-site support for system maintenance?",
                answer: "Yes, we offer on-site assistance for all critical issues as part of our AMC services.",
              },
              {
                question: "an I order both furniture and IT systems from one place?",
                answer:
                  "Absolutely. Colour Shades Bharat is your one-stop solution for office setups—from executive chairs and curtains to printers and computers.",
              },
              {
                question: "How do you ensure product quality?",
                answer:
                  "All products undergo regular quality checks and are backed by service warranties and optional preventive maintenance plans.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="mb-6 bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

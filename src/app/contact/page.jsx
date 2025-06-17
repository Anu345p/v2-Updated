"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({
      submitted: true,
      success: true,
      message: "Thank you for your message. We'll get back to you soon!",
    });
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
  };

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
              <p className="text-gray-600 mb-2">Call us for general inquiries</p>
              <a href="tel:+91 8103077164" className="text-primary-orange font-medium hover:underline">
                +91 9069654111
              </a>
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
              <a href="info@colourshadesbharat.com/ colourshadesdlh@gmail.com" className="text-green-accent font-medium hover:underline">
                 colourshadesdlh@gmail.com
              </a>
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
              <p className="text-gray-600 mb-2">Visit our office</p>
              <p className="text-cyan-accent font-medium">Head Office 542, Shahbad,Daulatpur Near Khatu Shyam Mandir, Delhi- 110042  Regional Office 141, Reeta Fatak Road, Near Atul Gas Depot, Vidisha(M.P.)- 464001</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="mb-6">
                Get in <span className="gradient-text">Touch</span>
              </h2>
              <p className="mb-6">
                Fill out the form below and our team will get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-orange"
                  ></textarea>
                </div>
                
                {formStatus.submitted && (
                  <div
                    className={`mt-4 p-3 rounded-md ${
                      formStatus.success ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    }`}
                  >
                    {formStatus.message}
                  </div>
                )}
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-[500px] rounded-lg overflow-hidden shadow-xl"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.2536055556584!2d77.22746857489428!3d28.561951175579144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce26f903969d7%3A0x8f89b5e7f76a2d51!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1718294128012!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

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
              Frequently Asked <span className="gradient-text">Questions Section</span>
            </h2>
            <p className="max-w-2xl mx-auto">
              Find answers to common questions about our products, services, and processes.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "What industries do you serve?",
                answer:
                  "Answer...",
              },
              {
                question: "What is your delivery timeframe?",
                answer:
                  "Our standard delivery timeframe is 7-10 business days.",
              },
              {
                question: "Do you provide technical support?",
                answer:
                  "Yes, we provide comprehensive technical support for all our products.",
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

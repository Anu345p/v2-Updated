"use client"

import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-dark-blue text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <svg viewBox="0 0 400 120" xmlns="http://www.w3.org/2000/svg" className="h-12 w-auto mb-4">
              <defs>
                <linearGradient id="footerTextGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: "#FF6B35", stopOpacity: 1 }} />
                  <stop offset="25%" style={{ stopColor: "#F7931E", stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: "#FFD23F", stopOpacity: 1 }} />
                  <stop offset="75%" style={{ stopColor: "#06D6A0", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "#118AB2", stopOpacity: 1 }} />
                </linearGradient>

                <linearGradient id="footerIconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#FF8500", stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: "#FF6B35", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "#138808", stopOpacity: 1 }} />
                </linearGradient>

                <filter id="footerDropshadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="2" dy="2" stdDeviation="2" floodColor="#00000040" />
                </filter>
              </defs>

              <circle cx="45" cy="60" r="35" fill="url(#footerIconGradient)" filter="url(#footerDropshadow)" />

              <g transform="translate(45, 60)">
                <circle cx="0" cy="0" r="28" fill="none" stroke="#FFFFFF" strokeWidth="2" />
                <circle cx="0" cy="0" r="6" fill="#FFFFFF" />

                <g stroke="#FFFFFF" strokeWidth="1.5" fill="none">
                  <line x1="0" y1="-28" x2="0" y2="-6" />
                  <line x1="28" y1="0" x2="6" y2="0" />
                  <line x1="0" y1="28" x2="0" y2="6" />
                  <line x1="-28" y1="0" x2="-6" y2="0" />
                  <line x1="7.3" y1="-27" x2="1.6" y2="-5.8" />
                  <line x1="27" y1="-7.3" x2="5.8" y2="-1.6" />
                  <line x1="27" y1="7.3" x2="5.8" y2="1.6" />
                  <line x1="7.3" y1="27" x2="1.6" y2="5.8" />
                  <line x1="-7.3" y1="27" x2="-1.6" y2="5.8" />
                  <line x1="-27" y1="7.3" x2="-5.8" y2="1.6" />
                  <line x1="-27" y1="-7.3" x2="-5.8" y2="-1.6" />
                  <line x1="-7.3" y1="-27" x2="-1.6" y2="-5.8" />
                  <line x1="14" y1="-24.2" x2="3" y2="-5.2" />
                  <line x1="24.2" y1="-14" x2="5.2" y2="-3" />
                  <line x1="24.2" y1="14" x2="5.2" y2="3" />
                  <line x1="14" y1="24.2" x2="3" y2="5.2" />
                  <line x1="-14" y1="24.2" x2="-3" y2="5.2" />
                  <line x1="-24.2" y1="14" x2="-5.2" y2="3" />
                  <line x1="-24.2" y1="-14" x2="-5.2" y2="-3" />
                  <line x1="-14" y1="-24.2" x2="-3" y2="-5.2" />
                  <line x1="19.8" y1="-19.8" x2="4.2" y2="-4.2" />
                  <line x1="19.8" y1="19.8" x2="4.2" y2="4.2" />
                  <line x1="-19.8" y1="19.8" x2="-4.2" y2="4.2" />
                  <line x1="-19.8" y1="-19.8" x2="-4.2" y2="-4.2" />
                </g>
              </g>

              <text
                x="95"
                y="45"
                fontFamily="Arial, sans-serif"
                fontSize="28"
                fontWeight="bold"
                fill="url(#footerTextGradient)"
              >
                COLOUR SHADES
              </text>
              <text x="95" y="70" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="600" fill="#FFFFFF">
                BHARAT
              </text>

              <rect x="95" y="75" width="30" height="3" fill="#FF9933" />
              <rect x="125" y="75" width="30" height="3" fill="#FFFFFF" stroke="#CCCCCC" strokeWidth="0.5" />
              <rect x="155" y="75" width="30" height="3" fill="#138808" />

              <text x="95" y="95" fontFamily="Arial, sans-serif" fontSize="12" fill="#CCCCCC" fontStyle="italic">
                Empowering Innovation • Supporting Growth
              </text>

              <circle cx="360" cy="25" r="3" fill="#FF6B35" />
              <circle cx="370" cy="35" r="2" fill="#F7931E" />
              <circle cx="375" cy="25" r="2.5" fill="#FFD23F" />
              <circle cx="365" cy="15" r="2" fill="#06D6A0" />
              <circle cx="380" cy="15" r="2" fill="#118AB2" />
            </svg>
            <p className="text-gray-300 mt-4">Empowering Innovation • Supporting Growth</p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-white hover:text-primary-orange transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-primary-orange transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-primary-orange transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-primary-orange transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-primary-orange transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-primary-orange transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 hover:text-primary-orange transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-primary-orange transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-primary-orange flex-shrink-0" />
                <span className="text-gray-300">542, Shahbad,Daulatpur, Near Khatu Shyam Mandir, Delhi- 110042 India</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-primary-orange flex-shrink-0" />
                <a href="tel:+91 8103077164" className="text-gray-300 hover:text-primary-orange transition-colors">
                  <span className="text-gray-300">+91 9069654111</span>
               </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-primary-orange flex-shrink-0" />
                <a
                  href="mailto:info@colorshadesb.com"
                  className="text-gray-300 hover:text-primary-orange transition-colors"
                >
                  info@colorshadesb.com
                </a>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-white">Find Us</h4>
            <div className="h-48 bg-gray-700 rounded-md overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.2536055556584!2d77.22746857489428!3d28.561951175579144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce26f903969d7%3A0x8f89b5e7f76a2d51!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1718294128012!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Color Shades Bharat. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

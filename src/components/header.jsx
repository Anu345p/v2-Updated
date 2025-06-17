"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <svg
            viewBox="0 0 400 120"
            xmlns="http://www.w3.org/2000/svg"
            className="w-auto h-20"
          >
            <defs>
              <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF6B35" stopOpacity="1" />
                <stop offset="25%" stopColor="#F7931E" stopOpacity="1" />
                <stop offset="50%" stopColor="#FFD23F" stopOpacity="1" />
                <stop offset="75%" stopColor="#06D6A0" stopOpacity="1" />
                <stop offset="100%" stopColor="#118AB2" stopOpacity="1" />
              </linearGradient>
              <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF8500" stopOpacity="1" />
                <stop offset="50%" stopColor="#FF6B35" stopOpacity="1" />
                <stop offset="100%" stopColor="#138808" stopOpacity="1" />
              </linearGradient>
              <filter id="dropshadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="2" dy="2" stdDeviation="2" floodColor="#00000040" />
              </filter>
            </defs>

            <circle cx="45" cy="60" r="35" fill="url(#iconGradient)" filter="url(#dropshadow)" />

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

            <text x="95" y="45" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="bold" fill="url(#textGradient)">
              COLOUR SHADES
            </text>
            <text x="95" y="70" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="600" fill="#2C3E50">
              BHARAT
            </text>
            <rect x="95" y="75" width="30" height="3" fill="#FF9933" />
            <rect x="125" y="75" width="30" height="3" fill="#FFFFFF" stroke="#CCCCCC" strokeWidth="0.5" />
            <rect x="155" y="75" width="30" height="3" fill="#138808" />
            <text x="95" y="95" fontFamily="Arial, sans-serif" fontSize="12" fill="#7F8C8D" fontStyle="italic">
              Empowering Innovation • Supporting Growth
            </text>
            <circle cx="360" cy="25" r="3" fill="#FF6B35" />
            <circle cx="370" cy="35" r="2" fill="#F7931E" />
            <circle cx="375" cy="25" r="2.5" fill="#FFD23F" />
            <circle cx="365" cy="15" r="2" fill="#06D6A0" />
            <circle cx="380" cy="15" r="2" fill="#118AB2" />
          </svg>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-dark-blue font-medium hover:text-primary-orange transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-dark-blue"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-dark-blue font-medium py-2 hover:text-primary-orange transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
           </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

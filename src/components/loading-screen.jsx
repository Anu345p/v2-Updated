"use client";

import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center">
        {/* Animated Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <svg viewBox="0 0 400 120" xmlns="http://www.w3.org/2000/svg" className="w-80 h-auto mb-8">
            <defs>
              <linearGradient id="loadingTextGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: "#FF6B35", stopOpacity: 1 }} />
                <stop offset="25%" style={{ stopColor: "#F7931E", stopOpacity: 1 }} />
                <stop offset="50%" style={{ stopColor: "#FFD23F", stopOpacity: 1 }} />
                <stop offset="75%" style={{ stopColor: "#06D6A0", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "#118AB2", stopOpacity: 1 }} />
              </linearGradient>

              <linearGradient id="loadingIconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: "#FF8500", stopOpacity: 1 }} />
                <stop offset="50%" style={{ stopColor: "#FF6B35", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "#138808", stopOpacity: 1 }} />
              </linearGradient>

              <filter id="loadingDropshadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="2" dy="2" stdDeviation="2" floodColor="#00000040" />
              </filter>
            </defs>

            <circle cx="45" cy="60" r="35" fill="url(#loadingIconGradient)" filter="url(#loadingDropshadow)" />

            <motion.g
              transform="translate(45, 60)"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
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
            </motion.g>

            <text
              x="95"
              y="45"
              fontFamily="Arial, sans-serif"
              fontSize="28"
              fontWeight="bold"
              fill="url(#loadingTextGradient)"
            >
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-bold text-dark-blue">Loading...</h2>
          <p className="text-gray-600">Preparing your color experience</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex justify-center space-x-2 mt-8"
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-3 h-3 bg-primary-orange rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.2,
              }}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="mt-8 w-64 mx-auto"
        >
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div
              className="bg-gradient-to-r from-primary-orange to-green-accent h-2 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

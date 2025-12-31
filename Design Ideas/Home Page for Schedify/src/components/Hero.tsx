import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, Users } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-16 h-16 bg-blue-200/30 rounded-full blur-xl"
          animate={{
            y: [0, 30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-24 h-24 bg-purple-200/30 rounded-full blur-xl"
          animate={{
            y: [0, -40, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-32 left-1/4 w-20 h-20 bg-green-200/30 rounded-full blur-xl"
          animate={{
            y: [0, 25, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <div className="text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-6xl md:text-7xl lg:text-8xl tracking-tight text-gray-900 mb-6">
                Schedify
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-12">
                We do the scheduling. You do the living.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <button className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                Generate Schedule
              </button>
              <button className="px-8 py-3 border-2 border-gray-900 text-gray-900 rounded-full hover:bg-gray-900 hover:text-white transition-colors">
                View Employees
              </button>
            </motion.div>

            {/* Floating icons */}
            <div className="hidden md:flex gap-8 mt-12">
              <motion.div
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="p-3 bg-blue-100 rounded-xl">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-sm text-gray-600">Smart Scheduling</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div className="p-3 bg-purple-100 rounded-xl">
                  <Clock className="w-6 h-6 text-purple-600" />
                </div>
                <span className="text-sm text-gray-600">Time Tracking</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="p-3 bg-green-100 rounded-xl">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <span className="text-sm text-gray-600">Staff Management</span>
              </motion.div>
            </div>
          </div>

          {/* Right side - Images */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                className="relative h-64 rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1613325680976-a8b0a456c1db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGRlcmx5JTIwcGVvcGxlJTIwc21pbGluZ3xlbnwxfHx8fDE3NjYxMzYwNDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Happy elderly residents"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                className="relative h-64 rounded-2xl overflow-hidden mt-8"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1758691031563-ed85fad35045?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRpcmVtZW50JTIwaG9tZSUyMGFjdGl2aXRpZXN8ZW58MXx8fHwxNzY2MTgwNDgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Retirement home activities"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                className="relative h-64 rounded-2xl overflow-hidden col-span-2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1765896387403-3e6e0e44d7cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5pb3IlMjBjYXJlJTIwaGFwcHl8ZW58MXx8fHwxNzY2MTY4NjQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Senior care"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-gray-400 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  );
}
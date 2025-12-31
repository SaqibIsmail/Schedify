import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, Users, Bell, BarChart, Shield } from 'lucide-react';

const features = [
  {
    icon: Calendar,
    title: 'Easy Scheduling',
    description: 'Create and manage staff schedules effortlessly with our intuitive interface.',
    color: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  {
    icon: Clock,
    title: 'Shift Management',
    description: 'Track shifts, overtime, and availability with real-time updates.',
    color: 'bg-purple-100',
    iconColor: 'text-purple-600',
  },
  {
    icon: Users,
    title: 'Staff Coordination',
    description: 'Ensure optimal staff coverage for all resident care needs.',
    color: 'bg-green-100',
    iconColor: 'text-green-600',
  },
  {
    icon: Bell,
    title: 'Fair Shift Distribution',
    description: 'Ensure fair shifts for employee satisfaction and work-life balance.',
    color: 'bg-orange-100',
    iconColor: 'text-orange-600',
  },
  {
    icon: BarChart,
    title: 'Analytics',
    description: 'Gain insights into staffing patterns and optimize resource allocation.',
    color: 'bg-pink-100',
    iconColor: 'text-pink-600',
  },
  {
    icon: Shield,
    title: 'Compliance',
    description: 'Stay compliant with labor laws and healthcare regulations.',
    color: 'bg-indigo-100',
    iconColor: 'text-indigo-600',
  },
];

export function FeatureCards() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl tracking-tight text-gray-900 mb-4">
            Everything you need
          </h2>
          <p className="text-xl text-gray-600">
            Powerful tools designed for retirement home management
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="p-8 bg-gray-50 rounded-3xl hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className={`inline-flex p-4 ${feature.color} rounded-2xl mb-6`}>
                <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
              </div>
              <h3 className="text-2xl text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
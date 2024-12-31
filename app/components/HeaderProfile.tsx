'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Mail, Linkedin, BookOpen, GraduationCap, Brain, Code, Database } from 'lucide-react'
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function HeaderProfile() {
  return (
    <section className="relative w-full mb-8">
      {/* Main container with background */}
      <div className="relative bg-gray-800 bg-opacity-50 rounded-lg backdrop-blur-sm shadow-lg overflow-hidden">
        {/* Background Effect */}
        <BackgroundBeamsWithCollision children={undefined}/>
        
        {/* Content Container */}
        <div className="relative z-10 p-4 md:p-6">
          {/* Profile Section */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* Image Column */}
            <div className="flex flex-col items-center md:items-start gap-4 flex-shrink-0">
              {/* Image Container */}
              <div className="relative w-32 h-32 md:w-48 md:h-48">
                <Image
                  src="/images/nirthika.jpg"
                  alt="Dr. Nirthika Rajendran"
                  width={200}
                  height={200}
                  className="rounded-lg border-2 border-purple-500 object-cover w-full h-full"
                />
              </div>
              
              {/* Skills Grid - Mobile View */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="grid grid-cols-2 gap-2 w-full md:hidden"
              >
                {[
                  { icon: GraduationCap, text: "Academic Excellence", color: "from-purple-900 to-indigo-900" },
                  { icon: Brain, text: "AI Research", color: "from-indigo-900 to-blue-900" },
                  { icon: Code, text: "Software Development", color: "from-blue-900 to-cyan-900" },
                  { icon: Database, text: "Data Analysis", color: "from-cyan-900 to-purple-900" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className={`flex flex-col items-center p-3 bg-gradient-to-br ${item.color} rounded-lg hover:shadow-lg transition-all duration-300`}
                    whileHover={{ scale: 1.05 }}
                  >
                    <item.icon className="w-6 h-6 text-white mb-2 opacity-75" />
                    <span className="text-white text-xs font-medium text-center">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Text Content Container */}
            <div className="flex-1 flex flex-col">
              <div className="text-center md:text-left">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text"
                >
                  Dr. Nirthika Rajendran
                </motion.h1>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-lg md:text-2xl font-semibold mb-4 text-purple-300"
                >
                  Lecturer at University of Jaffna
                </motion.h2>
                
                {/* Social Links */}
                <nav className="mb-4">
                  <ul className="flex justify-center md:justify-start space-x-4">
                    <li>
                      <Link 
                        href="mailto:nirthika@univ.jfn.ac.lk" 
                        className="text-gray-300 hover:text-purple-400 transition-colors duration-200"
                        aria-label="Email"
                      >
                        <Mail className="w-6 h-6" />
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="https://lk.linkedin.com/in/nirthika" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-300 hover:text-purple-400 transition-colors duration-200"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="w-6 h-6" />
                      </Link>
                    </li>
                    <li>
                      <Link 
                        href="https://scholar.google.com/citations?user=WtrsAqsAAAAJ&hl=en&oi=ao" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-300 hover:text-purple-400 transition-colors duration-200"
                        aria-label="Google Scholar"
                      >
                        <BookOpen className="w-6 h-6" />
                      </Link>
                    </li>
                  </ul>
                </nav>

                {/* Brief Description */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-gray-300 mb-6"
                >
                  <p className="leading-relaxed text-sm md:text-base">
                    Enthusiastic academic with over seven years of experience in teaching, research, and industry, specializing
                    in deep learning, medical image analysis, and computer vision. Committed to advancing AI research,
                    mentoring, and contributing to academia and society.
                  </p>
                </motion.div>

                {/* Skills Grid - Desktop View */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="hidden md:grid grid-cols-4 gap-4"
                >
                  {[
                    { icon: GraduationCap, text: "Academic Excellence", color: "from-purple-900 to-indigo-900" },
                    { icon: Brain, text: "AI Research", color: "from-indigo-900 to-blue-900" },
                    { icon: Code, text: "Software Development", color: "from-blue-900 to-cyan-900" },
                    { icon: Database, text: "Data Analysis", color: "from-cyan-900 to-purple-900" }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className={`flex flex-col items-center p-4 bg-gradient-to-br ${item.color} rounded-lg hover:shadow-lg transition-all duration-300`}
                      whileHover={{ scale: 1.05 }}
                    >
                      <item.icon className="w-8 h-8 text-white mb-2 opacity-75" />
                      <span className="text-white text-sm font-medium text-center">{item.text}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
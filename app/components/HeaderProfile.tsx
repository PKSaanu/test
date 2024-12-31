'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Mail, Linkedin, BookOpen, GraduationCap, Brain, Code, Database } from 'lucide-react'
import { Boxes } from '@/components/ui/background-boxes'
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";


export default function HeaderProfile() {
  return (
    <section id="headerprofile" className="relative mb-8 bg-gray-800 bg-opacity-50 p-6 rounded-lg backdrop-blur-sm shadow-lg overflow-hidden">
      {/* The background boxes are contained within this card */}
      <div className="absolute inset-0">
        <BackgroundBeamsWithCollision children={undefined} />
      </div>

      {/* Content of the card */}
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row items-center mb-6">
          <div className="relative w-48 h-72 mb-4 md:mb-0 md:mr-6">
            <Image
              src="/images/nirthika.jpg"
              alt="Dr. Nirthika Rajendran"
              width={200}
              height={280}
              className="rounded-lg border-2 border-purple-500 object-cover"
            />
            {/* Adding a purple mask to the top of the image */}
          </div>
          <div className="text-center md:text-left md:ml-6">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text"
            >
              Dr. Nirthika Rajendran
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl font-semibold mb-4 text-purple-300"
            >
              Lecturer at University of Jaffna
            </motion.h2>
            <nav>
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
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-gray-300 space-y-4 mt-4"  
        >
          <p className="leading-relaxed ml-56 ">
            Enthusiastic academic with over seven years of experience in teaching, research, and industry, specializing
            in deep learning, medical image analysis, and computer vision. Committed to advancing AI research,
            mentoring, and contributing to academia and society.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}

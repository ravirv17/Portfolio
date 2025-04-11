import React from 'react';
import { Github, Linkedin, Mail, Award, Briefcase, Code, ExternalLink, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { link } from 'framer-motion/client';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

function Section({ children, title }: { children: React.ReactNode; title: string }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={stagger}
      className="mb-20"
    >
      <motion.h2 
        variants={fadeInUp}
        className="text-3xl font-bold mb-8 text-gray-900 border-b-2 border-blue-500 pb-2 inline-block"
      >
        {title}
      </motion.h2>
      {children}
    </motion.section>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-blue-800 via-indigo-800 to-purple-800 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
              Ravi Shankar Poddar
            </h1>
            <p className="text-2xl sm:text-3xl text-blue-100 mb-8 font-light">
              Software Developer & Problem Solver
            </p>
            <div className="flex justify-center space-x-8">
              <motion.a 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/ravirv17" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-300 transition-colors"
              >
                <Github size={28} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/ravi-shankar-poddar-1aa982257/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-300 transition-colors"
              >
                <Linkedin size={28} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:ravirv1717@gmail.com"
                className="hover:text-blue-300 transition-colors"
              >
                <Mail size={28} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* About Section */}
        <Section title="About Me">
          <motion.div variants={fadeInUp} className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-xl text-gray-700 leading-relaxed">
              Passionate software developer with a strong foundation in web technologies and problem-solving. 
              Experienced in building scalable applications and working with modern development tools. 
              Committed to writing clean, efficient code and staying updated with the latest industry trends.
            </p>
          </motion.div>
        </Section>

        {/* Experience Section */}
        <Section title="Experience">
          <div className="space-y-8">
            <motion.div variants={fadeInUp} className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-[1.02] transition-transform">
              <div className="flex items-start">
                <Briefcase className="text-blue-600 mr-4 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Full Stack Developer Intern</h3>
                  <p className="text-gray-600 mb-2">HOBIT • May 2024 - July 2024</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Developed responsive websites using HTML, CSS, JavaScript, and React, cutting page load times by 20%.</li>
                    <li>Built a School Management System using Node.js, Express, and MongoDB for secure user authentication.</li>
                    <li>Designed a Property Listing Application with React and MongoDB, enabling over 50 daily property
                    searches.</li>
                    <li>
                    Created an e-commerce site (liorak.in) on Shopify, integrating seamless payment gateways.
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </Section>

        {/* Skills Section */}
        <Section title="Technical Skills">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { category: "Frontend", skills: ["React.js", "TypeScript", "HTML", "Tailwind CSS", "D3.js"] },
              { category: "Backend", skills: ["Node.js", "Express.js", "RESTful APIs", "MongoDB"] },
              { category: "Tools & Others", skills: ["Git", "Netlify"] },
              { category: "Programming", skills: ["JavaScript", "Python", "Java", "C++", "C"] },
              { category: "Problem Solving", skills: ["Data Structures", "Algorithms"] },
              { category: "Soft Skills", skills: ["Team Collaboration", "Communication", "Leadership"] }
            ].map((skillGroup, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-[1.02] transition-transform"
              >
                <h3 className="text-lg font-semibold text-blue-600 mb-4">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-gray-700 flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Achievements Section */}
        <Section title="Achievements">
          <div className="space-y-6">
            <motion.div variants={fadeInUp} className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-[1.02] transition-transform">
              <div className="flex items-start">
                <Award className="text-blue-600 mr-4 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Programming</h3>
                  <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
                    <li>Achieved 4-star rating on GeeksForGeeks (1814 rating).</li>
                    <li>Solved 500+ problems across various platforms.</li>
                    <li>Contributed 20+ repositories and features to open-source projects on GitHub.</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </Section>

        {/* Projects Section */}
        <Section title="Featured Projects">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "E-Commerce Platform",
                description: "Built a fully functional online store with product listings, cart, and checkout.",
                tech: ["React", "HTML", "CSS", "JavaScript"],
                link: "https://www.liorak.in" 
              },
              {
                title: "Smart Street Light",
                description: " Engineered an IoT-based system reducing energy consumption by 30%.",
                tech: ["Arduino IDE", "Arduino", "IoT sensors"],
                link:"https://www.linkedin.com/posts/ravi-shankar-poddar-1aa982257_made-a-project-called-smart-street-light-activity-7224096042072338434-ywvC?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9TcpIBPVr82t6FfKaD3b1qt-VN-7iHz-Y"
              },
              {
                title: "SONAR Using Arduino",
                description: "Made a SONAR system using Arduino and Ultrasonic sensor that visualizes object in front of it and its distance on an app.",
                tech: ["Arduino IDE", "Arduino", "IoT sensors", "Python", "Flask"],
                link:"https://www.linkedin.com/posts/ravi-shankar-poddar-1aa982257_we-made-sonar-using-arduino-that-not-only-activity-7224099423612452864-HOI6?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9TcpIBPVr82t6FfKaD3b1qt-VN-7iHz-Y"
              },
              {
                title: "Portfolio Website",
                description: " Designed a responsive personal site showcasing projects.",
                tech: ["TypeScript", "React.js", "Vite", "TailwindCSS"],
                link:"https://github.com/ravirv17/Portfolio"
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition-transform"
              >
                <div className="p-8">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                    <a href={project.link} className="text-blue-600 hover:text-blue-800">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                  <p className="text-gray-600 mt-2 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Contact Section */}
        <Section title="Get in Touch">
          <motion.div variants={fadeInUp} className="bg-white rounded-xl shadow-lg p-8">
            <p className="text-xl text-gray-700 mb-6">
              I'm always interested in hearing about new opportunities and collaborations.
              Feel free to reach out!
            </p>
            <div className="flex flex-col space-y-4">
              <a
                href="mailto:ravirv1717@gmail.com"
                className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
              >
                <Mail className="mr-2" size={20} />
                ravirv1717@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/ravi-shankar-poddar-1aa982257/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
              >
                <Linkedin className="mr-2" size={20} />
                LinkedIn Profile
              </a>
            </div>
          </motion.div>
        </Section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} Ravi Shankar Poddar. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
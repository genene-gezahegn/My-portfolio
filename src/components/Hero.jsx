import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="relative w-48 h-48 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-400 via-accent-400 to-primary-500 p-1">
                <img
                  src="/profile.jpg"
                  alt="Genene Gezahegn"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="text-slate-100">Genene Gezahegn</span>
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-gradient">
              Full-Stack Software Engineer
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto"
          >
            I design and build scalable web applications that solve real problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <a
              href="#projects"
              className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/50"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 glass glass-hover text-white rounded-lg font-semibold"
            >
              Hire Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex justify-center gap-6 mb-16"
          >
            <a
              href="https://github.com/genene-gezahegn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-primary-400 transition-colors"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/genene-gezahegn-260a1b35a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-primary-400 transition-colors"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="mailto:ggenene9@gmail.com"
              className="text-slate-400 hover:text-primary-400 transition-colors"
            >
              <Mail size={28} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="animate-bounce"
          >
            <a href="#about">
              <ArrowDown className="mx-auto text-slate-400" size={32} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero

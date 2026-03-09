import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const projects = [
    {
      title: 'Professional Portfolio Website',
      description:
        'A premium developer portfolio featuring smooth animations, glassmorphism design, interactive particle effects, and optimized performance. Built with modern React and TailwindCSS.',
      tech: ['React', 'Vite', 'TailwindCSS', 'Framer Motion', 'JavaScript'],
      github: 'https://github.com/genene-gezahegn/My-portfolio',
      demo: '#', // Will be updated after deployment
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Full-Stack E-commerce Platform',
      description:
        'Complete e-commerce solution with shopping cart, payment integration, user authentication, and admin dashboard. Scalable architecture designed for high performance.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      github: 'https://github.com/genene-gezahegn',
      demo: '#', // Deploy project and add link here
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Task Management Application',
      description:
        'Collaborative productivity app with real-time updates, drag-and-drop interface, team collaboration features, and cloud synchronization.',
      tech: ['React', 'Firebase', 'Material-UI', 'Redux'],
      github: 'https://github.com/genene-gezahegn',
      demo: '#', // Deploy project and add link here
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Weather Dashboard App',
      description:
        'Real-time weather application with location search, 7-day forecast, interactive maps, and beautiful data visualizations. Responsive design for all devices.',
      tech: ['React', 'Weather API', 'Chart.js', 'TailwindCSS'],
      github: 'https://github.com/genene-gezahegn',
      demo: '#', // Deploy project and add link here
      gradient: 'from-orange-500 to-red-500',
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass glass-hover rounded-xl overflow-hidden group"
              >
                <div className={`h-48 bg-gradient-to-br ${project.gradient} relative`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-6xl font-bold opacity-20">
                      {project.title.charAt(0)}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-slate-400 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-300 hover:text-primary-400 transition-colors"
                    >
                      <Github size={20} />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-300 hover:text-accent-400 transition-colors"
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

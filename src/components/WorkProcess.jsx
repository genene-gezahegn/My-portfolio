import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Search, Pencil, Code, TestTube, Rocket, Wrench } from 'lucide-react'

const WorkProcess = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const steps = [
    {
      icon: <Search className="w-8 h-8" />,
      title: 'Requirement Analysis',
      description: 'Understanding your needs and defining project scope',
    },
    {
      icon: <Pencil className="w-8 h-8" />,
      title: 'System Design',
      description: 'Architecting scalable solutions and planning implementation',
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Development',
      description: 'Writing clean, maintainable code following best practices',
    },
    {
      icon: <TestTube className="w-8 h-8" />,
      title: 'Testing',
      description: 'Comprehensive testing to ensure quality and reliability',
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Deployment',
      description: 'Launching your application to production environment',
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Maintenance',
      description: 'Ongoing support, updates, and performance monitoring',
    },
  ]

  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Work <span className="text-gradient">Process</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="glass glass-hover p-6 rounded-xl">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {index + 1}
                  </div>
                  <div className="text-primary-400 mb-4 mt-4">{step.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-slate-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WorkProcess

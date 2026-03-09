import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Layout, Server, Zap, Bug, Cloud } from 'lucide-react'

const Services = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const services = [
    {
      icon: <Code className="w-10 h-10" />,
      title: 'Full-Stack Web Development',
      description:
        'End-to-end development of web applications using modern technologies and best practices.',
    },
    {
      icon: <Layout className="w-10 h-10" />,
      title: 'Frontend Development',
      description:
        'Creating responsive, performant, and accessible user interfaces with React and modern CSS.',
    },
    {
      icon: <Server className="w-10 h-10" />,
      title: 'API Development',
      description:
        'Building robust RESTful APIs with proper authentication, validation, and documentation.',
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: 'Website Optimization',
      description:
        'Performance tuning, SEO optimization, and improving Core Web Vitals for better rankings.',
    },
    {
      icon: <Bug className="w-10 h-10" />,
      title: 'Bug Fixing & Maintenance',
      description:
        'Debugging complex issues, refactoring legacy code, and maintaining existing applications.',
    },
    {
      icon: <Cloud className="w-10 h-10" />,
      title: 'Deployment & DevOps',
      description:
        'Setting up CI/CD pipelines, cloud deployment, and infrastructure management.',
    },
  ]

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Services <span className="text-gradient">I Offer</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass glass-hover p-6 rounded-xl group"
              >
                <div className="text-primary-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-slate-400">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services

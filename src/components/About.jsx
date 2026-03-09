import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code2, Rocket, Zap } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const highlights = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and well-documented code',
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Performance',
      description: 'Optimizing applications for speed and efficiency',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Problem Solving',
      description: 'Architecting solutions for complex technical challenges',
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                I'm a passionate full-stack software engineer dedicated to building scalable,
                high-performance web applications. With a strong foundation in modern JavaScript
                frameworks and a keen eye for clean code, I transform complex challenges into
                elegant, user-friendly solutions.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                My expertise spans the entire development stack—from crafting responsive,
                accessible frontends with React and TailwindCSS to architecting robust backends
                with Node.js and Express. I'm committed to writing maintainable code that follows
                industry best practices and delivers exceptional user experiences.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Whether building a new application from the ground up or optimizing existing
                systems, I bring a problem-solving mindset, attention to detail, and a passion for
                continuous learning. I'm always exploring new technologies and methodologies to
                deliver the best possible solutions for my clients.
              </p>
            </div>

            <div className="space-y-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="glass glass-hover p-6 rounded-xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-primary-400">{item.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-slate-400">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

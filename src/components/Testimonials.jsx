import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Quote } from 'lucide-react'

const Testimonials = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const testimonials = [
    {
      name: 'John Smith',
      role: 'CEO, Tech Startup',
      content:
        'Genene delivered an exceptional product that exceeded our expectations. Professional, skilled, and great communication throughout.',
      avatar: 'JS',
    },
    {
      name: 'Sarah Johnson',
      role: 'Product Manager',
      content:
        'Working with Genene was a pleasure. The code quality is outstanding and the project was delivered on time.',
      avatar: 'SJ',
    },
    {
      name: 'Michael Chen',
      role: 'CTO, E-commerce',
      content:
        'Highly skilled developer with deep understanding of modern web technologies. Would definitely work together again.',
      avatar: 'MC',
    },
  ]

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Client <span className="text-gradient">Testimonials</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-12"></div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass glass-hover p-6 rounded-xl"
              >
                <Quote className="text-primary-400 mb-4" size={32} />
                <p className="text-slate-300 mb-6 italic">{testimonial.content}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-slate-400">{testimonial.role}</p>
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

export default Testimonials

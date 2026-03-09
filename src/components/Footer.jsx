import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-400 text-center md:text-left">
            <p className="flex items-center gap-2 justify-center md:justify-start">
              Built with <Heart size={16} className="text-red-500" /> by Genene Gezahegn
            </p>
            <p className="text-sm mt-1">© 2024 All rights reserved.</p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/genene-gezahegn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-primary-400 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/genene-gezahegn-260a1b35a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-primary-400 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:ggenene9@gmail.com"
              className="text-slate-400 hover:text-primary-400 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

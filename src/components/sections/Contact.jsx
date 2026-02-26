import { SectionHeader } from '../ui/SectionHeader'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { MapPin, Linkedin, Github, Mail } from 'lucide-react'
import catImage from '../../assets/images/kitty.png'

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name:    form.name,
          email:   form.email,
          title:   form.subject,
          message: form.message,
        },
        PUBLIC_KEY
      )
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  const inputClass = "card-glass rounded-xl px-4 py-3 text-sm font-light text-ink placeholder:text-soft/50 outline-none focus:border-periwinkle focus:ring-2 focus:ring-periwinkle/20 transition-all w-full"

  return (
    <section id="contact" className="py-24 px-[5vw] max-w-[1200px] mx-auto relative">
      <SectionHeader label="Let's talk" title="Get in Touch" />
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-16 mt-12">

        {/* Info */}
        <div>
          <p className="text-soft font-light text-sm leading-relaxed mb-8">
            Whether it's a project, a position, or just to connect — I'd love to hear from you.
          </p>
          <div className="flex flex-col gap-4 mb-6">
            {[
              { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/agosro/'},
              { icon: Github, label: 'GitHub', href: 'https://github.com/agosro' },
              { icon: Mail, label: 'agosrotorres@gmail.com', href: 'mailto:agosrotorres@gmail.com' },
              { icon: MapPin, label: 'Córdoba, Argentina', href: '#' },
            ].map(s => (
              <a key={s.label} href={s.href} target={s.target || '_blank'}  className="flex items-center gap-3 text-soft hover:text-ink transition-colors text-sm">
                <span className="w-8 h-8 card-glass rounded-lg flex items-center justify-center text-steel flex-shrink-0">
                  <s.icon className="w-4 h-4" />
                </span>
                {s.label}
              </a>
            ))}
          </div>
          <div className="bg-gradient-to-br from-periwinkle/40 to-lilac/30 rounded-2xl p-6 border border-periwinkle/50">
            <h3 className="text-ink font-bold text-base tracking-tight mb-2">Available for freelance work</h3>
            <p className="text-soft font-light text-sm leading-relaxed">
              I'm currently accepting new projects and would love to hear about yours.
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-medium tracking-widest uppercase text-steel">Name</label>
              <input name="name" placeholder="Your name" onChange={handleChange} className={inputClass} />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-medium tracking-widest uppercase text-steel">Email</label>
              <input name="email" type="email" placeholder="you@email.com" onChange={handleChange} className={inputClass} />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-medium tracking-widest uppercase text-steel">Subject</label>
            <input name="subject" placeholder="What's it about?" onChange={handleChange} className={inputClass} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-medium tracking-widest uppercase text-steel">Message</label>
            <textarea name="message" rows={5} placeholder="Tell me about your project..." onChange={handleChange} className={`${inputClass} resize-none`} />
          </div>
          <button
            type="submit"
            disabled={status === 'sending'}
            className="self-start bg-ink text-snow text-sm font-medium px-8 py-3 rounded-full hover:bg-steel transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === 'sending' ? 'Sending...' : 'Send Message →'}
          </button>
          {status === 'success' && (
            <p className="text-sm text-green-600 font-medium">✓ Message sent! I'll get back to you soon.</p>
          )}
          {status === 'error' && (
            <p className="text-sm text-red-500 font-medium">Something went wrong. Please try again or email me directly.</p>
          )}
        </form>

      </div>

      {/* Cat mascot */}
      <div className="hidden lg:block absolute -bottom-8 -right-60 w-100 h-100">
        <img src={catImage} alt="Available for work" className="w-full h-full object-contain drop-shadow-lg" />
      </div>
    </section>
  )
}
import sooniImg from '../assets/images/sooni.png'
import docuassistImg from '../assets/images/docuassist.png'
import maestroImg from '../assets/images/chatbot.png'
import tesisImg from '../assets/images/tesis.png'
import weatherImg from '../assets/images/weather.png'
import pomodoroImg from '../assets/images/pomodoro-kitty.png'

export const projects = [
  {
    id: 1,
    title: 'SOONI Skincare - E-commerce',
    description: 'Full-stack e-commerce for Korean skincare. Product catalog, persistent cart, MercadoPago checkout, order tracking, admin dashboard with role-based access, Google OAuth, and seed scripts.',
    image: sooniImg,
    tags: [
      { label: 'React' },
      { label: 'Node.js' },
      { label: 'Express' },
      { label: 'MongoDB' },
      { label: 'Tailwind' },
    ],
    github: 'https://github.com/agosro/ecoomerce-sooni',
    live: null,
  },
  {
    id: 2,
    title: 'DocuAssist AI - RAG System',
    description: 'Complete RAG system for technical documentation queries: intent classification, RAG pipeline (ChromaDB + Cohere), automatic filter inference, persistent history, and a React-based UI.',
    image: docuassistImg,
    tags: [
      { label: 'AI', variant: 'ai' },
      { label: 'Python' },
      { label: 'FastAPI' },
      { label: 'Cohere' },
      { label: 'React' },
    ],
    github: 'https://github.com/agosro/docuassist-ai-pi-data-challenge-final',
    live: null,
  },
  {
    id: 3,
    title: 'Maestro de los Cuentos',
    description: 'AI-powered storytelling assistant that generates and answers questions about stories using LLMs, embeddings, and RAG techniques, focusing on grounded and context-aware responses.',
    image: maestroImg,
    tags: [
      { label: 'AI', variant: 'ai' },
      { label: 'Python' },
      { label: 'RAG', variant: 'ai' },
      { label: 'React' },
    ],
    github: 'https://github.com/agosro/maestro-de-los-cuentos',
    live: 'https://maestro-de-los-cuentos.netlify.app/',
  },
  {
    id: 4,
    title: 'School Management System',
    description: 'Comprehensive school management system developed as my thesis. Handles students, teachers, courses, grades, reports, and role-based access control.',
    image: tesisImg,
    tags: [
      { label: 'React' },
      { label: 'Java' },
      { label: 'Spring Boot' },
      { label: 'MySQL' },
      { label: 'JWT' },
    ],
    github: 'https://github.com/agosro/LuteranoFrontEnd',
    live: null,
  },
  {
    id: 5,
    title: 'Weather App',
    description: 'A fun weather web app featuring kittens that change with the weather, with real-time forecasts, language toggle, and a responsive design.',
    image: weatherImg,
    tags: [
      { label: 'JavaScript' },
      { label: 'CSS' },
      { label: 'HTML' },
    ],
    github: 'https://github.com/agosro/weather-app',
    live: 'https://agosro.github.io/weather-app/',
  },
  {
    id: 6,
    title: 'Pomodoro Kitty',
    description: 'A simple Pomodoro timer web app with work and break modes, visual/audio alerts, and a responsive design.',
    image: pomodoroImg,
    tags: [
      { label: 'JavaScript' },
      { label: 'CSS' },
      { label: 'HTML' },
    ],
    github: 'https://github.com/agosro/pomodoro-kitty',
    live: 'https://agosro.github.io/pomodoro-kitty/',
  },
]
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { TechStack } from './components/sections/TechStack'
import { Projects } from './components/sections/Projects'
import { QAWork } from './components/sections/QAWork'
import { Contact } from './components/sections/Contact'

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#fafcff' }}>
      <Navbar />
      <main>
        <div className="bg-mesh">
          <Hero />
        </div>
        <div>
          <About />
        </div>
        <div className="section-alt-blue">
          <TechStack />
        </div>
        <div>
          <Projects />
        </div>
        <div className="section-alt-blue">
          <QAWork />
        </div>
        <div>
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  )
}
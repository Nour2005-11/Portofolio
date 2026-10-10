import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import CoreAreas from './sections/CoreAreas';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Certifications from './sections/Certifications';
import AIAssisted from './sections/AIAssisted';
import Contact from './sections/Contact';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-bg transition-colors duration-350">
        <Navbar />
        <main>
          <Hero />
          <About />
          <CoreAreas />
          <Projects />
          <Experience />
          <Education />
          <Certifications />
          <AIAssisted />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

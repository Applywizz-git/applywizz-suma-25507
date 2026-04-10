import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';
import Certifications from './Certifications';
import Education from './Education';
import Contact from './Contact';
import Footer from './Footer';
import LoadingScreen from './LoadingScreen';
import { ThemeProvider } from '../hooks/useTheme';

// Initialize AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS for scroll animations
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: 'ease-out-cubic',
    });

    // Preload critical assets
    const preloadAssets = async () => {
      try {
        // Preload critical images
        const imageUrls = [
          '/src/assets/profile-pic.jpeg',
          '/src/assets/project-clinical-trial-dct.png',
          '/src/assets/project-risk-monitoring.png',
        ];

        const imagePromises = imageUrls.map((url) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = resolve;
            img.onerror = resolve; // Don't fail loading for missing images
            img.src = url;
          });
        });

        await Promise.allSettled(imagePromises);

        // Minimum loading time for smooth UX
        await new Promise(resolve => setTimeout(resolve, 3000));

      } catch (error) {
        console.warn('Asset preloading failed:', error);
      }
    };

    preloadAssets();
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <LoadingScreen key="loading" onComplete={handleLoadingComplete} />
          ) : (
            <div key="portfolio" className="portfolio-content">
              <Header />

              <main>
                {/* Hero Section */}
                <Hero />

                {/* About Section */}
                <About />

                {/* Experience Section */}
                <Experience />

                {/* Projects Section */}
                <Projects />

                {/* Skills Section */}
                <Skills />

                {/* Certifications Section */}
                <Certifications />

                {/* Education Section */}
                <Education />

                {/* Contact Section */}
                <Contact />
              </main>

              <Footer />
            </div>
          )}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
}
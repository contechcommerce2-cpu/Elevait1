import Hero from './components/Hero';
import Problem from './components/Problem';
import Services from './components/Services';
import Learning from './components/Learning';
import Results from './components/Results';
import Clients from './components/Clients';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Problem />
      <Services />
      <Learning />
      <Results />
      <Clients />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;

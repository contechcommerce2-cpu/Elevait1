import Hero from './components/Hero';
import Problem from './components/Problem';
import Services from './components/Services';
import Learning from './components/Learning';
import Results from './components/Results';
import Clients from './components/Clients';
import ABM from './components/ABM';
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
      <ABM />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;

import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
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
import CaseStudies from './pages/CaseStudies';

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Elevait | Revenue Growth Partner for Industrial, Energy Tech &amp; SaaS</title>
        <meta name="description" content="Elevait helps Industrial, Energy Tech and SaaS companies turn complex offerings into compelling narratives and predictable revenue through positioning, marketing and AI-powered demand generation." />
        <link rel="canonical" href="https://elevait.com/" />
        <meta property="og:title" content="Elevait | Revenue Growth Partner for Industrial, Energy Tech & SaaS" />
        <meta property="og:description" content="Elevait helps B2B companies turn complex offerings into compelling narratives and predictable revenue through AI-powered content and demand generation." />
        <meta property="og:url" content="https://elevait.com/" />
      </Helmet>
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

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/case-studies" element={<CaseStudies />} />
    </Routes>
  );
}

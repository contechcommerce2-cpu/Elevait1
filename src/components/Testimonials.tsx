import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Elevait transformed our brand presence and helped us achieve measurable results in lead generation. Their strategic approach to content and demand generation has been invaluable.",
      author: "Client Name",
      role: "Chief Marketing Officer",
      company: "Industrial Technology Company"
    },
    {
      quote: "The team's expertise in B2B marketing for complex technical products is exceptional. They truly understand how to communicate our value proposition to decision-makers.",
      author: "Client Name",
      role: "VP of Marketing",
      company: "Renewable Energy Solutions"
    },
    {
      quote: "Working with Elevait has been a game-changer for our digital presence. Their data-driven approach and consistent execution delivered results beyond our expectations.",
      author: "Client Name",
      role: "Director of Business Development",
      company: "Engineering Services Firm"
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600">
            Trusted by industrial and renewable technology companies everywhere
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 relative hover:shadow-lg transition-shadow">
              <div className="absolute top-6 right-6 text-[#f97316] opacity-20">
                <Quote className="w-12 h-12" />
              </div>

              <div className="relative">
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>

                <div className="border-t border-gray-200 pt-6">
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600 mt-1">{testimonial.role}</div>
                  <div className="text-sm text-[#1e3a8a] font-medium mt-1">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 italic">
            Client testimonials coming soon - we're currently gathering feedback from our partners
          </p>
        </div>
      </div>
    </section>
  );
}

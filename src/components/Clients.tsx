import { Building2 } from 'lucide-react';
import techMahindraLogo from '../assets/All_clients_logo-01.png';
import faberLogo from '../assets/All_clients_logo-03.png';
import frankeLogo from '../assets/All_clients_logo-04.png';

type Client =
  | { name: string; category: string; logo: string }
  | { name: string; category: string; logo?: undefined };

export default function Clients() {
  const clients: Client[] = [
    { name: 'Microsoft', category: 'Technology' },
    { name: 'Cisco', category: 'Technology' },
    { name: 'Tech Mahindra', category: 'IT Services', logo: techMahindraLogo },
    { name: 'Franke', category: 'Manufacturing', logo: frankeLogo },
    { name: 'Carrier', category: 'Manufacturing' },
    { name: 'Trilegal', category: 'Professional Services' },
    { name: 'Ingram Micro', category: 'Technology Distribution' },
    { name: 'Cyient', category: 'Engineering Services' },
    { name: 'Aster Pharmacy', category: 'Healthcare' },
    { name: 'Faber', category: 'Appliances', logo: faberLogo }
  ];

  const categories = [
    { name: 'Technology & SaaS', count: 15 },
    { name: 'Manufacturing & Industrial', count: 12 },
    { name: 'Professional Services', count: 8 },
    { name: 'Healthcare & Education', count: 10 }
  ];

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <Building2 className="w-4 h-4" />
            Trusted by Industry Leaders
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Powering Growth for{' '}
            <span className="text-[#f97316]">Global Brands</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            From Fortune 500 companies to innovative startups, we've helped brands across industries
            achieve their revenue goals.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categories.map((category, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border-2 border-gray-200 hover:border-[#f97316] transition-all duration-300"
            >
              <div className="text-3xl font-bold text-[#1e3a8a] mb-2">{category.count}+</div>
              <div className="font-semibold text-gray-900">{category.name}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {clients.map((client, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-[#f97316] hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center text-center"
            >
              {client.logo ? (
                <div className="h-14 flex items-center justify-center mb-3">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-14 max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ) : (
                <div className="w-12 h-12 bg-gradient-to-br from-[#1e3a8a] to-[#2563eb] rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
              )}
              <div className="font-bold text-gray-900 mb-1">{client.name}</div>
              <div className="text-xs text-gray-500">{client.category}</div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#f97316] to-[#ea580c] rounded-2xl p-8 sm:p-12 text-white text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Industry Recognition
          </h3>
          <p className="text-lg text-orange-100 mb-8 max-w-2xl mx-auto">
            Our work has been recognized with multiple industry awards.
          </p>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div className="text-center">
              <div className="text-4xl font-bold mb-1">22+</div>
              <div className="text-sm text-orange-100">Years Experience</div>
            </div>
            <div className="w-px h-12 bg-white/30"></div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-1">50+</div>
              <div className="text-sm text-orange-100">Brands Served</div>
            </div>
            <div className="w-px h-12 bg-white/30"></div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-1">5+</div>
              <div className="text-sm text-orange-100">Industry Awards</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

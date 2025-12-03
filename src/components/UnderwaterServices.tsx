import { ArrowLeft, Waves, Anchor, Ship, Leaf, Mail, Phone } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import pierImage from 'figma:asset/45f25a1abf5c2cfc16b8d69c4aceecca39f8c8dd.png';
import beachImage from 'figma:asset/32b45bc59d6d15d185de508994c1f8241327e9e5.png';

interface UnderwaterServicesProps {
  onNavigate: (page: 'landing') => void;
}

export function UnderwaterServices({ onNavigate }: UnderwaterServicesProps) {
  const services = [
    {
      icon: Waves,
      title: 'Shoreline & Beach Rehabilitation',
      titleTr: 'Kıyı ve Plaj Rehabilitasyonu',
      description: 'Sand dredging and beach restoration services',
      descriptionTr: 'Kum çekme ve plaj restorasyon hizmetleri',
      color: 'from-cyan-600 to-blue-600'
    },
    {
      icon: Anchor,
      title: 'Pier & Structural Maintenance',
      titleTr: 'İskele ve Yapısal Bakım',
      description: 'Underwater inspection and maintenance of marine structures',
      descriptionTr: 'Deniz yapılarının sualtı incelemesi ve bakımı',
      color: 'from-blue-600 to-teal-600'
    },
    {
      icon: Ship,
      title: 'Seabed Cleaning & Survey',
      titleTr: 'Deniz Dibi Temizliği ve İncelemesi',
      description: 'Environmental protection and underwater surveying',
      descriptionTr: 'Çevre koruma ve sualtı araştırması',
      color: 'from-teal-600 to-cyan-600'
    }
  ];

  const portfolioImages = [
    {
      url: 'https://images.unsplash.com/photo-1682957205538-7ba9957b01a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bmRlcndhdGVyJTIwZGl2ZXIlMjBuaWdodCUyMGRpdmluZ3xlbnwxfHx8fDE3NjQxNjk3MjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Night Diving Operations'
    },
    {
      url: pierImage,
      title: 'Pier Structure Maintenance'
    },
    {
      url: beachImage,
      title: 'Sand Dredging & Beach Work'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Header */}
      <header className="bg-black/50 backdrop-blur-sm border-b border-cyan-900/30 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => onNavigate('landing')}
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </button>
          <div className="flex items-center gap-2">
            <Waves className="w-8 h-8 text-cyan-400" />
            <span className="text-2xl text-white">AIRTECH</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-6">
              <Leaf className="w-12 h-12 text-green-400" />
              <Waves className="w-12 h-12 text-cyan-400" />
            </div>
            <h1 className="text-4xl md:text-6xl mb-6 text-white">
              Sezona Hazır, Çevreye Duyarlı Sahiller
            </h1>
            <p className="text-2xl md:text-3xl text-cyan-300 mb-4">
              Season Ready, Environmentally Conscious Shores
            </p>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Professional underwater services for corporate and tourism clients
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-white">
            Our Services / Hizmetlerimiz
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-cyan-900/30 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl mb-2 text-white">
                  {service.title}
                </h3>
                <p className="text-xl mb-4 text-cyan-300">
                  {service.titleTr}
                </p>
                <p className="text-gray-400 mb-2">{service.description}</p>
                <p className="text-gray-500">{service.descriptionTr}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-16 px-4 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-white">
            Portfolio / Portföy
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {portfolioImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer"
              >
                <ImageWithFallback
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white p-6">{image.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-8 text-white">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-12 text-gray-400">
            Projenize başlamaya hazır mısınız?
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <a
              href="tel:+905323652435"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now / Hemen Ara</span>
            </a>
            <a
              href="mailto:airtechinfo@gmail.com"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-700 to-gray-600 text-white px-8 py-4 rounded-full hover:shadow-lg hover:shadow-gray-500/50 transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              <span>Request Support / Destek Talep Et</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-cyan-900/30 bg-black/50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex flex-wrap items-center justify-center gap-6 text-gray-400 mb-4">
            <a href="tel:+905323652435" className="hover:text-cyan-400 transition-colors">
              📞 +90 532 365 24 35
            </a>
            <a href="mailto:airtechinfo@gmail.com" className="hover:text-cyan-400 transition-colors">
              ✉️ airtechinfo@gmail.com
            </a>
          </div>
          <p className="text-gray-500">© 2025 AIRTECH - Underwater Services</p>
        </div>
      </footer>
    </div>
  );
}
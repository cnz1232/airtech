import { ArrowLeft, Laptop, Cpu, Wrench, Droplets, Battery, ScanFace, Mail, Phone, Shield, Clock, Award, Smartphone, Tablet, Watch, HelpCircle } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface TechnicalServiceProps {
  onNavigate: (page: 'landing') => void;
}

export function TechnicalService({ onNavigate }: TechnicalServiceProps) {
  const services = [
    {
      icon: Smartphone,
      title: 'iPhone Repair',
      titleTr: 'iPhone Onarımı',
      description: 'Screen, battery, Face ID and motherboard repair for all iPhone models',
      descriptionTr: 'Tüm iPhone modelleri için ekran, batarya, Face ID ve anakart onarımı'
    },
    {
      icon: Laptop,
      title: 'MacBook Repair',
      titleTr: 'MacBook Onarımı',
      description: 'Logic board, screen, keyboard, and hardware repairs for MacBook',
      descriptionTr: 'MacBook için anakart, ekran, klavye ve donanım onarımları'
    },
    {
      icon: Tablet,
      title: 'iPad Repair',
      titleTr: 'iPad Onarımı',
      description: 'Screen replacement, battery and component repairs for all iPad models',
      descriptionTr: 'Tüm iPad modelleri için ekran değişimi, batarya ve bileşen onarımları'
    },
    {
      icon: Watch,
      title: 'Apple Watch Repair',
      titleTr: 'Apple Watch Onarımı',
      description: 'Screen, battery and hardware repairs for Apple Watch',
      descriptionTr: 'Apple Watch için ekran, batarya ve donanım onarımları'
    },
    {
      icon: Droplets,
      title: 'Liquid Damage Repair',
      titleTr: 'Sıvı Hasarı Onarımı',
      description: 'Professional water damage recovery for all Apple devices',
      descriptionTr: 'Tüm Apple cihazları için profesyonel su hasarı kurtarma'
    },
    {
      icon: HelpCircle,
      title: 'Other Services',
      titleTr: 'Diğer Hizmetler',
      description: 'Data recovery, software issues, and custom repair solutions',
      descriptionTr: 'Veri kurtarma, yazılım sorunları ve özel onarım çözümleri'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Deep Experience',
      titleTr: 'Köklü Deneyim',
      description: 'Founded on Air Bilişim heritage',
      descriptionTr: 'Air Bilişim mirasına dayanan tecrübe'
    },
    {
      icon: Clock,
      title: 'Fast Service',
      titleTr: 'Hızlı Servis',
      description: 'Same-day repair for most issues',
      descriptionTr: 'Çoğu sorun için aynı gün onarım'
    },
    {
      icon: Award,
      title: 'Reliable Repair',
      titleTr: 'Güvenilir Onarım',
      description: 'Quality guarantee on all services',
      descriptionTr: 'Tüm hizmetlerde kalite garantisi'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Header */}
      <header className="bg-black/50 backdrop-blur-sm border-b border-red-900/30 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <button
            onClick={() => onNavigate('landing')}
            className="flex items-center gap-2 text-red-400 hover:text-red-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </button>
          <div className="flex items-center gap-2">
            <Laptop className="w-8 h-8 text-red-400" />
            <span className="text-2xl text-white">AIRTECH</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-6 bg-red-900/30 px-4 py-2 rounded-full">
                <Laptop className="w-6 h-6 text-red-400" />
                <span className="text-red-300">Apple Specialist</span>
              </div>
              <h1 className="text-4xl md:text-5xl mb-6 text-white">
                Airtech Teknik Servis
              </h1>
              <h2 className="text-3xl md:text-4xl mb-6 text-red-400">
                Köklü Deneyim, Güvenilir Apple Onarımı
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Deep Experience, Reliable Apple Repair
              </p>
              <div className="space-y-4 text-gray-400">
                <div className="flex items-start gap-3">
                  <Cpu className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                  <p>
                    <strong className="text-white">Ghost Frame Specialization:</strong> Advanced motherboard and chip-level repair expertise
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                  <p>
                    <strong className="text-white">Air Bilişim Heritage:</strong> Years of trusted technical service experience
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Wrench className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                  <p>
                    <strong className="text-white">Complex Repairs:</strong> Face ID, motherboard, and water damage recovery
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent rounded-3xl blur-3xl"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1746005718004-1f992c399428?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpcGhvbmUlMjByZXBhaXIlMjB0ZWNobmljYWx8ZW58MXx8fHwxNzY0MTY5NzI1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Apple Technical Service"
                className="relative rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-white">
            Why Choose Us / Neden Bizi Seçmelisiniz
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-red-900/30 hover:border-red-500/50 transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-600 to-gray-700 flex items-center justify-center mb-6 mx-auto">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-xl mb-3 text-red-300">
                  {feature.titleTr}
                </p>
                <p className="text-gray-400 mb-2">{feature.description}</p>
                <p className="text-gray-500">{feature.descriptionTr}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-white">
            Our Services / Hizmetlerimiz
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-red-900/30 hover:border-red-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-600 to-gray-700 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl mb-2 text-white">
                      {service.title}
                    </h3>
                    <p className="text-xl mb-3 text-red-300">
                      {service.titleTr}
                    </p>
                    <p className="text-gray-400 mb-2">{service.description}</p>
                    <p className="text-gray-500">{service.descriptionTr}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ghost Frame Highlight */}
      <section className="py-16 px-4 bg-gradient-to-br from-red-900/10 to-transparent">
        <div className="max-w-5xl mx-auto text-center">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 border border-red-900/50">
            <Cpu className="w-20 h-20 text-red-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl mb-6 text-white">
              Ghost Frame / Motherboard Repair Specialist
            </h2>
            <p className="text-xl text-gray-300 mb-4">
              Anakart ve Çip Seviyesi Onarım Uzmanı
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              We specialize in complex chip-level repairs including Face ID restoration, 
              motherboard component repair, and Ghost Frame issues. Our technical expertise 
              allows us to solve problems other services cannot handle.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl mb-8 text-white">
            Get a Free Fault Diagnosis and Quote
          </h2>
          <p className="text-xl mb-12 text-gray-400">
            Ücretsiz Arıza Teşhisi ve Teklif Alın
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <a
              href="tel:+905323652435"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-gray-700 text-white px-8 py-4 rounded-full hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now / Hemen Ara</span>
            </a>
            <a
              href="mailto:airtechinfo@gmail.com"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-700 to-gray-600 text-white px-8 py-4 rounded-full hover:shadow-lg hover:shadow-gray-500/50 transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              <span>Email Us / E-posta Gönder</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-red-900/30 bg-black/50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex flex-wrap items-center justify-center gap-6 text-gray-400 mb-4">
            <a href="tel:+905323652435" className="hover:text-red-400 transition-colors">
              📞 +90 532 365 24 35
            </a>
            <a href="mailto:airtechinfo@gmail.com" className="hover:text-red-400 transition-colors">
              ✉️ airtechinfo@gmail.com
            </a>
          </div>
          <p className="text-gray-500">© 2025 AIRTECH - Apple Technical Service</p>
        </div>
      </footer>
    </div>
  );
}
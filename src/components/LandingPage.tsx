import { useState } from 'react';
import { Ship, Laptop, Phone, Mail, MapPin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface LandingPageProps {
  onNavigate: (page: 'underwater' | 'technical') => void;
}

export function LandingPage({ onNavigate }: LandingPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Mesajınız alındı! En kısa sürede size dönüş yapacağız.');
    setFormData({ name: '', email: '', service: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex flex-col">
      {/* Header with Logo */}
      <header className="pt-8 pb-6 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Ship className="w-12 h-12 text-cyan-400" />
            <Laptop className="w-12 h-12 text-red-500" />
          </div>
          <h1 className="text-5xl md:text-7xl mb-4 text-white">AIRTECH</h1>
          <p className="text-xl md:text-2xl text-gray-300">
            Solutions with the Power of Technology and Water
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-6xl w-full">
          <h2 className="text-2xl md:text-3xl text-center mb-12 text-white">
            Hangi alanda hizmet almak istersiniz?
          </h2>
          <p className="text-xl text-center mb-12 text-gray-400">
            In which area would you like to receive service?
          </p>

          {/* Service Selection Buttons */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Underwater Services Button */}
            <button
              onClick={() => onNavigate('underwater')}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-600 to-blue-700 p-8 md:p-12 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-300"></div>
              <div className="relative z-10">
                <Ship className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 text-white" />
                <h3 className="text-2xl md:text-3xl mb-3 text-white">
                  Underwater Services
                </h3>
                <p className="text-xl md:text-2xl text-cyan-100">
                  Sualtı Hizmetleri
                </p>
              </div>
            </button>

            {/* Technical Service Button */}
            <button
              onClick={() => onNavigate('technical')}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-600 to-gray-700 p-8 md:p-12 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-300"></div>
              <div className="relative z-10">
                <Laptop className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-6 text-white" />
                <h3 className="text-2xl md:text-3xl mb-3 text-white">
                  Apple Technical Service
                </h3>
                <p className="text-xl md:text-2xl text-red-100">
                  Teknik Servis
                </p>
              </div>
            </button>
          </div>
        </div>
      </main>

      {/* Contact Form Section */}
      <section className="py-16 px-4 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl mb-4 text-white">İletişim</h2>
            <p className="text-xl text-gray-400">Bize nasıl yardımcı olabiliriz?</p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {/* Contact Information - Left Side */}
            <div className="md:col-span-2 space-y-6">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-cyan-900/30">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-cyan-600/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg mb-2 text-white">Telefon</h3>
                    <a href="tel:+905323652435" className="text-gray-400 hover:text-cyan-400 transition-colors">
                      +90 532 365 24 35
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-cyan-900/30">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-cyan-600/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg mb-2 text-white">E-posta</h3>
                    <a href="mailto:airtechinfo@gmail.com" className="text-gray-400 hover:text-cyan-400 transition-colors break-all">
                      airtechinfo@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-cyan-900/30">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-cyan-600/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg mb-2 text-white">Adres</h3>
                    <p className="text-gray-400">İstanbul, Türkiye</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form - Right Side */}
            <div className="md:col-span-3">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-cyan-900/30">
                <h3 className="text-xl mb-6 text-white">Bize Ulaşın</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Adınız Soyadınız"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="E-posta Adresiniz"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <div>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      required
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors appearance-none cursor-pointer"
                      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239CA3AF'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.75rem center', backgroundSize: '1.5rem' }}
                    >
                      <option value="" disabled>Hizmet Seçin</option>
                      <option value="underwater">Sualtı Hizmetleri</option>
                      <option value="technical">Apple Teknik Servis</option>
                    </select>
                  </div>

                  <div>
                    <textarea
                      placeholder="Mesajınız"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-4 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-[1.02]"
                  >
                    Gönder
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Contact Info */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4">
            <div className="flex flex-wrap items-center justify-center gap-6 text-gray-400">
              <a href="tel:+905323652435" className="hover:text-cyan-400 transition-colors">
                📞 +90 532 365 24 35
              </a>
              <a href="mailto:airtechinfo@gmail.com" className="hover:text-cyan-400 transition-colors">
                ✉️ airtechinfo@gmail.com
              </a>
            </div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1640552421163-5a8e34827550?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXJjdWl0JTIwYm9hcmQlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NDEzNTE5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="AIRTECH - Technology and Diving"
              className="w-full max-w-4xl mx-auto rounded-lg opacity-30 mt-8"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}
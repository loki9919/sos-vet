
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Heart, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { key: 'home', path: '/' },
    { key: 'services', path: '/services' },
    { key: 'gallery', path: '/gallery' },
    { key: 'about', path: '/about' },
    { key: 'contact', path: '/contact' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" fill="currentColor" />
              </div>
              <span className="text-xl font-bold">SOS Vet</span>
            </div>
            <p className="text-gray-300 mb-4">
              {t('footer.tagline')}
            </p>
            <div className="flex items-center text-gray-300">
              <MapPin className="w-4 h-4 mr-2" />
              <span className="text-sm">Rabat, Morocco</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-green-400 transition-colors text-sm"
                  >
                    {t(`nav.${link.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.contact')}</h3>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300 text-sm">
                <Phone className="w-4 h-4 mr-2" />
                <span>+212 537-XX-XX-XX</span>
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <Mail className="w-4 h-4 mr-2" />
                <span>info@sosvet.ma</span>
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Avenue Mohammed V, Rabat</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.hours')}</h3>
            <div className="text-gray-300 text-sm space-y-1">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <div>
                  <div>Mon-Fri: 8AM-8PM</div>
                  <div>Sat-Sun: 9AM-6PM</div>
                  <div className="text-green-400 font-semibold">Emergency: 24/7</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} SOS Vet Rabat. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

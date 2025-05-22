
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const navigationItems = [
    { key: 'home', path: '/' },
    { key: 'services', path: '/services' },
    { key: 'gallery', path: '/gallery' },
    { key: 'about', path: '/about' },
    { key: 'contact', path: '/contact' }
  ];

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src={`${import.meta.env.BASE_URL || '/'}lovable-uploads/73d66a42-a27a-40a9-8f5f-47f69e48c443.png`}
                alt="SOS Vet Logo"
                className="h-10 w-auto transition-all hover:scale-105 duration-300"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.key}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  isActivePath(item.path)
                    ? 'text-vet-primary bg-vet-light'
                    : 'text-gray-700 hover:text-vet-primary hover:bg-vet-light'
                }`}
              >
                {t(`nav.${item.key}`)}
              </Link>
            ))}

            {/* Language Switcher */}
            <div className="flex items-center space-x-2 ml-4">
              <Button
                variant={language === 'en' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setLanguage('en')}
                className={`text-xs transition-transform duration-300 hover:scale-105 ${language === 'en' ? 'bg-vet-primary' : 'border-vet-primary text-vet-primary'}`}
              >
                EN
              </Button>
              <Button
                variant={language === 'fr' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setLanguage('fr')}
                className={`text-xs transition-transform duration-300 hover:scale-105 ${language === 'fr' ? 'bg-vet-primary' : 'border-vet-primary text-vet-primary'}`}
              >
                FR
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-vet-primary"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 animate-slide-up">
              {navigationItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                    isActivePath(item.path)
                      ? 'text-vet-primary bg-vet-light'
                      : 'text-gray-700 hover:text-vet-primary hover:bg-vet-light'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(`nav.${item.key}`)}
                </Link>
              ))}

              {/* Mobile Language Switcher */}
              <div className="flex items-center space-x-2 px-3 py-2">
                <span className="text-sm text-gray-600">{language === 'en' ? 'Language:' : 'Langue:'}</span>
                <Button
                  variant={language === 'en' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setLanguage('en')}
                  className={`text-xs ${language === 'en' ? 'bg-vet-primary' : 'border-vet-primary text-vet-primary'}`}
                >
                  EN
                </Button>
                <Button
                  variant={language === 'fr' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setLanguage('fr')}
                  className={`text-xs ${language === 'fr' ? 'bg-vet-primary' : 'border-vet-primary text-vet-primary'}`}
                >
                  FR
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

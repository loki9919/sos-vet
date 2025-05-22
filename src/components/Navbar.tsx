
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';
import { Menu, X, Heart } from 'lucide-react';

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
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" fill="currentColor" />
              </div>
              <span className="text-xl font-bold text-green-800">SOS Vet</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.key}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActivePath(item.path)
                    ? 'text-green-600 bg-green-50'
                    : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
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
                className="text-xs"
              >
                EN
              </Button>
              <Button
                variant={language === 'fr' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setLanguage('fr')}
                className="text-xs"
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
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
              {navigationItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActivePath(item.path)
                      ? 'text-green-600 bg-green-100'
                      : 'text-gray-700 hover:text-green-600 hover:bg-green-100'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(`nav.${item.key}`)}
                </Link>
              ))}
              
              {/* Mobile Language Switcher */}
              <div className="flex items-center space-x-2 px-3 py-2">
                <span className="text-sm text-gray-600">Language:</span>
                <Button
                  variant={language === 'en' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setLanguage('en')}
                  className="text-xs"
                >
                  EN
                </Button>
                <Button
                  variant={language === 'fr' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setLanguage('fr')}
                  className="text-xs"
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

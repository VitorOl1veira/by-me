import React from 'react';
import { Monitor, Linkedin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center sm:text-left">
            <Link to="/" className="inline-flex items-center space-x-2">
              <Monitor className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">HRO T.I</span>
            </Link>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-4">
              {t('nav.quickLinks')}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-blue-400 transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link
                  to="/servicos"
                  className="hover:text-blue-400 transition-colors"
                >
                  {t('nav.services')}
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-4">{t('nav.contact')}</h3>
            <ul className="space-y-2">
              <li className="flex items-center justify-center sm:justify-start space-x-2">
                <Mail className="h-5 w-5" />
                {/* Altere o email aqui */}
                <span>helerson@hroti.com.br</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start space-x-2">
                <Phone className="h-5 w-5" />
                {/* Altere o telefone aqui */}
                <span>+55 (11) 99215-5426</span>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-4">{t('nav.social')}</h3>
            <div className="flex justify-center sm:justify-start">
              {/* Altere o link do LinkedIn aqui */}
              <a
                href="https://www.linkedin.com/in/helerson-oliveira-2b798341"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-sm text-gray-400 text-center">
            {t('footer.rights')}
          </p>
          <p className="text-xs text-gray-500 mt-2 text-center">
            {t('footer.disclaimer')}
          </p>
          <p className="text-xs text-gray-500 mt-4 text-center max-w-4xl mx-auto">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}

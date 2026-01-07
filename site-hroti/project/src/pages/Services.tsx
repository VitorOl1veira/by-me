import React from 'react';
import { Link } from 'react-router-dom';
import {
  Headphones,
  ArrowUpCircle,
  RefreshCw,
  Building2,
  GraduationCap,
  ClipboardList,
  Code2,
  Globe,
  Network
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
      <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
        <Icon className="h-6 w-6 text-blue-600" />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Headphones,
      title: t('services.support.title'),
      description: t('services.support.desc')
    },
    {
      icon: ArrowUpCircle,
      title: t('services.version.title'),
      description: t('services.version.desc')
    },
    {
      icon: RefreshCw,
      title: t('services.release.title'),
      description: t('services.release.desc')
    },
    {
      icon: Building2,
      title: t('services.implementation.title'),
      description: t('services.implementation.desc')
    },
    {
      icon: GraduationCap,
      title: t('services.training.title'),
      description: t('services.training.desc')
    },
    {
      icon: ClipboardList,
      title: t('services.contracts.title'),
      description: t('services.contracts.desc')
    },
    {
      icon: Code2,
      title: t('services.customization.title'),
      description: t('services.customization.desc')
    },
    {
      icon: Globe,
      title: t('services.webservice.title'),
      description: t('services.webservice.desc')
    },
    {
      icon: Network,
      title: t('services.integration.title'),
      description: t('services.integration.desc')
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t('services.title')}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/contato"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            {t('services.cta')}
          </Link>
        </div>
      </div>
    </div>
  );
}
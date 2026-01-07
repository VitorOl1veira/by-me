import React from 'react';
import { Shield, Users, Target, BookOpen, Lightbulb } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import ValueCard from '../components/ValueCard';

export default function Home() {
  const { t } = useLanguage();

  const values = [
    {
      icon: Shield,
      title: t('values.responsibility.title'),
      description: t('values.responsibility.desc')
    },
    {
      icon: Users,
      title: t('values.respect.title'),
      description: t('values.respect.desc')
    },
    {
      icon: Target,
      title: t('values.commitment.title'),
      description: t('values.commitment.desc')
    },
    {
      icon: BookOpen,
      title: t('values.experience.title'),
      description: t('values.experience.desc')
    },
    {
      icon: Lightbulb,
      title: t('values.innovation.title'),
      description: t('values.innovation.desc')
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-6 sm:mb-8 px-4">
              {t('hero.subtitle')}
            </p>
            <a
              href="/contato"
              className="inline-block bg-blue-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md text-base sm:text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              {t('hero.cta')}
            </a>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
            {t('values.title')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <ValueCard
                key={index}
                icon={value.icon}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
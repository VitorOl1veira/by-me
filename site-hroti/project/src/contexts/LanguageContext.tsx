import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt');

  const translations = {
    pt: {
      // Navigation
      'nav.home': 'Início',
      'nav.services': 'Serviços',
      'nav.contact': 'Contato',
      'nav.cta': 'Fale Conosco',
      'nav.quickLinks': 'Links Rápidos',
      'nav.social': 'Redes Sociais',

      // Hero Section
      'hero.title':
        'Gestão de TI e Consultoria Especializada em Protheus desde 2009',
      'hero.subtitle':
        'Soluções completas em tecnologia para impulsionar o seu negócio',
      'hero.cta': 'Solicite uma Consultoria',

      // Values Section
      'values.title': 'Nossos Valores',
      'values.responsibility.title': 'Responsabilidade',
      'values.responsibility.desc':
        'Comprometimento total com os resultados dos nossos clientes',
      'values.respect.title': 'Respeito',
      'values.respect.desc':
        'Valorização das pessoas e das relações profissionais',
      'values.commitment.title': 'Comprometimento',
      'values.commitment.desc':
        'Dedicação integral aos objetivos dos nossos clientes',
      'values.experience.title': 'Experiência',
      'values.experience.desc': 'Anos de expertise no mercado de TI',
      'values.innovation.title': 'Inovação',
      'values.innovation.desc':
        'Busca constante por soluções tecnológicas avançadas',

      // Footer
      'footer.rights': '© 2025 HRO T.I. Todos os direitos reservados.',
      'footer.disclaimer': 'Especialistas em consultoria e soluções de TI',
      'footer.copyright':
        'A marca "TOTVS" é propriedade registrada e de direito da empresa "TOTVS S.A.", assim como seu produto "Protheus". A "HRO Tecnologia da Informação" é uma empresa de consultoria independente e não possui vínculo direto e ou indireto com a empresa "TOTVS S.A.".',

      // Contact Form
      'contact.title': 'Entre em Contato',
      'contact.name': 'Nome',
      'contact.phone': 'Telefone',
      'contact.company': 'Empresa',
      'contact.message': 'Mensagem',
      'contact.submit': 'Enviar Mensagem',

      // Services Page
      'services.title': 'Nossos Serviços',
      'services.subtitle':
        'Soluções completas em consultoria e gestão de TI para otimizar seus processos',
      'services.support.title': 'Suporte Técnico',
      'services.support.desc':
        'Assistência especializada para garantir o funcionamento contínuo do seu sistema.',
      'services.version.title': 'Atualização de Versão',
      'services.version.desc':
        'Mantenha seu sistema atualizado com as últimas versões do Protheus.',
      'services.release.title': 'Atualização de Release',
      'services.release.desc':
        'Implementação de correções e melhorias através de atualizações de release.',
      'services.implementation.title': 'Implantação',
      'services.implementation.desc':
        'Processo completo de implantação do ERP Protheus em sua empresa.',
      'services.training.title': 'Treinamento',
      'services.training.desc':
        'Capacitação personalizada para sua equipe maximizar o uso do sistema.',
      'services.contracts.title': 'Gestão de Contratos',
      'services.contracts.desc':
        'Administração eficiente de contratos e licenciamento.',
      'services.customization.title': 'Customizações',
      'services.customization.desc':
        'Desenvolvimento de soluções personalizadas para suas necessidades específicas.',
      'services.webservice.title': 'Webservice (REST/SOAP)',
      'services.webservice.desc':
        'Implementação e configuração de serviços web para integração de sistemas.',
      'services.integration.title': 'Integração de Sistemas',
      'services.integration.desc':
        'Conexão do ERP Protheus com diversos softwares do mercado.',
      'services.cta': 'Solicite uma Consultoria',
    },
    en: {
      // Navigation
      'nav.home': 'Home',
      'nav.services': 'Services',
      'nav.contact': 'Contact',
      'nav.cta': 'Contact Us',
      'nav.quickLinks': 'Quick Links',
      'nav.social': 'Social Media',

      // Hero Section
      'hero.title':
        'IT Management and Specialized Protheus Consulting since 2009',
      'hero.subtitle': 'Complete technology solutions to boost your business',
      'hero.cta': 'Request a Consultation',

      // Values Section
      'values.title': 'Our Values',
      'values.responsibility.title': 'Responsibility',
      'values.responsibility.desc': "Total commitment to our clients' results",
      'values.respect.title': 'Respect',
      'values.respect.desc': 'Valuing people and professional relationships',
      'values.commitment.title': 'Commitment',
      'values.commitment.desc': "Full dedication to our clients' objectives",
      'values.experience.title': 'Experience',
      'values.experience.desc': 'Years of expertise in the IT market',
      'values.innovation.title': 'Innovation',
      'values.innovation.desc':
        'Constant pursuit of advanced technological solutions',

      // Footer
      'footer.rights': '© 2025 HRO T.I. All rights reserved.',
      'footer.disclaimer': 'Experts in IT consulting and solutions',
      'footer.copyright':
        'The "TOTVS" brand is a registered property and right of "TOTVS S.A." company, as well as its product "Protheus". "HRO Tecnologia da Informação" is an independent consulting company and has no direct or indirect connection with "TOTVS S.A." company.',

      // Contact Form
      'contact.title': 'Contact Us',
      'contact.name': 'Name',
      'contact.phone': 'Phone',
      'contact.company': 'Company',
      'contact.message': 'Message',
      'contact.submit': 'Send Message',

      // Services Page
      'services.title': 'Our Services',
      'services.subtitle':
        'Comprehensive IT consulting and management solutions to optimize your processes',
      'services.support.title': 'Technical Support',
      'services.support.desc':
        'Specialized assistance to ensure continuous system operation.',
      'services.version.title': 'Version Update',
      'services.version.desc':
        'Keep your system up to date with the latest Protheus versions.',
      'services.release.title': 'Release Update',
      'services.release.desc':
        'Implementation of fixes and improvements through release updates.',
      'services.implementation.title': 'Implementation',
      'services.implementation.desc':
        'Complete Protheus ERP implementation process for your company.',
      'services.training.title': 'Training',
      'services.training.desc':
        'Customized training for your team to maximize system usage.',
      'services.contracts.title': 'Contract Management',
      'services.contracts.desc':
        'Efficient management of contracts and licensing.',
      'services.customization.title': 'Customizations',
      'services.customization.desc':
        'Development of custom solutions for your specific needs.',
      'services.webservice.title': 'Webservice (REST/SOAP)',
      'services.webservice.desc':
        'Implementation and configuration of web services for system integration.',
      'services.integration.title': 'System Integration',
      'services.integration.desc':
        'Connection of Protheus ERP with various market software.',
      'services.cta': 'Request a Consultation',
    },
  };

  const t = (key: string): string => {
    return (
      translations[language][key as keyof (typeof translations)['pt']] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

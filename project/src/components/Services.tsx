import React from 'react';
import { Globe, Megaphone, Palette, Cloud, Shield, Smartphone, Database, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Web Design & Development',
      description: 'Custom websites and web applications built with modern technologies for optimal performance and user experience.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Mobile-First'],
      color: 'blue'
    },
    {
      icon: Megaphone,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to boost your online presence and drive qualified traffic.',
      features: ['SEO/SEM', 'Social Media', 'Content Strategy', 'Analytics'],
      color: 'green'
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      description: 'Professional graphic design services for branding, marketing materials, and digital assets.',
      features: ['Brand Identity', 'Print Design', 'Digital Assets', 'UI/UX Design'],
      color: 'purple'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions for hosting, storage, and computing power with 99.9% uptime guarantee.',
      features: ['Cloud Migration', 'Auto Scaling', 'Backup Solutions', '24/7 Monitoring'],
      color: 'teal'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your business from cyber threats and data breaches.',
      features: ['Threat Assessment', 'Security Audits', 'Compliance', 'Incident Response'],
      color: 'red'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android with seamless user experiences.',
      features: ['iOS & Android', 'Cross-Platform', 'App Store Optimization', 'Push Notifications'],
      color: 'orange'
    },
    {
      icon: Database,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics and business intelligence solutions.',
      features: ['Data Visualization', 'Predictive Analytics', 'Real-time Dashboards', 'Custom Reports'],
      color: 'indigo'
    },
    {
      icon: Zap,
      title: 'IT Consulting',
      description: 'Strategic IT consulting to optimize your technology infrastructure and digital transformation.',
      features: ['Strategy Planning', 'Technology Assessment', 'Process Optimization', 'Training & Support'],
      color: 'yellow'
    }
  ];

  const colorClasses = {
    blue: 'bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white',
    green: 'bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white',
    purple: 'bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white',
    teal: 'bg-teal-100 text-teal-600 group-hover:bg-teal-600 group-hover:text-white',
    red: 'bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white',
    orange: 'bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white',
    indigo: 'bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white',
    yellow: 'bg-yellow-100 text-yellow-600 group-hover:bg-yellow-600 group-hover:text-white'
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive IT Services
          </h2>
          <p className="text-xl text-gray-600">
            We provide end-to-end technology solutions to help your business thrive in the digital age
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer border border-gray-100 hover:border-transparent"
              >
                <div className={`inline-flex p-3 rounded-lg mb-6 transition-all duration-300 ${colorClasses[service.color]}`}>
                  <IconComponent className="h-6 w-6" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-500"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
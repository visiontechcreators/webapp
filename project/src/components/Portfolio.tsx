import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'A modern e-commerce platform with advanced filtering, payment integration, and inventory management.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      results: '40% increase in sales conversion'
    },
    {
      title: 'Healthcare Mobile App',
      category: 'Mobile Development',
      description: 'HIPAA-compliant mobile application for patient management and telemedicine consultations.',
      image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'Firebase', 'WebRTC', 'AWS'],
      results: '10k+ active users'
    },
    {
      title: 'Cloud Migration Project',
      category: 'Cloud Infrastructure',
      description: 'Complete cloud migration for a financial services company with zero downtime.',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
      results: '60% cost reduction'
    },
    {
      title: 'Brand Identity Redesign',
      category: 'Graphic Design',
      description: 'Complete brand identity redesign including logo, marketing materials, and digital assets.',
      image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Adobe Creative Suite', 'Figma', 'Brand Guidelines'],
      results: '200% brand recognition increase'
    },
    {
      title: 'Data Analytics Dashboard',
      category: 'Data Analytics',
      description: 'Real-time analytics dashboard for tracking key business metrics and performance indicators.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'D3.js', 'PostgreSQL', 'Redis'],
      results: '50% better decision making'
    },
    {
      title: 'Digital Marketing Campaign',
      category: 'Digital Marketing',
      description: 'Multi-channel digital marketing campaign with SEO, PPC, and social media strategies.',
      image: 'https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Google Ads', 'Facebook Ads', 'SEO Tools', 'Analytics'],
      results: '300% ROI improvement'
    }
  ];

  const categoryColors = {
    'Web Development': 'bg-blue-100 text-blue-800',
    'Mobile Development': 'bg-green-100 text-green-800',
    'Cloud Infrastructure': 'bg-purple-100 text-purple-800',
    'Graphic Design': 'bg-pink-100 text-pink-800',
    'Data Analytics': 'bg-indigo-100 text-indigo-800',
    'Digital Marketing': 'bg-orange-100 text-orange-800'
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Recent Work
          </h2>
          <p className="text-xl text-gray-600">
            Explore some of our successful projects and the results we've achieved for our clients
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[project.category]}`}>
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-green-600 font-medium">
                    {project.results}
                  </div>
                  <div className="flex space-x-2">
                    <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                      <ExternalLink className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                      <Github className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
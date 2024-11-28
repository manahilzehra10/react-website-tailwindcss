import React from 'react';

const Services: React.FC = () => {
  return (
    <div className="services text-center p-8 bg-gradient-to-r from-indigo-400 to-purple-500 min-h-screen flex items-center justify-center">
      <div>
        <h1 className="text-4xl font-bold text-white mb-4">Our Services at XYZ Company</h1>
        <p className="text-lg text-white mb-4">
          At XYZ Company, we offer a range of services designed to help your business succeed online:
        </p>
        <ul className="list-disc text-left text-white pl-10">
          <li className="mb-2">Custom Web Design - Creating visually stunning designs that engage your audience.</li>
          <li className="mb-2">Responsive Development - Ensuring your website looks great on all devices.</li>
          <li className="mb-2">E-commerce Solutions - Comprehensive solutions to help you sell online.</li>
          <li className="mb-2">SEO Optimization - Enhancing your website's visibility in search engines.</li>
        </ul>
        <p className="text-lg text-white mt-4">
          Our team is committed to providing the best service and support to help you achieve your digital goals. Get in touch with us to discuss how we can help your business thrive online.
        </p>
      </div>
    </div>
  );
};

export default Services;

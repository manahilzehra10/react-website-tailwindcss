import React from 'react';

const About: React.FC = () => {
  return (
    <div className="about text-center p-8 bg-gradient-to-r from-purple-400 to-pink-500 min-h-screen flex items-center justify-center">
      <div>
        <h1 className="text-4xl font-bold text-white mb-4">About XYZ Company</h1>
        <p className="text-lg text-white mb-4">
          At XYZ Company, we believe in the power of technology to transform businesses. Founded in [Year], our company has grown into a full-service web development agency dedicated to helping businesses of all sizes succeed online. Our team of passionate and skilled professionals brings years of experience and a deep understanding of the latest industry trends to each project.
        </p>
        <p className="text-lg text-white mb-4">
          We pride ourselves on delivering high-quality, customized solutions that meet the unique needs of each client. Our approach is collaborative and client-focused, ensuring that we fully understand your goals and objectives before we begin. Whether you're looking to create a brand-new website, redesign your existing site, or enhance your online presence, we're here to help.
        </p>
      </div>
    </div>
  );
};

export default About;


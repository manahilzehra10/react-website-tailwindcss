import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="home text-center p-8 bg-gradient-to-r from-green-400 to-blue-500 min-h-screen flex items-center justify-center">
      <div>
        <h1 className="text-4xl font-bold text-white mb-4">Welcome to XYZ Company</h1>
        <p className="text-lg text-white mb-4">
          XYZ Company specializes in creating stunning and functional websites that elevate your online presence. Our team of experienced developers and designers work tirelessly to deliver customized solutions that meet your unique needs and drive your business forward.
        </p>
        <button className="bg-white text-blue-500 py-2 px-4 rounded-full font-bold hover:bg-blue-100 transition duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Home;

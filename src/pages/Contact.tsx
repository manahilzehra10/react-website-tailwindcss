import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="contact text-center p-8 bg-gradient-to-r from-red-400 to-yellow-500 min-h-screen flex items-center justify-center">
      <div>
        <h1 className="text-4xl font-bold text-white mb-4">Contact XYZ Company</h1>
        <p className="text-lg text-white mb-8">
          We’d love to hear from you! Whether you have a question about our services, need assistance with your project, or want to discuss a potential collaboration, feel free to reach out to us.
        </p>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-white mb-2">Name</label>
            <input type="text" id="name" name="name" required className="w-full p-2 rounded" />
          </div>
          <div>
            <label htmlFor="email" className="block text-white mb-2">Email</label>
            <input type="email" id="email" name="email" required className="w-full p-2 rounded" />
          </div>
          <div>
            <label htmlFor="message" className="block text-white mb-2">Message</label>
            <textarea id="message" name="message" required className="w-full p-2 rounded"></textarea>
          </div>
          <button type="submit" className="bg-white text-red-500 py-2 px-4 rounded-full font-bold hover:bg-red-100 transition duration-300">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

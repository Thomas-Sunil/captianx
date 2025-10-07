import React from 'react';

const CommunicationPage: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-120px)] bg-purple-50 flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-bold text-purple-800 mb-6">Get in Touch</h1>
      <p className="text-lg text-gray-700 max-w-xl text-center">
        We'd love to hear from you! Reach out to us through the form below or via our social channels.
      </p>
      <form className="mt-10 w-full max-w-lg bg-white p-8 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
          <input type="text" id="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
          <textarea id="message" rows={5} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline transition-all duration-300">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommunicationPage;
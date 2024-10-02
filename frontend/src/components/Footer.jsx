import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Uranbek Anarbaev</h3>
            <p className="text-gray-400">
              Backend Developer based in Kyrgyzstan, specializing in web and
              software development.
            </p>
          </div>
          
        </div>

        <div
          className="border-t border-gray-600 pt-4 flex flex-col md:flex-row 
          justify-between items-center"
        >
          <p className="text-gray-400 text-center md:text-left">
            &copy; {new Date().getFullYear()} Uranbek Anarbaev 
            <span className="block md:inline"> | </span>
            <a href="mailto:uranbekanarbaev@gmail.com" className="text-green-400 hover:underline">
              uranbekanarbaev@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

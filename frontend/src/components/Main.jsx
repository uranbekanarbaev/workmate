import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white text-center p-6">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Kitties Store</h1>
      <p className="text-lg md:text-xl mb-8">
        Your one-stop shop for adorable cats and all things kitty-related!
      </p>
      <Link to="/cats">
        <button className="bg-white text-purple-600 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300">
          View Our Cats
        </button>
      </Link>
      <Link to="/types" className="mt-4">
        <button className="bg-white text-purple-600 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300">
          Browse Cat Types
        </button>
      </Link>
    </div>
  );
};

export default MainPage;

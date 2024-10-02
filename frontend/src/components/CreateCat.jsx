import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';

const CreateCat = () => {
  const [cat, setCat] = useState({
    name: '',
    age: '',
    color: '',
    description: '',
    type: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCat({
      ...cat,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/cat', cat);
      navigate('/cats');  // Redirect to the cats list after creation
    } catch (error) {
      console.error('Error creating cat:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Create a New Cat</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">Name</label>
            <input 
              type="text" 
              name="name" 
              value={cat.name} 
              onChange={handleChange} 
              placeholder="Enter cat name" 
              required 
              className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="age" className="block text-sm font-medium text-gray-600">Age</label>
            <input 
              type="number" 
              name="age" 
              value={cat.age} 
              onChange={handleChange} 
              placeholder="Enter cat age" 
              required 
              className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="color" className="block text-sm font-medium text-gray-600">Color</label>
            <input 
              type="text" 
              name="color" 
              value={cat.color} 
              onChange={handleChange} 
              placeholder="Enter cat color" 
              required 
              className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-600">Description</label>
            <input 
              type="text" 
              name="description" 
              value={cat.description} 
              onChange={handleChange} 
              placeholder="Enter cat description" 
              required 
              className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="type" className="block text-sm font-medium text-gray-600">Type</label>
            <input 
              type="text" 
              name="type" 
              value={cat.type} 
              onChange={handleChange} 
              placeholder="Enter cat type" 
              required 
              className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Create Cat
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateCat;

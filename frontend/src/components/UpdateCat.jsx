import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../api/axios';

const UpdateCat = () => {
  const { catId } = useParams();  // Get the cat ID from the route parameters
  const [cat, setCat] = useState({
    name: '',
    age: '',
    color: '',
    description: '',
    type: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch cat details by ID when component loads
    const fetchCatDetails = async () => {
      try {
        const response = await api.get(`/cat/${catId}`);
        setCat(response.data);
      } catch (error) {
        console.error('Error fetching cat details:', error);
      }
    };

    fetchCatDetails();
  }, [catId]);

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
      await api.put(`/cat/${catId}`, cat);  // Update cat by ID
      navigate(`/cats/${catId}`);  // Redirect back to the cat details page after update
    } catch (error) {
      console.error('Error updating cat:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-700">Update Cat</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-600">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={cat.name}
              onChange={handleChange}
              className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <div>
            <label htmlFor="age" className="block text-gray-600">Age</label>
            <input
              type="number"
              name="age"
              id="age"
              placeholder="Age"
              value={cat.age}
              onChange={handleChange}
              className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <div>
            <label htmlFor="color" className="block text-gray-600">Color</label>
            <input
              type="text"
              name="color"
              id="color"
              placeholder="Color"
              value={cat.color}
              onChange={handleChange}
              className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-gray-600">Description</label>
            <input
              type="text"
              name="description"
              id="description"
              placeholder="Description"
              value={cat.description}
              onChange={handleChange}
              className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <div>
            <label htmlFor="type" className="block text-gray-600">Type</label>
            <input
              type="text"
              name="type"
              id="type"
              placeholder="Type"
              value={cat.type}
              onChange={handleChange}
              className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <div className="flex justify-between mt-6">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Update Cat
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCat;

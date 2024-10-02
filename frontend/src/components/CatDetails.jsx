import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api/axios';

const CatDetails = () => {
  const { catId } = useParams();  // Get the cat ID from the route parameters
  const [cat, setCat] = useState(null);
  const navigate = useNavigate();

  // Fetch the details of the specific cat by its ID
  useEffect(() => {
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

  // Handle cat deletion
  const handleDelete = async () => {
    try {
      await api.delete(`/cat/${catId}`);
      navigate('/cats');  // Redirect to cats list after deletion
    } catch (error) {
      console.error('Error deleting cat:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {cat ? (
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-700">{cat.name}</h2>
          <div className="space-y-2 text-gray-600">
            <p><strong>Type:</strong> {cat.type}</p>
            <p><strong>Age:</strong> {cat.age}</p>
            <p><strong>Color:</strong> {cat.color}</p>
            <p><strong>Description:</strong> {cat.description}</p>
          </div>

          {/* Update and Delete buttons */}
          <div className="mt-6 flex justify-center space-x-4">
            <button
              className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition duration-300"
              onClick={() => navigate(`/cats/update/${cat.id}`)}
            >
              Update
            </button>
            <button
              className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition duration-300"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      ) : (
        <p className="text-gray-600">Loading cat details...</p>
      )}
    </div>
  );
};

export default CatDetails;

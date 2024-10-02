import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import api from '../api/axios';  // Adjust the import path if needed

const CatsByType = () => {
  const { type } = useParams();  // Get the cat type from the route parameters
  const [cats, setCats] = useState([]);

  // Fetch cats by type from the API
  useEffect(() => {
    const fetchCatsByType = async () => {
      try {
        const response = await api.get(`/cat?type=${type}`);
        setCats(response.data);  // Update state with API response
      } catch (error) {
        console.error('Error fetching cats by type:', error);
      }
    };

    fetchCatsByType();
  }, [type]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6">Cats of type: <span className="text-green-500">{type}</span></h2>
      
      {/* Display cats in cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cats.length > 0 ? (
          cats.map((cat, index) => (
            <div key={index} className="bg-white p-4 border border-gray-300 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <h3 className="text-lg font-semibold text-gray-800">{cat.name}</h3>
              <p className="text-gray-600">Type: <span className="font-medium">{cat.type}</span></p>
              <p className="text-gray-600">Age: <span className="font-medium">{cat.age}</span></p>
              <p className="text-gray-600">Color: <span className="font-medium">{cat.color}</span></p>
              <p className="text-gray-600 mb-4">{cat.description}</p>

              {/* Button to navigate to the specific cat page */}
              <Link to={`/cats/${cat.id}`}>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                  View Details
                </button>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-lg text-gray-500">No cats of this type found</p>
        )}
      </div>
    </div>
  );
};

export default CatsByType;

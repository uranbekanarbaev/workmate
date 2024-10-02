import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api/axios';  // Adjust the import path if needed

const GetTypes = () => {
  const [types, setTypes] = useState([]);

  // Fetch types from the API
  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const response = await api.get('/gettypes');
        setTypes(response.data);  // Update state with API response
      } catch (error) {
        console.error('Error fetching types:', error);
      }
    };

    fetchTypes();
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Cat Types</h2>
      
      {/* List types as bullet points */}
      <ul className="list-disc pl-5 text-gray-700">
        {types.length > 0 ? (
          types.map((typeObj, index) => (
            <li key={index} className="mb-4 flex items-center justify-between">
              <span className="text-lg">{typeObj.type}</span>

              {/* Button to navigate to cats of specific type */}
              <Link to={`/cats/type/${typeObj.type}`}>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                  View {typeObj.type} Cats
                </button>
              </Link>
            </li>
          ))
        ) : (
          <p className="text-gray-600">No types found</p>
        )}
      </ul>
    </div>
  );
};

export default GetTypes;

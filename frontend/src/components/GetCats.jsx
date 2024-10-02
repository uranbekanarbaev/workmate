import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../api/axios';  // Adjust the import path if needed

const GetCats = () => {
  const [cats, setCats] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');  // State for search input
  const [filteredCats, setFilteredCats] = useState([]);  // State for filtered cats
  const navigate = useNavigate();

  // Fetch cats from the API
  useEffect(() => {
    const fetchCats = async () => {
      try {
        const response = await api.get('/cat');
        setCats(response.data);  // Update state with API response
        setFilteredCats(response.data);  // Initialize filtered cats with all cats
      } catch (error) {
        console.error('Error fetching cats:', error);
      }
    };

    fetchCats();
  }, []);

  // Handle search input change
  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    // Filter cats based on search input
    const filtered = cats.filter((cat) =>
      cat.name.toLowerCase().includes(value) || cat.type.toLowerCase().includes(value)
    );
    setFilteredCats(filtered);  // Update filtered cats state
  };

  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-700">Available Cats</h2>
      
      {/* Search Input */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search for a cat by name or type"
          value={searchTerm}
          onChange={handleSearch}
          className="p-3 border border-gray-300 rounded-md w-full md:w-1/3 focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>

      <div className="flex justify-end mb-6">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
          onClick={() => navigate(`/cats/create`)}
        >
          Add New Cat
        </button>
      </div>

      {/* Display filtered cats in cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCats.length > 0 ? (
          filteredCats.map((cat, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-md shadow-md bg-white">
              <h3 className="text-lg font-bold">{cat.name}</h3>
              <p className="text-gray-600">Type: {cat.type}</p>
              <p className="text-gray-600">Age: {cat.age}</p>
              <p className="text-gray-600">Color: {cat.color}</p>
              <p className="text-gray-600">{cat.description}</p>

              {/* Button to navigate to the specific cat page */}
              <Link to={`/cats/${cat.id}`}>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                  View Details
                </button>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No cats found</p>
        )}
      </div>
    </div>
  );
};

export default GetCats;

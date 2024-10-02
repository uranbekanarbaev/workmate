import React, { useState } from 'react';
import api from '../api/axios';

const GetType = () => {
  const [type, setType] = useState('');
  const [result, setResult] = useState(null);

  const fetchType = () => {
    api.get(`/gettypes/${type}`)
      .then(response => {
        setResult(response.data);
      })
      .catch(error => console.error('Error fetching type:', error));
  };

  return (
    <div>
      <input
        type="text"
        value={type}
        onChange={(e) => setType(e.target.value)}
        placeholder="Enter type"
      />
      <button onClick={fetchType}>Get Type</button>
      {result && <p>Type: {result.name}</p>}
    </div>
  );
};

export default GetType;

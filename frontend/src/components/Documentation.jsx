// src/components/Documentation.jsx

import React from 'react';

const Documentation = () => {
  return (
    <div className="container mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Documentation</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mt-4">Overview</h2>
        <p className="text-gray-600">
          This application allows you to manage cat information, including
          their types, details, and more. You can create, read, update, and
          delete cat records through the API.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mt-4">API Endpoints</h2>
        <ul className="list-disc list-inside pl-5 text-gray-600">
          <li>
            <strong>GET /gettypes</strong> - Retrieve all cat types.
          </li>
          <li>
            <strong>GET /gettypes/{'<type>'}</strong> - Retrieve cats by type.
          </li>
          <li>
            <strong>GET /cat</strong> - Retrieve all cats or filter by type.
          </li>
          <li>
            <strong>GET /cat/{'<cat_id>'}</strong> - Retrieve a specific cat by ID.
          </li>
          <li>
            <strong>POST /cat</strong> - Create a new cat.
            <pre className="bg-gray-200 rounded p-2 my-2">
              <code>{`{
  "name": "string",
  "description": "string",
  "age": 0,
  "color": "string",
  "type": "string"
}`}</code>
            </pre>
          </li>
          <li>
            <strong>PUT /cat/{'<kitty_id>'}</strong> - Update a cat's information.
            <pre className="bg-gray-200 rounded p-2 my-2">
              <code>{`{
  "name": "string",
  "description": "string",
  "age": 0,
  "color": "string",
  "type": "string"
}`}</code>
            </pre>
          </li>
          <li>
            <strong>DELETE /cat/{'<cat_id>'}</strong> - Delete a specific cat by ID.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mt-4">Frontend Pages</h2>
        <ul className="list-disc list-inside pl-5 text-gray-600">
          <li><strong>Main:</strong> The landing page of the application.</li>
          <li><strong>All Cats:</strong> View a list of all cats.</li>
          <li><strong>Cat Details:</strong> View details of a specific cat.</li>
          <li><strong>Create Cat:</strong> Form to create a new cat.</li>
          <li><strong>Update Cat:</strong> Form to update existing cat information.</li>
          <li><strong>Cat Types:</strong> View different cat types.</li>
          <li><strong>Contact Me:</strong> Contact information.</li>
        </ul>
      </section>

      <footer className="mt-6 border-t border-gray-300 pt-4">
        <p className="text-gray-600">© 2024 Your Application Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Documentation;

import React from 'react';
import { Link } from 'react-router-dom';

const CreateNewGraph: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-inter">
      <div className="container mx-auto pt-16">
        <h2 className="text-4xl font-bold mb-8">Create New Graph</h2>

        {/* Form to specify graph title and description */}
        <form onSubmit={(e) => e.preventDefault()} className="max-w-md mx-auto">
          {/* Graph Title Textbox */}
          <div className="mb-4">
            <label htmlFor="graphTitle" className="block text-white text-sm font-bold mb-2">
              Graph Title
            </label>
            <input
              type="text"
              id="graphTitle"
              name="graphTitle"
              className="w-1/2 p-2 border-b border-white bg-transparent focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Graph Description Textbox */}
          <div className="mb-4">
            <label htmlFor="graphDescription" className="block text-white text-sm font-bold mb-2">
              Graph Description
            </label>
            <textarea
              id="graphDescription"
              name="graphDescription"
              rows={4}
              className="w-full p-2 border-b border-white bg-transparent focus:outline-none focus:border-blue-500"
            />

            <Link to="/graph-details">
            <button
              type="button"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
            >
              View Graph Details
            </button>
          </Link>
          </div>

         
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
          >
            Create Graph
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateNewGraph;
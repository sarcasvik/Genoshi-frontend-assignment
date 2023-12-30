// src/components/GraphDetails.tsx
import React from 'react';

const GraphDetails: React.FC = () => {
  // Simulated data and functions
  const graphDetails = {
    title: 'Sample Graph',
    description: 'This is a sample graph description.',
    dateCreated: '2023-01-01',
    papers: [
      { title: 'Paper 1', id: '1' },
      { title: 'Paper 2', id: '2' },
      // Add more papers as needed
    ],
  };

  const handleEditGraph = () => {
    // Handle edit graph logic
    console.log('Edit graph');
  };

  const handleShareGraph = () => {
    // Handle share graph logic
    console.log('Share graph');
  };

  const handleDeleteGraph = () => {
    // Handle delete graph logic
    console.log('Delete graph');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-inter">
      <div className="container mx-auto pt-16">
        <h2 className="text-4xl font-bold mb-8">Graph Details</h2>

        {/* Show graph title, description, and date created */}
        <div className="mb-4">
          <h3 className="text-2xl font-bold">{graphDetails.title}</h3>
          <p>{graphDetails.description}</p>
          <p>Date Created: {graphDetails.dateCreated}</p>
        </div>

        {/* List papers shown in the graph */}
        <div className="mb-4">
          <h3 className="text-2xl font-bold mb-2">Papers in this Graph</h3>
          <ul>
            {graphDetails.papers.map((paper) => (
              <li key={paper.id}>{paper.title}</li>
            ))}
          </ul>
        </div>

        {/* Buttons to edit, share, or delete a graph */}
        <div>
          <button
            onClick={handleEditGraph}
            className="bg-blue-500 text-white px-4 py-2 rounded mr-4 hover:bg-blue-600 focus:outline-none"
          >
            Edit Graph
          </button>
          <button
            onClick={handleShareGraph}
            className="bg-green-500 text-white px-4 py-2 rounded mr-4 hover:bg-green-600 focus:outline-none"
          >
            Share Graph
          </button>
          <button
            onClick={handleDeleteGraph}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none"
          >
            Delete Graph
          </button>
        </div>
      </div>
    </div>
  );
};

export default GraphDetails;

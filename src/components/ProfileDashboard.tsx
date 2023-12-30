// src/components/ProfileDashboard.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const ProfileDashboard: React.FC = () => {
  // Simulated user data
  const userData = {
    name: 'Akash Singh',
    email: 'Akash.singh@example.com',
    profilePhoto: '/photo.jpg',
    bio: 'Software Engineer by trade.',
    subscriptionPlan: 'Pro Plan',
    subscriptionStatus: 'Active',
    graphsCreated: 10,
    graphsShared: 5,
    papersCollected: 8,
    recentActivity: [
      { type: 'graph', title: 'Graph Title 1', date: '2023-01-01' },
      { type: 'collection', title: 'Collection Title 1', date: '2023-01-02' },
      // Add more recent activities as needed
    ],
  };

  // Simulated saved graphs data
  const savedGraphs = [
    { title: 'Graph 1', dateCreated: '2023-01-01', thumbnail: 'url_to_thumbnail.jpg' },
    { title: 'Graph 2', dateCreated: '2023-01-02', thumbnail: 'url_to_thumbnail.jpg' },
    // Add more saved graphs as needed
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white font-inter">
      <div className="container mx-auto pt-16">
        <h2 className="text-4xl font-bold mb-8">Profile Dashboard</h2>

        <div className="flex items-center mb-14">
          <img src={userData.profilePhoto} alt="Profile" className="w-12 h-12 rounded-full mr-6" />
          <div>
            <h3 className="text-xl font-bold">{userData.name}</h3>
            <p>{userData.email}</p>
            <p>{userData.bio}</p>
          </div>
          <div className="ml-10">
            <p>
              <span className="font-bold">Subscription Plan:</span> {userData.subscriptionPlan}
            </p>
            <p>
              <span className="font-bold">Subscription Status:</span> {userData.subscriptionStatus}
            </p>
          </div>
        </div>

        {/* Usage Metrics */}
        <div className="mb-8">
          <p>
            <span className="font-bold">Graphs Created:</span> {userData.graphsCreated}
          </p>
          <p>
            <span className="font-bold">Graphs Shared:</span> {userData.graphsShared}
          </p>
          <p>
            <span className="font-bold">Papers Collected:</span> {userData.papersCollected}
          </p>
        </div>

        {/* Recent Activity Feed */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">Recent Activity</h3>
          <ul>
            {userData.recentActivity.map((activity, index) => (
              <li key={index}>
                {activity.type === 'graph' ? 'Created graph' : 'Added to collection'} "{activity.title}" on {activity.date}
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="mb-8">
          <button className="bg-blue-500 text-white px-4 py-2 rounded mr-4">
            <Link to = "/create-new-graph">
            Create New Graph
            </Link>            
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded mr-4">
            Share Graphs
          </button>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded">
            Upload Papers
          </button>
        </div>

        {/* List of Saved Graphs */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">Saved Graphs</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {savedGraphs.map((graph, index) => (
              <div key={index} className="border rounded p-4">
                <img src={graph.thumbnail} alt={`Graph ${index + 1}`} className="w-full h-32 object-cover mb-2" />
                <p className="text-lg font-bold mb-2">{graph.title}</p>
                <p className="text-gray-400">{graph.dateCreated}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Link to Favourites and Collections pages */}
        <div>
          <p className="text-xl font-bold">Explore More:</p>
          <p>
            <Link to="/favourites" className="text-blue-500 hover:underline">
              Favourites
            </Link>
          </p>
          <p>
            <Link to="/collections" className="text-blue-500 hover:underline">
              Collections
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileDashboard;

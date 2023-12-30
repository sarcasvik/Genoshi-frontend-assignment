// src/components/PricingPage.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';






const PricingPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>('');
  const [selectedPlanDetails, setSelectedPlanDetails] = useState<any>(null);

  const handlePlanChange = (plan: string) => {
    setSelectedPlan(plan);
    // Retrieve and set details for the selected plan
    const planDetails = pricingPlans.find((p) => p.id === plan);
    setSelectedPlanDetails(planDetails);
  };

  const pricingPlans = [
    {
      id: 'basic',
      name: 'Basic Plan',
      price: '$4/month/user',
      graphsLimit: 'Up to 10 graphs',
      queriesLimit: 'Up to 500 chatbot queries',
      features: ['Feature 1', 'Feature 2'],
    },
    {
      id: 'pro',
      name: 'Pro Plan',
      price: '$8/month/user',
      graphsLimit: 'Up to 50 graphs',
      queriesLimit: 'Up to 1000 chatbot queries',
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
    },
    {
      id: 'enterprise',
      name: 'Enterprise Plan',
      price: 'Contact for price',
      graphsLimit: 'Unlimited graphs',
      queriesLimit: 'Unlimited chatbot queries',
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white font-inter">
      <div className="container mx-auto pt-16">
        <h2 className="text-4xl font-bold mb-8">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`border rounded p-6 transition duration-300 ease-in-out transform hover:scale-105 ${
                selectedPlan === plan.id
                  ? 'border-blue-500 shadow-lg'
                  : 'border-gray-700'
              }`}
            >
              <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
              <p className="text-2xl font-bold mb-4">{plan.price}</p>
              <p className="mb-2">{plan.graphsLimit}</p>
              <p className="mb-4">{plan.queriesLimit}</p>
              <ul className="mb-4">
                {plan.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <button
                className={`bg-blue-500 text-white px-4 py-2 rounded focus:outline-none ${
                  selectedPlan === plan.id
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:bg-blue-600'
                }`}
                onClick={() => handlePlanChange(plan.id)}
                disabled={selectedPlan === plan.id}
              >
                {selectedPlan === plan.id ? 'Selected' : 'Select Plan'}
              </button>

              
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Selected Plan Details</h2>
          {selectedPlanDetails && (
            <div>
              <p>
                <strong>Name:</strong> {selectedPlanDetails.name}
              </p>
              <p>
                <strong>Price:</strong> {selectedPlanDetails.price}
              </p>
              <p>
                <strong>Graphs Limit:</strong>{' '}
                {selectedPlanDetails.graphsLimit}
              </p>
              <p>
                <strong>Queries Limit:</strong>{' '}
                {selectedPlanDetails.queriesLimit}
              </p>
              <p>
                <strong>Features:</strong>{' '}
                {selectedPlanDetails.features.join(', ')}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
    
  );
};

export default PricingPage;

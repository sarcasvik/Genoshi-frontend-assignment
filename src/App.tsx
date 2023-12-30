import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProfileDashboard from './components/ProfileDashboard';
import PricingPage from './components/PricingPage';
import Navbar from './components/Navbar';
import CreateNewGraph from './components/NewGraph';
import GraphDetails from './components/GraphDetails';
import AccountSettings from './components/AccountSettings';

function App() {

  
  return (


    <Router>
    <div className="bg-gray-900">
      <Navbar />
      <div className="container mx-auto pt-16">
        <Routes>
          <Route path="/" element={<ProfileDashboard />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path = "/create-new-graph" element={<CreateNewGraph/>}/>
          <Route path = "/graph-details" element = {<GraphDetails/>}/>
          <Route path = "/account-settings" element = { <AccountSettings/>}/>
        </Routes>
      </div>
    </div>
  </Router>
  );
};

export default App;
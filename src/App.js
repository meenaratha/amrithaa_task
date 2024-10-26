import './App.css';
import './css/mediaquery.css'

// Routes
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes hereimport Home from './pages/Home';
import JobDetails from './pages/JobDetails';
import Events from './pages/Events';
import Home from './pages/Home';

function App() {

  
  return (
    <div className="App">
       <Router>            
       <Routes> {/* Wrap your routes in the Routes component */}
          <Route path="/" element={<Home />} /> {/* Use element prop for functional components */}
          <Route path="/jobdetails" element={<JobDetails />} />
          <Route path="/events" element={<Events />} />
        </Routes>
        </Router>

       
    </div>
  );
}

export default App;

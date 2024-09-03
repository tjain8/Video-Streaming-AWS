import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

import Home from './Home';
import Series from './Series';
import Contact from './Contact';
import PopularReels from './PopularReels';
import VideoPage from './VideoPage'; // Import the new VideoPage component

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Video Streaming</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/popularreels">PopularReels</Link></li>
              <li><Link to="/series">Series</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/popularreels" element={<PopularReels />} />
          <Route path="/series" element={<Series />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/video/:videoUrl" element={<VideoPage />} /> {/* New route */}
        </Routes>

        <footer className="App-footer">
          <p>&copy; 2024 StreamFlix. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;

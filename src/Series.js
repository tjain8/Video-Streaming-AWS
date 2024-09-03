import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css'; // Ensure this CSS file is imported
//import VideoPage from './VideoPage';

function Series() {
  const [searchTerm, setSearchTerm] = useState('');

  const videosList = [
    { title: 'Epic Drone Footage', description: 'Stunning aerial views captured by a drone.', url: 'https://d1znl298gme64y.cloudfront.net/2330708-uhd_3840_2160_24fps.mp4' },
    { title: 'Cooking Tutorial', description: 'Learn to cook a delicious pasta dish step-by-step.', url: 'https://d1znl298gme64y.cloudfront.net/175152-852857786_small.mp4' },
    { title: 'Travel Vlog', description: 'A vlog of my recent trip to Japan.', url: 'https://d1znl298gme64y.cloudfront.net/2519660-uhd_3840_2160_24fps.mp4' },
    { title: 'Fitness Routine', description: 'A complete workout routine for a full-body exercise.', url: 'https://dmcbl3ud92bmz.cloudfront.net/3125907-uhd_3840_2160_25fps.mp4' },
  ];

  const filteredVideos = videosList.filter((video) =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="content-section">
      <h2>Trending Videos</h2>
      <input
        type="text"
        placeholder="Search videos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      <div className="videos-list">
        {filteredVideos.map((video, index) => (
          <div key={index} className="video-card">
            <h3>{video.title}</h3>
            <p>{video.description}</p>
            <Link to={`/video/${encodeURIComponent(video.url)}`}>
              <video width="300" height="200" controls>
                <source src={video.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Series;

import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'; // Ensure this CSS file is imported

function Home() {
  return (
    <section className="content-section">
      <h2>Welcome to VideoStreamming</h2>
      <p>Enjoy high-quality streaming of your favorite movies and series.</p>
      <div className="video-container">
        <Link to={`/video/${encodeURIComponent('https://d1znl298gme64y.cloudfront.net/2796080-uhd_3840_2160_25fps.mp4')}`}>
          <video className="video-player" controls>
            <source src="https://d1znl298gme64y.cloudfront.net/2796080-uhd_3840_2160_25fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Link>
      </div>
    </section>
  );
}

export default Home;

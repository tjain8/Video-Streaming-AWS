import React, { useState } from 'react';
//import { Link } from 'react-router-dom';

function PopularReels() {
  const [searchTerm, setSearchTerm] = useState('');

  const reelsList = [
    { title: 'Amazing Nature Scenes', description: 'Explore breathtaking nature scenes from around the world.', url: 'https://d1znl298gme64y.cloudfront.net/3571264-uhd_3840_2160_30fps.mp4' },
    { title: 'Funny Pet Moments', description: 'Enjoy a compilation of hilarious moments with pets.', url: 'https://d1znl298gme64y.cloudfront.net/77511-563001941_small.mp4' },
    { title: 'DIY Crafts and Hacks', description: 'Learn creative DIY crafts and life hacks.', url: 'https://d1znl298gme64y.cloudfront.net/6843719-uhd_2160_3840_25fps.mp4' },
    { title: 'Fashion Hacks', description: 'Learn creative and easy fashion hacks to upgrade your wardrobe.', url: 'https://d1znl298gme64y.cloudfront.net/7998302-hd_1080_1920_24fps.mp4' },
    { title: 'Incredible Dance Moves', description: 'Catch the latest dance trends and incredible moves.', url: 'https://d1znl298gme64y.cloudfront.net/6003997-uhd_2160_3840_30fps.mp4' },
  ];

  const filteredReels = reelsList.filter((reel) =>
    reel.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="content-section">
      <h2>Popular Reels</h2>
      <input
        type="text"
        placeholder="Search reels..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      <div className="reels-list">
        {filteredReels.map((reel, index) => (
          <div key={index} className="reel-card">
            <h3>{reel.title}</h3>
            <p>{reel.description}</p>
            <video width="300" height="200" controls>
              <source src={reel.url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PopularReels;

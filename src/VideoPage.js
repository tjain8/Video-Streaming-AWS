import React from 'react';
import { useParams } from 'react-router-dom';

function VideoPage() {
  const { videoUrl } = useParams();

  return (
    <section className="content-section" style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Video Player</h2>
      <div style={{ border: '2px solid #ccc', width: '60%', margin: '0 auto', padding: '10px', borderRadius: '8px' }}>
        <video width="100%" height="auto" controls style={{ borderRadius: '8px' }}>
          <source src={decodeURIComponent(videoUrl)} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}

export default VideoPage;

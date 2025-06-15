import React from "react";
import Comments from "./Comments";

function Video({ video }) {
  return (
    <div className="video-card">
      <h3>{video.title}</h3>
      <p>
        <strong>Description:</strong> {video.description}
      </p>

      <Comments videoId={video.id} />
    </div>
  );
}

export default Video;

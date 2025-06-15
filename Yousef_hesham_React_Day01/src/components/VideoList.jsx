import { useContext } from "react";
import { VideosContext } from "../context/videos";

function VideoList() {
  const videos = useContext(VideosContext);

  return (
    <div className="video-list">
      {videos.map((video) => (
        <div key={video.id} className="video-card">
          <h3>{video.title}</h3>
          <p>{video.description}</p>
          <ul>
            {video.comments.map((comment, index) => (
              <li key={index}>{comment}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default VideoList;

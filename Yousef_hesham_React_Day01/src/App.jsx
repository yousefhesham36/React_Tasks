import React, { useContext } from "react";
import { VideoContext } from "./context/videos";
import Video from "./components/Video";

function App() {
  const { videos } = useContext(VideoContext);

  return (
    <div>
      <h1>FakeApi videos</h1>
      <h1>{videos.length} Videos</h1>
      <div className="video-list">
        {videos.map((video) => (
          <Video key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}

export default App;
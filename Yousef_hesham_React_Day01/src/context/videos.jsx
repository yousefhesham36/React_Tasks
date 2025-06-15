import React, { createContext, useState } from "react";

export const VideoContext = createContext();

const initialVideos = [
  { id: 1, title: "React Basics", description: "Learn the basics of React." },
  { id: 2, title: "React Props", description: "Understand how props work in React." },
  { id: 3, title: "React State", description: "Manage state in your components." },
  { id: 4, title: "useEffect Hook", description: "Use the useEffect hook in React." },
  { id: 5, title: "React Router", description: "Navigation made easy." },
  { id: 6, title: "Context API", description: "State management across components." },
];

export default function VideoProvider({ children }) {
  const [videos] = useState(initialVideos);

  return (
    <VideoContext.Provider value={{ videos }}>
      {children}
    </VideoContext.Provider>
  );
}
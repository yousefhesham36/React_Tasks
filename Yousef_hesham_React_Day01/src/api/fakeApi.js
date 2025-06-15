export function fetchVideos() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    id: 1,
                    name: "React Basics",
                    description: "Learn the basics of React.",
                    comments: [
                        { id: 1, text: "Great intro!" },
                        { id: 2, text: "Very useful, thanks!" }
                    ]
                },
                {
                    id: 2,
                    name: "React Props",
                    description: "Understand how props work in React.",
                    comments: [{ id: 3, text: "Awesome explanation!" }]
                },
                {
                    id: 3,
                    name: "React State",
                    description: "Manage state in your components.",
                    comments: [{ id: 4, text: "Now I get it!" }]
                },
                {
                    id: 4,
                    name: "useEffect Hook",
                    description: "Use the useEffect hook in React.",
                    comments: [{ id: 5, text: "Clear and concise." }]
                },
                {
                    id: 5,
                    name: "React Context",
                    description: "Global state management using context.",
                    comments: [{ id: 6, text: "Super helpful!" }]
                },
                {
                    id: 6,
                    name: "React Routing",
                    description: "Navigate between pages using React Router.",
                    comments: [{ id: 7, text: "Thanks a lot!" }]
                }
            ]);
        }, 1000);
    });
}

const commentsData = {
    1: ["Great intro!", "Very useful, thanks!"],
    2: ["Awesome explanation!"],
    3: ["Now I get it!"],
    4: ["Clear and concise."],
    5: ["Very helpful!", "Loved it."],
    6: ["Exactly what I needed."],
};

export function fetchComments(videoId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(commentsData[videoId] || []);
        }, 500);
    });
}
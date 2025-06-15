import { useEffect, useState } from "react";
import { fetchComments } from "../api";

const Comments = ({ videoId }) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetchComments(videoId).then(setComments);
    }, [videoId]);

    return (
        <div className="comments-section">
            <h4>Comments:</h4>
            {comments.length > 0 ? (
                <ul>
                    {comments.map((comment, index) => (
                        <li key={index}> {comment}</li>
                    ))}
                </ul>
            ) : (
                <p>No comments available.</p>
            )}
        </div>
    );
};

export default Comments;
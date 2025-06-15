import { Link } from "react-router-dom";
import "../styles.css";

const UserCard = ({ name, id, phone, email }) => {
  return (
    <div className="user-card">
      <div className="user-info">
        <p><strong>Name:</strong> {name || "Not available"}</p>
        <p><strong>Phone:</strong> {phone || "Not available"}</p>
        <p><strong>Email:</strong> {email || "Not available"}</p>
      </div>
      {id && (
        <Link to={`/users/${id}`} className="details-link">
          Show More Details
        </Link>
      )}
    </div>
  );
};

export default UserCard;
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import useUserStore from "../store/users";
import "../styles.css";

const SingleUserPage = () => {
  const { userID } = useParams();
  const { user, getUser, isLoading, hasErrors } = useUserStore();

  useEffect(() => {
    if (userID) getUser({ id: userID });
  }, [userID]);

  if (isLoading) return <div className="loading"> loading...</div>;
  if (hasErrors) return <div className="error"> error: {hasErrors.message}</div>;
  if (!user || Object.keys(user).length === 0)
    return <div className="not-found">no user found</div>;

  return (
    <div className="single-user-container">
      <h1>User Profile</h1>
      <div className="user-card-grid">
        <div className="user-card">
          <h2>Personal</h2>
          <div className="card-content">
            <div className="user-field"><strong>Id:</strong> <span>{user.id}</span></div>
            <div className="user-field"><strong>Name:</strong> <span>{user.name}</span></div>
            <div className="user-field"><strong>Username:</strong> <span>{user.username}</span></div>
            <div className="user-field"><strong>Email:</strong> <span>{user.email}</span></div>
          </div>
        </div>

        <div className="user-card">
          <h2>Address</h2>
          <div className="card-content">
            <div className="user-field"><strong>Street:</strong> <span>{user.address?.street}</span></div>
            <div className="user-field"><strong>Suite:</strong> <span>{user.address?.suite}</span></div>
            <div className="user-field"><strong>City:</strong> <span>{user.address?.city}</span></div>
            <div className="user-field"><strong>Zipcode:</strong> <span>{user.address?.zipcode}</span></div>
            <div className="user-field"><strong>Geo Lat:</strong> <span>{user.address?.geo?.lat}</span></div>
            <div className="user-field"><strong>Geo Lng:</strong> <span>{user.address?.geo?.lng}</span></div>
          </div>
        </div>

        <div className="user-card">
          <h2>Contact</h2>
          <div className="card-content">
            <div className="user-field"><strong>Phone:</strong> <span>{user.phone}</span></div>
            <div className="user-field"><strong>Website:</strong> <span>{user.website}</span></div>
          </div>
        </div>

        <div className="user-card">
          <h2>Company</h2>
          <div className="card-content">
            <div className="user-field"><strong>Name:</strong> <span>{user.company?.name}</span></div>
            <div className="user-field"><strong>CatchPhrase:</strong> <span>{user.company?.catchPhrase}</span></div>
            <div className="user-field"><strong>Bs:</strong> <span>{user.company?.bs}</span></div>
          </div>
        </div>
      </div>
      <Link to="/users" className="back-link">Back to Users</Link>
    </div>
  );
};

export default SingleUserPage;

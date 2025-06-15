import { useEffect } from "react";
import { Link } from "react-router-dom";
import useUserStore from "../store/users";
import UserCard from "../components/UserCard";
import "../styles.css";

const UserList = () => {
  const { users, getUsers, isLoading, hasErrors } = useUserStore();

  useEffect(() => {
    getUsers();
  }, []);

  if (isLoading) return <div className="loading">loading...</div>;
  if (hasErrors) {
    console.error(hasErrors);
    return <div className="error">something went wrong</div>;
  }

  return (
    <div className="user-list-container">
      <h1>All Users</h1>
      <div className="user-grid">
        {users.length > 0 ? (
          users.map((user) => (
            <UserCard key={user?.id} {...user} />
          ))
        ) : (
          <p className="not-found">there is no users</p>
        )}
      </div>

      <Link to="/" className="back-link">
        Back to Home
      </Link>
    </div>
  );
};

export default UserList;

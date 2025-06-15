import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserCard from "../components/UserCard";
import useUserStore from "../store/users";
import "../styles.css";

const HomePage = () => {
  const [searchParams, setSearchParams] = useState([
    { id: Date.now(), key: "name", value: "" },
  ]);
  const [filteredUser, setFilteredUser] = useState(null);

  const { users, getUsers, hasErrors, isLoading } = useUserStore();

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    const params = searchParams.reduce((acc, param) => {
      if (param.value.trim()) {
        acc[param.key] = param.value.trim().toLowerCase();
      }
      return acc;
    }, {});

    if (Object.keys(params).length === 0) {
      setFilteredUser(null);
      return;
    }

    const found = users.find((user) =>
      Object.entries(params).every(([key, val]) => {
        const userVal = user[key]?.toString().toLowerCase();
        return userVal === val; // تطابق تام
      })
    );

    setFilteredUser(found || null);
  }, [searchParams, users]);

  const handleParamChange = (id, field, value) => {
    setSearchParams((prev) =>
      prev.map((param) =>
        param.id === id ? { ...param, [field]: value } : param
      )
    );
  };

  const addSearchParam = () => {
    setSearchParams((prev) => [
      ...prev,
      { id: Date.now(), key: "name", value: "" },
    ]);
  };

  const removeSearchParam = (id) => {
    setSearchParams((prev) => prev.filter((param) => param.id !== id));
  };

  return (
    <div className="home-container">
      <h1>Welcome to User Search</h1>
      <Link to="/users" className="users-link">View All Users</Link>

      <div className="search-section">
        <h2>Search for a User</h2>
        {searchParams.map((param) => (
          <div key={param.id} className="search-row">
            <select
              value={param.key}
              onChange={(e) =>
                handleParamChange(param.id, "key", e.target.value)
              }
            >
              <option value="email">Email</option>
              <option value="name">Name</option>
              <option value="id">ID</option>
              <option value="phone">Phone</option>
            </select>
            <input
              type="text"
              value={param.value}
              onChange={(e) => handleParamChange(param.id, "value", e.target.value)}
              placeholder={`Enter full ${param.key}`}
            />
            {searchParams.length > 1 && (
              <button
                className="remove-btn"
                onClick={() => removeSearchParam(param.id)}
              >
                Remove
              </button>
            )}
          </div>
        ))}
        <button className="add-btn" onClick={addSearchParam}>
          Add Search Parameter
        </button>
      </div>

      {isLoading && <p className="loading">Loading users...</p>}
      {filteredUser && <UserCard {...filteredUser} />}
      {!filteredUser && searchParams.some((p) => p.value.trim()) && (
        <p className="not-found">No user found</p>
      )}
      {hasErrors && <p className="error">{hasErrors.message}</p>}
    </div>
  );
};

export default HomePage;

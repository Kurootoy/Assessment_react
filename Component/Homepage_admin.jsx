import { Link } from "react-router-dom";
import { useState } from "react";
import Layout from "./Layout";

const HomepageAdmin = () => {
  const [userData, setUserData] = useState({
    name: "",
    lastname: "",
    position: "",
  });

  const [users, setUsers] = useState([]);

  const [error, setError] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!userData.name || !userData.lastname || !userData.position) {
      setError("Please fill in all fields.");
      return;
    }

    setUsers([...users, userData]);

    setUserData({
      name: "",
      lastname: "",
      position: "",
    });
    setError("");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleUserDelete = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  };
  return (
    <Layout>
      <div className="homepage">
        <div className="text-box">
          <h1>Generation Thailand<br></br>
          Home - Admin Sector</h1>
          <div className="button-normal">
            <Link to="/">
              <button>Go Back to Main Page</button>
            </Link>
            <Link to="/user-home">
              <button>User Home Sector</button>
            </Link>
          </div>
          <div className="create-user">
            <div className="text-in-admin">
              <h1>Create User Here</h1>
            </div>
            <div className="input-admin">
              <form onSubmit={handleFormSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={userData.name}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="lastname"
                  placeholder="Lastname"
                  value={userData.lastname}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="position"
                  placeholder="Position"
                  value={userData.position}
                  onChange={handleInputChange}
                />
                <button type="submit">Save</button>
              </form>

              {error && <p className="error">{error}</p>}
            </div>
            <div className="table-admin">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Position</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr key={index}>
                      <td>{user.name}</td>
                      <td>{user.lastname}</td>
                      <td>{user.position}</td>
                      <td>
                        <button
                          className="Delete"
                          onClick={() => handleUserDelete(index)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomepageAdmin;

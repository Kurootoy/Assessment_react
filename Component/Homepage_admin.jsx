
import { Link } from "react-router-dom";
import Layout from "./Layout";

const HomepageAdmin = () => {
  return (
    <Layout>
      <div className="homepage">
        <div className="text-box">
          <h1>Home Admin !!!!!</h1>
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
              <input type="text" placeholder="Name" />
              <input type="text" placeholder="Lastname" />
              <input type="text" placeholder="Position" />
              <button>Save</button>
            </div>
            <div className="table-admin">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Lastname</th>
                    <th>Position</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Name user</td>
                    <td>Lastname</td>
                    <td>Position</td>
                    <td>Delete</td>
                  </tr>
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

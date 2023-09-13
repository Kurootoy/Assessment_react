
import { Link } from "react-router-dom";
import Layout from "./Layout";

const HomepageAdmin = () => {
  return (
    <Layout>
      <div className="homepage">
        <div className="text-box">
          <h1>USER SECTOR</h1>
          <div className="button-normal">
            <Link to="/">
              <button>Go Back to Main Page</button>
            </Link>
            <Link to="/add-home-sector">
              <button>User Admin Sector</button>
            </Link>
          </div>
          <div className="table-user">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Lastname</th>
                  <th>Position</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Name user</td>
                  <td>Lastname</td>
                  <td>Position</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomepageAdmin;

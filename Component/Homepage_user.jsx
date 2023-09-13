import Layout from "./Layout";
import { Link } from "react-router-dom";
const Homepage_user = () => {
  return (
    <div>
      <Layout />
      <div className="homepage">
      <div className="text-box">
        <p>This is User !!!!!!!!!!!!!!!!!!!!</p>
        <div className="button-normal">
        <Link to="/user-home">
          <button>User Home Sector</button>
          </Link>
          <button>Admin Home Sector</button>
        </div>
        <div className="Table-user">
          <table >
            <tr>
              <th>Name</th>
              <th>Lastname</th>
              <th>Position</th>
            </tr>
            
          </table>
        </div>
      </div>
    </div>
    </div>
  );
};
export default Homepage_user;

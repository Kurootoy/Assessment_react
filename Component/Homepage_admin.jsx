import { Link } from "react-router-dom";
import Layout from "./Layout";

const Homepage_admin = () => {
  return (
    <Layout>
    <div className="homepage">
      <div className="text-box">
        <h1>HOme ad minnn !!!!!</h1>
        <div className="button-normal">
          <Link to="/">
            <button>Go Back to mainpage</button>
          </Link>
          <Link to="/user-home">
            <button>User Home Sector</button>
          </Link>
        </div>
        <div className="create-user">
          <div className="text-in-admin">
            <h1>Create user Here</h1>
          </div>
          <div className="input-admin">
            <input type="text" placeholder="Name"></input>
            <input type="text" placeholder="Lastname"></input>
            <input type="text" placeholder="Position"></input>
            <button>Save</button>
          </div>
          <div className="table-admin">
            <table>
              <tr>
                <th>Name</th>
                <th>Lastname</th>
                <th>Position</th>
                <th>Action</th>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};
export default Homepage_admin;

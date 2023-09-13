import { Link } from "react-router-dom";

const Homepage_normal = () => {
  return (
    <div className="homepage">
      <div className="text-box">
        <h1>
          Generation Thailand <br />
          React Assessment
        </h1>
        <div className="button-normal">
          <Link to="/user-home">
            <button>User Home Sector</button>
          </Link>
          <Link to="/add-home-sector">
            <button>Addmin Home Sector</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Homepage_normal;

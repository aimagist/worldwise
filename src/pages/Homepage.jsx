import {Link} from "react-router-dom";
import AppNav from "../../components/AppNav";
import PageNav from "../../components/PageNav";

function Homepage() {
  return (
    <div>
      <PageNav />
      <AppNav />
      <h1 className="test">WorldWise Home</h1>
      <Link to="/app">Go to the App</Link>
    </div>
  );
}

export default Homepage;


import {  useSelector } from "react-redux";

const LandingPage = () => {
  const {username} = useSelector((state) => state.auth.authDetails);

  return <div>Welcome {username.toUpperCase()}</div>;
};

export default LandingPage;

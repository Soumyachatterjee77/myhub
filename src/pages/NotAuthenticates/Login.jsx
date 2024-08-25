import { Link, useNavigate } from "react-router-dom";
import Inputs from "../../components/UI/inputes/Inputs";
import PrimaryButton from "../../components/UI/inputes/PrimaryButton";
import { LOGIN } from "../../constants/constants";
import { useState } from "react";
import { loginAction } from "../../store/slices/authSlices";
import { useDispatch } from "react-redux";

const Login = () => {
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch(), navigate = useNavigate()

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      console.log(loginDetails);
      dispatch(loginAction(loginDetails));
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <form className="login-form" onSubmit={handleLogin}>
          <h2>{LOGIN}</h2>
          <Inputs
            type="text"
            id="username"
            name="username"
            label="Username/Phonenumber"
            value={loginDetails.username}
            onBlur={(e) => console.log(e)}
            onChange={(e) =>
              setLoginDetails((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
          />
          <Inputs
            type="text"
            id="password"
            name="password"
            label="Password"
            onBlur={(e) => console.log(e.target.name)}
            onChange={(e) =>
              setLoginDetails((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
            value={loginDetails.password}
          />
          <PrimaryButton btnName={LOGIN} />
          <p className="register-text">
            Dont have an account? <Link to="/signup">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

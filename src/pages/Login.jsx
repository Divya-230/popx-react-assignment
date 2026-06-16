import "../styles/Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="mobile-screen">
      <div className="login-container">
        <h1>
          Signin to your <br />
          PopX account
        </h1>

        <p>
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>

        <input
          className="login-input"
          type="email"
          placeholder="Enter email address"
        />

        <input
          className="login-input"
          type="password"
          placeholder="Enter password"
        />

        <button
          className="login-btn-main"
          onClick={() => navigate("/profile")}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
import "../styles/Signup.css";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  return (
    <div className="mobile-screen">
      <div className="signup-container">
        <h1>
          Create your
          <br />
          PopX account
        </h1>

        <input type="text" placeholder="Full Name" />
        <input type="text" placeholder="Phone Number" />
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <input type="text" placeholder="Company Name" />

        <div className="agency">
          <p>Are you an Agency?</p>

          <div className="agency-options">
            <label>
              <input type="radio" name="agency" defaultChecked />
              Yes
            </label>

            <label>
              <input type="radio" name="agency" />
              No
            </label>
          </div>
        </div>

        <button
          className="create-account-btn"
          onClick={() => navigate("/profile")}
        >
          Create Account
        </button>
      </div>
    </div>
  );
}

export default Signup;
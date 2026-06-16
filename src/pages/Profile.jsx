import "../styles/Profile.css";

function Profile() {
  return (
    <div className="mobile-screen">
      <div className="profile-header">
        Account Settings
      </div>

      <div className="profile-content">
        <div className="profile-info">
          <img
            src="https://i.pravatar.cc/100"
            alt="profile"
          />

          <div>
            <h4>Marry Doe</h4>
            <p>Marry@gmail.com</p>
          </div>
        </div>

        <p className="profile-description">
          Lorem Ipsum Dolor Sit Amet,
          Consetetur Sadipscing Elitr,
          Sed Diam Nonumy Eirmod Tempor
          Invidunt Ut Labore Et Dolore
          Magna Aliquyam Erat, Sed Diam.
        </p>
      </div>
    </div>
  );
}

export default Profile;
import "./loginPage.css";
import LoginForm from "./loginForm";

function loginPage() {
  return (
    <div className="login-container">
      <div className="background-image"></div>
      <div className="leftSection">
        <img src="logo_highbridge.png" alt="HighBridge" className="logo" />
        <div>
          <h1>Building the Future...</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
      <div className="rightSection">
        <LoginForm />
      </div>
    </div>
  );
}

export default loginPage;

import { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../auth/firebase";
import { useNavigate } from "react-router-dom";
import styles from "./loginForm.module.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log({ email, password, rememberMe });
    try{
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    if (userCredentials) {
      console.log("User logged in successfully");
    }
    // Redirect to dashboard
    navigate("/dashboard");
  }
  catch (error) {
      console.error("Error logging in:", error);
      // Handle error (e.g., show a message to the user)
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(user);
      alert(`Logged in as: ${user.displayName} `);
      
      // Redirect to dashboard
      navigate("/dashboard");
    } catch (error) {
      console.error("Google sign-in error:", error);
      // alert("Error: " + error);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.loginCard}>
        <h1 className={styles.welcomeText}>WELCOME BACK!</h1>
        <h2 className={styles.loginTitle}>Log In to your Account</h2>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label>Email</label>
            <input
              type="email"
              placeholder="Type here..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Password</label>
            <input
              type="password"
              placeholder="Type here..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className={styles.rememberForgot}>
            <div className={styles.rememberMe}>
              <input
                type="checkbox"
                id="remember"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="remember">Remember me</label>
            </div>
            <a href="#" className={styles.forgotPassword}>
              Forgot Password?
            </a>
          </div>

          <button type="submit" className={styles.loginButton}>
            Log In
          </button>

          <div className={styles.divider}>
            <span>Or</span>
          </div>

          <div className={styles.socialLogin}>
            <button type="button" className={styles.socialButton} onClick={handleGoogleLogin}>
              <img src="google.svg" alt="Google" />
              <span>Log In with Google</span>
            </button>
            <button type="button" className={styles.socialButton}>
              <img src="facebook.svg" alt="Facebook" />
              <span>Log In with Facebook</span>
            </button>
            <button type="button" className={styles.socialButton}>
              <img src="apple.png" alt="Apple" />
              <span>Log In with Apple</span>
            </button>
          </div>

          <div className={styles.signupPrompt}>
            <span>New User? </span>
            <a href="#" className={styles.signupLink}>
              SIGN UP HERE
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;

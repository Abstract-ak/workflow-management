import { useState } from "react";
import styles from "./loginPage.module.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log({ email, password, rememberMe });
  };

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
            <button type="button" className={styles.socialButton}>
              <img src="/google.svg" alt="Google" />
              <span>Log In with Google</span>
            </button>
            <button type="button" className={styles.socialButton}>
              <img src="/facebook.svg" alt="Facebook" />
              <span>Log In with Facebook</span>
            </button>
            <button type="button" className={styles.socialButton}>
              <img src="/apple.svg" alt="Apple" />
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

export default LoginPage;

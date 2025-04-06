import { useNavigate } from "react-router-dom";
import styles from "./savePanel.module.css"; // Optional for styling

const SimpleHeader = ({ title = "Untitled" }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Goes back to the previous page in history
  };

  return (
    <header className={styles.simpleHeader}>
      <button className={styles.backButton} onClick={handleGoBack}>
        &larr; Go Back
      </button>
      <h1 className={styles.headerTitle}>{title}</h1>
    </header>
  );
};

export default SimpleHeader;

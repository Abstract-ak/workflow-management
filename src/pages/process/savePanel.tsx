import styles from "./CreateProcess.module.css";

interface WorkflowHeaderProps {
  workflowTitle: string;
  handleSave: () => void;
  navigate: (steps: number) => void;
}

const SimpleHeader: React.FC<WorkflowHeaderProps> = ({
  workflowTitle, handleSave, navigate,
}) => {

  return (
    <div className={styles.header}>
      {/* <div className={styles.leftHeader}> */}
      {/* <button> */}
      <img
        src="goBack-btn.png"
        alt="back"
        onClick={() => {
          navigate(-1);
        }}
        style={{ cursor: "pointer" }}
      />
      {/* </button> */}
      <span className={styles.titleText}>{workflowTitle}</span>
      <img
        src="save-btn.png"
        alt="save"
        onClick={handleSave}
        style={{ cursor: "pointer" }}
      />
      {/* </div> */}
    </div>
  );
};

export default SimpleHeader;

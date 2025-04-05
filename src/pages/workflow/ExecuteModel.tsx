import React from "react";
import styles from "./ExecuteModel.module.css";

interface ExecuteModelProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  processName: string;
}

const ExecuteModel: React.FC<ExecuteModelProps> = ({
  isOpen,
  onClose,
  onConfirm,
  processName,
}) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <button className={styles.closeButton} onClick={onClose}>
            <img src="close-button.png" alt="close" />
          </button>
        </div>

        <div className={styles.content}>
          <h2 className={styles.title}>
            "Are You Sure You Want To Execute The Process '{processName}'?
          </h2>
          <p className={styles.warning}>You Cannot Undo This Step</p>
        </div>
        {/* <div className={styles.buttons}> */}
        <div className={styles.footer}>
          <button className={styles.noButton} onClick={onClose}>
            No
          </button>
          <button className={styles.yesButton} onClick={onConfirm}>
            Yes
          </button>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default ExecuteModel;

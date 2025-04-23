import React from "react";
import styles from "./AddNodeTooltip.module.css";

interface AddNodeTooltipProps {
  isVisible: boolean;
  onSelect: (type: "api" | "email" | "textbox") => void;
}

const AddNodeTooltip: React.FC<AddNodeTooltipProps> = ({
  isVisible,
  onSelect,
}) => {
  if (!isVisible) return null;

  return (
    <div className={styles.tooltipBox}>
      <div className={styles.tooltipContent}>
        <button
          className={styles.tooltipButton}
          onClick={() => onSelect("api")}
        >
          API Call
        </button>
        <button
          className={styles.tooltipButton}
          onClick={() => onSelect("email")}
        >
          Email
        </button>
        <button
          className={styles.tooltipButton}
          onClick={() => onSelect("textbox")}
        >
          Text Box
        </button>
      </div>
    </div>
  );
};

export default AddNodeTooltip;

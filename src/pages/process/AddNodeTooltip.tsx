import React from "react";
import styles from "./AddNodeTooltip.module.css";
import { Webhook, Mail, Type } from "lucide-react";

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
          <Webhook size={16} />
          <span>API Call</span>
        </button>
        <button
          className={styles.tooltipButton}
          onClick={() => onSelect("email")}
        >
          <Mail size={16} />
          <span>Email</span>
        </button>
        <button
          className={styles.tooltipButton}
          onClick={() => onSelect("textbox")}
        >
          <Type size={16} />
          <span>Text Box</span>
        </button>
      </div>
    </div>
  );
};

export default AddNodeTooltip;

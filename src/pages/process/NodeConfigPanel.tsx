import React, { useRef, useEffect } from "react";
import styles from "./NodeConfigPanel.module.css";

interface ApiNodeConfig {
  method: string;
  url: string;
  headers: string;
  body: string;
}

interface TextBoxConfig {
  message: string;
}

interface EmailConfig {
  email: string;
}

type NodeConfigPanelProps =
  | {
      type: "api";
      value: ApiNodeConfig;
      onChange: (value: ApiNodeConfig) => void;
      onClose?: () => void;
    }
  | {
      type: "textbox";
      value: TextBoxConfig;
      onChange: (value: TextBoxConfig) => void;
      onClose?: () => void;
    }
  | {
      type: "email";
      value: EmailConfig;
      onChange: (value: EmailConfig) => void;
      onClose?: () => void;
    };

const methods = ["GET", "POST", "PUT", "DELETE", "PATCH"];

const ApiConfigForm: React.FC<{
  value: ApiNodeConfig;
  onChange: (value: ApiNodeConfig) => void;
}> = ({ value, onChange }) => (
  <form className={styles.form}>
    <label className={styles.label}>
      Method
      <select
        className={styles.input}
        value={value.method}
        onChange={(e) => onChange({ ...value, method: e.target.value })}
      >
        <option value="">Type here...</option>
        {methods.map((m) => (
          <option key={m} value={m}>
            {m}
          </option>
        ))}
      </select>
    </label>
    <label className={styles.label}>
      URL
      <input
        className={styles.input}
        type="text"
        placeholder="Type here..."
        value={value.url}
        onChange={(e) => onChange({ ...value, url: e.target.value })}
      />
    </label>
    <label className={styles.label}>
      Headers
      <input
        className={styles.input}
        type="text"
        placeholder="Header Name"
        value={value.headers}
        onChange={(e) => onChange({ ...value, headers: e.target.value })}
      />
    </label>
    <label className={styles.label}>
      Body
      <textarea
        className={styles.textarea}
        placeholder="Enter Descriptions..."
        value={value.body}
        onChange={(e) => onChange({ ...value, body: e.target.value })}
      />
    </label>
  </form>
);

const TextBoxConfigForm: React.FC<{
  value: TextBoxConfig;
  onChange: (value: TextBoxConfig) => void;
}> = ({ value, onChange }) => (
  <form className={styles.form}>
    <label className={styles.label}>
      Message
      <textarea
        className={styles.input}
        placeholder="Message"
        value={value.message}
        onChange={(e) => onChange({ ...value, message: e.target.value })}
      />
    </label>
  </form>
);

const EmailConfigForm: React.FC<{
  value: EmailConfig;
  onChange: (value: EmailConfig) => void;
}> = ({ value, onChange }) => (
  <form className={styles.form}>
    <label className={styles.label}>
      Email
      <input
        className={styles.input}
        type="text"
        placeholder="email"
        value={value.email}
        onChange={(e) => onChange({ ...value, email: e.target.value })}
      />
    </label>
  </form>
);

const NodeConfigPanel: React.FC<NodeConfigPanelProps> = (props) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const { onClose } = props;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target as Node)
      ) {
        // Ensure the click is outside the panel
        console.log("Clicked outside the panel"); // Debugging log
        if (onClose) onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className={styles.overlay}>
      <div className={styles.header}>Configuration</div>
      <div className={styles.panel} ref={panelRef}>
        <div className={styles.formDiv}>
          {props.type === "api" && (
            <ApiConfigForm value={props.value} onChange={props.onChange} />
          )}
          {props.type === "textbox" && (
            <TextBoxConfigForm value={props.value} onChange={props.onChange} />
          )}
          {props.type === "email" && (
            <EmailConfigForm value={props.value} onChange={props.onChange} />
          )}
        </div>
      </div>
    </div>
  );
};

export default NodeConfigPanel;

import React from "react";
import styles from "./NodeConfigPanel.module.css";

interface ApiNodeConfig {
  method: string;
  url: string;
  headers: string;
  body: string;
}

interface ApiNodeConfigPanelProps {
  value: ApiNodeConfig;
  onChange: (value: ApiNodeConfig) => void;
}

const methods = ["GET", "POST", "PUT", "DELETE", "PATCH"];

const NodeConfigPanel: React.FC<ApiNodeConfigPanelProps> = ({
  value,
  onChange,
}) => {
  const handleChange = (field: keyof ApiNodeConfig, val: string) => {
    onChange({ ...value, [field]: val });
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.header}>Configuration</div>
      <div className={styles.panel}>
        <div className={styles.formDiv}>
          <form className={styles.form}>
            <label className={styles.label}>
              Method
              <select
                className={styles.input}
                value={value.method}
                onChange={(e) => handleChange("method", e.target.value)}
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
                onChange={(e) => handleChange("url", e.target.value)}
              />
            </label>
            <label className={styles.label}>
              Headers
              <input
                className={styles.input}
                type="text"
                placeholder="Header Name"
                value={value.headers}
                onChange={(e) => handleChange("headers", e.target.value)}
              />
            </label>
            <label className={styles.label}>
              Body
              <textarea
                className={styles.textarea}
                placeholder="Enter Descriptions..."
                value={value.body}
                onChange={(e) => handleChange("body", e.target.value)}
              />
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NodeConfigPanel;

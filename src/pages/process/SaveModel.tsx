import React, { useState } from "react";
import styles from "./SaveModel.module.css";

interface SaveModelProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (data: { name: string; description: string }) => void;
}

const SaveModel: React.FC<SaveModelProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  if (!isOpen) return null;

  const handleSubmit = () => {
    onConfirm({ name, description });
    setName("");
    setDescription("");
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h2 className={styles.title}>Save your workflow</h2>
          <button className={styles.closeButton} onClick={onClose}>
            <img src="close-button.png" alt="close" />
          </button>
        </div>

        <div className={styles.content}>
          <div className={styles.inputGroup}>
            <label>Name</label>
            <input
              type="text"
              placeholder="Name here"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={styles.input}
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Description</label>
            <textarea
              placeholder="Write here..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className={styles.textarea}
              rows={6}
            />
          </div>
        </div>

        <div className={styles.footer}>
          <button className={styles.saveButton} onClick={handleSubmit}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default SaveModel;

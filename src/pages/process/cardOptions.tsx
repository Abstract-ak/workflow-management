import React from 'react';
import styles from './cardOptions.module.css';
import { Trash2 } from 'lucide-react';

type BoxCardProps = {
  title: string | null;
  onDelete: () => void;
};

const BoxCard: React.FC<BoxCardProps> = ({ title, onDelete }) => {
  return (
    <div className={styles.card}>
      <span className={styles.title}>{title}</span>
      <button className={styles.deleteButton} onClick={onDelete} aria-label="Delete">
        <Trash2 size={16} />
      </button>
    </div>
  );
};

export default BoxCard;

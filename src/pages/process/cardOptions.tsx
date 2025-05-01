import React from 'react';
import styles from './cardOptions.module.css';
import { Trash2, Webhook, Mail, Type } from 'lucide-react';

type BoxCardProps = {
  title: string | null;
  onDelete: () => void;
};

const BoxCard: React.FC<BoxCardProps> = ({ title, onDelete }) => {
  const getIcon = () => {
    switch (title) {
      case 'api':
        return <Webhook size={16} />;
      case 'email':
        return <Mail size={16} />;
      case 'textbox':
        return <Type size={16} />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.card}>
      <span className={styles.title}>
        {getIcon()}
        {title}
      </span>
      <button className={styles.deleteButton} onClick={onDelete} aria-label="Delete">
        <Trash2 size={16} />
      </button>
    </div>
  );
};

export default BoxCard;

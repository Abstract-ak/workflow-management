import React from 'react'
import styles from "./WorkflowBuilder.module.css";

//Define props types
interface ExecutionHistoryProps {
  index: number;
}

const ExecutionHistory: React.FC<ExecutionHistoryProps> = ({ index }) => {
  const history = [
    { time: '28/05 - 22:43 IST', status: 'Passed' },
    { time: '31/05 - 17:14 IST', status: 'Failed' },
    { time: '02/06 - 12:12 IST', status: 'Failed' },
  ]
  return (
    <tr key={`expanded-${index}`} className={styles.expandedRow}>
      <td colSpan={8}>
        <div className={styles.executionHistory}>
          {history.map((item, idx) => (
            <div key={idx} className={styles.historyItem}>
              <div className={styles.historyDot} />
              <div className={styles.historyTime}>{item.time}</div>
              <div className={styles.historyStatus}>
                <span
                  className={
                    item.status === 'Passed'
                      ? styles.statusPassed
                      : styles.statusFailed
                  }
                >
                  {item.status}
                </span>
              </div>
              <button className={styles.historyViewButton}>
                <img src="open-Frame.png" alt="view" />
              </button>
            </div>
          ))}
        </div>
      </td>
    </tr>
  )
}

export default ExecutionHistory
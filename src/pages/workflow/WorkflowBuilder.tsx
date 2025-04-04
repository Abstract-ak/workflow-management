import { useState } from "react";
import styles from "./WorkflowBuilder.module.css";
import { FaStar, FaEllipsisV, FaDownload } from "react-icons/fa";

interface Workflow {
  id: string;
  name: string;
  lastEditedBy: string;
  lastEditedTime: string;
  description: string;
  isFavorite: boolean;
}

const WorkflowBuilder = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [workflows] = useState<Workflow[]>([
    {
      id: "#494",
      name: "Workflow Name here...",
      lastEditedBy: "Zubin Khanna",
      lastEditedTime: "22:43 IST - 28/05",
      description: "Some Description Here Regarding The Flow..",
      isFavorite: false,
    },
    // Duplicate entries for demonstration
    ...Array(7).fill({
      id: "#494",
      name: "Workflow Name here...",
      lastEditedBy: "Zubin Khanna",
      lastEditedTime: "22:43 IST - 28/05",
      description: "Some Description Here Regarding The Flow..",
      isFavorite: false,
    }),
  ]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Workflow Builder</h1>
      </div>

      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search By Workflow Name/ID"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={styles.searchInput}
        />
        <button className={styles.createButton}>+ Create New Process</button>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Workflow Name</th>
              <th>ID</th>
              <th>Last Edited On</th>
              <th>Description</th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {workflows.map((workflow, index) => (
              <tr key={index}>
                <td>{workflow.name}</td>
                <td>{workflow.id}</td>
                <td>{`${workflow.lastEditedBy} | ${workflow.lastEditedTime}`}</td>
                <td>{workflow.description}</td>
                <td>
                  <button className={styles.iconButton}>
                    <FaStar
                      className={
                        workflow.isFavorite ? styles.starActive : styles.star
                      }
                    />
                  </button>
                </td>
                <td>
                  <button className={styles.executeButton}>Execute</button>
                </td>
                <td>
                  <button className={styles.editButton}>Edit</button>
                </td>
                <td className={styles.actionButtons}>
                  <button className={styles.iconButton}>
                    <FaEllipsisV />
                  </button>
                  <button className={styles.iconButton}>
                    <FaDownload />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.pagination}>
        <button className={styles.paginationButton}>&lt;</button>
        <button className={`${styles.paginationButton} ${styles.active}`}>
          1
        </button>
        <button className={styles.paginationButton}>2</button>
        <button className={styles.paginationButton}>3</button>
        <span>...</span>
        <button className={styles.paginationButton}>15</button>
        <button className={styles.paginationButton}>&gt;</button>
      </div>
    </div>
  );
};

export default WorkflowBuilder;

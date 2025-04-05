import { useState } from "react";
import styles from "./WorkflowBuilder.module.css";
import { FaEllipsisV, FaDownload } from "react-icons/fa";
import { Workflow, initialWorkflowData } from "./workflowData";
import ExecuteModel from "./ExecuteModel";

const WorkflowBuilder = () => {
  const [isNavbarActive, setIsNavbarActive] = useState(false);
  const [workflows, setWorkflows] = useState<Workflow[]>(initialWorkflowData);
  const [isExecuteModelOpen, setIsExecuteModelOpen] = useState(false);

  const handlePinClick = (index: number) => {
    setWorkflows((prevWorkflows) => {
      const newWorkflows = [...prevWorkflows];
      // Simply toggle the pin state for the clicked workflow
      newWorkflows[index] = {
        ...newWorkflows[index],
        isPinned: !newWorkflows[index].isPinned,
      };
      return newWorkflows;
    });
  };

  const handleExecute = () => {
    setIsExecuteModelOpen(true);
  };

  const handleConfirmExecute = () => {
    // Handle execute logic here
    console.log("Executing workflow...");
    setIsExecuteModelOpen(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img
          src={isNavbarActive ? "Property2.png" : "Property1.png"}
          alt="side-navbar"
          onMouseEnter={() => setIsNavbarActive(true)}
          onMouseLeave={() => setIsNavbarActive(false)}
          // onClick={() => setIsNavbarActive(!isNavbarActive)}
          style={{ cursor: "pointer" }}
        />
        <h1>Workflow Builder</h1>
      </div>

      <div className={styles.tableBox}>
        <div className={styles.searchContainer}>
          <img src="Component36.png" alt="search-feild" />
          {/* <button className={styles.createButton}>+ Create New Process</button> */}
          <button>
            <img src="Button.png" alt="create-resource button" />
          </button>
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
                    <img
                      src={
                        workflow.isPinned ? "pin-yellow.png" : "pin-white.png"
                      }
                      alt="pin-icon"
                      onClick={() => handlePinClick(index)}
                      style={{ cursor: "pointer" }}
                    />
                  </td>
                  <td>
                    <button
                      className={styles.executeButton}
                      onClick={handleExecute}
                    >
                      Execute
                    </button>
                  </td>
                  <td>
                    <button className={styles.editButton}>Edit</button>
                  </td>
                  <td className={styles.actionButtons}>
                    <button className={styles.iconButton}>
                      {/* <FaEllipsisV /> */}
                      <img src="Overflow_dot.png" alt="3-dots_option" />
                    </button>
                    <button className={styles.iconButton}>
                      {/* <FaDownload /> */}
                      <img src="Frame_arrowDown.png" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className={styles.pagination}>
            <img src="Frame-pagination.png" alt="pagination button" />
          </div>
        </div>

        {/* <div className={styles.pagination}>
          <button className={styles.paginationButton}>&lt;</button>
          <button className={`${styles.paginationButton} ${styles.active}`}>
            1
          </button>
          <button className={styles.paginationButton}>2</button>
          <button className={styles.paginationButton}>3</button>
          <span>...</span>
          <button className={styles.paginationButton}>15</button>
          <button className={styles.paginationButton}>&gt;</button>
        </div> */}
      </div>
      <ExecuteModel
        isOpen={isExecuteModelOpen}
        onClose={() => setIsExecuteModelOpen(false)}
        onConfirm={handleConfirmExecute}
        processName={"Process_Name"}
      />
    </div>
  );
};

export default WorkflowBuilder;

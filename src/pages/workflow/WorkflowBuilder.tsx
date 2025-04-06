import { useState, useRef, useEffect } from "react";
import styles from "./WorkflowBuilder.module.css";
import { Workflow, initialWorkflowData } from "./workflowData";
import ExecuteModel from "./ExecuteModel";

const WorkflowBuilder = () => {
  const [isNavbarActive, setIsNavbarActive] = useState(false);
  const [workflows, setWorkflows] = useState<Workflow[]>(initialWorkflowData);
  const [isExecuteModelOpen, setIsExecuteModelOpen] = useState(false);
  const [activeDropdownIndex, setActiveDropdownIndex] = useState<number | null>(
    null
  );
  const [expandedRows, setExpandedRows] = useState<number[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdownIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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

  const handleDelete = (index: number) => {
    setWorkflows((prevWorkflows) => {
      const newWorkflows = [...prevWorkflows];
      newWorkflows.splice(index, 1);
      return newWorkflows;
    });
    setActiveDropdownIndex(null);
  };

  const toggleDropdown = (index: number) => {
    setActiveDropdownIndex(activeDropdownIndex === index ? null : index);
  };

  const toggleExpandRow = (index: number) => {
    setExpandedRows((prev) => {
      if (prev.includes(index)) {
        //agar element present hai expandedRow me to isko nikal feko
        return prev.filter((i) => i !== index);
      } else {
        //nahi hai to jordo.
        return [...prev, index];
      }
    });
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
                <>
                  <tr key={`row-${index}`}>
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
                      <div
                        className={styles.dropdownContainer}
                        ref={dropdownRef}
                      >
                        <button
                          className={styles.iconButton}
                          onClick={() => toggleDropdown(index)}
                        >
                          <img src="Overflow_dot.png" alt="3-dots_option" />
                        </button>
                        {/* dropdown dialogue-box */}
                        {activeDropdownIndex === index && (
                          <div className={styles.dropdownMenu}>
                            <button
                              className={styles.dropdownItem}
                              onClick={() => handleDelete(index)}
                            >
                              Delete
                            </button>
                          </div>
                        )}
                      </div>
                      <button
                        className={`${styles.iconButton} ${
                          expandedRows.includes(index) ? styles.rotated : ""
                        }`}
                        onClick={() => toggleExpandRow(index)}
                      >
                        <img src="Frame_arrowDown.png" alt="formUp" />
                      </button>
                    </td>
                  </tr>
                  {expandedRows.includes(index) && (
                    <tr
                      key={`expanded-${index}`}
                      className={styles.expandedRow}
                    >
                      <td colSpan={8}>
                        <div className={styles.executionHistory}>
                          {/* <h3>Execution History</h3> */}

                          <div className={styles.historyItem}>
                            <div className={styles.historyDot} />
                            <div className={styles.historyTime}>
                              28/05 - 22:43 IST
                            </div>
                            <div className={styles.historyStatus}>
                              <span className={styles.statusPassed}>
                                Passed
                              </span>
                            </div>
                            <button className={styles.historyViewButton}>
                              <img src="open-Frame.png" alt="view" />
                            </button>
                          </div>

                          <div className={styles.historyItem}>
                            <div className={styles.historyDot} />
                            <div className={styles.historyTime}>
                              28/05 - 22:43 IST
                            </div>
                            <div className={styles.historyStatus}>
                              <span className={styles.statusFailed}>
                                Failed
                              </span>
                            </div>
                            <button className={styles.historyViewButton}>
                              <img src="open-Frame.png" alt="view" />
                            </button>
                          </div>

                          <div className={styles.historyItem}>
                            <div className={styles.historyDot} />
                            <div className={styles.historyTime}>
                              28/05 - 22:43 IST
                            </div>
                            <div className={styles.historyStatus}>
                              <span className={styles.statusFailed}>
                                Failed
                              </span>
                            </div>
                            <button className={styles.historyViewButton}>
                              <img src="open-Frame.png" alt="view" />
                            </button>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </>
              ))}
            </tbody>
          </table>

          <div className={styles.pagination}>
            <img src="Frame-pagination.png" alt="pagination button" />
          </div>
        </div>
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

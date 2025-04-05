import { useState } from "react";
import styles from "./CreateProcess.module.css";

const CreateProcess = () => {
  const [zoom, setZoom] = useState(100);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {/* <div className={styles.leftHeader}> */}
        <button>
          <img src="goBack-btn.png" alt="back" />
        </button>
        <span className={styles.titleText}>Untitled</span>
        <img src="save-btn.png" alt="save" />
        {/* </div> */}
      </div>

      <div className={styles.workflowCanvas}>
        {/* <div className={styles.dotGrid}> */}
        <div className={styles.workflowNodes}>
          <div className={styles.startNode}>
            <img src="startProcess.png" alt="start-node" />
            <div className={styles.connector}>
              <div className={styles.addNode}>
                <img src="plus-sign.png" alt="add" />
              </div>
            </div>
          </div>
          <div className={styles.endNode}>
            <img src="endProcess.png" alt="end-node" />
          </div>
        </div>
        {/* </div> */}
      </div>

      <div className={styles.footer}>
        <div className={styles.leftControls}>
          <img src="undo-btn.png" alt="undo" />

          <img src="redo-btn.png" alt="redo" />
        </div>

        <div className={styles.zoomControls}>
          <img src="green-lit.png" alt="green-lit-go" />
          <button
            // className={styles.zoomButton}
            onClick={() => setZoom(Math.max(0, zoom - 10))}
          >
            <img src="minus-btn.png" alt="zoom out" />
          </button>
          <div className={styles.zoomSliderContainer}>
            <input
              type="range"
              min="10"
              max="200"
              value={zoom}
              onChange={(e) => setZoom(Number(e.target.value))}
              className={styles.zoomSlider}
            />
          </div>
          <button
            // className={styles.zoomButton}
            onClick={() => setZoom(Math.min(200, zoom + 10))}
          >
            <img src="plus-btn.png" alt="zoom in" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateProcess;

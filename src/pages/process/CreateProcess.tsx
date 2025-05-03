import { useEffect, useRef, useState } from "react";
import styles from "./CreateProcess.module.css";
import SaveModel from "./SaveModel";
import AddNodeTooltip from "./AddNodeTooltip";
import { useNavigate } from "react-router-dom";
import SimpleHeader from "./savePanel";
import BoxCard from "./cardOptions";

const CreateProcess = () => {

  type NodeItem = {
    selectedNode: "api" | "email" | "textbox" | null;
    id: number;
  };

  const [zoom, setZoom] = useState(100);
  const [isSaveModelOpen, setIsSaveModelOpen] = useState(false);
  const [workflowTitle, setWorkflowTitle] = useState("Untitled");
  const [isTooltipVisible, setIsTooltipVisible] = useState<boolean>(false);
  const [activeTooltipIndex, setActiveTooltipIndex] = useState<number | null>(null);

  const [nodeList, setNodeList] = useState<NodeItem[]>([]);
  // const [selectedNode, setSelectedNode] = useState<NodeItem>(
  //   null
  // );
  // const [nodeList, setNodeList] = useState<SelectionMode[]>([]);
  // Adjust type as needed

  const addNodeRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        addNodeRef.current &&
        !addNodeRef.current.contains(event.target as Node)
      ) {
        setIsTooltipVisible(false);
        setActiveTooltipIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSave = () => {
    setIsSaveModelOpen(true);
  };

  const handleConfirmSave = (data: { name: string; description: string }) => {
    console.log("Saving workflow...", data);
    setWorkflowTitle(data.name);
    setIsSaveModelOpen(false);
  };

  const toggleTooltip = () => {
    setIsTooltipVisible(!isTooltipVisible);
    setActiveTooltipIndex(null);
  };

  const handleNodeSelect = (type: "api" | "email" | "textbox") => {
    console.log("Selected node type:", type);
    setIsTooltipVisible(false);
    setActiveTooltipIndex(null);

    if (activeTooltipIndex === null) {
      // Add at the end
      setNodeList((prev) => [...prev, { selectedNode: type, id: Date.now() }]);
    } else {
      // Insert at specific position
      setNodeList((prev) => {
        const newList = [...prev];
        newList.splice(activeTooltipIndex, 0, { selectedNode: type, id: Date.now() });
        return newList;
      });
    }
  };

  const handleAddNode = (index: number, position: 'above' | 'below') => {
    setActiveTooltipIndex(position === 'above' ? index : index + 1);
    setIsTooltipVisible(true);
  };

  return (
    <div className={styles.container}>
      <SimpleHeader
        workflowTitle={workflowTitle}
        handleSave={handleSave}
        navigate={navigate}
      />

      <div className={styles.workflowCanvas}>
        {/* <div className={styles.dotGrid}> */}
        <div className={styles.workflowNodes}>
          <div className={styles.startNode}>

            <img src="startProcess.png" alt="start-node" />
            <div className={styles.connector}></div>
          </div>

          {
            nodeList.map((node, index) => (
              <div key={node.id}>
                <BoxCard
                  title={node.selectedNode}
                  onDelete={() =>
                    setNodeList((prev) => prev.filter((_, i) => i !== index))
                  }
                  onAddAbove={() => handleAddNode(index, 'above')}
                  onAddBelow={() => handleAddNode(index, 'below')}
                />
                <div className={styles.connection}></div>
              </div>
            ))
          }

          <div className={styles.addNode}
            onClick={toggleTooltip}
            ref={addNodeRef}>
            <img src="plus-sign.png" alt="add" />
            <AddNodeTooltip
              isVisible={isTooltipVisible}
              onSelect={handleNodeSelect}
            />
            <div className={styles.connector}></div>
          </div>

          {/* </div> */}
          {/* </div> */}
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

      <SaveModel
        isOpen={isSaveModelOpen}
        onClose={() => setIsSaveModelOpen(false)}
        onConfirm={handleConfirmSave}
      />
    </div>
  );
};

export default CreateProcess;

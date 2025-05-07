import { useEffect, useRef, useState } from "react";
import styles from "./CreateProcess.module.css";
import SaveModel from "./SaveModel";
import AddNodeTooltip from "./AddNodeTooltip";
import { useNavigate } from "react-router-dom";
import SimpleHeader from "./savePanel";
import BoxCard from "./cardOptions";
import NodeConfigPanel from "./NodeConfigPanel";

const defaultApiConfig = { method: "", url: "", headers: "", body: "" };
const defaultTextBoxConfig = { message: "" };
const defaultEmailConfig = { email: "" };

const CreateProcess = () => {
  type NodeType = "api" | "email" | "textbox" | null;
  type NodeItem = {
    selectedNode: NodeType;
    id: number;
  };

  const [zoom, setZoom] = useState(100);
  const [isSaveModelOpen, setIsSaveModelOpen] = useState(false);
  const [workflowTitle, setWorkflowTitle] = useState("Untitled");
  const [isTooltipVisible, setIsTooltipVisible] = useState<boolean>(false);
  const [activeTooltipIndex, setActiveTooltipIndex] = useState<number | null>(
    null
  );

  const [nodeList, setNodeList] = useState<NodeItem[]>([]);
  const [activeConfigIndex, setActiveConfigIndex] = useState<number | null>(
    null
  );
  const [apiConfigs, setApiConfigs] = useState<
    Record<number, typeof defaultApiConfig>
  >({});
  const [textBoxConfigs, setTextBoxConfigs] = useState<
    Record<number, typeof defaultTextBoxConfig>
  >({});
  const [emailConfigs, setEmailConfigs] = useState<
    Record<number, typeof defaultEmailConfig>
  >({});

  const addNodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const clickedOutside = addNodeRefs.current.every(
        (ref) => ref && !ref.contains(event.target as Node)
      );

      if (clickedOutside) {
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

  const toggleTooltip = (index: number | null) => {
    setIsTooltipVisible(!isTooltipVisible);
    setActiveTooltipIndex(index);

    // console.log("active-tooltip index: ", activeTooltipIndex);
  };

  //isko check krna hai
  const handleNodeSelect = (type: "api" | "email" | "textbox") => {
    console.log("Selected node type:", type);
    setIsTooltipVisible(false);
    // setActiveTooltipIndex(null);

    if (activeTooltipIndex === null) {
      // Add at the end
      setNodeList((prev) => [...prev, { selectedNode: type, id: Date.now() }]);
    } else {
      // Insert at specific position
      setNodeList((prev) => {
        const newList = [...prev];
        newList.splice(activeTooltipIndex, 0, {
          selectedNode: type,
          id: Date.now(),
        });
        return newList;
      });
    }
  };

  const handleOpenConfig = (index: number) => {
    setActiveConfigIndex(index);
  };

  const handleApiConfigChange = (config: typeof defaultApiConfig) => {
    if (activeConfigIndex !== null) {
      setApiConfigs((prev) => ({ ...prev, [activeConfigIndex]: config }));
    }
  };
  const handleTextBoxConfigChange = (config: typeof defaultTextBoxConfig) => {
    if (activeConfigIndex !== null) {
      setTextBoxConfigs((prev) => ({ ...prev, [activeConfigIndex]: config }));
    }
  };
  const handleEmailConfigChange = (config: typeof defaultEmailConfig) => {
    if (activeConfigIndex !== null) {
      setEmailConfigs((prev) => ({ ...prev, [activeConfigIndex]: config }));
    }
  };

  // const handleAddNode = (index: number, position: 'above' | 'below') => {
  //   setActiveTooltipIndex(position === 'above' ? index : index + 1);
  //   setIsTooltipVisible(true);
  // };

  return (
    <div className={styles.container}>
      <SimpleHeader
        workflowTitle={workflowTitle}
        handleSave={handleSave}
        navigate={navigate}
      />
      <div className={styles.workflowCanvas}>
        <div className={styles.workflowNodes}>
          <div className={styles.startNode}>
            <img src="startProcess.png" alt="start-node" />
            <div className={styles.connector}></div>
          </div>
          {nodeList.map((node, index) => (
            <div key={node.id} className={styles.nodeWrapper}>
              <div
                className={styles.addNode}
                onClick={() => toggleTooltip(index)}
                ref={(el) => {
                  addNodeRefs.current[index] = el;
                }}
              >
                <img src="plus-sign.png" alt="add" />
                {isTooltipVisible && activeTooltipIndex === index && (
                  <AddNodeTooltip
                    isVisible={isTooltipVisible}
                    onSelect={handleNodeSelect}
                  />
                )}
              </div>
              <div className={styles.connection}></div>
              <div
                onClick={() => handleOpenConfig(index)}
                style={{ position: "relative" }}
              >
                <BoxCard
                  title={node.selectedNode}
                  onDelete={() =>
                    setNodeList((prev) => prev.filter((_, i) => i !== index))
                  }
                  onAddAbove={() => {}}
                />
                {activeConfigIndex === index && node.selectedNode === "api" && (
                  <NodeConfigPanel
                    type="api"
                    value={apiConfigs[index] || defaultApiConfig}
                    onChange={handleApiConfigChange}
                  />
                )}
                {activeConfigIndex === index &&
                  node.selectedNode === "textbox" && (
                    <NodeConfigPanel
                      type="textbox"
                      value={textBoxConfigs[index] || defaultTextBoxConfig}
                      onChange={handleTextBoxConfigChange}
                    />
                  )}
                {activeConfigIndex === index &&
                  node.selectedNode === "email" && (
                    <NodeConfigPanel
                      type="email"
                      value={emailConfigs[index] || defaultEmailConfig}
                      onChange={handleEmailConfigChange}
                    />
                  )}
              </div>
              <div className={styles.connection}></div>
            </div>
          ))}
          <div
            className={styles.addNode}
            onClick={() => toggleTooltip(null)}
            ref={(el) => {
              addNodeRefs.current[nodeList.length] = el;
            }}
          >
            <img src="plus-sign.png" alt="add" />
            {isTooltipVisible && activeTooltipIndex === null && (
              <AddNodeTooltip
                isVisible={isTooltipVisible}
                onSelect={handleNodeSelect}
              />
            )}
          </div>
          <div className={styles.endNode}>
            <div className={styles.connector}></div>
            <img src="endProcess.png" alt="end-node" />
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.leftControls}>
          <img src="undo-btn.png" alt="undo" />
          <img src="redo-btn.png" alt="redo" />
        </div>
        <div className={styles.zoomControls}>
          <img src="green-lit.png" alt="green-lit-go" />
          <button onClick={() => setZoom(Math.max(0, zoom - 10))}>
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
          <button onClick={() => setZoom(Math.min(200, zoom + 10))}>
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

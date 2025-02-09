import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";

const Tooltip = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef(null);
  const tooltipRef = useRef(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    if (isVisible && targetRef.current && tooltipRef.current) {
      const targetRect = targetRef.current.getBoundingClientRect();
      setPosition({
        top: targetRect.top + window.scrollY - 35, // Position above target
        left: targetRect.left + window.scrollX + targetRect.width / 2, // Centered horizontally
      });
    }
  }, [isVisible]);

  return (
    <>
      <span
        ref={targetRef}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        style={{ display: "inline-block" }} // Ensures proper reference
      >
        {children}
      </span>

      {isVisible &&
        ReactDOM.createPortal(
          <div ref={tooltipRef} style={{ ...styles.tooltip, top: position.top, left: position.left }}>
            {text}
          </div>,
          document.getElementById("tooltip-root")
        )}
    </>
  );
};

const styles = {
  tooltip: {
    position: "absolute",
    backgroundColor: "#333",
    color: "white",
    padding: "6px 12px",
    borderRadius: "5px",
    fontSize: "14px",
    whiteSpace: "nowrap",
    transform: "translateX(-50%)",
    boxShadow: "0px 2px 5px rgba(0,0,0,0.2)",
    zIndex: 1000,
  },
};

export default Tooltip;

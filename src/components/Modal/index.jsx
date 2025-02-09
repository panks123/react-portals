import React from "react";
import ReactDOM from "react-dom";
const Modal = (props) => {
  const { open, onClose } = props;

  return open && ReactDOM.createPortal(
        <div style={styles.overlay}>
            <div style={styles.modal}>
            <h2>Modal Title</h2>
            <p>This is a modal rendered using React Portal.</p>
            <button onClick={onClose}>Close</button>
            </div>
        </div>,
        document.getElementById('modal-root')
    );
};

export default Modal;

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
  },
};

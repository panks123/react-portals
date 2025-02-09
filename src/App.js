import { useRef, useState } from "react";
import "./App.css";
import Modal from "./components/Modal";
import Tooltip from "./components/Tooltip";

function App() {
  const [open, setOpen] = useState(false);
  const [isTooltipVisible, setTooltipVisible] = useState(false);
  const buttonRef = useRef(null);
  const toggleModal = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className="App">
      <h1>Modal and Tooltip using React Portals</h1>
      <div >
        <Tooltip text="Delete">
          <button style={styles.button}>Delete</button>
        </Tooltip>

        <Tooltip text="Edit">
          <button style={styles.button}>Edit</button>
        </Tooltip>
      </div>
      <button onClick={toggleModal}>Open Modal</button>


      <Modal open={open} onClose={toggleModal} />
    </div>
  );
}

const styles = {
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    border: "none",
    backgroundColor: "#007bff",
    color: "white",
    borderRadius: "5px",
  },
};

export default App;

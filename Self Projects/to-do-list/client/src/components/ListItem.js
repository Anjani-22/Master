import TickIcon from "./TickIcon";
import ProgressBar from "./ProgressBar";
import { useState } from "react";
import Modal from "./Modal";

function ListItem({ task, getData }) {
  const [showModal, setShowModal] = useState(false);

  const deleteTask = async () => {
    try {
      const response = await fetch(`http://localhost:3000/todos/${task.id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

      // console.log("😂", response);

      // console.log("---->", process.env.REACT_APP_SERVERURL);

      if (response.status === 200) {
        getData();
      }
    } catch (error) {
      console.error("delete", error);
    }
  };
  return (
    <li className="list-item">
      <div className="info-container">
        <TickIcon />
        <p className="task-title">{task.title}</p>
        <ProgressBar progress={task.progress} />{" "}
      </div>

      <div className="button-container">
        <button className="edit" onClick={() => setShowModal(true)}>
          EDIT
        </button>
        <button className="delete" onClick={deleteTask}>
          DELETE
        </button>
      </div>
      {showModal && (
        <Modal
          mode="edit"
          setShowModal={setShowModal}
          task={task}
          getData={getData}
        />
      )}
    </li>
  );
}

export default ListItem;

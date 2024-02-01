import { useState } from "react";
import Modal from "./Modal";

function ListHeader({ listName, getData }) {
  const [showModal, setShowModal] = useState(false);

  const signOut = () => {
    console.log("signOut");
  };
  return (
    <div className="list-header">
      <h1>{listName}</h1>
      <div className="button-container">
        <button className="create" onClick={() => setShowModal(true)}>
          Add new{" "}
        </button>
        <button className="sign-out" onClick={signOut}>
          SignOut{" "}
        </button>
      </div>
      {showModal && (
        <Modal mode="create" setShowModal={setShowModal} getData={getData} />
      )}
    </div>
  );
}

export default ListHeader;

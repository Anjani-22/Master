import { useState } from "react";
import Modal from "./Modal";
import { useCookies } from "react-cookie";

function ListHeader({ listName, getData }) {
  const [showModal, setShowModal] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const signOut = () => {
    removeCookie("Email");
    removeCookie("AuthToken");
    window.location.reload();

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

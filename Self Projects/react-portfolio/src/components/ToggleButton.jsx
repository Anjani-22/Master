import React from "react";

function ToggleButton({ handleOnClick }) {
  return (
    <button className="navbar-toggler" type="button" onClick={handleOnClick}>
      <i className="fas fa-bars text-white"></i>
    </button>
  );
}

export default ToggleButton;

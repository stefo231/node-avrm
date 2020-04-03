import React from "react";

export default function Popup(props) {
  return (
    <div className="popup">
      <button onClick={props.close} className="close-popup">
        &times;
      </button>
      <div className="popup-container">
        <img src={props.photoUrl} alt={props.title} />
      </div>
    </div>
  );
}

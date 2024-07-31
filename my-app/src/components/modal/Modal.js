import React from "react";
import "./modal.css";
import Cross from "../../images/icons/close.png";
export default function Modal({ show, handleClose, children }) {
  return (
    <>
      <div className={`modal ${show ? "display-block" : "display-none"}`}>
        <section className="modal-content">
          <button className="close-icon-btn">
            <img src={Cross} alt="crosspic" className="close-icon" onClick={handleClose} />
          </button>
          {children}
        </section>
      </div>
    </>
  );
}

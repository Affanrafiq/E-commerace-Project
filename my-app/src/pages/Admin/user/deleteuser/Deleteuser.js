import React from "react";
import "./Deleteuser.css";
export default function Deleteuser({ handleClose, handelDelete }) {
  return (
    <>
      <form>
        <div className="delete-user-body">
          <b>Delete User</b>
        </div>
        <div className="delete-user-body2">
          Are you sure ! you want to delete this
        </div>
        <div className="delete-user-body2">user ?</div>

        <div className="delete-user-body-button">
          <button
            className="delete-button1"
            type="button"
            onClick={handelDelete}
          >
            Delete
          </button>
          <button
            className="delete-button2"
            type="button"
            onClick={handleClose}
          >
            Cancel
          </button>
        </div>
      </form>
    </>
  );
}

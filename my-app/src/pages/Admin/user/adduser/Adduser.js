import React, { useEffect, useState } from "react";
import "./Adduser.css";

export default function Adduser(props) {
  const [payload, setPayload] = useState({
    role: "user",
    name: "",
    email: "",
    password: "", 
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setPayload((prev) => ({ ...prev, [name]: value }));
  };
  const addUser = (users) => {
    if (users) {
      users.push({ ...payload, id: users?.length + 1 });
    } else {
      users = [{ ...payload, id: 1 }];
    }
    localStorage.setItem("users", JSON.stringify(users));
  };

  const updateUser = (users) => {
    const existUserIndex = users?.findIndex(
      (user) => user.id === props.editData?.id
    );

    users[existUserIndex] = payload;

    localStorage.setItem("users", JSON.stringify(users));
  };

  const submitForm = (e) => {
    e.preventDefault();
    let users = JSON.parse(localStorage.getItem("users"));
    if (props.editData) {
      updateUser(users);
    } else {
      addUser(users);
    }
    props.handleClose()
  };
  useEffect(() => {
    if (props.editData) {
      setPayload(props.editData);
    } else {
      setPayload({ role: "user", name: "", email: "", password: "" });
    }
  }, [props.editData]);
  return (
    <form className="add-user-wrapper" onSubmit={submitForm}>
      <div className="title">{props.title}</div>

      <label htmlFor="fname">Name:</label>
      <input
        type="text"
        name="name"
        value={payload.name}
        onChange={handleOnChange}
      />

      <label htmlFor="email">
        <b>Email:</b>
      </label>
      <input
        type="email"
        name="email"
        value={payload.email}
        id=""
        onChange={handleOnChange}
      />

      <label htmlFor="password">
        <b>Password:</b>
      </label>
      <input
        type="text"
        name="password"
        value={payload.password}
        id=""
        onChange={handleOnChange}
      />

      <div className="btn-group">
        <button type="submit">{props.add}</button>
        <button type="button" onClick={props.handleClose}>
          Cancel
        </button>
      </div>
    </form>
  );
}

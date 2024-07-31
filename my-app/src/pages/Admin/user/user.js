import React, { useEffect, useState } from "react";
import Pencil from "../../../images/icons/pencil.png";
import Admindelete from "../../../images/icons/delete.png";
import Adduser from "./adduser/Adduser";
import Delete from "./deleteuser/Deleteuser";
import Modal from "../../../components/modal/Modal";
import "./user.css";
export default function User() {
  const [isModalVisible, setModalVisibility] = useState(false);
  const [isEditUser, setEditUser] = useState(false);
  const [isDeleteUser, setDeleteUser] = useState(false);
  const [editData, setEditData] = useState({});
  const [deleteId, setDeleteId] = useState(null);
  const [usersList, setUsersList] = useState([]);

  const handleShowDeleteUser = (id) => {
    setDeleteUser(true);
    setDeleteId(id);
  };
  const handleCloseDeleteUser = () => {
    setDeleteUser(false);
  };
  const handleEditUser = (data) => {
    setEditData(data);
    setEditUser(true);
  };
  const handleCloseEditUser = () => {
    setEditUser(false);
  };
  const handleOpenModal = () => {
    setModalVisibility(true);
  };
  const handleCloseModal = () => {
    setModalVisibility(false);
  };
  const handelDelete = () => {
    let newList = usersList.filter((user) => user.id !== deleteId);
    setUsersList(newList);
    setDeleteUser(false)
    localStorage.setItem("users" , JSON.stringify(newList) )
  };
  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users"));
    setUsersList(users);
  }, []);

  return (
    <>
      <Modal show={isModalVisible} handleClose={handleCloseModal}>
        <Adduser
          title="Add new User"
          add="Add"
          handleClose={handleCloseModal}
        />
      </Modal>
      <Modal show={isEditUser} handleClose={handleCloseEditUser}>
        <Adduser
          title="Edit User"
          add="Update"
          editData={editData}
          handleClose={handleCloseEditUser}
        />
      </Modal>
      <Modal show={isDeleteUser} handleClose={handleCloseDeleteUser}>
        <Delete handelDelete={handelDelete} handleClose={handleCloseDeleteUser} />
      </Modal>
      {/* USER-heading */}
      <div className="user-heading">
        <h3> USER</h3>
        <div>
          <button onClick={handleOpenModal} className="add-new-button">
            Add New
          </button>
        </div>
      </div>
      <div className="table-wrapper">
        <table className="table">
          <thead>
            <tr>
              <th align="left">ID</th>
              <th align="left">Name</th>
              <th align="left">Email</th>
              <th width="135px" align="center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {usersList && usersList.length > 0 ? (
              usersList.map((user,index) => (
                <tr>
                  <td>
                    <b>{index+1}</b>
                  </td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td className="Admin-btn">
                    <button>
                      <img
                        src={Pencil}
                        alt=""
                        onClick={() => handleEditUser(user)}
                      />
                    </button>
                    <button>
                      <img
                        src={Admindelete}
                        alt=""
                        onClick={() => handleShowDeleteUser(user.id)}
                      />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4}>
                  <h1 style={{ textAlign: "center" }}>No Data</h1>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <h4> Totel Users: {usersList?.length ? usersList.length : 0}</h4>
    </>
  );
}

import React from "react";
import "./product.css";
import { useState ,useEffect } from "react";
import Pencil from "../../../images/icons/pencil.png";
import Admindelete from "../../../images/icons/delete.png";
import Addproduct from "../product/add/addproduct";
import Delete from "./Deleteproduct/Delete";
import Modal from "../../../components/modal/Modal";
export default function Adminproduct() {
  const [isEditProduct, setEditProduct] = useState(false);
  const [isDeleteProduct, setDeleteProduct] = useState(false);
  const [isAddProduct, setAddProduct] = useState(false);
  const [editData , setEditData]=useState({});
  const [deleteId, setDeleteId] = useState(null);
  const [productsList, setProductsList] = useState([]);
  const handleAddProduct = () => {
    setAddProduct(true);
  };
  const handleCloseAddProduct = () => {
    setAddProduct(false);
  };
  const handleShowDeleteProduct = (id) => {
    setDeleteProduct(true);
    setDeleteId(id);
  };
  const handleCloseDeleteProduct = () => {
    setDeleteProduct(false);
  };
  const handleEditProduct = (data) => {
    setEditData(data);
    setEditProduct(true);
  };
  const handleCloseEditProduct = () => {
    setEditProduct(false);
  };
  const handelDelete = () => {
    let newList = productsList.filter((product) => product.id !== deleteId);
    setProductsList(newList);
    setDeleteProduct(false)
    localStorage.setItem("products" , JSON.stringify(newList) )
  };
  useEffect(() => {
    const products = JSON.parse(localStorage.getItem("products"));
    setProductsList(products);
  }, []);
  return (
    <>
      <Modal show={isAddProduct} handleClose={handleCloseAddProduct}>
        <Addproduct title={"Add New Product"} add="Add" handleClose={handleCloseAddProduct} />
      </Modal>
      <Modal show={isEditProduct} handleClose={handleCloseEditProduct}>
        <Addproduct title={"Edit Product"} add="Update" editData ={editData} handleClose={handleCloseEditProduct}/>
      </Modal>

      <Modal show={isDeleteProduct} handleClose={handleCloseDeleteProduct}>
        <Delete  handelDelete={handelDelete}  handleClose={handleCloseDeleteProduct}/>
      </Modal>

      <div className="adminproduct-list">
        <h3>Product List</h3>

        <button
          className="adminproduct-list-add-new"
          onClick={handleAddProduct}
        >
          Add New
        </button>
      </div>
      <div className="admin-product-table-wrapper">
        <table className="table1">
          <thead>
      
            <tr>
              <th>ID</th>
              <th>Images</th>
              <th>Name</th>
              <th>Discription</th>
              <th>Price</th>
              <th>Actions </th>
            </tr>
          </thead>
           <tbody>
          {productsList && productsList.length > 0 ? (
              productsList.map((products,index) => (
              <tr>
                <td>
                  <b>{index+1}</b>
                </td>
                <td>
                  <img src={products.image} alt="" id="product-cars"  />
                </td>
                <td>{products.name}</td>
                <td>
                 {products.discription}
                </td>
                <td>{products.price}</td>
                <td>
                  <div className="button-display">
                    <button>
                      <img src={Pencil} alt="" onClick={handleEditProduct} />
                    </button>
                    <button>
                      <img
                        src={Admindelete}
                        alt=""
                        onClick={() => handleShowDeleteProduct(products.id)}
                      />
                    </button>
                  </div>
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
    </>
  );
}

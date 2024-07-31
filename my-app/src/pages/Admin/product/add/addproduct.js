import React from "react";
import "./addproduct.css";
import {useEffect, useState } from "react";
export default function AddProduct(props) {
  const [addProduct, setAddProduct] = useState({
    name: "",
    price: "",
    image: "",
    discription: "",
  });
 
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setAddProduct((prev) => ({ ...prev, [name]: value }));
  };

  const submitForm = (e) => {
    e.preventDefault();
    let products = JSON.parse(localStorage.getItem("users"));
    if (props.editData) {
      updateProduct(products);
    } else {
      setAddProduct(products);
    }
  };

  
  const updateProduct = (products) => {
    const existProductIndex = products?.findIndex(
      (product) => product.id === props.editData?.id
    );

    products[existProductIndex] = addProduct;

    localStorage.setItem("products", JSON.stringify(products));
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0]; 
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64Image = e.target.result;
        setAddProduct((prev) => ({ ...prev, image: base64Image }));
      };
      reader.readAsDataURL(file);
    }
  };
  useEffect(() => {
    if (props.editData) {
      setAddProduct(props.editData);
    } else {
      setAddProduct({  
      name: "",
      price: "",
      image: "",
      discription: "", });
    }
  }, [props.editData]);
  return (
    <div className="add-product">
      <form onSubmit={submitForm}>
        <div className="body">{props.title}</div>

        <label htmlFor="fname">Name:</label>
        <input
          type="text"
          name="name"
          value={addProduct.name}
          onChange={handleOnChange}
        />

        <label htmlFor="email">
          <b>Price:</b>
        </label>
        <input
          type="text"
          id=""
          name="price"
          value={addProduct.price}
          onChange={handleOnChange}
        />

        <label for="fileInput">Image:</label>
        <input
          type="file"
          id="fileInput"
          name="image"
          accept=".jpg, .jpeg, .png"
          onChange={handleImageUpload}
        />

        <label htmlFor="email">
          <b>Discription:</b>
        </label>
        <textarea
          type="text"
          id=""
          name="discription"
          rows={3}
          value={addProduct.discription}
          onChange={handleOnChange}
        />

        <div className="btn-group">
          <button type="submit">{props.add}</button>
          <button  onClick={props.handleClose}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

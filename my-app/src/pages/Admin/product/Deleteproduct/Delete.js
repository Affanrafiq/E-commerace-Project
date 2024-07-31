import React from 'react'
import "./Delete.css"
export default function DeleteProduct({handleClose, handelDelete}) {
  return (
    <>
    
    <form>
      <div className="delete-product-body">
        <b >Delete Product</b>
      </div>

      <div className="delete-product-body2">
        Are you sure ! you want to delete this
      </div>
      <div className="delete-product-body2">product ?</div>

      <div className="delete-product-body-button">
        <button className="delete-product-button1"  type='button' onClick={handelDelete}>Delete</button>
        <button className="delete-product-button2" type='button' onClick={handleClose}>Cancel</button>
      </div>
    </form>

</>
  )
}

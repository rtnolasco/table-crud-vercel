import React from 'react'


const DeleteAlert = ({productId, productTitle}) => {
  return (
    <div><h5>You are about to delete a product</h5>
    <p>Are you sure you want to delete {productId}: {productTitle}?</p></div>
  )
}

export default DeleteAlert
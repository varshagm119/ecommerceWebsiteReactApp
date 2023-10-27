import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
  const params = useParams();
  return (
    <div>
      {params.productId}
      <p>Review of {params.productId} is good </p>
    </div>
  )
}

export default ProductDetails
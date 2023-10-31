import React from "react";
import { useParams } from "react-router-dom";
import { productsArr } from "../utils/mock-data";
import { Button } from "react-bootstrap";

const ProductDetails = () => {
  const params = useParams();
  const product = productsArr.find((p) => p.title === params.productId)
  console.log(product)
  if (!product) {
    return <div>Product not found.</div>;
  }
  return (
    <div>
      <h1>{product.title}</h1>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
      <img src={product.imageUrl} alt={product.title} />
      <br/>
      <Button variant="dark" >Add to Cart</Button>
      
    </div>
  );
};

export default ProductDetails;

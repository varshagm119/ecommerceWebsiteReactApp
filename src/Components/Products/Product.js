import React from "react";
import SingleProduct from "./SingleProduct";
import {  Col, Container, Row } from "react-bootstrap";
import { CartState } from "../../Context/Context";

const Product = () => {
  const {state: {products}} = CartState();

  return <div>

    <div style={{padding:'40px', backgroundColor:"#777", textAlign:"center"}}>
        <h1 style={{color:'white', fontWeight:'bold', fontSize:'100px'}}>The Generics</h1>
    </div>
   
    <Container className="mt-3">
        <Row className="justify-content-md-center g-3" md={2} xs={1} lg={3}>
          {products.map(item => (
            <Col key={item.id}> 
              <SingleProduct item={item} key={item.id} /> 
            </Col>
          ))}
        </Row>
    </Container>
  </div>;
};

export default Product;

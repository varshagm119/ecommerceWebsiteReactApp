import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const Product = () => {
  const productsArr = [
    {
        id:1,
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
        id:2,
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
        id:3,
        title: 'Yellow and Black Colors',
        
        price: 70,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        
        },
        
        {
        id:4,
        title: 'Blue Color',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        
        }
  ];

  return <div>

    <div style={{padding:'40px', backgroundColor:"#777", textAlign:"center"}}>
        <h1 style={{color:'white', fontWeight:'bold', fontSize:'100px'}}>The Generics</h1>
    </div>
   
    <Container className="mt-3">
        <Row className="justify-content-md-center">
        
                {productsArr.map(product => {
                    return(
                        <Col xs={6}>
                        <Card key={product.id} className="mb-4" style={{width: '18rem'}}>
                            <Card.Header>{product.title}</Card.Header>
                            <Card.Img src={product.imageUrl}  variant="top"/>
                            <Card.Body>
                                <Card.Text>${product.price}</Card.Text>
                                <Button variant="primary">ADD TO CART</Button>
                            </Card.Body>
                        </Card> </Col>
                    );
                })}
        
        </Row>
    </Container>
  </div>;
};

export default Product;

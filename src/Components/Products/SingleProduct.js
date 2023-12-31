import React from "react";
import { Button, Card } from "react-bootstrap";
import { CartState } from "../../Context/Context";
import { Link } from "react-router-dom";

const SingleProduct = ({item}) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <Card className="h-100">
      <Link to={`/store/${item.title}`}>
      <Card.Img
        variant="top"
        src={item.imageUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
        </Link>

      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-6">
          <span className="fs-2">{item.title}</span>
          <span className="ms-2 text-muted">${item.price}</span>
        </Card.Title>
        {cart.some((p) => p.id === item.id) ? (
          <Button
           variant="light"
           disabled
          >
            Added to cart
          </Button>
        ) : (
          <Button
            onClick={() => {
              dispatch({
                type: "ADD",
                payload: item
              });
            }}
          >
            Add
          </Button>
        )}
      </Card.Body>
    </Card>
    
  );
};

export default SingleProduct;

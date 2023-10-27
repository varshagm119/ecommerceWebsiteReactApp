import React from "react";
import { Dropdown, Badge, Button, Form } from "react-bootstrap";
import { FiShoppingCart } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CartState } from "../../Context/Context";
import "../styles.css";

const Cart = () => {
  const {
    state: { cart, totalAmount },
    dispatch,
  } = CartState();
//console.log(cart)
  // const updateQtyHandler = (prod, e) => {
  //   const newQty = parseInt(e.target.value);
  //   dispatch({
  //     type: "ADD_TO_CART",
  //     payload: {
  //       product: prod,
  //       qty: newQty,
  //     },
  //   });
  //   console.log(prod);
  // };

  

  return (
    <>
      <Dropdown className="custom-dropdown">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          <FiShoppingCart color="white" fontSize="25px" />
          <Badge>{cart.length}</Badge>
        </Dropdown.Toggle>
        <Dropdown.Menu style={{ minWidth: 350 }}>
          {cart.length > 0 ? (
            <>
              {cart.map((prod) => (
                <span className="cartitem" key={prod.id}>
                  <img
                    src={prod.imageUrl}
                    className="cartItemImg"
                    alt={prod.title}
                  />
                  <div className="cartItemDetail">
                    <span>{prod.title}</span>
                    <span>₹ {prod.price}</span>
                  </div>

                  <span style={{ width: 50 }}>
                    <Form.Control
                      type="number"
                      onChange={(e) =>
                        dispatch({
                          type: "Edit",
                          payload: { product: prod, qty: parseInt(e.target.value) },
                        })
                      }
                      min={1}
                      size="sm"
                      defaultValue={1}
                    ></Form.Control>
                  </span>

                  <AiFillDelete
                    fontSize="20px"
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: prod,
                      })
                    }
                  />
                </span>
              ))}

             <span>${totalAmount}</span>   

              <Link to="/store">
                <Button style={{ width: "95%", margin: "0 10px" }}>
                  purchase
                </Button>
              </Link>
            </>
          ) : (
            <span style={{ padding: 5 }}>Cart is Empty</span>
          )}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default Cart;

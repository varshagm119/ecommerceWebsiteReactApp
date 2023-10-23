import React from "react";
import { Dropdown, Badge, Button } from "react-bootstrap";
import {FiShoppingCart} from 'react-icons/fi';
import CartItems from "./CartItems";
import { AiFillDelete } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { CartState } from "../../Context/Context";
import '../styles.css'

const Cart = () => {
    const {state: {cart}, dispatch} = CartState();
    return(
        <>
         <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <FiShoppingCart color="white" fontSize='25px'/>
                  <Badge>{cart.length}</Badge>
                </Dropdown.Toggle>
                <Dropdown.Menu style={{minWidth: 370}}>
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
                    <Link to="/cart">
                      <Button style={{ width: "95%", margin: "0 10px" }}>
                        Go To Cart
                      </Button>
                    </Link>
                  </>
                  ) : (
                    <span style={{padding: 5}}>Cart is Empty</span>
                  )}
                </Dropdown.Menu>
              </Dropdown>
        </>
    )
};

export default Cart;
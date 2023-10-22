import React from "react";
import { Dropdown, Badge } from "react-bootstrap";
import {FiShoppingCart} from 'react-icons/fi';
import CartItems from "./CartItems";

const Cart = () => {

    return(
        <>
         <Dropdown alignRight>
                <Dropdown.Toggle variant="success">
                  <FiShoppingCart color="white" fontSize='25px'/>
                  <Badge>{10}</Badge>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <CartItems />
                </Dropdown.Menu>
              </Dropdown>
        </>
    )
};

export default Cart;
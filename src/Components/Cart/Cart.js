import React, { useEffect, useState } from "react";
import { Dropdown, Badge, Button, Form } from "react-bootstrap";
import { FiShoppingCart } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CartState } from "../../Context/Context";
import { useUserAuth } from "../../Context/UserAuthContext";
import { fs } from "../../Firebase";
import { collection, addDoc } from "firebase/firestore/lite";
import "../styles.css";

const Cart = () => {
  const [totalAmtExpose, setTotalAmtExpose] = useState(false);
  const { user, logOut } = useUserAuth();
  const uid = "User_" + user.uid;
  const {
    state: { cart, totalAmount },
    dispatch,
  } = CartState();

  // const [showDiv, setShowDiv] = useState(false);
  // let individualProduct;
  const addFirestore = () => {
    setTotalAmtExpose(true);
    cart.map(async (prod) => {
      const userCartRef = collection(fs, uid);
      await addDoc(userCartRef, prod);
    });
  };

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

                  <div>
                    <Button
                      variant="outline-dark"
                      onClick={() => dispatch({ type: "REMOVE", payload: {
                        product: prod,
                        qty: 1,
                      }})}
                    >
                      -
                    </Button>
                    <span>{prod.qty}</span>
                    <Button
                      variant="outline-dark"
                      onClick={() => dispatch({ type: "EDIT", payload: {
                        product: prod,
                        qty: 1,
                      }, })}
                    >
                      +
                    </Button>
                  </div>
                  <span style={{ width: 50 }}>
                    <Form.Control
                      type="number"
                      onChange={(e) =>
                        dispatch({
                          type: "EDIT",
                          payload: {
                            product: prod,
                            qty: parseInt(e.target.value),
                          },
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
                        type: "Remove_from_cart",
                        payload: {product:prod},
                      })
                    }
                  />
                </span>
              ))}

              {totalAmtExpose && <span>${totalAmount}</span>}

              <Link to="/store">
                <Button
                  style={{ width: "95%", margin: "0 10px" }}
                  onClick={addFirestore}
                >
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

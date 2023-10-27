import React, {useRef} from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

const ContactUs = () => {
    const emailRef = useRef('');
    const nameRef = useRef('');
    const phoneRef = useRef('');
    const submitHandler = async(e) => {
        e.preventDefault();
        const userDetails = {
            email: emailRef.current.value,
            name: nameRef.current.value,
            phone: phoneRef.current.value
        }
        try{
            const res = await fetch('https://ecommerce-fba55-default-rtdb.firebaseio.com/Ecommerce.json',
            {
                method: 'POST',
                body: JSON.stringify(userDetails),
                headers: {
                  "Content-Type": "application/json",
                },
            })
            if(!res.ok){
                throw new Error("Details not fetched to DB")
            }
        }
        catch(error){
            console.error('Error:',error)
        }

    }
  return (
    <div>
      <Card className="mt-3" style={{ width: "30rem" }}>
        <Card.Body>
          <Form onSubmit={submitHandler}>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label column sm="4" style={{fontWeight:"bold"}}>
                Email address
              </Form.Label>
              <Col sm="8"></Col>
              <Form.Control type="email" placeholder="name@example.com" ref={emailRef} />
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="exampleForm.ControlInput2"
            >
              <Form.Label column sm="4" style={{fontWeight:"bold"}}>
                Name
              </Form.Label>
              <Col sm="8"></Col>
              <Form.Control type="text" ref={nameRef}/>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="exampleForm.ControlInput3"
            >
              <Form.Label column sm="4" style={{fontWeight:"bold"}}>
                Phone Number
              </Form.Label>
              <Col sm="8"></Col>
              <Form.Control type="text" ref={phoneRef} />
            </Form.Group>
            <Button type="submit">Add</Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ContactUs;

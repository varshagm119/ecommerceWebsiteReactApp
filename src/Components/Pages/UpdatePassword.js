import React from "react";
import { Button, Form, FormGroup } from "react-bootstrap";

const UpdatePassword = () => {
  return (
    <div>
      <Form>
        <FormGroup className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Email address" />
        </FormGroup>
        <Button>Change Password</Button>
      </Form>
    </div>
  );
};

export default UpdatePassword;

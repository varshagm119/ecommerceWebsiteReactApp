import React, {useState} from "react";
import { Alert, Button, Form, FormGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../Context/UserAuthContext";

const Signup = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {signUp} = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    setError("");
    try{
        await signUp(email,password);
        navigate("/");
    }catch(err){setError(err.message)}
  };

  return (
    <div className="p-4 box">
        <h2 className="mb-3">Firebase Auth Signup</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
        <FormGroup className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>
          <div className="d-grid gap-2">
            <Button variant="primary" type="submit">Sign up</Button>
          </div>
        </Form>
        <div className="mt-3 text-center">
            Already have an account? <Link to='/'>Log In</Link>
        </div>
    </div>
  )
};

export default Signup;

import React, { useState } from "react";
import { Alert, Button, Form, FormGroup, FormLabel } from "react-bootstrap";
import classes from '../Auth/AuthForm.module.css'
import GoogleButton from "react-google-button";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../Context/UserAuthContext";


const Login = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {logIn, googleSignIn} = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    setError('');
    try{
        await logIn(email,password);
        navigate('/store');
    }
    catch(err){
        setError(err.message);
    }
  }

  const handleGoogleSignIn = async(e) => {
    e.preventDefault();
    setError('');
    try{
        await googleSignIn();
        navigate('/store');
    }
    catch(err){}
  }


  return (
    <div className="loginBox">
      <div className="p-4 box">
        <h2 className="mb-3">Firebase Auth Login</h2>
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
            <Button variant="primary" type="submit">Log In</Button>
          </div>
        </Form>
        <hr />
        <div>
            <GoogleButton className="g-btn" type="dark" onClick={handleGoogleSignIn} />
        </div>
      </div>
      <div className="p-4 box mt-3 text-center">
        Don't have an account? <Link to='/signup'>Sign up</Link>
      </div>
    </div>
  );
};

export default Login;

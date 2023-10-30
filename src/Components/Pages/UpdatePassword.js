import React, { useRef, useState } from "react";
import { Button, Form, FormGroup } from "react-bootstrap";
import { useUserAuth } from "../../Context/UserAuthContext";
import { auth } from "../../Firebase";
//import {auth} from '../Firebase';

const UpdatePassword = () => {
  //const { user } = useUserAuth();
  //const idToken = user.uid;
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState(null);
  //console.log(user);
  //const newPasswordInputRef = useRef();
  const submitHandle = () => {
    const user = auth.currentUser;
    //e.preventDefault();
    //const enteredNewPassword = newPasswordInputRef.current.value;
    user
      .updatePassword(newPassword)
      .then(() => {
        console.log("Password updated");
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        console.log("Error updating password:", error);
      });
    // fetch(`https://identitytoolkit.googleapis.com/v1/accounts:update?key=${idToken}`,
    // {
    //     method: 'POST',
    //     body: JSON.stringify({
    //         idToken: idToken,
    //         password: enteredNewPassword,
    //         returnSecureToken: false
    //     }),
    //     headers:{
    //         'Content-Type': 'application/json'
    //     }

    // }
    // )
  };
  return (
    <div>
      <input
        type="password"
        placeholder="New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <button onClick={submitHandle}>Change Password</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default UpdatePassword;

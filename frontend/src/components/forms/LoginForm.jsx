import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

//Bootstrap
import { Form, Button, Container } from "react-bootstrap";

import { setCredentials } from "../../features/auth/authSlice";
import  {useLoginMutation} from  "../../features/auth/authApiSlice"


const LoginForm = () => {
  //References
  const userRef = useRef();
  const errRef = useRef();

  //States
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("")
  const [errorMsg, setErrMsg] = useState("")

  //Dispatcher
  const dispatch = useDispatch();

  //Navigator
  const navigate = useNavigate();

  //RTK Query Hook
  const [login, isLoading] = useLoginMutation();

  //Setting form feild in focus when login page loads
  useEffect(() => {
    //Focusing on load
    userRef.current.focus();
  }, [])

  //Keeping Error MEssages Clean
  useEffect(() => {
    setErrMsg("")
  }, [user, pwd])

  //Submitting form data to server
  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      const userData = await login({user, pwd}).unwrap();
      console.log(userData)

      //Dispatching data to store
      dispatch(setCredentials({...userData, user}))

      //Reseting local state (We don't want to store this as it can be seen by anyone)
      setUser("")
      setPwd("")

      //Redirecting to dashboard
      navigate("/dashboard")
    }catch(error){
      console.log(error)
      errRef.current.focus();
    }
  }

  //Form Input Event Handling
  const handleUserChange = (event) => setUser(event.target.value);
  const handlePwdChange = (event) => setPwd(event.target.value);

  return (
    <Container className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
        <h1 className="mb-1">Login To Dashboard</h1>

        <p ref={errRef} className={errorMsg ? "errmsg" : "offscreen"} ></p>

      <Form onSubmit={handleSubmit} style={{ minWidth: "400px" }}>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            ref={userRef}
            type="email"
            name="email"
            value={user}
            onChange={handleUserChange}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={pwd}
            onChange={handlePwdChange}
            required
          />
        </Form.Group>

        <Button type="submit" className="btn btn-success mt-1">Submit</Button>
      </Form>
    </Container>
  );
};

export default LoginForm;

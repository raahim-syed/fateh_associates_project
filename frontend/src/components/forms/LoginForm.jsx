import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

//Bootstrap
import { Form, Button, Container } from "react-bootstrap";

import { setCredentials } from "../../features/auth/authSlice";
import  {useLoginMutation} from  "../../features/auth/authApiSlice"


const LoginForm = () => {
  //References
  const emailRef = useRef();
  const errRef = useRef();

  //States
  const [email, setEmail] = useState("");
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
    emailRef.current.focus();
  }, [])

  //Keeping Error MEssages Clean
  useEffect(() => {
    setErrMsg("")
  }, [email, pwd])

  //Submitting form data to se rver
  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      const userData = await login({email, password: pwd}).unwrap();
      console.log(userData)

      if(userData.stack) {
        setErrMsg(userData.message)
      }else{
        //Dispatching data to store
        dispatch(setCredentials({...userData, email}))

        //Reseting local state (We don't want to store this as it can be seen by anyone)
        setEmail("")
        setPwd("")

        //Redirecting to dashboard
        navigate("/dashboard")
      }
    }catch(error){
      console.log(error)
      errRef.current.focus();
    }
  }

  //Form Input Event Handling
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePwdChange = (event) => setPwd(event.target.value);

  return (
    <Container className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
        <h1 className="mb-1">Login To Dashboard</h1>

        <p ref={errRef} className={errorMsg ? "errmsg" : "offscreen"} ></p>

      <Form onSubmit={handleSubmit} style={{ minWidth: "400px" }}>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
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

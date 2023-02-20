import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { login } from "../../features/auth/authService";

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const credentials = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
    //
    dispatch(login(credentials))
      .then((user) => {
        // Redirect the user to the dashboard page
      })
      .catch((error) => {
        // Handle the login error
      });
  };

  const handleInputChange = (event) => {

  }

  //-----------
  return (
    <Container className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
        <h1 className="mb-1">Login To Dashboard</h1>
      <Form onSubmit={handleSubmit} style={{ minWidth: "400px" }}>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={login.email}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="payRate"
            value={login.password}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Button type="submit" className="btn btn-success mt-1">Submit</Button>
      </Form>
    </Container>
  );
};

export default LoginForm;

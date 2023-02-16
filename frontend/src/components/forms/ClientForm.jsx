import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

const Login = () => {

  return (
    <Container className="d-flex flex-column align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
        <h1 className="mb-1">Add a Client</h1>
      <Form style={{ minWidth: "400px" }}>
        <Form.Group>
          <Form.Label>Client Name:</Form.Label>
          <Form.Control
            type="text"
            name="name"
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Client Address</Form.Label>
          <Form.Control
            type="text"
            name="address"
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Client Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            required
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Additional Email</Form.Label>
          <Form.Control
            type="email"
            name="additionalEmails"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            name="phoneNumber"
          />
        </Form.Group>

        <Button type="submit" className="btn btn-success mt-1">Add Client</Button>
      </Form>
    </Container>
  );
};

export default Login;

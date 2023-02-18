import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const UmbrellaForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    contactName: "",
    address: "",
    VATNumber: "",
    companyNumber: "",
    email: "",
    additionalEmailAddresses: [],
    phoneNumber: "",
    bankDetails: "",
    invoices: [],
    payRate: {
      Day: 0,
      Night: 0,
      Sunday: 0
    }
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handlePayRateChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      payRate: { ...formState.payRate, [name]: value }
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // submit form using redux action
  };

  return (
    <Container>
        <h1>Add Umbrella</h1>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formState.name}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="contactName">
              <Form.Label>Contact Name</Form.Label>
              <Form.Control
                type="text"
                name="contactName"
                value={formState.contactName}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                value={formState.address}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="VATNumber">
              <Form.Label>VAT Number</Form.Label>
              <Form.Control
                type="text"
                name="VATNumber"
                value={formState.VATNumber}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="companyNumber">
              <Form.Label>Company Number</Form.Label>
              <Form.Control
                type="text"
                name="companyNumber"
                value={formState.companyNumber}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formState.email}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="additionalEmailAddresses">
              <Form.Label>Additional Email Addresses</Form.Label>
              <Form.Control
                type="text"
                name="additionalEmailAddresses"
                value={formState.additionalEmailAddresses}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="phoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                name="phoneNumber"
                value={formState.phoneNumber}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
        </Col>
        </Row>
        </Form>
    </Container>
    )
  }

  export default UmbrellaForm;
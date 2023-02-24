import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const UmbrellaProfileForm = () => {
  const [name, setName] = useState('');
  const [contactName, setContactName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [additionalEmailAddresses, setAdditionalEmailAddresses] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formContactName">
        <Form.Label>Contact Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter contact name"
          value={contactName}
          onChange={(e) => setContactName(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formAdditionalEmailAddresses">
        <Form.Label>Additional Email Addresses</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter additional email addresses, separated by commas"
          value={additionalEmailAddresses.join(',')}
          onChange={(e) =>
            setAdditionalEmailAddresses(
              e.target.value.split(',').map((email) => email.trim())
            )
          }
        />
      </Form.Group>

      <Form.Group controlId="formPhoneNumber">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="tel"
          placeholder="Enter phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default UmbrellaProfileForm;

import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const InvoiceForm = () => {
  const [candidateName, setCandidateName] = useState('');
  const [description, setDescription] = useState('');
  const [umbrella, setUmbrella] = useState('');
  const [invoiceLink, setInvoiceLink] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Submit the form data to the server
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="candidateName">
        <Form.Label>Candidate Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter candidate name"
          value={candidateName}
          onChange={(event) => setCandidateName(event.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter invoice description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="umbrella">
        <Form.Label>Umbrella</Form.Label>
        <Form.Control
          as="select"
          value={umbrella}
          onChange={(event) => setUmbrella(event.target.value)}
          required
        >
          <option value="">Select an umbrella organization</option>
          {/* TODO: Populate the options dynamically from the server */}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="invoiceLink">
        <Form.Label>Invoice Link</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter link to invoice PDF"
          value={invoiceLink}
          onChange={(event) => setInvoiceLink(event.target.value)}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default InvoiceForm;

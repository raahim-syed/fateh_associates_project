import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const SpecialityForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [dayRate, setDayRate] = useState(0);
  const [nightRate, setNightRate] = useState(0);
  const [sundayRate, setSundayRate] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // code to submit form data to backend API
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          type='text'
          placeholder='Enter description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Day Rate</Form.Label>
        <Form.Control
          type='number'
          placeholder='Enter day rate'
          value={dayRate}
          onChange={(e) => setDayRate(e.target.value)}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Night Rate</Form.Label>
        <Form.Control
          type='number'
          placeholder='Enter night rate'
          value={nightRate}
          onChange={(e) => setNightRate(e.target.value)}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Sunday Rate</Form.Label>
        <Form.Control
          type='number'
          placeholder='Enter sunday rate'
          value={sundayRate}
          onChange={(e) => setSundayRate(e.target.value)}
        />
      </Form.Group>

      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </Form>
  );
};

export default SpecialityForm;

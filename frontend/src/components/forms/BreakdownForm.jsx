import React, { useState } from 'react';
import { Form, FormGroup, FormLabel, FormControl, Button } from 'react-bootstrap';

const BreakdownForm = () => {
  const [candidateName, setCandidateName] = useState('');
  const [umbrella, setUmbrella] = useState('');
  const [dayHrs, setDayHrs] = useState(0);
  const [nightHrs, setNightHrs] = useState(0);
  const [sundayHrs, setSundayHrs] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <FormLabel>Candidate Name</FormLabel>
        <FormControl type="text" value={candidateName} onChange={(e) => setCandidateName(e.target.value)} required />
      </FormGroup>
      <FormGroup>
        <FormLabel>Umbrella</FormLabel>
        <FormControl type="text" value={umbrella} onChange={(e) => setUmbrella(e.target.value)} required />
      </FormGroup>
      <FormGroup>
        <FormLabel>Breakdown Hours</FormLabel>
        <FormControl type="number" placeholder="Day Hrs" value={dayHrs} onChange={(e) => setDayHrs(e.target.value)} required />
        <FormControl type="number" placeholder="Night Hrs" value={nightHrs} onChange={(e) => setNightHrs(e.target.value)} required />
        <FormControl type="number" placeholder="Sunday Hrs" value={sundayHrs} onChange={(e) => setSundayHrs(e.target.value)} required />
      </FormGroup>
      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default BreakdownForm;

import { Form, Row, Col, Button, Container } from "react-bootstrap";

const CandidateForm = () => {
  return (
    <Container>
      <h1>Add Candidate</h1>
    <Form>
      <Row>
        <Col>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" required />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formDob">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control type="date" required />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Group controlId="formNINNumber">
            <Form.Label>National Insurance Number</Form.Label>
            <Form.Control type="text" placeholder="Enter NIN number" required />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formCurrentAddress">
            <Form.Label>Current Address</Form.Label>
            <Form.Control type="text" placeholder="Enter current address" required />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Group controlId="formPhoneNumber">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="tel" placeholder="Enter phone number" required />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formEmailAddress">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
          </Form.Group>
        </Col>
      </Row>

      <Form.Group controlId="formCandidateAccountFormLink">
        <Form.Label>Candidate Account Form Link</Form.Label>
        <Form.Control type="text" placeholder="Enter candidate account form link" />
      </Form.Group>

      <Form.Group controlId="formUmbrella">
        <Form.Label>Umbrella</Form.Label>
        <Form.Control as="select" required>
          <option>Select an umbrella</option>
          {/* You can populate this list with data from your API */}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="formConsultant">
        <Form.Label>Consultant</Form.Label>
        <Form.Control type="text" placeholder="Enter consultant name" />
      </Form.Group>

      <Form.Group controlId="formPayRates">
        <Form.Label>Pay Rates</Form.Label>
        <Row>
          <Col>
            <Form.Control type="number" placeholder="Day" required />
          </Col>
          <Col>
            <Form.Control type="number" placeholder="Night" required />
          </Col>
          <Col>
            <Form.Control type="number" placeholder="Sunday" required />
          </Col>
        </Row>
      </Form.Group>

      <Form.Group controlId="formSpecialty">
        <Form.Label>Specialty</Form.Label>
        <Form.Control as="select" required>
          <option>Select a specialty</option>
          {/* You can populate this list with data from your API */}
        </Form.Control>
      </Form.Group>

      <Button type="submit">
        Submit
      </Button>
    </Form>
    </Container>
  );
};

export default CandidateForm;

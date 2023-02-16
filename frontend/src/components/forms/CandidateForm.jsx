import { Container, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

CandidateForm = () => {
  const dispatch = useDispatch();

  return (
    <Container fluid>
        <h1>Add Candidate</h1>

        <Form>
        <Form.Group>
          <Form.Label>Candidate Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={login.password}
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <Button type="submit" className="btn btn-success" />
        </Form>
    </Container>
  )
}

export default CandidateForm

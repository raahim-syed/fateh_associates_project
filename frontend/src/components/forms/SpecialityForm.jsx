import { Container, Form, Button} from "react-bootstrap"

function SpecialityForm() {
  return (
    <div>
        <Container style={{ maxWidth: "400px" }}>
            <h1>Add Speicality</h1>
            <Form>
                <Form.Group>
                    <Form.Label>Speciality Name:</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            required
                        />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Pay Rate:</Form.Label>
                        <Form.Control
                            type="tel"
                            name="payRate"
                            required
                        />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Charge Rate:</Form.Label>
                        <Form.Control
                            type="tel"
                            name="chargeRate"
                            required
                        />
                </Form.Group>
                <Button type="submit"> Add Speciality </Button>
            </Form>
        </Container>
    </div>
  )
}

export default SpecialityForm

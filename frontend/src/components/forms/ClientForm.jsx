import { useEffect, useRef, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useAddClientMutation } from "../../features/client/clientApiSlice";


const ClientProfileForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    phoneNumber: "",
    additionalEmails: [],
  });

  // const nameRef = useRef("");

  // useEffect(() => {
  //   nameRef.foc
  // }, [])

  //RTQ Query Hooks
  const [addClient, isLoading] = useAddClientMutation();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleAdditionalEmailsChange = (event, index) => {
    const { value } = event.target;

    setFormData((prevFormData) => {
      const additionalEmails = [...prevFormData.additionalEmails];
      additionalEmails[index] = value;
      return {
        ...prevFormData,
        additionalEmails,
      };
    });
  };

  const handleAddEmail = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      additionalEmails: [...prevFormData.additionalEmails, ""],
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Submitting to Server
    const addedClient = await addClient(formData);

    console.log(addedClient)
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="name">
        <Form.Label>Name*</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="address">
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="phoneNumber">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="additionalEmails">
        <Form.Label>Additional Emails</Form.Label>
        {formData.additionalEmails.map((email, index) => (
          <Form.Control
            key={index}
            type="email"
            value={email}
            onChange={(event) => handleAdditionalEmailsChange(event, index)}
          />
        ))}
        <Button variant="secondary" onClick={handleAddEmail}>
          Add Email
        </Button>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default ClientProfileForm;

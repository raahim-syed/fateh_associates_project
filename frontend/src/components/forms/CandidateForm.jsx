import { useEffect, useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAddCandidateMutation } from '../../features/candidates/candidateApiSlice';
import { useGetSpecialitiesQuery } from '../../features/specialities/spicialityApiSlice';

const CandidateForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    NIN_Number: '',
    currentAddress: '',
    phoneNumber: '',
    emailAddress: '',
    candidateAccountFormLink: '',
    umbrella: '',
    consultant: '',
    candidatePayRate: [{ Day: '', Night: '', Sunday: '' }],
    specialty: [],
  });

  //Error State
  const [errMsg, setErrMsg] = useState("")

  //Dispatcher
  const dispatch = useDispatch();

  //Navigator
  const navigate = useNavigate();

  //RTK Query
  const {data} = useGetSpecialitiesQuery();
  // const [addCandidate, isLoading] = useAddCandidateMutation();

  useEffect(() => {

  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault();
    // handle form submission here
    // const candidate = await addCandidate(formData).unwrap();

    // if(!candidate.stack){

    // }

  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  return (
    <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicDOB">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter date of birth"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicNIN">
            <Form.Label>NIN Number</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter NIN number"
              name="NIN_Number"
              value={formData.NIN_Number}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicAddress">
            <Form.Label>Current Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter current address"
              name="currentAddress"
              value={formData.currentAddress}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicPhone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter phone number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicLink">
            <Form.Label>Candidate Account Form Link</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter link to candidate account form"
              name="candidateAccountFormLink"
              value={formData.candidateAccountFormLink}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicUmbrella">
            <Form.Label>Umbrella Company</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter umbrella company"
              name="umbrella"
              value={formData.umbrella}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicConsultant">
            <Form.Label>Consultant</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter consultant"
              name="consultant"
              value={formData.consultant}
              onChange={handleChange}
            />
          </Form.Group>
        
          <Form.Group controlId="formBasicPayrate">
            <Form.Label>Payrate</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter payrate for day shifts"
              name="candidatePayRate.Day"
              value={formData.candidatePayRate.Day}
              onChange={handleChange}
              required
            />
            <Form.Control
              type="number"
              placeholder="Enter payrate for night shifts"
              name="candidatePayRate.Night"
              value={formData.candidatePayRate.Night}
              onChange={handleChange}
              required
            />
            <Form.Control
              type="number"
              placeholder="Enter payrate for Sunday shifts"
              name="candidatePayRate.Sunday"
              value={formData.candidatePayRate.Sunday}
              onChange={handleChange}
              required
            />
          </Form.Group>
        
          <Form.Group controlId="formBasicSpecialty">
            <Form.Label>Specialty</Form.Label>
            <Form.Control
              as="select"
              name="specialty"
              value={formData.specialty}
              onChange={handleChange}
              multiple
              required
            >
              <option value="1">Specialty 1</option>
              <option value="2">Specialty 2</option>
              <option value="3">Specialty 3</option>
              {/* add additional options as needed */}
            </Form.Control>
          </Form.Group>
        
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
    </Container>
    );
};

export default CandidateForm;

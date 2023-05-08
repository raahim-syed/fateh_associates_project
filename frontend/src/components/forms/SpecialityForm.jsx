import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSpeciality } from '../../features/specialities/specialitySlice';
import { useAddSpecialityMutation } from '../../features/specialities/spicialityApiSlice';

const SpecialityForm = () => {
  //Form State
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [dayRate, setDayRate] = useState(0);
  const [nightRate, setNightRate] = useState(0);
  const [sundayRate, setSundayRate] = useState(0);

  //Error State
  const [errMsg, setErrMsg] = useState("")

  //Dispatcher
  const dispatch = useDispatch();

  //Navigator (React Router)
  const navigate = useNavigate();
  
  const resetInputState = () => {
    setName("")
    setDescription("")
    setDayRate(0)
    setNightRate(0)
    setSundayRate(0)
  }

  //Hook: used to add data to database
  const [addSpeciality, isLoading] = useAddSpecialityMutation();

  //Form submit handling
  const handleSubmit = async (e) => {
    e.preventDefault();

    //Sending Data To Server
    const speciality = await addSpeciality({
      name,
      description,
      payRate: {
        Day: dayRate,
        Night: nightRate,
        Sunday: sundayRate
      }
    }).unwrap()

    //Error Checking and Proceeding
    if(speciality.stack) {
      setErrMsg(speciality.message)
    }else{
      //Dispatching data to store
      dispatch(setSpeciality({...speciality}))

      //Reseting local state (We don't want to store this as it can be seen by anyone)
      resetInputState();

      //Redirecting to dashboard
     // navigate("/dashboard/specialities")
    }
  };

  //Handle Form States

  return (
    <>
      {errMsg ? <span>{errMsg}</span> : ""}
      <Container>
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
      </Container>
    </>
  );
};

export default SpecialityForm;

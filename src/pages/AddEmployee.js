import axios from "axios";
import { useRef,useState,useEffect } from "react";
import { Button, Col, Container, Row, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AllEmployees from "./AllEmployees";
 
const AddEmployee = ({recievedId,recievedName}) => {

  
  const [inputValue, setInputValue] = useState(''); //setting the text input in a state in order to change it using the setInputValue function

  useEffect(() => {           //use effect ; when the received id changes the effect use the setInput to change put the received id in the text field 
    setInputValue(recievedId); 
  }, [recievedId]);

  const handleInputChange = (e) => { // this allows the text input to take the keyboard entry
    setInputValue(e.target.value);

  };
 

  const [inputValueN, setInputValueN] = useState(''); //setting the text input in a state in order to change it using the setInputValue function

  useEffect(() => {           //use effect ; when the received id changes the effect use the setInput to change put the received id in the text field 
    setInputValueN(recievedName); 
  }, [recievedName]);

  const handleInputChange2 = (Z) => { // this allows the text input to take the keyboard entry
    setInputValueN(Z.target.value);

  };




//console.log(recievedId);
console.log(recievedName);
  const name = useRef("");
  const role = useRef("");
  const experience = useRef("");
  const navigate = useNavigate();
 
  const addEmployeeHandler = () => {
  if (inputValue){
var response = axios.get(`http://localhost:4000/employee/${inputValue}`).then((response) => {
  console.log('Data:', response.data);
  console.log("ID :"+ inputValue); 
if (response.data)
{var payload = {
  name: name.current.value,
  role: role.current.value,
  experience: experience.current.value,
};
axios.put(`http://localhost:4000/employee/${inputValue}`,payload);}
else
{
console.log("empty ");
var payload = {
  name: name.current.value,
  role: role.current.value,
  experience: experience.current.value,
};

axios.post("http://localhost:4000/employee", payload).then(() => {
//  navigate("/");
});}
})
  }else {var payload = {
    name: name.current.value,
    role: role.current.value,
    experience: experience.current.value,
  };
  
  axios.post("http://localhost:4000/employee", payload).then(() => {
  //  navigate("/");
  });}
   
  };
 
  return (

    
    <> 
     <div>
      <h2>Second Component</h2>
      <p>Received Variable: {recievedId}</p>
    </div>
      <Container className="mt-2">
        <Row>
          <Col className="col-md-8 offset-md-2">
            <legend>Add New Emplyee Details</legend>
            <Form.Group className="mb-3" controlId="formName"  >
              <Form.Label>Id</Form.Label>
              <Form.Control type="text"  value={inputValue} onChange={handleInputChange} disabled />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formName"  >
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" ref={name} value={inputValueN} onChange={handleInputChange2} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formRole">
              <Form.Label>Job Role</Form.Label>
              <Form.Control type="text" ref={role} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formExperience">
              <Form.Label>Experience</Form.Label>
              <Form.Control type="text" ref={experience} />
            </Form.Group>
            <Button
              type="button"
              variant="primary"
              onClick={addEmployeeHandler}
            >
              Add
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default AddEmployee;
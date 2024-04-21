import { useEffect, useState } from "react";
import { Container, Table, Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import AddEmployee from "./AddEmployee";

const AllEmployees = () => {

const[idtosend,SetidTosend]= useState();//use state tto send id to the other component 
const[nametosend,SetNameTosend]= useState();

  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:4000/employee").then((response) => {
      setEmployees(response.data);
    });
  });
  const deleteEmployee = (id) => {
    axios.delete(`http://localhost:4000/employee/${id}`) .then(response => {
  AllEmployees();
})
.catch(error => {
  console.error(error);
});
}

const Getinfo =(id,name)=>{ 
 // console.log(id);

  SetidTosend(id) ;
  console.log("aaaa " +idtosend) //use state function


  // console.log(id);
 
   SetNameTosend(name) ;
   console.log("aaaa " +nametosend) //use state function
 }
   
  
  return (
    <>
      <Container className="mt-2">
      <Container className="mt-2"><AddEmployee recievedId={idtosend} recievedName={nametosend} /> </Container>  

     {/*    <Row>
          <Col className="col-md-4 offset-md-4">
            <Button variant="primary" type="button" onClick={() => navigate('/add-employee')}>
              Add
            </Button>
          </Col>
        </Row> */}
        <Table striped bordered hover>
          <thead>
            <tr>
            <th>Id</th>
              <th>Name</th>
              <th>Job Role</th>
              <th>Experience</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp._id}>
                <td>{emp._id}</td>
                <td>{emp.name}</td>
                <td>{emp.role}</td>
                <td>{emp.experience}</td>
                <td><button  onClick={()=>Getinfo(emp._id,emp.name)}>Edit </button></td>
                <td><button  onClick={()=>deleteEmployee(emp._id)}>Delete </button></td>
              </tr>
            ))}
          </tbody>
        </Table>

      </Container>
    </>
  );
};
export default AllEmployees;
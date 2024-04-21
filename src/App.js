import "./App.css";
//import Layout from "./components/shared/Layout";
import { Route, Routes } from "react-router-dom";
import AllEmployees from "./pages/AllEmployees";
import AddEmployee from "./pages/AddEmployee";
 
function App() {
  return (
    
      <Routes>
        <Route path="/" element={<AllEmployees />}></Route>
        <Route path="/add-employee" element={<AddEmployee />}></Route>
      </Routes>
  );
}
export default App;
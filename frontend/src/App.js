import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from "./components/Navbar";
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignUpPage"
import Dashboard from "./components/Dashboard";


function App() {
  return (
    <div className="App">
    <Navbar/>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path = "/dashboard" element={<Dashboard/>}/> 
        <Route path="/home" element={<Home />}></Route>
        <Route path="/addEmployee" element={<AddEmployee />}></Route>
        <Route path="/editEmployee/:id" element={<EditEmployee />}></Route>

      </Routes>
    </div>
  );
}

export default App;

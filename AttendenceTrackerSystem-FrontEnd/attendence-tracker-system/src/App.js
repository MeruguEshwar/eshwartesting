import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Forgot from "./Components/Forgot";
import EditEmployee from "./Components/EditEmployee";
import Delete from "./Components/Delete";
import Home from "./Components/Home";


function App() {

  
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/header" element={<Header />}></Route>
        <Route path="/delete/:employeeId" element={<Delete />}></Route>
        <Route path="/forgot" element={<Forgot />}></Route>
        <Route path="/edit/:employeeId" element={<EditEmployee />}></Route>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

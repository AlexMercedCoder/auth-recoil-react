import {Routes, Route} from "react-router-dom"
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Signup from "../pages/Signup";
import Login from "../pages/Login";

function Main({url}) {
    return <div className="Main">
        <Routes>
            <Route path="/" element={<Home url={url}/>}/>
            <Route path="/signup" element={<Signup url={url}/>}/>
            <Route path="/login" element={<Login url={url}/>}/>
            <Route path="/dashboard" element={<Dashboard url={url}/>}/>
        </Routes>
    </div>;
  }
  
  export default Main;
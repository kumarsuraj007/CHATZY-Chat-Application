import Register from "./routes/register/Register-route";
import Login from './routes/login/Login-route'
import axios from 'axios'
import { Route, Routes } from "react-router-dom";
import {UserContext} from './context/UserContext';
import { useContext, useEffect } from "react";
import Chatzy from "./routes/chatzy/Chatzy-routes";

const App = () => {
axios.defaults.baseURL = 'http://localhost:9000';
axios.defaults.withCredentials = true;

const {setCurrentUser} = useContext(UserContext)

useEffect(() => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setCurrentUser(user);
    } else {
      throw new Error
    }
  } catch (error) {
    console.error("Error parsing user data:", error);
  }
}, [setCurrentUser])
  return (
    <div>
      <Routes>
        <Route path="/" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/chatzy" element={<Chatzy />}/>
      </Routes>
    </div>
  )
}

export default App

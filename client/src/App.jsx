import Register from "./routes/register/Register-route";
import Login from './routes/login/Login-route'
import axios from 'axios'
import { Route, Routes } from "react-router-dom";

const App = () => {
axios.defaults.baseURL = 'http://localhost:9000';
axios.defaults.withCredentials = true;
  return (
    <div>
      <Routes>
        <Route path="/" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </div>
  )
}

export default App

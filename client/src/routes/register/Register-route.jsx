import { useState } from "react";
import {Link} from 'react-router-dom'

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const register = async (ev) => {
      ev.preventDefault();
   
      fetch('http://localhost:9000/api/auth/register', {
      method: 'post',
      headers: {
        'Content-type': "application/json"
      }, body: JSON.stringify({
        username, password
      })
     })
     .then(res => res.json())
     .then(result => {
      if(result.error) {
        alert(result.error)
      } else if (result.message) {
        alert(result.message)
      }
     })
    }

  return (
    <div className='bg-blue-50 h-screen flex items-center'>
      <form className='w-64 mx-auto' onSubmit={register}>
        <input type="text" placeholder='username' 
        value={username} onChange={ev => setUsername(ev.target.value)}
        className='block w-full rounded-sm p-2 mb-2 border' />
        <input type="password" placeholder='password' 
        value={password} onChange={ev => setPassword(ev.target.value)} className='block w-full rounded-sm p-2 mb-2 border' />
        <button type="submit" className='block bg-blue-500 text-white w-full rounded-sm p-2 mb-2 border'>Register</button>
        <span className="block text-[12px] cursor-pointer text-blue-500">
          <Link to='/login'>
          Do you have a account?
          </Link>
          </span>
      </form>
    </div>
  )
}

export default Register;
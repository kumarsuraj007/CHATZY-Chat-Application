import { useState } from "react"

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

  return (
    <div className='bg-blue-50 h-screen flex items-center'>
      <form className='w-64 mx-auto'>
        <input type="username" placeholder='username' 
        value={username} onChange={ev => setUsername(ev.target.value)}
        className='block w-full rounded-sm p-2 mb-2 border' />
        <input type="password" placeholder='password' 
        value={password} onChange={ev => setPassword(ev.target.value)}className='block w-full rounded-sm p-2 mb-2 border' />
        <button className='block bg-blue-500 text-white w-full rounded-sm p-2 mb-2 border'>Register</button>
      </form>
    </div>
  )
}

export default Register

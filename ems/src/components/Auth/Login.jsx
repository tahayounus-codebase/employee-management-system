import React, { useState } from 'react'

const Login = ({handleLogin}) => {

  const [email, setemail] = useState('');
  const [password, setPassword] = useState('')


  const submitHandler = (e)=>{
    e.preventDefault();
    handleLogin(email,password)
    setemail('')
    setPassword('')  
  }
  return (
    <div className='h-screen w-full flex items-center justify-center'>
        <div className="border-2 border-emerald-600 rounded-xl p-20">
            <form 
            onSubmit={(e)=>{
              submitHandler(e)
            }}
            className='flex flex-col items-center justify-center'>
                <input 
                value={email}
                required
                className='border-2 outline-none border-emerald-600 rounded-full py-3 text-xl text-white placeholder:text-gray-400 px-5' 
                type="email" 
                placeholder='Enter your Email' 
                onChange={(e)=>{
                  setemail(e.target.value)
                  
                }}
                />
                <input 
                required
                value={password}
                onChange={(e)=>{
                  setPassword(e.target.value)
                }}
                type="password" 
                className='border-2 outline-none border-emerald-600 rounded-full py-3 text-xl text-white mt-4 placeholder:text-gray-400 px-5' 
                placeholder='Enter your Password' />
                <button 
                className='border-none outline-none mt-4 font-semibold w-full bg-emerald-600 rounded-full py-2 text-xl text-white px-8 hover:bg-emerald-700 hover:cursor-pointer' >
                  Login
                </button>
            </form>
        </div>
    </div>
  )
}

export default Login
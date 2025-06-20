import React from 'react'
import { useState } from 'react'

export default function Login () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  // function handleLofinValidations(username: string, password: string) {

  // }
  function handleSubmit (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  async function handleLoginButton() {
  if (!username || !password) {
    console.error("Username or password missing");
    return;
  }

  try {
    console.log("inside handleLoginButton");

    const res = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });

    if (!res.ok) {
      throw new Error('Login failed!');
    }

    const data = await res.json();
    console.log("Login success:", data);

  } catch (err) {
    console.error("Error during login:", err);
  }
}


  return (
    <div>
      <h1>Login</h1>
      <form
        onSubmit={e => {
          handleSubmit(e)
        }}
      >
        <span>Username</span>
        <input type='text' name='username' onChange={e => setUsername(e.target.value)} />

        <span>Password</span>
        <input type='password' name='password' onChange={e => setPassword(e.target.value)} />

        <button onClick={handleLoginButton}>Login</button>
      </form>
    </div>
  )
}

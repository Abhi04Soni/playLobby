import React, { useState } from 'react'

export default function SignUp () {
  //types
  type SignInInfo = {
    name: string
    userName: string
    email: string
    password: string
    cPassword: string
  }

  type responseObject = {
    msg: string
  }

  //declarations
  let responseObject: responseObject = { msg: '' }
  const [signInInfo, setSignInInfo] = useState<SignInInfo>({
    name: '',
    userName: '',
    email: '',
    password: '',
    cPassword: ''
  })
  const [error, setError] = useState('')

  //functions
  function handleFieldChange (e: React.ChangeEvent<HTMLInputElement>) {
    setSignInInfo({
      ...signInInfo,
      [e.target.name]: e.target.value
    })
  }

  function handleSignUpValidation (
    signInInfo: SignInInfo,
    responseObject: responseObject
  ) {
    let name: string = signInInfo.name
    let userName: string = signInInfo.userName
    let email: string = signInInfo.email
    let password: string = signInInfo.password
    let cPassword: string = signInInfo.cPassword
    let passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/

    if (name && userName && email && password && cPassword) {
      if (!passwordRegex.test(password)) {
        {
          responseObject.msg = 'Password should be strong'
          return false
        }
      }

      if (password !== cPassword) {
        responseObject.msg = 'Password and Confirm Password should be same'
        return false
      }

      return true
    } else {
      responseObject.msg = 'All fields are required'
      return false
    }
  }

  function handleSubmit (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  async function handleSignUp () {
    try {
      var result: boolean = handleSignUpValidation(signInInfo, responseObject)
      if (result) {
        console.log('inside handleSignUp' + signInInfo)
        let response = await fetch('http://localhost:5000/signUp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(signInInfo)
        })
          const data = await response.json()

        if (!response.ok) {
          console.log('SignUp failed:', data)
          setError(data.msg)
          return
        }

        console.log('SignUp success:', data)
      } else {
        console.log(responseObject.msg)
        setError(responseObject.msg)
      }
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div>
      <form
        onSubmit={e => {
          handleSubmit(e)
        }}
      >
        <span>Name</span>
        <input type='text' name='name' onChange={e => handleFieldChange(e)} />
        <span>UserName</span>
        <input
          type='text'
          name='userName'
          onChange={e => handleFieldChange(e)}
        />
        <span>Email</span>
        <input type='text' name='email' onChange={e => handleFieldChange(e)} />
        <span>Password</span>
        <input
          type='text'
          name='password'
          onChange={e => handleFieldChange(e)}
        />
        <span>Confirm Password</span>
        <input
          type='text'
          name='cPassword'
          onChange={e => handleFieldChange(e)}
        />
        <button onClick={handleSignUp}>Create My Account</button>
      </form>
    </div>
  )
}

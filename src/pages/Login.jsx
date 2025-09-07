import React from 'react'
import Template from '../components/Template'
import loginImg from '../assets/login.png'

const Login = ({setIsLoggedIn}) => {
  return (
    <Template
      title='Welcome Back'
      desc1='Organize your today, plan for tomorrow, and achieve more with smarter task management.'
      desc2='Stay productive and in control with simple, powerful task management tools.'
      image={loginImg}
      formType='login'
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Login
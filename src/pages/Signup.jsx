import React from 'react'
import Template from '../components/Template'
import signupImg from '../assets/signup.png'

const Signup = ({setIsLoggedIn}) => {
  return (
    <Template
      title='Get Started with Smarter Task Management'
      desc1='Sign up today to organize your work and achieve your goals with ease.'
      desc2='Join now and unlock powerful tools to boost productivity and stay focused.'
      image={signupImg}
      formtype='signup'
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Signup
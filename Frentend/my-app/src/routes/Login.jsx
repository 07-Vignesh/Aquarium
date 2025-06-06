import { SignIn } from '@clerk/clerk-react'
import React from 'react'
import { GoogleOneTap } from '@clerk/clerk-react'

const LoginPage = () => {
  return (
    <div className=' flex items-center justify-center h-[calc(100vh-80px)]'>
      <SignIn signInUrl='/regsister'/>
    </div>
  )
}

export default LoginPage
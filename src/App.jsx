import React from 'react'
import SignUp from './Components/SignUp'
import LogIn from './Components/LogIn'
import ContactForm from './Components/ContactForm'

const App = () => {
  return (
    <div className='flex gap-[1rem]'>
       <SignUp/>
       <LogIn />
       <ContactForm/>
    </div>
  )
}

export default App
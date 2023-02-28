import React, {useState, useRef} from 'react'
import {Login, SignUp} from "./components"
import "./SignIn.css"

const SignIn = () => {
    const [showLogin, setShowLogin] = useState(true)
    const formRef = useRef();


    const toggleModal=()=>{
          formRef.current.classList.toggle("rotate-parent")
    }
  return (
    <div className="signin-container">
      <div ref={formRef} className="signin-form-wrapper">
        {/* {showLogin ? <Login setShowLogin={setShowLogin}/> : <SignUp/>} */}
        <SignUp toggleModal={toggleModal}/>
        <Login toggleModal={toggleModal}/>

      </div>
    </div>
  )
}

export default SignIn
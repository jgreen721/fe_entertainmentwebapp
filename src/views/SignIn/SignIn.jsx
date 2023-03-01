import React, { useRef} from 'react'
import {Login, SignUp} from "./components"
import "./SignIn.css"
import { logo } from '../../const'

const SignIn = () => {
    const formRef = useRef();


    const toggleModal=()=>{
          formRef.current.classList.toggle("rotate-parent")
    }
  return (
    <div className="signin-container">
<div className="signin-logo-container">
  <img className="signin-logo" src={logo} alt="" />
</div>
      <div ref={formRef} className="signin-form-wrapper">
        {/* {showLogin ? <Login setShowLogin={setShowLogin}/> : <SignUp/>} */}
        <SignUp toggleModal={toggleModal}/>
        <Login toggleModal={toggleModal}/>

      </div>
    </div>
  )
}

export default SignIn
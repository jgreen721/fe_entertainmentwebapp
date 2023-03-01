import React, {useRef, useState} from 'react'
import { useAppContext } from '../../../context/context_args';

const Login = ({toggleModal}) => {
  const formRef = useRef();
  const {demoAuth} = useAppContext();
  const [isError, setIsError] = useState(false)



  const handleLogin=(e)=>{
    e.preventDefault();
    formRef.current.querySelectorAll(".form-div").forEach((formDiv,idx)=>{
      if(formDiv.querySelector(".form-input").value == ""){
        formDiv.querySelector(".form-error-h5").classList.add("show-error");
        setIsError(true)
      }
    })

    if(isError){
      setIsError(false)
      return;
    }
    console.log("Success condition!")
    demoAuth();

  }
  return (
    <div className="login-form-parent">
    <form onSubmit={(e)=>handleLogin(e)} ref={formRef} className="login-form signin-form">
        <h1 className="heading-lg form-h1">Login</h1>
        <div className="form-div">
            <input type="text" className="form-input" placeholder="Email Address" />
            <h5 className="form-error-h5 red">Can't be empty</h5>

        </div>
        <div className="form-div">
            <input type="text" className="form-input" placeholder="Password" />
            <h5 className="form-error-h5 red">Can't be empty</h5>

        </div>
        <button type="submit" className="btn form-btn"> Login to your acount</button>
        <h5 className="blurb form-blurb">Dont have an account? <span onClick={toggleModal} className="red form-link bold">Sign Up</span></h5>
        <div className="small-caption-div">
          <small onDoubleClick={demoAuth} className="small-caption">(Dbl Click for DEMO entry)</small>
        </div>
    </form>
    </div>
  )
}

export default Login
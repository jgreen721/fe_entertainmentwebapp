import React, {useRef} from 'react'

const Login = ({toggleModal}) => {
  const formRef = useRef();



  const handleLogin=(e)=>{
    e.preventDefault();
    formRef.current.querySelectorAll(".form-div").forEach((formDiv,idx)=>{
      if(formDiv.querySelector(".form-input").value == ""){
        formDiv.querySelector(".form-error-h5").classList.add("show-error");
      }
    })

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
    </form>
    </div>
  )
}

export default Login
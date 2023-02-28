import React, {useRef} from 'react'

const SignUp = ({toggleModal}) => {
    // const [username,setUsername] = useState("")
    // const [password,setPassword] = useState("")
    // const [password2,setPassword2] = useState("")
    const formRef = useRef();


    const handleSignUp=(e)=>{
        e.preventDefault();
        console.log('handleSignUp fired')
        let isError = false;
        formRef.current.querySelectorAll(".form-div").forEach((formDiv,idx)=>{
            if(formDiv.querySelector(".form-input").value == ""){
              formDiv.querySelector(".form-error-h5").classList.add("show-error");
              isError = true;
            }

          })
          if(formRef.current.querySelectorAll(".form-input")[2].value.length && 
             formRef.current.querySelectorAll(".form-input")[2].value  != formRef.current.querySelectorAll(".form-input")[1].value ){
            formRef.current.querySelectorAll(".form-error-h5")[2].innerHTML = "Passwords don't match!"
            formRef.current.querySelectorAll(".form-error-h5")[2].classList.add("show-error")
            isError = true;
          }


          if(isError)return;
          console.log("Success condition!")

    }


    const clearErrors=(e)=>{
        if(e.target.closest(".form-div").querySelector(".form-error-h5").classList.contains("show-error")){
            e.target.closest(".form-div").querySelector(".form-error-h5").classList.remove("show-error")
        }
        formRef.current.querySelectorAll(".form-error-h5")[2].innerHTML = "Can't be empty"

}



  return (
      <div className="signup-form-parent">
    <form onKeyDown={(e)=>clearErrors(e)} onSubmit={(e)=>handleSignUp(e)} ref={formRef} className="signup-form signin-form">
        <h1 className="heading-lg form-h1">Sign Up</h1>
        <div className="form-div">
            <input type="text" className="form-input" placeholder="Email Address"  />
            <h5 className="form-error-h5 red">Can't be empty</h5>
        </div>
        <div className="form-div">
            <input type="text" className="form-input" placeholder="Password"  />
            <h5 className="form-error-h5 red">Can't be empty</h5>

        </div>
        <div className="form-div">
            <input type="text" className="form-input" placeholder="Confirm Password" />
            <h5 className="form-error-h5 red">Can't be empty</h5>

        </div>
        <button type="submit" className="btn form-btn"> Create an account</button>
        <h5 className="form-blurb blurb">Already have an account? <span onClick={toggleModal} className="form-link red bold">Login</span></h5>
    </form>
    </div>
  )
}

export default SignUp
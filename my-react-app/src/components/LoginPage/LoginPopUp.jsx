import React, { useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets'
const LoginPopUp = ({setShowLogin}) => {

    const [currentState,setCurrentState] = useState("Login")
  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currentState}</h2>
            <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt='' />
        </div>
        <div className="login-popup-inputs">
            {currentState==="Login"?<></>:<input type="text" placeholder='Your Name' required />}
            <input type="email" placeholder='Your Email' required />
            <input type="password" placeholder='Password' required />
        </div>
        <button>{currentState==="Sign Up"?"Create Account":"Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sed ipsam, eius laudantium exercitationem fuga dolorum veniam sit assumenda pariatur enim dolores suscipit quas impedit cum cupiditate sint officiis? Fugiat.</p>
        </div>
        {currentState === "Login"
        ? <p>Create a new Account? <span onClick={() => setCurrentState("Sign Up")}>Click Here</span></p>
        :<p>Already have an Account? <span onClick={() => setCurrentState("Login")}>Login Here</span></p>}
        
        
      </form>
    </div>
  )
}

export default LoginPopUp

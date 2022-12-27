import React from 'react';
import './Login.css';



const Login = () => {
  return (
    <div className='myform'>
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="signup">
          <form action="">
            <label htmlFor="chk" aria-hidden="true">Login</label>
            <input className="signup_input" type="email" name="email" placeholder="Enter your Email" required/>
            <input className="signup_input" type="password" name="pswd" placeholder="Enter your Password" required />
            <button className="formbtn" type="submit">Login</button>
          </form>
        </div>

        <div className="login">
          <form action="">
            <label htmlFor="chk" aria-hidden="true">Register</label>
            <input className="signup_input" type="text" name="Uname" placeholder="Enter your User Name" required/>
            <input  className="signup_input" type="email" name="email" placeholder="Enter your Email"/>
            <input className="signup_input" type="password" name="pswd" placeholder="Enter your Password" />
            <button className="formbtn" type="submit">Register</button>
          </form>
        </div>
        
      </div>
    </div>
  )
}

export default Login

import React, {useState} from "react";
import "./loginform.css"


function InputBoxEmail() {
  return (
    <div className="group">
      <input type="text" required id="ipt-email" />
      <span className="highlight"></span>
      <span className="bar"></span>
      <label>E-mail</label>
    </div>
  );
}

function InputBoxPassword() {
  return (
    <div className="group">
      <input type="password" required id="ipt-password" />
      <span className="highlight"></span>
      <span className="bar"></span>
      <label>Password</label>
      <a href="xx" className="forget-pass">Forget your password?</a>
    </div>
  );
}

const OrSeparator = () => {
    return (
        <div className="separator-div">
            <div className="separator"></div>
            <p>or</p>
            <div className="separator"></div>
        </div>
    )
}

function GoogleSignIn(){
    return (
      <div className="g-signin2" data-onsuccess="onSignIn"></div>
    )
}

const SignUpRedirect = () => {
    return (
        <p className="signup">Doesn't have a account?<a href="x">Sign up</a></p>
    )
}


const LoginForm = () => {

    function handleSubmit(event) {
      // Não deixa a página atualizar
    event.preventDefault();
    
    }

      return (
        <form onSubmit={handleSubmit} className="form">
            <p className="logoGrande">{"{S}"}</p>
            <InputBoxEmail/>
            <InputBoxPassword/>
            <button type="submit" className="btn_login">Log in</button>
            < OrSeparator/>
            < GoogleSignIn/>
            < SignUpRedirect/>
        </form>
      )
    }    




export default LoginForm

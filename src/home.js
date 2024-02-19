import React, { useEffect, useState } from "react";
import {auth,provider,facebookprovider} from "./firebase_intial.js";
import {signInWithPopup,createUserWithEmailAndPassword} from "firebase/auth";
//import Login from "./components/login.js";
import Home from "./home.js";
import { FacebookLoginButton, GithubLoginButton, GoogleLoginButton } from "react-social-login-buttons";

function MainPage(){
    const [value,setValue] = useState('')
    const [userEmail,setUserEmail] = useState('');
    const [userPassword,setUserPassword] = useState('');

    const handleEmailChange = (e) => {
        setUserEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setUserPassword(e.target.value);
    }
    const handleClick =()=>{
        createUserWithEmailAndPassword(auth, userEmail,userPassword)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
    }
    const signInWithGoogle = () => {
      signInWithPopup(auth,provider).then((data)=>{
        setValue(data.user.email)
        localStorage.setItem("email",data.user.email)
        localStorage.setItem("name",data.user.displayName)
    }).catch((err)=>{
        console.log(err)

    });
  }

   
    let googlebuttonstyle = {
      width : "230px",
    }
    let buttonstyle = {
      width : "300px",
    }
return (
    <div>
       
        
        <div style={googlebuttonstyle}>
        <GoogleLoginButton  onClick={signInWithGoogle} />
       
        </div>

        <div style={buttonstyle}>
        <FacebookLoginButton onClick={signInWithGoogle}/>
        </div>
        <div>
          
          <input
                type="text"
                className="form-control"
                id="userEmail"
                required
                placeholder="Enter user email"
                value={userEmail}
                onChange={handleEmailChange}
                name="userEmail"
              />
              <input
                type="text"
                className="form-control"
                id="userPassword"
                required
                placeholder="enter user password"
                value={userPassword}
                onChange={handlePasswordChange}
                name="userPassword"
              />

            
           
        </div>
        <button onClick={handleClick}>Sign Up</button>
        
       
    </div>
);
}
export default MainPage;
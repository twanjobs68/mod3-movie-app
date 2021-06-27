import './Login.css'
// import './App.css'
import React from 'react';
import {useState}from 'react';
// import{Link} from "react-router-dom";

class MovieLogin extends React.Component{
    
    handleEnterClick=() =>{
        console.log("click")
    //    *when you click what do you want to happen*/}
    // check database for userid and password.  If valid, both. then display "login successful and take user to movie page"
    // if username match and password doesnt, ask to re-enter password or reset password
    // if reset password, follow steps to add new password to database and ask user to re-enter username and new password
    //***Extra. if user name doesn't match and password does, ask user to enter correct userid or display alert "No user id. Account will be clsoed" 
    // continue to display alert message to one of the other scenarios is met or after the 10 time of entering wrong userid or password
    // if userid nor password match in database follow steps to ask user to 
    
    }

    handleRegisterClick=() =>{
        console.log("click")
        // add registration information to database and bring user back to Login page and request to Login
    } 

    // *prevent page from reloading
    handleForm=(e)=>{
     e.preventDefault()
    }

    render() {
        return (
          <div>
         {/* <div syle={{backgroundImage:'Images/pstars.jpg'}}>  */}
                <div className ="loginw">
      
   
                {/* Login Form */}
                <form className = "box" onSubmit={this.handleForm} >
                
                <div className="pHeader">
                   {/* <!--Web page heading--> */}
                         
                    <h2>
                       Welcome to ADGFLIX-Movie Search
                    </h2>
                </div>
                        
                <div className="loginreg">
                    <h4>New Registration</h4> 
                    <h4>Username</h4> 
                        <input type="text" name ="regName"/>
                    <h4>Password</h4>
                        <input type="password" name ="regPassword"  size = "10" maxLength="25" />
                        <button onClick={this.handleRegisterClick}> Register </button> 
                </div>
        
                {/* <!--placeholder for user name  entrance with maximum length of 25 characters--> */}
                <div className="oLogin">
                    <h3> LOGIN </h3>
                    <h4> Username:
                        <input type="text" name ="username" />
                    </h4>
                {/* <!--placeholder for user password--> */}
                {/* <!--passw=ord will appear as asterisk as typed with the type attribute password--> */}
                    <h4> Password:
                        <input type="password" name ="password" size = "10" maxLength="25"/>
                    </h4> 
                
        
                <div>
                    {/* <!-- create Enter button --> */}
                    <input type="submit" name="" value= "Enter" onClick={this.handleEnterClick}/>
                </div> 
                </div>  
                </form>
               </div>
            </div>
        // </div>
            );
    }
}
    


export default MovieLogin;
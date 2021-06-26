import './Login.css'
// import './App.css'
import React from 'react';
// import{Link} from "react-router-dom";

class MovieLogin extends React.Component{
    
    handleEnterClick=() =>{
        console.log("click")
    //    *when you click what do you want to happen*/}
    // check database for userid and password.  If valid then display "login successful and take user to movie page"
    // if username match and password doesnt, ask to re-enter password or reset password
    // if reset password, follow steps to add new password to database and ask user to re-enter username and new password
    // if userid nor password match in database follow steps to ask user to register
    }

    handleRegisterClick=() =>{
        console.log("click")
        // add registration information to database
    }

    // *prevent page from reloading
    handleForm=(e)=>{
     e.preventDefault()
    }

    render() {
        return (
          <div>
        {/* <div style={{backgroundImage:'Images/pstars.jpg'}}>  */}
                <div className ="loginw">
        
                {/* <!--Login in page header--> */}
                {/* <div className ="circle"> 
                    <h1>Welcome to Twans Login/Registration Page</h1>
                </div>  */}
        
            
                {/* <form className = "box" action ="myLogin.html" method= "POST"> */}
                <form className = "box" onSubmit={this.handleForm} >
        
                
                <div>
                        {/* <!--Web page heading--> */}
                {/* <!-- </form> --> */}
        
                    <h3>
                    {/* <h2>Welcome to Twans Login/Registration Page</h2> */}
                    <center>Movie USER LOGIN/Registration</center>       
                    </h3>
                </div>
                    <br></br>
        
                <div className="loginreg">
                    <h3>New Registration</h3> 
                    <h3>Username</h3> 
                        <input type="text" name ="regName"/>
                        <h3>Password</h3>
                            <input type="password" name ="regPassword"/>
                            <button onClick={this.handleRegisterClick}> Register </button> 
                </div>
        
                {/* <!--placeholder for user name  entrance with maximum length of 25 characters--> */}
                <div>
                    <h3> Username:
                        <input type="text" name ="username" size = "15" maxLength="30"/>
                    </h3>
                {/* <!--placeholder for user password--> */}
                {/* <!--passw=ord will appear as asterisk as typed with the type attribute password--> */}
                    <h3> Password:
                        <input type="password" name ="password" size = "15" maxLength="25"/>
                    </h3> 
                </div>
        
                <div>
                    {/* <!-- create submit button --> */}
                    <input type="submit" name="" value= "Enter" onClick={this.handleEnterClick}/>
                </div> 
                  
                </form>
               </div>
            </div>
            );
    }
}
    


export default MovieLogin;
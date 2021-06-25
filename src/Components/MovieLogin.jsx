import './Login.css'
// import './App.css'
import React from 'react';
import{Link} from "react-router-dom";



class MovieLogin extends React.Component{
    
    handleEnterClick=() =>{
        console.log("click")
    //    *when you click what do you want to happen*/}
    }

    handleRegisterClick=() =>{
        console.log("click")
    }

    // *prevent page from reloading
    handleForm=(e)=>{
     e.preventDefault()
    }

    render() {
        return (
        //    <div style={{backgroundColor:"red"}}>
        <div style={{backgroundImage:'Images/pstars.jpg'}}> 
                <div className ="loginw">
        
                {/* <!--Login in page header--> */}
                {/* <div1 className ="circle"> 
                    <h1>Welcome to Twans Login/Registration Page</h1>
                </div1>  */}
        
                {/* <!--Web page heading--> */}
                {/* <!-- </form> --> */}
        
                {/* <form className = "box" action ="myLogin.html" method= "POST"> */}
                <form className = "box" onSubmit={this.handleForm} >
        
                
                <div>
                    <h2>
                    {/* <h2>Welcome to Twans Login/Registration Page</h2> */}
                    <center>Movie USER LOGIN/Registration</center>       
                    </h2>
                </div>
                    <br></br>
        
                <div className="loginreg">
                    <h2>Registration</h2> 
                    <h2>Username</h2> 
                        <input type="text"/>
                        <h2>Password</h2>
                            <input type="text"/>
                            <button onClick={this.handleRegisterClick}> Register </button> 
                </div>
        
                {/* <!--placeholder for user name  entrance with maximum length of 25 characters--> */}
                <div>
                    <h2> Username:
                        <input type="text" name ="username" size = "15" maxLength="30"/>
                    </h2>
                {/* <!--placeholder for user password--> */}
                {/* <!--passw=ord will appear as asterisk as typed with the type attribute password--> */}
                    <h2> Password:
                        <input type="password" name ="password" size = "15" maxLength="25"/>
                    </h2> 
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
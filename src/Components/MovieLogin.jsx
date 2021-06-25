import React from 'react';

function MovieLogin(props) {
    return (
    <div>
        <div className ="loginw">

        {/* <!--Login in page header--> */}
        <div1 className ="circle"> 
            <h1>Welcome to Twans Login/Registration Page</h1>
        </div1> 

        {/* <!--Web page heading--> */}
        {/* <!-- </form> --> */}

        {/* <form className = "box" action ="myLogin.html" method= "POST"> */}
        <form className = "box">
        <div2>
            <h2>
            <center>Movie USER LOGIN/Registration</center>       
            </h2>
        </div2>
            <br></br>

        <div3 className="loginreg">
            <h2>Registration</h2> 
            <Label>Username</Label> 
                <input type="text"/>
                <Label>Password</Label>
                <input type="text"/>
                    <button> Register </button> 
        </div3>

        {/* <!--placeholder for user name  entrance with maximum length of 25 characters--> */}
        <div4>
            <h2> Username:
                <input type="text" name ="username" size = "15" maxlength="30"/>
            </h2>
        {/* <!--placeholder for user password--> */}
        {/* <!--passord will appear as asterisk as typed with the type attribute password--> */}
            <h2> Password:
                <input type="password" name ="password" size = "15" maxlength="25"/>
            </h2> 
        </div4>

        <div5>
            {/* <!-- create submit button --> */}
            <input type="submit" name="" value= "Enter" onclick="authenUser"/>
        </div5> 
          
        </form>
       </div>
    </div>
    );
}

export default MovieLogin;
import React, { Component } from 'react';
import './Login.css';
import axios from 'axios';
// import dedication from './Components.Dedication';
import { Link } from 'react-router-dom';


class MovieLogin extends React.Component {
    constructor() {
        super()
        // 1.code state to keep track of user input state.
        this.state = {

            userName: "",
            password: "",
            email: ""
        };


        //  this.setState({ 

        //pass data to each of these functions as argument
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {

        this.setState({
            [event.target.name]: event.target.value

        });
        console.log(this.state)

    }
    // ***********************Login*******
    //    *when you login click what do you want to happen*/}
    // check database for userid and password.  If valid, both. then display "login successful and take user to movie page"
    // if username match and password doesnt, ask to re-enter password or reset password
    // if reset password, follow steps to add new password to database and ask user to re-enter username and new password
    // Extra. if user name doesn't match and password does, ask user to enter correct userid or display alert "No user id. Account will be clsoed" 
    // continue to display alert message to one of the other scenarios is met or after the 10 time of entering wrong userid or password
    // if userid nor password match in database follow steps to ask user to 

    handleLoginClick(event) {
        const { userName, password } = this.state;
        console.log(userName, password);

        axios
            .post(
                "http://localhost:8000/movielogin",

                {
                    username: userName,
                    password: password
                }

                // withCredentials indicates whether or not cross-site Access-Control requests should be made using credentials provided.  In
                //this case use credentials for username and passwprd fpr validation.
                // { withCredentials: true }
            )
            .then(response => {
                console.log("Response From Login", response);
            })
            .catch(error => {
                console.log("Login Error", error);
            });
        // *prevent page from reloading
        event.preventDefault();

    }

    // add registration information to database and bring user back to Login page and request to Login
    handleRegisterClick = (event) => {
        console.log("click")
        const { email, userName, password } = this.state;
        console.log(email, userName, password);
        event.preventDefault();

        axios
            .post(
                "http://localhost:8000/movielogin",

                {

                    userName: userName,
                    password: password,
                    email: email
                }

                //  { withCredentials: true }
            )
            .then(response => {
                console.log("response from Registration", response);
                if ({data:status = '200') {
                    alert("Successful Registration.  Please Login")
                    // <Link to = "/movielogin"> </Link>
                    }
            })
            .catch(error => {
                console.log("Registration Error.", error);
                alert("Registration error. Please try again.")
            });


    }

    // *prevent page from reloading
    //  handleForm = (e) => {
    //      e.preventDefault()
    //  }
    // }
    render() {


        return (
            <div>
                {/* <div syle={{backgroundImage:'Images/pstars.jpg'}}>  */}
                <div className="loginw">


                    {/* Login Form */}
                    {/* <form className="box" onSubmit={this.handleForm} > */}
                    <form className="box" onSubmit={this.handleLoginClick} onChange={this.handleChange} >

                        <div className="pHeader">
                            {/* <!--Web page heading--> */}

                            <h2>
                                Welcome to ADGFLIX-Movie Search
                            </h2>
                        </div>

                        <div className="loginreg">
                            <h4>New Registration</h4>
                            <h4>Username</h4>
                            <input type="text" name="userName" />
                            <h4>Email</h4>
                            <input type="text" name="email" />
                            <h4>Password</h4>
                            <input type="password" name="password" />
                            <button onClick={this.handleRegisterClick}> Register </button>
                        </div>


                        {/* <form onSubmit={this.handleLoginClick} > */}
                        {/* <!--placeholder for user name  entrance with maximum length of 25 characters--> */}
                        <div className="oLogin">
                            <br></br>
                            <h3> LOGIN </h3>
                            <br></br>
                            {/* <h4> Username: */}
                            <input type="text" placeholder="Username" />
                            {/* </h4> */}
                            {/* <!--placeholder for user password--> */}
                            {/* <!--passw=ord will appear as asterisk as typed with the type attribute password--> */}
                            <h4> Password: </h4>

                            <strong> <input type="password" placeholder="Password" /></strong>
                            {/* </h4> */}

                            <div>
                                {/* <!-- create Enter button --> */}
                                <Link to="/searchapi"> <input type="submit" name="" value="LOGIN" onClick={this.handleEnterClick} /></Link>
                            </div>
                        </div>
                        <div className="mHeart">
                            <blockquote className="text">
                                <p><br></br><strong>ADGFLIX</strong></p>
                            </blockquote>
                        </div>
                    </form>
                </div>
            </div>
            // </div>
        );
    }


}

export default MovieLogin;
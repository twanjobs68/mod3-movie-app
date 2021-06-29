import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MovieReg extends Component {

    constructor(props) {
        super(props)
        // 1.code state to keep track of user input state.
        this.state = {

            userName: "",
            password: "",
            email: "",
            registartionErrors:""
        };


        
        //pass data to each of these functions as argument
        this.handleRegClick = this.handleRegClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {

        this.setState({
            [event.target.name]: event.taget.value

        });

    }
    // ********************Registration of new user*******
    //    *when Register click what do you want to happen*/}
    // add user credentials to database and display login page for user to login

    // add registration information to database and bring user back to Login page and request to Login
    handleRegisterClick = (event) => {
         console.log("click")
         const { email, userName, password } = this.state;
         console.log(email, userName, password);
 
         axios
             .post(
                 "http://localhost:8080/movielogin",
                 {
                     user: {
                        email: email, 
                        username: userName,
                        password: password
                     }
                 },
                //  { withCredentials: true }
             )
             .then(response => {
                 console.log("response from Registration", response);
                 if(response.datga.stgatus === "created") {
                     this.props.handleSufccessfulAuth(response.data)
                 }
             })
             .catch(error => {
                 console.log("Registration Error", error);
             });
    

    // }

    // *prevent page from reloading
    // handleForm = (e) => {
    //     e.preventDefault()
    // }
        }
    render() {


        return (
            <div>
                {/* <div syle={{backgroundImage:'Images/pstars.jpg'}}>  */}
                <div className="loginw">


                    {/* Login Form */}
                    <form className="box" onSubmit={this.handleForm} >

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
                            <input type="text" name="email"/>
                            <h4>Password</h4>
                            <input type="password" name="passWord" />
                            <button onClick={this.handleRegisterClick}> Register </button>
                        </div>

                        {/* <!--placeholder for user name  entrance with maximum length of 25 characters--> */}
                        {/* <div className="oLogin"> */}
                           {/* <br></br> */}
                            {/* <h3> LOGIN </h3> */}
                            {/* <br></br> */}
                            {/* <h4> Username: */}
                            {/* <input type="text" placeholder="Username" /> */}
                            {/* </h4> */}
                            {/* <!--placeholder for user password--> */}
                            {/* <!--passw=ord will appear as asterisk as typed with the type attribute password--> */}
                            {/* <h4> Password: */}
                            {/* <br></br> */}
                           {/* <strong> <input type="password"  placeholder="Password" /></strong> */}
                            {/* </h4> */}


                            {/* <div> */}
                                {/* <!-- create Enter button --> */}
                                {/* <input type="submit" name="" value="LOGIN" onClick={this.handleEnterClick} /> */}
                            {/* </div> */}
                        {/* </div> */}
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




    render() {
        return (
            <div>

            </div>
        );
    }
}

MovieReg.propTypes = {

};

export default MovieReg;
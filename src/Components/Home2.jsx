// import React, { Component } from 'react';
// // This page will eventually be used to handle authentication when entering valid registration and Login info returning status to login pages. Does not work
// class Home2 extends Component {
//     constructor(props){
//         super(props);
//         //set status of login
//         this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
//     }

//     //function to pass login staus to login component
//     handleSuccessfulAuth(data){
//         this.props.handleLogin(data);
//         this.props.history.push("/dashboard");
//     }
    

    
//     render() {
//         return (
//             <div>
//                 <h1>Home2</h1>
//                 <h1>Status: {this.props.loggedInStatus}</h1>
//                 <MovieReg handleSucessfulAuth={this.handleSuccesfulAuth} />
//                 <MovieLogin  handleSucessfulAuth={this.handleSuccesfulAuth} />

//                 <Login />
//             </div>
//         );
//     }
// }

// export default Home2;
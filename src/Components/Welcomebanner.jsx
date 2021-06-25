import React from 'react';
// import Searchapi from './Components/Searchapi';
function Welcomebanner(){

    const welcomestyle={
        height: "15em",
        width: "35em",
        margin:"auto",
        align_content: "center",
        justify_content: "center",
        color: "black",
        padding: "35px",
       
        

    }

    return (
        <div id="welcomeBackground">
            <div className="welcomeBanner" style={welcomestyle}>
                <strong> <p> WELCOME TO TWANS MOVIE SEARCH inspired by NETFLIX</p>
                <p> I hope you enjoy searching for all your favorite movies.</p>
                <p>Thanks for using this App.  I had fun creating it!</p>
                <p>Happy Searching!!!</p>
                <p>*****Twan Grant*****</p></strong>
                <div class="myFlixbx">
                    <h1>NETFLIX</h1>
                </div>
            </div>
        </div>
    );
}

export default Welcomebanner;
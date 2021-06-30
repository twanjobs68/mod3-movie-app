import React from 'react';
import {Link} from 'react-router-dom';

function Dedication() {
    return (
        <div className="bgPicture">
             <Link to = "/movielogin"> <h3> <br></br>LOGOUT</h3></Link>
            {/* <link to  <h3>HOME</h3>  */}
             <br></br>
             <center><p>This page is dedicated to MARY J.BLIGE!  The Queen of Hip Hop!!  Her music is to be cherished!!!</p></center>
             <center><p>LOVE YOU MARY J!!!!!!!</p></center>

             <div class="myFlixbx">
                      <h1><br></br>ADGFLIX</h1>
                   </div>

                 
        </div>

        
    );
}

export default Dedication;
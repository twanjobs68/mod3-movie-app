import React from 'react';
//  import moviedescription from './Moviedescription';
//5.import link from react router dom so we can link pages
import {Link} from "react-router-dom"
function Navbr() {


    return (

//<div className="testPic">
            <div className="sideMenu">
                <ul>
                    <Link to= "/searchapi">
                        <h3>HOME</h3>
                    </Link>

                    <Link to = "/welcomebanner">
                          <li> WELCOME</li>
                    </Link>
                    <br></br>
                    <Link to = "/searchapi">
                        <li>SEARCH</li>
                    </Link>

                    <br></br>
                    <Link to = "/credits">
                        <li>CREDITS</li>
                    </Link>

                    <br></br>
                    <Link to = "/MovieLogin">
                        <li>LOGOUT </li>
                    </Link>
                    <br></br>
                     <Link to = "/dedication">
                        <li>DEDICATION</li>
                    </Link> 
                </ul>
            </div>
 //       </div>
    );
}
export default Navbr;
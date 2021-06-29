import React from 'react';

function Credits() {
  
     //   {/* style inside of component*/}
     const creditStyle ={
        
       justify_content: "center",
        align: "center",
        border: "2px solid red",
       

           
         }
         const infoStyle={
             background: "red",
             border: "2px solid black",
             height: "15em",
             width: "35em",
             margin: "auto",
             color: "white",
             justify_content: "center",
         }
         const thanksStyle={
             display: "flex",
             height: "10em",
             width: "35em",
             margin:"auto",
             flex_direction:"flex-end",
             justify_content: "right",
             background: "black",
             color: "red"
           
         }

        return (
            <div className="creditsBackground">
    
                 <div className="credits" style={creditStyle}>
                  <strong><center> <h2>CREDITS</h2> </center></strong>
                </div>
            
                <div classnName="thankYou" style={thanksStyle}>
                    <h2>Thank you to the following, for all your support and encouragement. I appreciate you!!  </h2>
                </div>
                    <br></br>
                  <div className="who" style={infoStyle}>
                         <h4>" God" for keeping me SANE through it all!!</h4>
                         <h4>Per Scholas TA - Daquan Johnson-
                             (Last minute Knowledge!)</h4>
                         <h4>Classmates-Encouragement</h4> 
                       <blink> <marquee> <strong><h5>"WE MADE IT!!!!!"       HAPPY GRADUATION TO All !!!</h5></strong></marquee></blink>
                         {/* <h3>Photo by <a href="https://unsplash.com/@alexbemore?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Alexander Shatov</a> on <a href="https://unsplash.com/s/photos/netflix?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> */}
  {/* </h3> */}
                    </div>  
                    <div class="myFlixbx">
                      <h1><br></br>ADGFLIX</h1>
                   </div>
                   
               
            </div>
        );
    }
    
export default Credits;
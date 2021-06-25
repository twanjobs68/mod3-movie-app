


function authenUser(props) {

    
    return (
        <div>
            
            var inuser=document.getusernElementById("username").value;
            var inpassword=document.getElementById("password").value;


        if (inuser == "twan" && inpassword == "mine3")
        {
    
            alert("Login Successful!")
   
                // return false;

        }   
    else
    {
        alert("Login Unsuccessful! Please try again. ")
    }

    inuser = " ";
    inpassword = "";
  
    
    </div>
    );
}
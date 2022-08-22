function Login(){
    var Email= document.getElementById("email").value;
    var Password = document.getElementById("password").value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(Email==''){
        alert("Please enter your Valid Email");
    }
   else if(Password==''){
        alert("Please Enter your Password");
    }else if(!filter.test(Email)){
       alert("Please Enter your Email with@");
    }else if(Password.length==''|| Password.length<8 ){
        alert("Minimum Password length is 6 and max length is 8");
    }
    else{
        alert("Thank you"); 
    }

    
    
}

 	var arr2 = JSON.parse(localStorage.getItem("arr"));
    //alert("hii");

    function validate(){  
    		//alert("hii");
    		var email=document.f1.myemail.value;  
    		var password=document.f1.password.value;  
    		var stat=false;  
      		var object1 = { "email" : "santhosh@cronj.com", "pass"  : "123456" };
	 		
	 		if(email==object1.email && password==object1.pass){
				localStorage.setItem("email",email);
				localStorage.setItem("pass",password);
				window.location="hrhome.html";
			}
			else{
				alert("Please input correct name and password");
			}  

    		return false;  
    }

	function employeelogin(){
	
			var arr2 = JSON.parse(localStorage.getItem("arr"));
			var email=document.f2.myemail.value;  
			var password=document.f2.mypass.value;  
			var i;
			for(i=0;i<arr2.length;i++){

					if(email==arr2[i].email && password==arr2[i].id){
						localStorage.setItem("email",arr2[i].email);
						localStorage.setItem("password",arr2[i].id);
						window.location="employ.html";		
						break;
					}
			}
			if(i==arr2.length){
				alert("Login failed");
			}
			return false;
	}


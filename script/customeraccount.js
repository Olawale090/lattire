"use strict";

export const customerForms = function () {
    this.email = document.querySelector(".input_email");
    this.password = document.querySelector(".input_password");
    this.submitBtn = document.querySelector(".submit_btn");
    this.notification = document.querySelector(".notification");
}

customerForms.prototype ={
    login(){
        
        this.submitBtn.addEventListener('click', (event)=>{

            event.preventDefault();
            let params = 'email=' + this.email.value + '&password=' + this.password.value;

            const xhr = new XMLHttpRequest();
            xhr.open('POST','../php/customerlogin.php', true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    
            xhr.onload = ()=> {
                    
                    if (xhr.status === 200) {

                        if (xhr.responseText.includes('{')) {

                            let data = JSON.parse(xhr.responseText);

                            if(data.customeremail && data.customerpassword){

                                window.open('../index.html','_self');
                                this.notification.innerHTML = "Login Successful";
                                this.notification.style.color = "green";

                            }
                            
                        } else {
                            this.notification.innerHTML = "User log in failed, please try again";
                        }
                        
        
                    } else if (xhr.status === 404) {
        
                        alert("PAGE NOT FOUND");
    
                        console.error ("THE PHP FILE DIRECTORY PASSED IS INCORRECT");
        
                    }
                
            };
    
            xhr.onerror = (error)=>{
                console.error("error found: "+ error);
                alert("error found: " + error);
            };
    
            xhr.send(params);
        
        });
    }
};

export const customerAuthentication = new customerForms();
customerAuthentication.login();
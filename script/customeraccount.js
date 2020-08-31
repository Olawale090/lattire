"use strict";

const customerForms = function () {
    // this.username = document.querySelector(".input_username");
    this.email = document.querySelector(".input_email");
    this.password = document.querySelector(".input_password");
    // this.confirmPass = document.querySelector(".confirm_input_password");
    this.submitBtn = document.querySelector(".submit_btn");
    // this.signupBtn = document.querySelector(".signup_btn");
    this.notification = document.querySelector(".notification");
}

customerForms.prototype ={
    login(){
        
        this.submitBtn.addEventListener('click', (event)=>{

            event.preventDefault();
            let params = 'email=' + this.email.value + '& password=' + this.password.value;
            const xhr = new XMLHttpRequest();
            
            xhr.open('POST','../php/customerlogin.php', true);
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    
    
            xhr.onload = ()=> {
                    console.dir(this);
                    // let data = JSON.parse(xhr.responseText);
                    if (xhr.status === 200) {
                        
                        if (xhr.responseText === "Login successful") {

                            window.open('../index.html','_self');
                            this.notification.innerHTML = "Login Successful";
                            this.nofification.style.color = "#4675f8";

                        } else {
                            this.notification.innerHTML = xhr.responseText;
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
    },
};

const customerAuthentication = new customerForms();
customerAuthentication.login();
// customerAuthentication.register();
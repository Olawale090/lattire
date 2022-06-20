"use strict";

const customerForms = function() {
    this.username = document.querySelector(".input_username");
    this.email = document.querySelector(".input_email");
    this.password = document.querySelector(".input_password");
    this.confirmPass = document.querySelector(".confirm_input_password");
    this.submitBtn = document.querySelector(".submit_btn");
    this.signupBtn = document.querySelector(".signup_btn");
    this.notification = document.querySelector(".notification");
}

customerForms.prototype ={

    register(){
        this.signupBtn.addEventListener('click',(event)=>{
            // console.log(this);
            event.preventDefault();

            let params = 'username=' + this.username.value + '&email=' + this.email.value + '&password=' + this.password.value + '&confirm_password=' + this.confirmPass.value;
            const xhr = new XMLHttpRequest();
            xhr.open('POST','../php/customerRegister.php',true);
            xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');

            xhr.onload = ()=>{
                if (xhr.status === 200) {
                    console.log(xhr.responseText);
                    this.notification.innerHTML = xhr.responseText;
                    if (this.notification.innerHTML == 'Form submitted successfuly') {
                        this.notification.style.color = "#4675f8";
                        window.open('../links/login.html','Self');
                    }

                } else if(xhr.status === 404) {

                    alert("page not found");

                }
                
            };

            xhr.onerror = (err)=>{
                alert(err);
            };

            xhr.send(params);
        });
    }
};

const customerAuthentication = new customerForms();
// customerAuthentication.login();
customerAuthentication.register();
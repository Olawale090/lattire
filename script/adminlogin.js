"use strict";

const administrator_login = function(){
    this.email = document.querySelector(".admin_email");
    this.pik = document.querySelector(".admin_pik");
    this.password = document.querySelector(".admin_password");
    this.submit = document.querySelector(".submit_btn");
    this.notification = document.querySelector(".notification");
};

administrator_login.prototype = {

    adminLogin(){
        this.submit.addEventListener('click',(event)=>{
            
            event.preventDefault();
            const params = 'admin_email=' + this.email.value + '&admin_personal_identification_key=' + this.pik.value + '&admin_password=' + this.password.value;

            const xhr = new XMLHttpRequest();
            xhr.open('POST','../php/adminlogin.php',true);
            xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');

            xhr.onload = ()=>{
                if (xhr.status === 200) {
                        
                        if (xhr.responseText === "Login successful") {
                            
                            window.open("../links/adminpage.html","_self");

                        }else{
                            this.notification.innerHTML = xhr.responseText;
                        }
                

                }else if(xhr.status === 404){
                    alert("page not found");
                }
            };


            xhr.send(params);


        });
    }

};

const administrator = new administrator_login();
administrator.adminLogin();
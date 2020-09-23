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
                    console.dir(this);
                    
                    if (xhr.status === 200) {

                        console.log(typeof xhr.responseText);
                        // console.log(xhr.responseText.includes('{')?'contain object':'does not contain object');
                        console.log(xhr.responseText);
                        

                        if (xhr.responseText.includes('{')) {

                            let data = JSON.parse(xhr.responseText);
                            console.log(typeof data);
                            alert(data.customername);

                            localStorage.setItem('customerName',data.customername);
                            localStorage.setItem('customerEmail',data.customeremail);
                            localStorage.setItem('customerPhoneNo',data.customerphoneno);
                            localStorage.setItem('customerPicDir',data.customerpicdir);
                            localStorage.setItem('customerCountry',data.customercountry);
                            localStorage.setItem('customerState',data.customerstate);
                            localStorage.setItem('customerCity',data.customercity);
                            localStorage.setItem('customerLocation',data.customerlocation);
                            localStorage.setItem('privatePassword',data.privatepassword);
                            localStorage.setItem('updatetime',data.updatetime);
                            localStorage.setItem('customerPassword',data.customerpassword);

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

export const customerAuthentication = new customerForms();
customerAuthentication.login();
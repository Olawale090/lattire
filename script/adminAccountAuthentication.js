"use strict";

const filewidget = function () {
    this.fileBtn = document.querySelector(".admin_pic_upload");
    this.picholder = document.querySelector(".admin_pic_holder");
}

filewidget.prototype = {
    selectPicture(){
        this.fileBtn.addEventListener('change',()=>{
            let reader = new FileReader();

            reader.onload = ()=>{
                let dataurl = reader.result;
                this.picholder.style.backgroundImage = `url(${dataurl})`;
            };

            console.dir(this.fileBtn);
            
            reader.readAsDataURL(this.fileBtn.files[0]);
        }); 
    }
};

const uploadPictureWidget = new filewidget();

uploadPictureWidget.selectPicture();

const adminaccount = function(){

    this.username = document.querySelector(".input_username");
    this.email = document.querySelector(".input_email");
    this.privateID = document.querySelector(".admin_key");
    this.password = document.querySelector(".input_password");
    this.confirmPass = document.querySelector(".input_confirm_pass");
    this.submit = document.querySelector(".submit_btn");
    this.notification = document.querySelector(".notification");

};

adminaccount.prototype = {

    adminPicUpload(){
        this.submit.addEventListener('click',(event)=>{

            event.preventDefault();
            
            let formData = new FormData(document.querySelector(".form_plate"));

            const xhr = new XMLHttpRequest();
            xhr.open('POST','../php/adminpicupload.php',true);

            xhr.onload = ()=>{
                if (xhr.status === 200) {
                    
                    this.notification.innerHTML = xhr.responseText;
                    alert(xhr.responseText);

                }else if(xhr.status === 404){

                    alert("page not found");

                }
            };

            xhr.onerror = (e)=>{
                console.error("Error found", e);
            };


            xhr.send(formData);

        });
    },

    adminSignUp(){
        this.submit.addEventListener('click',(event)=>{
    
            event.preventDefault();
            
            const params = 'admin_name='+this.username.value + '&admin_email=' + this.email.value + '&admin_personal_identification_key=' + this.privateID.value + '&admin_password=' + this.password.value + '&admin_confirm_password='+this.confirmPass.value + '&admin_submit='+this.submit;

            const xhr = new XMLHttpRequest();
            xhr.open('POST','../php/adminregister.php',true);
            xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');

            xhr.onload = ()=>{
                if (xhr.status === 200) {
                    
                    this.notification.innerHTML = xhr.responseText;

                    if(xhr.responseText === "Picture uploaded successfully"){

                        window.open("../adminlogin.html","_blank");

                    }

                }else if(xhr.status === 404){
                    alert("page not found");
                }
            };

            xhr.onerror = (error)=>{
                alert("error found " + error);
            };

            xhr.send(params);

        });
    }
};


let adminReg = new adminaccount();
adminReg.adminSignUp();

setTimeout(()=>{
    adminReg.adminPicUpload();
}, 100);


'use strict';

const customerProfileSettings = function () {
    this.picture = document.querySelector(".upload_btn");
    this.picholder = document.querySelector(".user_image");
    this.navbarImageContainer = document.querySelector(".userimg_container");
    this.username = document.querySelector(".form_username");
    this.email = document.querySelector(".email");
    this.phoneNo = document.querySelector(".phone");
    this.privatePassword = document.querySelector(".private_pass");
    this.country = document.querySelector(".country");
    this.state = document.querySelector(".state");
    this.city = document.querySelector(".city");
    this.location = document.querySelector(".user_location");


    //EDIT BUTTON PROPERTIES
    this.editBtn = document.querySelector(".edit_btn_username");
    this.editBtnEmail = document.querySelector(".edit_btn_email");
    this.editBtnPhoneNo = document.querySelector(".edit_btn_phoneNo");
    this.editBtnPrivatePassword = document.querySelector(".edit_btn_private_password");
    this.editBtnCountry = document.querySelector(".edit_btn_country");
    this.editBtnState = document.querySelector(".edit_btn_state");
    this.editBtnCity = document.querySelector(".edit_btn_city");
    this.editBtnLocation = document.querySelector(".edit_btn_location");

};

customerProfileSettings.prototype = {
    
    pictureUpload(){
        this.picture.addEventListener("change",(event)=>{
            event.preventDefault();
            let reader = new FileReader();

            reader.onload = ()=>{
                let pictureResult = reader.result;
                this.picholder.src = pictureResult;
                this.navbarImageContainer.style.backgroundImage = `url(${pictureResult})`;
            
            };

            reader.readAsDataURL(this.picture.files[0]);
        });
    },

    editBtnEvent(){
        this.editBtn.onclick = (event)=>{
            event.preventDefault();
            document.getElementById("name_edit").disabled = false;
            this.username.style.backgroundColor = "whitesmoke";
        };

        this.editBtnEmail.onclick = (event)=>{
            event.preventDefault();
            this.email.disabled = false;
            this.email.style.backgroundColor = "whitesmoke";
        };

        this.editBtnPhoneNo.onclick = (event)=>{
            event.preventDefault();
            this.phoneNo.disabled = false;
            this.phoneNo.style.backgroundColor = "whitesmoke";
        };

        this.editBtnPrivatePassword.onclick = (event)=>{
            event.preventDefault();
            this.privatePassword.disabled = false;
            this.privatePassword.style.backgroundColor = "whitesmoke";
        };

        this.editBtnCountry.onclick = (event)=>{
            event.preventDefault();
            this.country.disabled = false;
            this.country.style.backgroundColor = "whitesmoke";
        };

        this.editBtnState.onclick = (event)=>{
            event.preventDefault();
            this.state.disabled = false;
            this.state.style.backgroundColor = "whitesmoke";
        };
        
        
        this.editBtnCity.onclick = (event)=>{
            event.preventDefault();
            this.city.disabled = false;
            this.city.style.backgroundColor = "whitesmoke";
        };


        this.editBtnLocation.onclick = (event)=>{
            event.preventDefault();
            this.location.disabled = false;
            this.location.style.backgroundColor = "whitesmoke";
        };


    },

    usernameUpdate(){

        window.addEventListener('load',()=>{

            let param = 'username='+this.username;
            let xhr = new XMLHttpRequest();

            xhr.open('POST','../php/customerprofile.php', true);
            xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');

            xhr.onload = ()=>{
                if (xhr.status === 200) {
                    
                    alert(xhr.responseText);

                }
            };

            xhr.onerror = (error)=>{
                console.error(error);
            };

            xhr.send(param);

        });
    }
};


const customerProfile = new customerProfileSettings();
customerProfile.pictureUpload();
customerProfile.editBtnEvent();
customerProfile.usernameUpdate();

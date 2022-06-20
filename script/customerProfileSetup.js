'use strict';

const customerProfileSettings = function () {
    
    // FORM INPUTS
    this.picture = document.querySelector(".upload_btn");
    this.picholder = document.querySelector(".user_image");
    this.navbarImageContainer = document.querySelector(".userimg_container");
    this.username = document.querySelector(".form_username");
    this.email = document.querySelector(".email");
    this.phoneNo = document.querySelector(".phone");
    this.privatePass = document.querySelector(".private_pass");
    this.country = document.querySelector(".country");
    this.state = document.querySelector(".state");
    this.city = document.querySelector(".city");
    this.location = document.querySelector(".user_location");


    // FEATURE HANDLERS
    this.navBarUsername = document.querySelector('.pr_username');
    this.logoutBtn = document.querySelector('.customer_logout');


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
    loadAllData(){

        let xhr = new XMLHttpRequest();
            xhr.open('POST','../php/customerCompleteData.php', true);
            xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');

            xhr.onload = ()=>{
                if (xhr.status === 200) {
                    
                    let data = JSON.parse(xhr.responseText);
                    this.navBarUsername.textContent = data.customername;
                    this.picholder.src = data.customerpicdir;
                    this.username.value = data.customername;
                    this.email.value = data.customeremail;
                    this.phoneNo.value = data.customerphoneno;
                    this.privatePass.value = data.privatepassword;
                    this.country.value = data.customercountry;
                    this.state.value = data.customerstate;
                    this.city.value = data.customercity;
                    this.location.value = data.customerlocation;

                    // BINDING TO THE USER ACCOUNT PAGE

                    let usernameinfo = document.querySelector('.user_info');
                    let userCity = document.querySelector(".user_city");
                    let deliveryLocationAddress = document.querySelector(".delivery_location_address");
            
                    usernameinfo.innerHTML = data.customername;
                    userCity.innerHTML = data.customercity;
                    deliveryLocationAddress.innerHTML = data.customerlocation;

                    this.navbarImageContainer.src = data.customerpicdir;

                }
            };

            xhr.onerror = (error)=>{
                console.error(error);
            };

            xhr.send();

    },


    logout(){
        this.logoutBtn.addEventListener('click',()=>{

            let xhr = new XMLHttpRequest();
            xhr.open('POST','../php/customerlogout.php', true);
            xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');

            xhr.onload = ()=>{
                if (xhr.status === 200) {
                    
                    alert(xhr.responseText);

                }
            };

            xhr.onerror = (error)=>{
                console.error(error);
            };

            xhr.send();

        });
    },
    
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

    customerImageUpload(){

        document.querySelector('.uploadchange_btn').addEventListener('click',(event)=>{
            
            event.preventDefault();

            let formData = new FormData(document.querySelector(".user_profile_form"));

            let xhr = new XMLHttpRequest();
            xhr.open('POST','../php/customerpicupload.php', true);

            xhr.onload = ()=>{
                if (xhr.status === 200) {
                    
                    alert(xhr.responseText);

                }else if(xhr.status === 404){
                    alert("page not found");
                }
            };

            xhr.onerror = (error)=>{
                console.error(error);
            };

            xhr.send(formData);

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
            alert(this.phoneNo.disabled);
            this.phoneNo.disabled = false;
            this.phoneNo.style.backgroundColor = "whitesmoke";
        };

        this.editBtnPrivatePassword.onclick = (event)=>{
            event.preventDefault();
            alert(this.privatePass);
            this.privatePass.disabled = false;
            this.privatePass.style.backgroundColor = "whitesmoke";
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
        document.querySelector(".username_submit").addEventListener('click',(event)=>{
            event.preventDefault();

            document.getElementById("name_edit").disabled = true;
            document.getElementById("name_edit").style.backgroundColor = 'white';
            
            let param = 'username='+this.username.value;
            let xhr = new XMLHttpRequest();
            xhr.open('POST','../php/customerprofile.php', true);
            xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');

            xhr.onload = ()=>{
                if (xhr.status === 200) {
                    
                    alert(xhr.responseText);
                    this.username.value = data.customername;

                }
            };

            xhr.onerror = (error)=>{
                console.error(error);
            };

            xhr.send(param);
            
            setTimeout(()=>{
                customerProfile.loadAllData();
            }, 1000);

        });
    },

    emailUpdate(){
        document.querySelector(".email_submit").addEventListener('click',(event)=>{
            event.preventDefault();

            this.email.disabled = true;
            this.email.style.backgroundColor = 'white';
            
            let param = 'email='+this.email.value;
            let xhr = new XMLHttpRequest();
            xhr.open('POST','../php/customeremailupdate.php', true);
            xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');

            xhr.onload = ()=>{
                if (xhr.status === 200) {
                
                    this.email.value = data.customeremail;

                }
            };

            xhr.onerror = (error)=>{
                console.error(error);
            };

            xhr.send(param);

        });
    },

    phoneNoUpdate(){
        document.querySelector(".phoneno_submit").addEventListener('click',(event)=>{
            event.preventDefault();

            this.phoneNo.disabled = true;
            this.phoneNo.style.backgroundColor = 'white';
            
            let param = 'phone_number='+this.phoneNo.value;
            let xhr = new XMLHttpRequest();
            xhr.open('POST','../php/customerphoneupdate.php', true);
            xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');

            xhr.onload = ()=>{
                if (xhr.status === 200) {
                    
                    alert(xhr.responseText);
                    this.phoneNo.value = data.customerphoneno;

                }
            };

            xhr.onerror = (error)=>{
                console.error(error);
            };

            xhr.send(param);

        });
    },

    privatePasswordUpdate(){
        document.querySelector(".privatepassword_submit").addEventListener('click',(event)=>{

            event.preventDefault();

            this.privatePass.disabled = true;
            this.privatePass.style.backgroundColor = 'white';
            
            let param = 'private_password='+this.privatePass.value;
            let xhr = new XMLHttpRequest();
            xhr.open('POST','../php/customerprivatepassword.php', true);
            xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');

            xhr.onload = ()=>{
                if (xhr.status === 200) {
                    
                    alert(xhr.responseText);
                    // this.privatePass.value = data.privatepassword;

                }
            };

            xhr.onerror = (error)=>{
                console.error(error);
            };

            xhr.send(param);

        });
    },

    countryUpdate(){
        document.querySelector(".country_submit").addEventListener('click',(event)=>{

            event.preventDefault();

            this.country.disabled = true;
            this.country.style.backgroundColor = 'white';
            
            let param = 'country='+this.country.value;
            let xhr = new XMLHttpRequest();
            xhr.open('POST','../php/customercountry.php', true);
            xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');

            xhr.onload = ()=>{
                if (xhr.status === 200) {
                    
                    alert(xhr.responseText);
                    this.country.value = data.customercountry;

                }
            };

            xhr.onerror = (error)=>{
                console.error(error);
            };

            xhr.send(param);

        });
    },

    stateUpdate(){
        document.querySelector(".state_submit").addEventListener('click',(event)=>{

            event.preventDefault();

            this.state.disabled = true;
            this.state.style.backgroundColor = 'white';
            
            let param = 'state='+this.state.value;
            let xhr = new XMLHttpRequest();
            xhr.open('POST','../php/customerstateupdate.php', true);
            xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');

            xhr.onload = ()=>{
                if (xhr.status === 200) {
                    
                    alert(xhr.responseText);
                    this.state.value = data.customerstate;

                }
            };

            xhr.onerror = (error)=>{
                console.error(error);
            };

            xhr.send(param);

        });
    },

    cityUpdate(){
        document.querySelector(".city_submit").addEventListener('click',(event)=>{

            event.preventDefault();

            this.city.disabled = true;
            this.city.style.backgroundColor = 'white';
            
            let param = 'city='+this.city.value;
            let xhr = new XMLHttpRequest();

            xhr.open('POST','../php/customercityupdate.php', true);
            xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');

            xhr.onload = ()=>{
                if (xhr.status === 200) {
                    
                    alert(xhr.responseText);
                    this.city.value = data.customercity;

                }
            };

            xhr.onerror = (error)=>{
                console.error(error);
            };

            xhr.send(param);

        });
    },

    locationUpdate(){
        document.querySelector(".location_submit").addEventListener('click',(event)=>{

            event.preventDefault();

            this.location.disabled = true;
            this.location.style.backgroundColor = 'white';
            
            let param = 'location='+this.location.value;
            let xhr = new XMLHttpRequest();
            
            xhr.open('POST','../php/customerlocationupdate.php', true);
            xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');

            xhr.onload = ()=>{
                if (xhr.status === 200) {
                    
                    alert(xhr.responseText);
                    this.location.value = data.customerlocation;

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
customerProfile.customerImageUpload();
customerProfile.editBtnEvent();
customerProfile.logout();
customerProfile.loadAllData();

customerProfile.usernameUpdate();
customerProfile.emailUpdate();
customerProfile.phoneNoUpdate();
customerProfile.privatePasswordUpdate();
customerProfile.countryUpdate();
customerProfile.stateUpdate();
customerProfile.cityUpdate();
customerProfile.locationUpdate();


"use strict";
export const usercartdata = function(){
    this.username = document.querySelector(".pr_username");
    this.userimage = document.querySelector(".userimg_container");
    this.login_required = document.querySelector(".user_login_required");
};

usercartdata.prototype = {
    navbardata(){
        let xhr = new XMLHttpRequest();
            xhr.open('POST','../php/customerCompleteData.php', true);
            xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');

            xhr.onload = ()=>{
                if (xhr.status === 200) {

                    try {

                        let data = JSON.parse(xhr.responseText);
                    
                        this.username.textContent = data.customername;
                        this.userimage.style.backgroundImage =`url(${data.customerpicdir})`;
                        this.userimage.style.backgroundSize = 'cover';
                        this.login_required.style.display = 'none';

                    } catch (error) {
                        console.warn("Customer signin required");
                        window.open("../links/login.html","_Self");
                    }
                    
                   

                }
            };

            xhr.onerror = (error)=>{
                console.error(error);
            };

            xhr.send();

    }
};

let usercart = new usercartdata();
document.onload = usercart.navbardata();
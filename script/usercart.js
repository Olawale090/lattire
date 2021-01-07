"use strict";
export const usercartdata = function(){
    this.username = document.querySelector(".pr_username");
    this.userimage = document.querySelector(".userimg_container");
};

usercartdata.prototype = {
    navbardata(){
        let xhr = new XMLHttpRequest();
            xhr.open('POST','../php/customerCompleteData.php', true);
            xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');

            xhr.onload = ()=>{
                if (xhr.status === 200) {
                    
                    let data = JSON.parse(xhr.responseText);
                    
                    this.username.textContent = data.customername;
                    this.userimage.style.backgroundImage =`url(${data.customerpicdir})`;
                    this.userimage.style.backgroundSize = 'cover';

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